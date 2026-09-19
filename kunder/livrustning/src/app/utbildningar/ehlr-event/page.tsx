import Image from "next/image";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import { Grupp, Intyg, Klocka, Plats } from "@/components/Ikoner";
import Snabbfakta from "@/components/Snabbfakta";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

import bildGenomgang from "@/bilder/grupp-genomgang.webp";
import bildGrupp from "@/bilder/hjartstartare-grupp.webp";
import bildKlass from "@/bilder/instruktor-klass.webp";

const BESKRIVNING =
  "eHLR-Event: utbilda hela personalen i HLR med hjärtstartare på två timmar, hos er. Obegränsat antal deltagare och intyg till alla.";

export const metadata = metadataFor({
  titel: "eHLR-Event - utbilda alla i HLR på 2 timmar",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/ehlr-event",
});

// Minuter per moment enligt kundens upplägg. Summan är 110; resten är byten.
const moment = [
  {
    minuter: 50,
    namn: "Gemensam start",
    text: "Hela personalen samlas. Två instruktörer leder en interaktiv genomgång på storskärm med eHLR-metoden, och alla svarar tillsammans på kunskapsfrågor mellan momenten.",
    ton: "bg-black",
  },
  {
    minuter: 25,
    namn: "Praktisk träning, del 1",
    text: "Mindre grupper övar med instruktör. Ena halvan tränar HLR och hjärtstartare på avancerade övningsdockor med LED-feedback.",
    ton: "bg-grafit",
  },
  {
    minuter: 25,
    namn: "Praktisk träning, del 2",
    text: "Andra halvan övar luftvägsstopp och kontroll av medvetande och andning. Efter 25 minuter byter grupperna plats.",
    ton: "bg-grafit/60",
  },
  {
    minuter: 10,
    namn: "Avslutning och frågor",
    text: "Alla samlas igen för sammanfattning och frågestund.",
    ton: "bg-rut-grov",
  },
];

export default function EhlrEvent() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "eHLR-Event", href: "/utbildningar/ehlr-event" },
        ]}
        rubrik="Utbilda alla i HLR på 2 timmar."
        ingress="Ge företaget en gemensam livförsäkring. Med eHLR-Event utbildar ni hela personalen i HLR med hjärtstartare, perfekt på nästa kick-off eller planeringsdag. Efteråt kan alla rädda liv."
      >
        <div className="mt-9">
          <KontaktKnapp amne={amnen.ehlrEvent}>Be om offert</KontaktKnapp>
        </div>
        <Snabbfakta
          className="mt-14"
          rader={[
            { ikon: Klocka, etikett: "Tid", varde: "2 timmar" },
            { ikon: Grupp, etikett: "Deltagare", varde: "Obegränsat" },
            { ikon: Plats, etikett: "Plats och datum", varde: "Hos er, när ni vill" },
            { ikon: Intyg, etikett: "Intyg", varde: "Till alla deltagare" },
          ]}
        />
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Två timmar. Så används de.</h2>
            <p className="mt-5 text-xl text-grafit">
              Utbildningen är effektiv, interaktiv och byggd för stora grupper. Antalet instruktörer anpassas efter hur
              många ni är.
            </p>
          </div>

          {/* Tidslinjen i proportion: varje del är lika bred som sin andel av tiden. */}
          <div className="mt-14" aria-hidden="true">
            <div className="flex h-4 gap-1 overflow-hidden rounded-full">
              {moment.map((m) => (
                <div key={m.namn} className={m.ton} style={{ flexGrow: m.minuter }} />
              ))}
            </div>
            <div className="siffror mt-3 flex justify-between text-sm text-grafit">
              <span>0 min</span>
              <span>2 timmar</span>
            </div>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {moment.map((m) => (
              <li key={m.namn} className="border-t-2 border-black/10 pt-5">
                <p className="flex items-center gap-2.5">
                  <span className={`size-3 rounded-full ${m.ton}`} aria-hidden="true" />
                  <span className="siffror text-3xl font-bold">{m.minuter} min</span>
                </p>
                <h3 className="mt-3 text-xl font-bold">{m.namn}</h3>
                <p className="mt-2 text-grafit">{m.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="foto relative aspect-[4/3]">
              <Image src={bildKlass} alt="Instruktör visar en grupp som övar HLR på dockor" fill placeholder="blur" sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="foto relative aspect-[4/3]">
              <Image src={bildGrupp} alt="Kollegor övar med träningshjärtstartare och docka" fill placeholder="blur" sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="foto relative aspect-[4/3]">
              <Image src={bildGenomgang} alt="Grupp som övar HLR på dockor framför en whiteboard" fill placeholder="blur" sizes="(min-width: 640px) 33vw, 100vw" className="object-cover object-[50%_60%]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold lg:col-span-5">Efteråt: intyg till alla.</h2>
          <div className="space-y-5 text-xl leading-relaxed text-monitor-dampad lg:col-span-7">
            <p>
              Efter utbildningen får deltagarna en länk till ett digitalt slutprov via e-post. När provet är godkänt
              laddar var och en ner sitt personliga utbildningsintyg.
            </p>
            <p>Företaget får ett samlingsintyg över alla som gått utbildningen.</p>
          </div>
        </div>
      </section>

      <Avslut
        rubrik="Vill ni boka ett eHLR-Event?"
        text="Priset utgår från antalet deltagare. Berätta hur många ni är och när det passar, så skickar vi en offert."
        amne={amnen.ehlrEvent}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("ehlr-event", BESKRIVNING))} />
    </>
  );
}
