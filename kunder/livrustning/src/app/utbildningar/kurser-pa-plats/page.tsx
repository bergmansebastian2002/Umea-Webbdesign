import Image from "next/image";
import Link from "next/link";

import { Avslut, KorthetBand, OffertKnapp, Sidrubrik } from "@/components/Block";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { utbildning } from "@/lib/site";

import bildTraning1 from "@/bilder/traning-pa-plats-1-skarp.webp";
import bildTraning2 from "@/bilder/traning-pa-plats-2-skarp.webp";

const u = utbildning("kurser-pa-plats");

const BESKRIVNING =
  "Traditionella kurser i vuxen-HLR, barn-HLR, första hjälpen och brand hos er, var som helst i Sverige. Max 12 deltagare per utbildning, 20 för brand.";

export const metadata = metadataFor({
  titel: "Traditionella kurser på plats i HLR, första hjälpen och brand",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/kurser-pa-plats",
});

const kurser = [
  { namn: "HLR med hjärtstartare", tid: "2 tim", max: 12 },
  { namn: "HLR med hjärtstartare och Första hjälpen", tid: "3 tim", max: 12 },
  { namn: "Brand", tid: "4 tim", max: 20 },
];

export default function KurserPaPlats() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "Kurser på plats", href: "/utbildningar/kurser-pa-plats" },
        ]}
        rubrik="Traditionell kurs – hos er"
        ingress="Vill ni ha traditionella kurser? Våra instruktörer kommer gärna till er när det passar er verksamhet, var som helst i Sverige. Vi utbildar i Vuxen-HLR, Barn-HLR, Första Hjälpen och brand."
      >
        <div className="mt-9">
          <OffertKnapp galler="Traditionell kurs på plats" />
        </div>
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-7" data-in="">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Små grupper</h2>
            <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-grafit lg:text-xl lg:leading-relaxed">
              <p>
                För att garantera bästa möjliga kunskap och förberedelse inför ett allvarligt tillbud följer vi på våra
                traditionella kurser HLR-rådets kvalitetsriktlinjer med max 12 personer per utbildning. Det gör att
                alla får gott om tid att träna praktiskt med träningshjärtstartare och en egen halvkroppsdocka (av hög
                kvalitet, typ Little Anne).
              </p>
              <p>
                Vi använder aldrig uppblåsbara mini-dockor (typ Mini-Anne), eftersom rätt motstånd i bröstkorgen är
                avgörande för att lära sig rätt teknik.
              </p>
              <p>
                Vid fler än 12 personer kan flera utbildningar genomföras efter varandra under samma dag, eller
                parallellt med fler instruktörer. Är ni många är ett alternativ att genomföra ett{" "}
                <Link href="/utbildningar/ehlr-event" className="textlank">
                  eHLR-Event
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Två bilder från kurser på plats, förskjutna mot varandra. */}
          <div className="grid grid-cols-2 items-start gap-4 lg:col-span-5">
            <div className="foto relative aspect-[640/860]" data-in="bild">
              <Image
                src={bildTraning1}
                alt="Kursdeltagare tränar hjärt-lungräddning på övningsdockor under en kurs på plats"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 235px, 50vw"
                className="object-cover"
              />
            </div>
            <div className="foto relative mt-14 aspect-[3/4]" data-in="bild" style={{ ["--i" as string]: 2 }}>
              <Image
                src={bildTraning2}
                alt="Instruktör leder en grupp som tränar HLR på halvkroppsdockor"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 235px, 50vw"
                className="object-cover object-[58%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kurserna som tidtabell på mörk botten. */}
      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-4" data-in="">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Kurs, tid och gruppstorlek</h2>
            <p className="mt-5 text-xl text-monitor-dampad">
              Allt kursinnehåll följer gällande lagstiftning och Svenska HLR-rådets riktlinjer.
            </p>
          </div>
          <div className="lg:col-span-8" data-in="" style={{ ["--i" as string]: 1 }}>
            <table className="w-full text-left">
              <caption className="sr-only">Kurser, kurstid och högsta antal deltagare per kurstillfälle</caption>
              <thead>
                <tr className="border-b border-white/25 text-sm text-monitor-dampad">
                  <th scope="col" className="py-3 pr-4 font-semibold">Kurs</th>
                  <th scope="col" className="py-3 pr-4 text-right font-semibold">Tid</th>
                  <th scope="col" className="py-3 text-right font-semibold">Max antal deltagare</th>
                </tr>
              </thead>
              <tbody>
                {kurser.map((k) => (
                  <tr key={k.namn} className="border-b border-white/12">
                    <th scope="row" className="py-5 pr-4 text-lg font-semibold lg:text-xl">{k.namn}</th>
                    <td className="siffror py-5 pr-4 text-right text-lg whitespace-nowrap text-magenta-ljus lg:text-xl">{k.tid}</td>
                    <td className="siffror py-5 text-right text-3xl font-bold">{k.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {u.korthet && <KorthetBand rubrik="Kurser på plats i korthet" korthet={u.korthet} />}

      <Avslut
        rubrik="Vill ni boka en kurs?"
        text="Berätta vilken kurs ni vill ha, hur många ni är och när det passar, så skickar vi en offert."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("kurser-pa-plats", BESKRIVNING))} />
    </>
  );
}
