import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site - no server runtime needed. All images are local.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 75],
  },
  async redirects() {
    return [
      // The page was renamed from "AI & Datahantering" to "Din data".
      { source: "/ai-och-data", destination: "/din-data", permanent: true },
    ];
  },
};

export default nextConfig;
