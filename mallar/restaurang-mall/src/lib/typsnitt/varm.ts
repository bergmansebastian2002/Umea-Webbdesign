import { Fraunces, Karla } from "next/font/google";

/** Varm: mjuk, lite lekfull antikva. Passar bistro, bageri och trattoria. */

const rubrik = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--typsnitt-rubrik",
});

const brod = Karla({
  subsets: ["latin"],
  display: "swap",
  variable: "--typsnitt-brod",
});

export const typsnittsklasser = `${rubrik.variable} ${brod.variable}`;
