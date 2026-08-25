import type { MetadataRoute } from "next";

import { absolutUrl, sajtUrl } from "@/lib/seo";

/** Ligger på /robots.txt och talar om för Google var sitemapen finns. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absolutUrl("/sitemap.xml"),
    host: sajtUrl,
  };
}
