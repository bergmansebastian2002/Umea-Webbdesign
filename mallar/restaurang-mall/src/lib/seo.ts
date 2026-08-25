import type { Metadata } from "next";

import { restaurang } from "@/lib/kund";

/**
 * Sajtens publika adress. Tas i första hand från miljövariabeln
 * NEXT_PUBLIC_SAJT_URL (sätts i Vercel), annars från config-filen.
 */
export const sajtUrl = (
  process.env.NEXT_PUBLIC_SAJT_URL ?? restaurang.sajtUrl
).replace(/\/$/, "");

/** Bygger en absolut adress: absolutUrl("/meny") -> "https://.../meny". */
export function absolutUrl(sokvag = "/"): string {
  return `${sajtUrl}${sokvag.startsWith("/") ? sokvag : `/${sokvag}`}`;
}

type SidMetadata = {
  /** Sidans titel utan restaurangnamn - det läggs på automatiskt. */
  titel: string;
  beskrivning: string;
  /** Sökväg, t.ex. "/meny". */
  sokvag: string;
};

/**
 * Skapar metadata för en enskild sida. Lägger automatiskt på
 * restaurangnamn, ort, canonical-länk och Open Graph-taggar.
 */
export function byggMetadata({ titel, beskrivning, sokvag }: SidMetadata): Metadata {
  const fullTitel = `${titel} | ${restaurang.namn} - ${restaurang.seo.stad}`;

  // Delningsbilden sätts inte här: den genereras automatiskt av
  // src/app/opengraph-image.tsx och gäller alla sidor.
  return {
    title: titel,
    description: beskrivning,
    alternates: { canonical: absolutUrl(sokvag) },
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: restaurang.namn,
      url: absolutUrl(sokvag),
      title: fullTitel,
      description: beskrivning,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitel,
      description: beskrivning,
    },
  };
}
