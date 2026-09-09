import { Inter, Playfair_Display } from "next/font/google";

/**
 * Self-hosted via next/font - no external font requests at runtime.
 * Elegant serif for headings, modern grotesque for body text.
 */
const heading = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading-src",
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-src",
});

export const fontClasses = `${heading.variable} ${body.variable}`;
