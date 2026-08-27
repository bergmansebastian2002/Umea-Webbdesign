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
            <rect x="2" y="2" width="44" height="44" rx="12" fill="none" stroke="#e8c86a" strokeWidth="2.5" />
            <rect x="15" y="11" width="6" height="6" rx="1.5" fill="#e8c86a" />
            <rect x="27" y="11" width="6" height="6" rx="1.5" fill="#e8c86a" />
            <path
              d="M15 37 L15 29 Q15 23 20 23 L28 23 Q33 23 33 28 L33 37 L27 37 L27 30 Q27 29 26 29 L22 29 Q21 29 21 30 L21 37 Z"
              fill="#e8c86a"
            />
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
