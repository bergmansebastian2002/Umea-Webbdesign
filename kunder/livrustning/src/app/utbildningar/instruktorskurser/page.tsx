import Image from "next/image";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

import bildInstruktor from "@/bilder/instruktorsutbildning.webp";

const BESKRIVNING =
  "Bli instruktör i HLR och första hjälpen. Instruktörsutbildningar i vuxen-HLR, barn-HLR och första hjälpen enligt HLR-rådets riktlinjer, som öppna utbildningar i Stockholmsområdet eller hos er.";

export const metadata = metadataFor({
  titel: "Instruktörsutbildning - bli instruktör i HLR och första hjälpen",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/instruktorskurser",
});

// Kurstyper och priser enligt kundens underlag 2026-11-19 (exkl. moms).
const kurser = [
  {
    namn: "Instruktör Vuxen-HLR",
    text: "Ger behörighet att utbilda och hålla kurser i HLR för vuxna.",
    pris: "3 900 kr",
  },
  {
    namn: "Instruktör Barn-HLR",
    text: "Inriktad på hjärt-lungräddning samt olycksfall för barn (0–18 år).",
    pris: "3 900 kr",
  },
  {
    namn: "Instruktör Första hjälpen",
    text: "Fördjupning för att kunna lära ut livräddande första hjälpen-insatser.",
    pris: "4 900 kr",
  },
  {
    namn: "Huvudinstruktör",
    text: "Vidareutbildning till huvudinstruktör i både vuxen- och barn-HLR.",
    pris: "Pris vid förfrågan",
  },
];

export default function Instruktorskurser() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "Instruktörsutbildningar", href: "/utbildningar/instruktorskurser" },
        ]}
        rubrik="Bli instruktör i HLR och första hjälpen"
        ingress="Instruktörsutbildning – utbilda på företag, skola eller förening."
      >
        <div className="mt-9">
          <KontaktKnapp amne={amnen.instruktor}>Fråga om datum och anmälan</KontaktKnapp>
        </div>
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-5" data-in="sida">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">
              Redo att lära ut HLR
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-grafit lg:text-xl lg:leading-relaxed">
              <p>
                Vi samarbetar med Brandfast AB vid instruktörskurser i HLR och första hjälpen. Du får behörighet och
                kunskap som gör dig redo att lära ut HLR och öva dina kollegor, elever eller medlemmar.
              </p>
              <p>
                Alla utbildningar följer HLR-rådets riktlinjer och leds av certifierade huvudinstruktörer.
                Instruktörskurser arrangeras som öppna utbildningar i Stockholmsområdet eller egna
                företagsutbildningar.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="foto relative aspect-[1408/768]" data-in="bild">
              <Image
                src={bildInstruktor}
                alt="Blivande instruktörer tränar HLR på övningsdockor under en instruktörsutbildning"
                fill
                placeholder="blur"
                sizes="(min-width: 1280px) 690px, (min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kurstyperna som prislista på mörk botten. */}
      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end" data-in="sida">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Fyra instruktörsutbildningar</h2>
            <p className="text-monitor-dampad">Priser exkl. moms.</p>
          </div>
          <table className="mt-10 w-full text-left">
            <caption className="sr-only">Instruktörsutbildningar: kurstyp, beskrivning och pris exklusive moms</caption>
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-white/25 text-sm text-monitor-dampad">
                <th scope="col" className="py-3 pr-6 font-semibold">Kurstyp</th>
                <th scope="col" className="py-3 pr-6 font-semibold">Beskrivning</th>
                <th scope="col" className="py-3 text-right font-semibold">Pris (exkl. moms)</th>
              </tr>
            </thead>
            <tbody>
              {kurser.map((k, i) => (
                <tr
                  key={k.namn}
                  className="grid grid-cols-1 gap-y-1.5 border-b border-white/12 py-6 md:table-row md:py-0"
                  data-in=""
                  style={{ ["--i" as string]: i }}
                >
                  <th scope="row" className="text-xl font-bold md:w-[17rem] md:py-6 md:pr-6 md:align-top lg:text-2xl">
                    {k.namn}
                  </th>
                  <td className="text-lg text-monitor-dampad md:py-6 md:pr-6 md:align-top">{k.text}</td>
                  <td className="siffror text-xl font-bold whitespace-nowrap text-magenta-ljus md:py-6 md:text-right md:align-top lg:text-2xl">
                    {k.pris}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Avslut
        rubrik="För datum och anmälan till öppna utbildningar – kontakta oss!"
        text="Berätta vilken instruktörsutbildning du är intresserad av, så återkommer vi med datum och hur du anmäler dig."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("instruktorskurser", BESKRIVNING))} />
    </>
  );
}
