import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fontKlasser } from "@/lib/fonts";
import { jsonLd, salongSchema } from "@/lib/seo";
import { foretag, indexera } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(foretag.url),
  title: {
    default: "Din Frisör - Drop in-frisör vid Järnvägstorget i Umeå",
    template: "%s | Din Frisör",
  },
  description:
    "Klipp dig utan att boka tid. Din Frisör vid Järnvägstorget i centrala Umeå " +
    "erbjuder drop in till låga priser. Öppet mån-fre 10-18, lör 10-17.",
  robots: indexera ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f5",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv-SE" className={fontKlasser}>
      <body className="min-h-screen">
        <Header />
        <main id="innehall">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(salongSchema())} />
      </body>
    </html>
  );
}
