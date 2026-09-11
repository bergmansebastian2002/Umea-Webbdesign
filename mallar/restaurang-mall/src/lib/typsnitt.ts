import {
  Anton,
  Inter,
  Karla,
  Manrope,
  Permanent_Marker,
  Playfair_Display,
  Shojumaru,
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

// Karaktärsrubriker som kunder kan välja med `design.rubrikTypsnitt`,
// oavsett art direction. Brödtexten följer alltid art directionen.
const rubrikAsiatisk = Shojumaru({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--typsnitt-rubrik",
});
// Tjocka, handmålade versaler. Valt framför smalare penselfonter (Sedgwick
// Ave Display, Rock Salt) som liknar en målad logotyp ännu mer men blir
// rispiga i menyns rättnamn - de sätts också i rubriktypsnittet, i 18-20 px.
const rubrikPensel = Permanent_Marker({
  // Endast "latin" - typsnittet saknar latin-ext. Svenska å/ä/ö ryms ändå,
  // de ligger i Latin-1 som Googles latin-subset täcker.
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
  variable: "--typsnitt-rubrik",
});

const PAR: Record<ArtDirection, { rubrik: string; brod: string }> = {
  klassisk: { rubrik: rubrikKlassisk.variable, brod: brodKlassisk.variable },
  nordisk: { rubrik: rubrikNordisk.variable, brod: brodNordisk.variable },
  livlig: { rubrik: rubrikLivlig.variable, brod: brodLivlig.variable },
};

const KARAKTARSRUBRIKER: Record<
  NonNullable<typeof restaurang.design.rubrikTypsnitt>,
  string
> = {
  asiatisk: rubrikAsiatisk.variable,
  pensel: rubrikPensel.variable,
};

const valt = PAR[restaurang.design.artDirection];
const rubrik = restaurang.design.rubrikTypsnitt
  ? KARAKTARSRUBRIKER[restaurang.design.rubrikTypsnitt]
  : valt.rubrik;

/** CSS-klasser som sätts på <html> och kopplar in det aktiva parets variabler. */
export const typsnittsklasser = `${rubrik} ${valt.brod}`;
