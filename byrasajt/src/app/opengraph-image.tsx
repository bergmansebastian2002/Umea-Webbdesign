import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Umeå Webbdesign - Din nya hemsida, klar på två veckor";

/** Social share image generated at build time - no design tool needed. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(160deg, #0b0c0e 0%, #16181d 100%)",
          color: "#f5f3ef",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="72" height="72" viewBox="0 0 48 48">
            <rect x="2" y="2" width="44" height="44" rx="10" fill="none" stroke="#e8c86a" strokeWidth="2.5" />
            <path
              d="M14.8 14.8 C24 12.7 35.3 24 33.2 33.2 C24 35.3 12.7 24 14.8 14.8 Z"
              fill="none" stroke="#e8c86a" strokeWidth="2" strokeLinecap="round"
            />
            <path d="M15.5 15.5 L33.2 33.2" fill="none" stroke="#e8c86a" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M21.2 21.2 L21.5 15.2" fill="none" stroke="#e8c86a" strokeWidth="1" strokeLinecap="round" />
            <path d="M21.2 21.2 L15.2 21.5" fill="none" stroke="#e8c86a" strokeWidth="1" strokeLinecap="round" />
            <path d="M24.7 24.7 L25.4 18.3" fill="none" stroke="#e8c86a" strokeWidth="1" strokeLinecap="round" />
            <path d="M24.7 24.7 L18.3 25.4" fill="none" stroke="#e8c86a" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, letterSpacing: -1 }}>UMEÅ</div>
            <div style={{ fontSize: 18, letterSpacing: 8, color: "#9ca3af" }}>WEBBDESIGN</div>
          </div>
        </div>

        <div style={{ marginTop: 70, fontSize: 68, lineHeight: 1.1, maxWidth: 900 }}>
          Din nya hemsida. Klar på två veckor.
        </div>
        <div style={{ marginTop: 30, fontSize: 30, color: "#e8c86a" }}>
          Webbyrå i Umeå · umea-webbdesign.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
