import type { Metadata } from "next";

import { foretag, oppettiderSchema } from "@/lib/site";

/** Samma uppbyggnad av metadata på alla sidor: titel, beskrivning, OG, kanonisk URL. */
export function metadataFor(input: { titel: string; beskrivning: string; sokvag: string }): Metadata {
  const url = `${foretag.url}${input.sokvag === "/" ? "" : input.sokvag}`;
  return {
    title: input.titel,
    description: input.beskrivning,
    alternates: { canonical: url },
    openGraph: {
      title: input.titel,
      description: input.beskrivning,
      url,
      siteName: foretag.namn,
      locale: "sv_SE",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: input.titel, description: input.beskrivning },
  };
}

/** Salongen som schema.org HairSalon, så att Google förstår vem och var. */
export function salongSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${foretag.url}/#salong`,
    name: foretag.namn,
    url: foretag.url,
    telephone: "+46764483037",
    address: {
      "@type": "PostalAddress",
      streetAddress: foretag.gata,
      postalCode: foretag.postnummer,
      addressLocality: foretag.ort,
      addressCountry: "SE",
    },
    openingHoursSpecification: oppettiderSchema,
    sameAs: [foretag.facebook],
  };
}

/** JSON-LD som script-innehåll, med < escapat så att </script> inte kan bryta ut. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
