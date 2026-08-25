import type { Metadata } from "next";

import { restaurang } from "@config/restaurang";

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
  /** Egen delningsbild. Standard är bilden i config. */
  bild?: string;
};

/**
 * Skapar metadata för en enskild sida. Lägger automatiskt på
 * restaurangnamn, ort, canonical-länk och Open Graph-taggar.
 */
export function byggMetadata({
  titel,
  beskrivning,
  sokvag,
  bild,
}: SidMetadata): Metadata {
  const fullTitel = `${titel} | ${restaurang.namn} - ${restaurang.seo.stad}`;
  const delningsbild = absolutUrl(bild ?? restaurang.bilder.delning);

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
      images: [{ url: delningsbild, width: 1200, height: 630, alt: restaurang.namn }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitel,
      description: beskrivning,
      images: [delningsbild],
    },
  };
}
