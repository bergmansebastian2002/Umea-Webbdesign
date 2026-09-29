import type { MetadataRoute } from "next";

import { foretag, indexera } from "@/lib/site";

// Förhandsversionen (innan kunden godkänt och domänen flyttats) ska inte indexeras.
export default function robots(): MetadataRoute.Robots {
  if (!indexera) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${foretag.url}/sitemap.xml`,
  };
}
