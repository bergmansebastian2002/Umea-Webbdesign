import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { company } from "@/data/site";
import { fontClasses } from "@/lib/fonts";
import { jsonLd, professionalServiceSchema } from "@/lib/seo";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} - Hemsidor som hjälper företag att växa`,
    template: `%s | ${company.name}`,
  },
  description:
    "Webbyrå i Umeå. Vi designar och bygger snabba, moderna hemsidor för " +
    "företag i Umeå och resten av Sverige.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv-SE" className={fontClasses}>
      <body className="grain min-h-screen font-body">
        <Header />
        <main id="innehall" className="relative">
          {children}
        </main>
        <Footer />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(professionalServiceSchema())}
        />
      </body>
    </html>
  );
}
