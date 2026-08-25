import { Inter, Space_Grotesk } from "next/font/google";

/** Modern: geometrisk grotesk i rubriker, Inter i brödtext. Rakt och stramt. */

const rubrik = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--typsnitt-rubrik",
});

const brod = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--typsnitt-brod",
});

export const typsnittsklasser = `${rubrik.variable} ${brod.variable}`;
