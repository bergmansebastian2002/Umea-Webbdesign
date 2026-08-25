import type { Metadata, Viewport } from "next";
import type { CSSProperties, ReactNode } from "react";

import { farger, restaurang, rundning } from "@/lib/kund";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { absolutUrl, sajtUrl } from "@/lib/seo";
import { jsonLd, restaurangSchema } from "@/lib/strukturerad-data";
import { typsnittsklasser } from "@/lib/typsnitt";

import "./globals.css";

/**
 * Färgerna från config/restaurang.ts skickas in som CSS-variabler på <html>.
 * Det gör att hela sajtens färgschema byts genom att ändra en enda fil.
 */
const fargvariabler = {
  "--farg-bakgrund": farger.bakgrund,
  "--farg-yta": farger.yta,
  "--farg-text": farger.text,
  "--farg-text-dampad": farger.textDampad,
  "--farg-primar": farger.primar,
  "--farg-accent": farger.accent,
  "--farg-accent-text": farger.accentText,
  "--farg-ram": farger.ram,
  "--rundning": `${rundning}px`,
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(sajtUrl),
  title: {
    // %s ersätts med varje sidas egen titel.
    default: `${restaurang.namn} - ${restaurang.slogan}`,
    template: `%s | ${restaurang.namn}, ${restaurang.seo.stad}`,
  },
  description: restaurang.kortBeskrivning,
  keywords: restaurang.seo.sokord,
  applicationName: restaurang.namn,
  authors: [{ name: restaurang.namn }],
  creator: restaurang.namn,
  publisher: restaurang.namn,
  alternates: { canonical: sajtUrl },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: restaurang.namn,
    url: sajtUrl,
    title: `${restaurang.namn} - ${restaurang.slogan}`,
    description: restaurang.kortBeskrivning,
    images: [
      {
        url: absolutUrl(restaurang.bilder.delning),
        width: 1200,
        height: 630,
        alt: `${restaurang.namn} i ${restaurang.seo.stad}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurang.namn} - ${restaurang.slogan}`,
    description: restaurang.kortBeskrivning,
    images: [absolutUrl(restaurang.bilder.delning)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Hjälper Google koppla sajten till rätt plats.
  other: {
    "geo.region": "SE",
    "geo.placename": restaurang.kontakt.ort,
    "geo.position": `${restaurang.kontakt.latitud};${restaurang.kontakt.longitud}`,
    ICBM: `${restaurang.kontakt.latitud}, ${restaurang.kontakt.longitud}`,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFIERING
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFIERING } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: farger.primar,
  width: "device-width",
  initialScale: 1,
};

export default function RotLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" className={typsnittsklasser} style={fargvariabler}>
      <head>
        {/* Strukturerad data om restaurangen - läses av Google och Google Maps. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(restaurangSchema())}
        />
      </head>
      <body className="min-h-svh antialiased">
        <Header />
        <main id="innehall">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
