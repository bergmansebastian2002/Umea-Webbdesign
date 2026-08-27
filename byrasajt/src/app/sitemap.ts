import type { MetadataRoute } from "next";

import { company } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date();

  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/om-oss", priority: 0.8 },
    { path: "/din-data", priority: 0.6 },
  ];

  return pages.map((page) => ({
    url: `${company.siteUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
