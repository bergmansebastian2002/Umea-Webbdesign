import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Helt statisk sajt. Alla bilder ligger lokalt i src/bilder.
  images: {
    formats: ["image/avif", "image/webp"],
    // 85 i stället för 75: fotona visas stort och ska vara skarpa.
    qualities: [85],
  },
  async redirects() {
    // Adresser från gamla Wix-sajten, så att gamla länkar och sökträffar fungerar.
    return [
      { source: "/hjartsakerzon", destination: "/hjartsaker-zon", permanent: true },
      { source: "/intigritetspolicy", destination: "/integritetspolicy", permanent: true },
      { source: "/kopia-pa-integritetspolicy", destination: "/kontakt", permanent: true },
      { source: "/kurser", destination: "/utbildningar", permanent: true },
    ];
  },
};

export default nextConfig;
