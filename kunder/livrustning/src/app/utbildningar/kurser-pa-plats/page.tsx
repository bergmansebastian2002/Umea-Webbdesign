import Image from "next/image";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

import bildPar from "@/bilder/hlr-par.webp";
import bildSkola from "@/bilder/skola-hjartstartare.webp";

const BESKRIVNING =
  "Traditionella kurser i HLR med hjärtstartare, första hjälpen och brand hos er. Max 12 deltagare för HLR och första hjälpen, 20 för brand.";

export const metadata = metadataFor({
  titel: "Kurser på plats i HLR, första hjälpen och brand",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/kurser-pa-plats",
});

const kurser = [
  { namn: "HLR med hjärtstartare", max: 12 },
  { namn: "Första hjälpen", max: 12 },
  { namn: "Brand", max: 20 },
];

export default function KurserPaPlats() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "Kurser på plats", href: "/utbildningar/kurser-pa-plats" },
        ]}
        rubrik="Klassisk kurs. Hos er."
        ingress="Vill ni hellre ha en traditionell kurs? Våra instruktörer kommer ut till er när det passar er verksamhet."
      >
        <div className="mt-9">
          <KontaktKnapp amne={amnen.kurs}>Be om offert</KontaktKnapp>
        </div>
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Små grupper, mer övning.</h2>
            <p className="mt-5 text-xl leading-relaxed text-grafit">
              För bästa pedagogik har vi ett tak för hur många som går varje kurs. Då får alla tid att öva med
              instruktören.
            </p>
            <table className="mt-10 w-full text-left">
              <caption className="sr-only">Kurser och högsta antal deltagare per kurstillfälle</caption>
              <thead>
                <tr className="border-b-2 border-black text-sm text-grafit">
                  <th scope="col" className="py-3 font-semibold">Kurs</th>
                  <th scope="col" className="py-3 text-right font-semibold">Max antal deltagare</th>
                </tr>
              </thead>
              <tbody>
                {kurser.map((k) => (
                  <tr key={k.namn} className="border-b border-black/10">
                    <th scope="row" className="py-5 text-xl font-semibold">{k.namn}</th>
                    <td className="siffror py-5 text-right text-3xl font-bold">{k.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-8 text-lg text-grafit">
              Allt kursinnehåll följer gällande lagstiftning och Svenska HLR-rådets riktlinjer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:col-span-6">
            <div className="foto relative aspect-[4/3]">
              <Image src={bildSkola} alt="Lärare övar HLR med hjärtstartare i ett klassrum" fill placeholder="blur" sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[50%_65%]" />
            </div>
            <div className="foto relative aspect-[16/9]">
              <Image src={bildPar} alt="Två deltagare övar HLR på dockor" fill placeholder="blur" sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Avslut
        rubrik="Vill ni boka en kurs?"
        text="Berätta vilken kurs ni vill ha, hur många ni är och när det passar, så skickar vi en offert."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("kurser-pa-plats", BESKRIVNING))} />
    </>
  );
}
