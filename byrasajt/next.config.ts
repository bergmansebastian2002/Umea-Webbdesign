import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site - no server runtime needed. All images are local.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 75],
  },
};

export default nextConfig;
