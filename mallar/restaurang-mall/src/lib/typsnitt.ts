import {
  Anton,
  Inter,
  Karla,
  Manrope,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";

import { restaurang } from "@/lib/kund";
import type { ArtDirection } from "@/lib/typer";

/**
 * Typsnittspar per art direction. Paret väljs automatiskt av
 * `design.artDirection` i kundens config - inget att ändra här.
 *
 * Alla par importeras (next/font kräver statiska anrop) men `preload: false`
 * gör att webbläsaren bara hämtar de typsnitt som faktiskt används på
 * sidan - oanvända @font-face-regler laddas aldrig ner.
 */

// Klassisk: tidlös antikva + neutral grotesk. Fine dining, husmanskost.
const rubrikKlassisk = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--typsnitt-rubrik",
});
const brodKlassisk = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--typsnitt-brod",
});

// Nordisk: mjuk geometrisk sans, mycket luft. Bistro, brunch, bageri.
const rubrikNordisk = Manrope({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--typsnitt-rubrik",
});
const brodNordisk = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--typsnitt-brod",
});

// Livlig: kompakt affischrubrik + varm sans. Pizzeria, burgare, streetfood.
const rubrikLivlig = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--typsnitt-rubrik",
});
const brodLivlig = Karla({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--typsnitt-brod",
});

const PAR: Record<ArtDirection, { rubrik: string; brod: string }> = {
  klassisk: { rubrik: rubrikKlassisk.variable, brod: brodKlassisk.variable },
  nordisk: { rubrik: rubrikNordisk.variable, brod: brodNordisk.variable },
  livlig: { rubrik: rubrikLivlig.variable, brod: brodLivlig.variable },
};

const valt = PAR[restaurang.design.artDirection];

/** CSS-klasser som sätts på <html> och kopplar in det aktiva parets variabler. */
export const typsnittsklasser = `${valt.rubrik} ${valt.brod}`;
