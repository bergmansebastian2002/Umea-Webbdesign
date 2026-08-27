import { company, contactMailto } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = buildMetadata({
  title: "Datahantering och GDPR",
  description:
    "Så hanterar och skyddar Umeå Webbdesign din data. Inget kundmaterial " +
    "görs publikt eller säljs vidare, och personuppgifter behandlas enligt GDPR.",
  path: "/din-data",
});

const SECTIONS: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Säkerhet är en prioritet",
    paragraphs: [
      "Allt vi bygger vilar på en enkel princip: din data är din. Vi arbetar med etablerade, säkra verktyg, håller system och beroenden uppdaterade och begränsar åtkomsten till ditt material till de personer som faktiskt arbetar med din sida. All trafik till sidorna vi levererar krypteras med HTTPS.",
    ],
  },
  {
    heading: "Ditt material blir aldrig publikt utan ditt godkännande",
    paragraphs: [
      "Inget av ditt material publiceras någonstans utan att du godkänt det. Vi säljer aldrig vidare uppgifter om dig eller din verksamhet till tredje part.",
      "Utkast och arbetsmaterial som rör din sida behandlas som förtroliga - texter, bilder, siffror och affärsuppgifter stannar mellan oss tills du säger att de får visas.",
    ],
  },
  {
    heading: "Var din data lagras och hur länge",
    paragraphs: [
      "Material du skickar till oss - texter, bilder, uppgifter om verksamheten - lagras i våra arbetsverktyg (e-post, fillagring och kodversionshantering) så länge vi arbetar tillsammans. Avslutas samarbetet sparar vi projektfilerna i upp till tolv månader, om du vill återuppta arbetet, och raderar dem sedan.",
    ],
  },
  {
    heading: "GDPR - så behandlar vi personuppgifter",
    paragraphs: [
      "Vi följer EU:s dataskyddsförordning (GDPR) och kompletterande svensk dataskyddslagstiftning. Det innebär att vi bara samlar in de personuppgifter som behövs för att utföra vårt uppdrag - i praktiken kontaktuppgifter som namn, e-postadress och telefonnummer - och att de aldrig används för något annat ändamål än det de lämnades för.",
      "Umeå Webbdesign är personuppgiftsansvarig för de uppgifter du lämnar till oss. Behandlingen sker med stöd av avtal (för att kunna leverera din sida) eller berättigat intresse (för att kunna svara när du kontaktar oss). Uppgifterna sparas inte längre än nödvändigt och lämnas aldrig ut till tredje part för marknadsföring.",
      "Du har enligt GDPR rätt att få veta vilka uppgifter vi har om dig (registerutdrag), få felaktiga uppgifter rättade, få dina uppgifter raderade, invända mot behandling och få dina uppgifter flyttade (dataportabilitet). Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att vi behandlar dina uppgifter fel.",
      "Cookies och samtycke: vår egen webbplats använder inga spårande cookies. På sidor vi bygger åt kunder sätts analys- eller marknadsföringscookies först efter besökarens samtycke, i enlighet med GDPR och lagen om elektronisk kommunikation (LEK).",
    ],
  },
  {
    heading: "Vill du att vi raderar något?",
    paragraphs: [
      "Mejla oss så raderar vi ditt material och bekräftar när det är gjort. Det gäller både under och efter ett samarbete.",
    ],
  },
];

export default function DinDataPage() {
  return (
    <section aria-labelledby="din-data-rubrik" className="py-32 md:py-36">
      <div className="wrap max-w-3xl">
        <SectionHeading
          kicker="Din data"
          title="Datahantering och GDPR"
          intro="Vi tror på att vara raka med hur vi arbetar. Det här är hur din data hanteras och skyddas hos oss - och vilka rättigheter du har."
          asH1
          id="din-data-rubrik"
        />

        <div className="space-y-12">
          {SECTIONS.map((section) => (
            <div key={section.heading} className="reveal">
              <h2 className="text-xl text-ink">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-3 leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-panel p-8">
          <p className="leading-relaxed text-mist">
            Har du frågor om något av det här? Hör av dig till{" "}
            <a href={`mailto:${company.email}`} className="text-gold-2 underline-offset-4 hover:underline">
              {company.email}
            </a>{" "}
            - vi svarar gärna.
          </p>
          <div className="mt-6">
            <Button href={contactMailto}>Kontakta oss</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
