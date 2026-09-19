import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Livrustning - Gör hela personalen till livräddare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Delningsbild: EKG-papper, rubriken och kurvan med tre slag.
// Typsnittet ligger lokalt (Familjen Grotesk 700, SIL OFL) så att bygget inte behöver nätet.
export default async function OgBild() {
  const typsnitt = await readFile(join(process.cwd(), "assets/typsnitt/FamiljenGrotesk-Bold.ttf"));
  const bas = 470;
  const slag = (x: number) =>
    `L${x} ${bas} Q${x + 7} ${bas - 12} ${x + 14} ${bas} L${x + 20} ${bas} L${x + 24} ${bas + 8} L${x + 30} ${bas - 78} L${x + 36} ${bas + 26} L${x + 41} ${bas} L${x + 52} ${bas} Q${x + 62} ${bas - 24} ${x + 72} ${bas}`;
  const d = `M0 ${bas} ${slag(180)} ${slag(560)} ${slag(940)} L1200 ${bas}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          backgroundColor: "#fdf3f5",
          backgroundImage:
            "linear-gradient(#efbccb 1px, transparent 1px), linear-gradient(90deg, #efbccb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#17151a",
          fontFamily: "Familjen",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#e30646" }}>Livrustning</div>
        <div style={{ marginTop: 28, fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -3, maxWidth: 900 }}>
          Gör hela personalen till livräddare.
        </div>
        <div style={{ marginTop: 24, fontSize: 32, color: "#4b4550" }}>HLR, första hjälpen och brand. Hos er, på 2 eller 4 timmar.</div>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", left: 0, top: 0 }}>
          <path d={d} fill="none" stroke="#e30646" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Familjen", data: typsnitt, weight: 700, style: "normal" }],
    },
  );
}
