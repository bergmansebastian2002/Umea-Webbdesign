import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Din Frisör - Drop in-frisör vid Järnvägstorget i Umeå";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Delningsbild: den mörka prisskylten med rosa logotyp och budskapet.
// Typsnittet ligger lokalt (Familjen Grotesk 700, SIL OFL) så att bygget inte behöver nätet.
export default async function OgBild() {
  const typsnitt = await readFile(join(process.cwd(), "assets/typsnitt/FamiljenGrotesk-Bold.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          backgroundColor: "#1c2422",
          color: "#f7f2ef",
          fontFamily: "Familjen",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
          <div style={{ fontSize: 44, color: "#ff8fb5" }}>Din</div>
          <div style={{ fontSize: 40, letterSpacing: 10, color: "#f7f2ef" }}>FRISÖR</div>
        </div>
        <div style={{ marginTop: 36, fontSize: 88, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, maxWidth: 950 }}>
          Klipp dig utan att boka tid.
        </div>
        <div style={{ marginTop: 30, fontSize: 34, color: "#a6b2ac" }}>
          Drop in vid Järnvägstorget i Umeå · 076-448 30 37
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Familjen", data: typsnitt, weight: 700, style: "normal" }],
    },
  );
}
