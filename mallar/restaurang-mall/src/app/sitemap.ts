import type { MetadataRoute } from "next";

import { absolutUrl } from "@/lib/seo";

/**
 * Sitemap som Google läser automatiskt på /sitemap.xml.
 * Lägg till nya sidor här när du utökar sajten.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const uppdaterad = new Date();

  const sidor: { sokvag: string; prioritet: number; frekvens: "weekly" | "monthly" }[] = [
    { sokvag: "/", prioritet: 1, frekvens: "weekly" },
    { sokvag: "/meny", prioritet: 0.9, frekvens: "weekly" },
    { sokvag: "/om-oss", prioritet: 0.7, frekvens: "monthly" },
    { sokvag: "/hitta-hit", prioritet: 0.7, frekvens: "monthly" },
    { sokvag: "/kontakt", prioritet: 0.6, frekvens: "monthly" },
  ];

  return sidor.map((sida) => ({
    url: absolutUrl(sida.sokvag),
    lastModified: uppdaterad,
    changeFrequency: sida.frekvens,
    priority: sida.prioritet,
  }));
}
