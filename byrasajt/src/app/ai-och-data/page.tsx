import { company, contactMailto } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = buildMetadata({
  title: "AI och din data",
  description:
    "Så använder Umeå Webbdesign AI i arbetet - och så skyddas din data. " +
    "Inget kundmaterial görs publikt eller säljs vidare.",
  path: "/ai-och-data",
});

const SECTIONS: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Så använder vi AI",
    paragraphs: [
      "AI är ett arbetsverktyg hos oss, på samma sätt som en kodredigerare eller ett bildprogram. Vi använder det som stöd när vi skissar design, formulerar texter och skriver kod. Det gör att vi kan leverera snabbare och till ett lägre pris - men varje leverans granskas och färdigställs av en människa innan den når dig.",
    ],
  },
  {
    heading: "Det här gör vi inte",
    paragraphs: [
      "Inget av ditt material publiceras någonstans utan att du godkänt det. Vi säljer aldrig vidare uppgifter om dig eller din verksamhet. Och vi använder inte ditt material för att träna externa AI-modeller.",
      "Utkast och arbetsmaterial som rör din sida behandlas som förtroliga, oavsett om de skapats med eller utan AI-stöd.",
    ],
  },
  {
    heading: "Var din data lagras och hur länge",
    paragraphs: [
      "Material du skickar till oss - texter, bilder, uppgifter om verksamheten - lagras i våra arbetsverktyg (e-post, fillagring och kodversionshantering) så länge vi arbetar tillsammans. Avslutas samarbetet sparar vi projektfilerna i upp till tolv månader, om du vill återuppta arbetet, och raderar dem sedan.",
    ],
  },
  {
    heading: "Vill du att vi raderar något?",
    paragraphs: [
      "Mejla oss så raderar vi ditt material och bekräftar när det är gjort. Det gäller både under och efter ett samarbete.",
    ],
  },
];

export default function AiDataPage() {
  return (
    <section aria-labelledby="ai-rubrik" className="py-32 md:py-36">
      <div className="wrap max-w-3xl">
        <SectionHeading
          kicker="Öppenhet"
          title="AI och din data"
          intro="Vi tror på att vara raka med hur vi arbetar. Det här är vad AI används till hos oss - och var gränsen går."
          asH1
          id="ai-rubrik"
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
