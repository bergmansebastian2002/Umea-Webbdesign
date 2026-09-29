import type { MetadataRoute } from "next";

import { foretag } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: foretag.url, changeFrequency: "monthly", priority: 1 },
    { url: `${foretag.url}/integritetspolicy`, changeFrequency: "yearly", priority: 0.1 },
  ];
}
