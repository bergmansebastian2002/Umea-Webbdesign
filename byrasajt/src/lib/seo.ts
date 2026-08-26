import type { Metadata } from "next";

import { company } from "@/data/site";

/** Builds consistent per-page metadata: title, description, OG, canonical. */
export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${company.siteUrl}${input.path === "/" ? "" : input.path}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: company.name,
      locale: "sv_SE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}

/** ProfessionalService JSON-LD so Google understands who and where we are. */
export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${company.siteUrl}/#byran`,
    name: company.name,
    description:
      "Webbyrå i Umeå som designar och bygger snabba, moderna hemsidor för " +
      "företag i Umeå och resten av Sverige.",
    url: company.siteUrl,
    email: company.email,
    telephone: `+${company.phoneHref.slice(1)}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "SE",
    },
    areaServed: [
      { "@type": "City", name: company.city },
      { "@type": "Country", name: "Sverige" },
    ],
    knowsAbout: [
      "Webbdesign",
      "Webbutveckling",
      "SEO",
      "Google Ads",
      "Google Företagsprofil",
    ],
    priceRange: "$$",
  };
}

/** Renders a JSON-LD script tag safely (escapes < so </script> can't break out). */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
