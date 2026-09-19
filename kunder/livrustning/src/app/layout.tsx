import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fontKlasser } from "@/lib/fonts";
import { jsonLd, organisationSchema } from "@/lib/seo";
import { foretag, indexera } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(foretag.url),
  title: {
    default: "Livrustning - Utbildning i HLR, första hjälpen och brand",
    template: "%s | Livrustning",
  },
  description:
    "Vi utbildar hela personalen i HLR, första hjälpen och brand, hos er och på 2 eller 4 timmar. " +
    "Sveriges nöjdaste kursdeltagare enligt Reco.se.",
  robots: indexera ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#fdf3f5",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv-SE" className={fontKlasser} suppressHydrationWarning>
      <head>
        {/* Märker att JS finns, så att EKG-kurvan får ritas fram i stället för att visas färdig. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen">
        <Header />
        <main id="innehall">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organisationSchema())} />
      </body>
    </html>
  );
}
