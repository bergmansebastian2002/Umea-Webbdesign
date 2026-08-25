import { Cormorant_Garamond, Jost } from "next/font/google";

/** Elegant: hög kontrast och fina serifer. Passar finare middagsrestauranger. */

const rubrik = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--typsnitt-rubrik",
});

const brod = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--typsnitt-brod",
});

export const typsnittsklasser = `${rubrik.variable} ${brod.variable}`;
