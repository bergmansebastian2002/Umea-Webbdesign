import { Playfair_Display, Source_Sans_3 } from "next/font/google";

/** Klassisk: hög, tydlig antikva till rubriker och en neutral grotesk till brödtext. */

const rubrik = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--typsnitt-rubrik",
});

const brod = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--typsnitt-brod",
});

export const typsnittsklasser = `${rubrik.variable} ${brod.variable}`;
