import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Helt statisk ensidessajt utan externa bildkällor.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
};

export default nextConfig;
