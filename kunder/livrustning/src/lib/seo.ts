import type { Metadata } from "next";

import { foretag, utbildningar } from "@/lib/site";

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
      siteName: foretag.juridisktNamn,
      locale: "sv_SE",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: input.titel, description: input.beskrivning },
  };
}

/** Organisationen, så att Google förstår vem Livrustning är och var de utbildar. */
export function organisationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${foretag.url}/#organisation`,
    name: foretag.juridisktNamn,
    alternateName: foretag.namn,
    slogan: foretag.slogan,
    url: foretag.url,
    logo: `${foretag.url}/icon.png`,
    email: foretag.epost,
    telephone: "+46707333254",
    taxID: foretag.orgnr,
    address: {
      "@type": "PostalAddress",
      streetAddress: foretag.gata,
      postalCode: foretag.postnummer,
      addressLocality: foretag.ort,
      addressCountry: "SE",
    },
    areaServed: { "@type": "Country", name: "Sverige" },
    sameAs: [foretag.facebook, foretag.instagram],
    knowsAbout: ["HLR", "Hjärt-lungräddning", "Hjärtstartare", "Första hjälpen", "Brandutbildning"],
  };
}

/** En utbildning som schema.org Course, kopplad till organisationen. */
export function kursSchema(slug: string, beskrivning: string) {
  const u = utbildningar.find((x) => x.slug === slug);
  if (!u) throw new Error(`Okänd utbildning: ${slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: u.namn,
    description: beskrivning,
    url: `${foretag.url}${u.href}`,
    inLanguage: "sv",
    provider: { "@id": `${foretag.url}/#organisation` },
  };
}

/** JSON-LD som script-innehåll, med < escapat så att </script> inte kan bryta ut. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
