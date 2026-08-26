import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon rendered from the brand mark at build time. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c0e",
          borderRadius: 40,
        }}
      >
        <svg width="132" height="132" viewBox="0 0 48 48">
          <rect x="2" y="2" width="44" height="44" rx="12" fill="none" stroke="#e8c86a" strokeWidth="2.5" />
          <rect x="15" y="11" width="6" height="6" rx="1.5" fill="#e8c86a" />
          <rect x="27" y="11" width="6" height="6" rx="1.5" fill="#e8c86a" />
          <path
            d="M15 37 L15 29 Q15 23 20 23 L28 23 Q33 23 33 28 L33 37 L27 37 L27 30 Q27 29 26 29 L22 29 Q21 29 21 30 L21 37 Z"
            fill="#e8c86a"
          />
        </svg>
      </div>
    ),
    size,
  );
}
