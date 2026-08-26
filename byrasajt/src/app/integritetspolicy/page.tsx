import type { Metadata } from "next";

import { company } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Integritetspolicy",
    description:
      "Så hanterar Umeå Webbdesign personuppgifter: bara det du själv " +
      "skickar in, inga spårningskakor, tydliga rättigheter.",
    path: "/integritetspolicy",
  }),
  robots: { index: false, follow: true },
};

const SECTIONS: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Vilka uppgifter samlas in?",
    paragraphs: [
      "Endast det du själv skickar till oss via e-post, telefon eller kontaktformuläret: namn, kontaktuppgifter och det du skriver i ditt meddelande. Sajten använder inga spårningskakor och ingen besöksstatistik som identifierar dig.",
      "Kontaktformuläret på sidan skickar ingenting själv - det öppnar ett e-postutkast i ditt eget e-postprogram, och inget når oss förrän du väljer att skicka det.",
    ],
  },
  {
    heading: "Varför och med vilken rättslig grund?",
    paragraphs: [
      "Uppgifterna används för att svara på din förfrågan, lämna offert och genomföra det uppdrag vi kommer överens om. Den rättsliga grunden är berättigat intresse (att besvara din kontakt) och avtal (när vi inleder ett samarbete).",
    ],
  },
  {
    heading: "Hur länge sparas uppgifterna?",
    paragraphs: [
      "E-postkorrespondens sparas så länge dialogen eller samarbetet pågår. Efter avslutat samarbete sparas projektrelaterat material i upp till tolv månader och raderas därefter. Bokföringsunderlag sparas enligt bokföringslagen.",
    ],
  },
  {
    heading: "Personuppgiftsansvarig",
    paragraphs: [
      `${company.name}, ${company.city}. Kontakt: ${company.email}, ${company.phone}.`,
    ],
  },
  {
    heading: "Dina rättigheter",
    paragraphs: [
      "Du har rätt att få veta vilka uppgifter vi har om dig, få dem rättade eller raderade, invända mot behandlingen och få ut dina uppgifter. Mejla oss så hjälper vi dig. Du kan också lämna klagomål till Integritetsskyddsmyndigheten (IMY).",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section aria-labelledby="policy-rubrik" className="py-32 md:py-36">
      <div className="wrap max-w-3xl">
        <SectionHeading
          kicker="Juridik"
          title="Integritetspolicy"
          intro="Kort version: vi samlar bara in det du själv skickar till oss, vi spårar dig inte, och du kan alltid be oss radera dina uppgifter."
          asH1
          id="policy-rubrik"
        />

        <div className="space-y-12">
          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl text-ink">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-3 leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-16 rounded-2xl border border-line bg-panel p-6 text-sm leading-relaxed text-mist">
          Senast uppdaterad: augusti 2026. Policyn beskriver hur vi faktiskt
          arbetar i dag och uppdateras om arbetssättet ändras.
        </p>
      </div>
    </section>
  );
}
