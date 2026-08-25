import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { farger, restaurang } from "@/lib/kund";

/**
 * Delningsbild (Open Graph) som genereras vid bygget med next/og.
 *
 * - Har kunden en egen delningsbild (`bilder.delning`) används den som
 *   bakgrund med restaurangnamnet ovanpå.
 * - Annars byggs ett rent grafiskt kort i kundens färger.
 *
 * Bilden visas när sajten delas på Facebook, LinkedIn, i sms m.m.
 */

export const alt = `${restaurang.namn} - ${restaurang.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function bakgrundSomDataUri(): Promise<string | null> {
  const delning = restaurang.bilder.delning;
  if (!delning) return null;

  // Bildgeneratorn (satori) kan inte läsa WebP - bildpipelinen skriver
  // därför alltid en JPEG-variant av delningsbilden (delning-og.jpg).
  const jpegVariant = delning.replace(/\.[a-z0-9]+$/i, "-og.jpg");
  for (const kandidat of [jpegVariant, delning]) {
    if (kandidat.endsWith(".webp")) continue;
    try {
      const fil = await readFile(join(process.cwd(), "public", kandidat));
      const mime = kandidat.endsWith(".png") ? "image/png" : "image/jpeg";
      return `data:${mime};base64,${fil.toString("base64")}`;
    } catch {
      // prova nästa kandidat
    }
  }
  return null;
}

export default async function OgBild() {
  const bakgrund = await bakgrundSomDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: farger.primar,
        }}
      >
        {bakgrund && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bakgrund}
            alt=""
            width={1200}
            height={630}
            style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "64px 72px",
            background: bakgrund
              ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.35) 100%)"
              : "transparent",
          }}
        >
          <div
            style={{
              display: "flex",
              color: farger.accent,
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            {`${restaurang.seo.kokstyper.join(" · ")} i ${restaurang.seo.stad}`}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              color: "#ffffff",
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
            }}
          >
            {restaurang.namn}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              color: "rgba(255,255,255,0.85)",
              fontSize: 34,
            }}
          >
            {restaurang.slogan}
          </div>
          <div
            style={{
              marginTop: 34,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: farger.accent,
                color: farger.accentText,
                borderRadius: 8,
                padding: "14px 30px",
                fontSize: 28,
                fontWeight: 600,
              }}
            >
              {restaurang.bokning.aktiv ? restaurang.bokning.knapptext : "Ring och boka"}
            </div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.75)", fontSize: 26 }}>
              {restaurang.sajtUrl.replace("https://", "").replace("http://", "")}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
