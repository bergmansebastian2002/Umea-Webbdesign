import { Pacifico, Schibsted_Grotesk } from "next/font/google";

/**
 * Pacifico härmar skyltens rosa skript och används ENDAST för ordet "Din"
 * i logotypen och för små skyltord ("Priser"). Allt annat sätts i
 * Schibsted Grotesk - en skandinavisk grotesk med egen karaktär.
 * Båda självhostas via next/font, inga externa anrop.
 */
const skript = Pacifico({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-skript",
});

const grotesk = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-grotesk",
});

export const fontKlasser = `${skript.variable} ${grotesk.variable}`;
