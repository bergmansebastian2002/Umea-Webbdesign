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
      </div>
    ),
    size,
  );
}
