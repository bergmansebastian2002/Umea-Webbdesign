import { Familjen_Grotesk } from "next/font/google";

/**
 * Familjen Grotesk (ritad av byrån Familjen i Stockholm): en svensk grotesk
 * med egen karaktär i rubrikerna och lugn i brödtexten. Självhostad via
 * next/font, inga externa anrop.
 */
const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-familjen",
});

export const fontKlasser = familjen.variable;
