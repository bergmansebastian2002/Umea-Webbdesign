import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MjukScroll from "@/components/MjukScroll";
import Rorelse from "@/components/Rorelse";
import { fontKlasser } from "@/lib/fonts";
import { jsonLd, organisationSchema } from "@/lib/seo";
import { foretag, indexera } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(foretag.url),
  title: {
    default: "Nice To Be Alive - Utbildning i HLR, första hjälpen och brand",
    template: "%s | Nice To Be Alive",
  },
  description:
    "Vi utbildar hela personalen i HLR, första hjälpen och brand, hos er och på 2 eller 4 timmar. " +
    "Sveriges nöjdaste kursdeltagare enligt Reco.se.",
  robots: indexera ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#141116",
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
        <main id="innehall" className="overflow-x-clip">{children}</main>
        <Footer />
        <Rorelse />
        <MjukScroll />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organisationSchema())} />
      </body>
    </html>
  );
}
