import type { MetadataRoute } from "next";

import { foretag, utbildningar } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const sidor = [
    "/",
    "/utbildningar",
    ...utbildningar.map((u) => u.href),
    "/sa-gar-det-till",
    "/hjartsaker-zon",
    "/om-oss",
    "/kontakt",
    "/integritetspolicy",
    "/kvalitetspolicy",
    "/miljopolicy",
  ];
  return sidor.map((s) => ({
    url: `${foretag.url}${s === "/" ? "" : s}`,
    changeFrequency: "monthly",
    priority: s === "/" ? 1 : s.startsWith("/utbildningar") ? 0.9 : 0.6,
  }));
}
