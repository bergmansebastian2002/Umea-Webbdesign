import type { MetadataRoute } from "next";

import { paket } from "@/lib/hjartstartare";
import { foretag, utbildningar } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const sidor = [
    "/",
    "/utbildningar",
    ...utbildningar.map((u) => u.href),
    "/kop-hjartstartare",
    ...paket.map((p) => `/kop-hjartstartare/${p.slug}`),
    "/offert",
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
    priority: s === "/" ? 1 : s.startsWith("/utbildningar") || s.startsWith("/kop-hjartstartare") ? 0.9 : 0.6,
  }));
}
