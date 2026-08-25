import { ImageResponse } from "next/og";

import { farger, restaurang } from "@/lib/kund";

/**
 * Favicon som genereras vid bygget: restaurangens initial i kundens
 * färger. Vill kunden ha en egen ikon - lägg en favicon.ico i src/app/
 * så vinner den över den här.
 */

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Ikon() {
  const initial = restaurang.namn.replace(/^Restaurang\s+/i, "").charAt(0).toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: farger.primar,
          color: farger.accentPaMork,
          fontSize: 40,
          fontWeight: 700,
          borderRadius: 12,
        }}
      >
        {initial}
      </div>
    ),
    size,
  );
}
