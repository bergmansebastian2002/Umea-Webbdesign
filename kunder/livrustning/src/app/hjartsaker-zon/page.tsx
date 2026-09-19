import Image from "next/image";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import Ekg from "@/components/Ekg";
import { Slag } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

import bildGrupp from "@/bilder/hjartstartare-grupp.webp";
import bildSkap from "@/bilder/instruktor-skap.webp";

export const metadata = metadataFor({
  titel: "Bli en Hjärtsäker zon enligt SS 280000",
  beskrivning:
    "Vad krävs för att bli en Hjärtsäker zon enligt svensk standard SS 280000? Livrustning hjälper er med utbildning, rutiner, placering och registrering.",
  sokvag: "/hjartsaker-zon",
});

const krav = [
  "Det finns rutiner och beredskap för att hantera ett hjärtstopp och larma 112.",
  "Det finns kompetens i hjärt-lungräddning, så att hjälp kan sättas in direkt.",
  "Personalen vet var hjärtstartaren finns och kan använda den.",
  "Hjärtstartaren är registrerad i Sveriges Hjärtstartarregister.",
];

// Endast det Livrustning själva gör. Ingen hårdvara och inga garantier (besked 2026-09-18).
const hjalp = [
  { rubrik: "Utbildning", text: "Personalen utbildas i HLR med hjärtstartare enligt de nationella riktlinjerna." },
  { rubrik: "Rutiner", text: "Vi hjälper er att ta fram rutiner för beredskap, larm och underhåll." },
  { rubrik: "Placering och skyltning", text: "Ni får rekommendationer enligt gällande riktlinjer." },
  { rubrik: "Registrering", text: "Vi hjälper er att registrera hjärtstartaren i Sveriges Hjärtstartarregister." },
  { rubrik: "Repetition", text: "Vi planerar repetitionsutbildningar, så att kunskapen hålls färsk." },
  { rubrik: "Diplom", text: "När standarden är uppfylld får ni diplom, mallar och symboler att visa upp, både internt och externt." },
];

export default function HjartsakerZon() {
  return (
    <>
      <Sidrubrik
        rubrik="Bli en Hjärtsäker zon."
        ingress="Svensk standard SS 280000 beskriver vad som krävs för att en arbetsplats ska vara så hjärtsäker som möjligt. Vi hjälper er hela vägen dit."
      >
        <div className="mt-9">
          <KontaktKnapp amne={amnen.hjartsakerZon}>Fråga oss om Hjärtsäker zon</KontaktKnapp>
        </div>
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Tre minuter gör skillnaden.</h2>
            <p className="mt-5 text-xl leading-relaxed text-grafit">
              En Hjärtsäker zon skapar trygghet för medarbetare, kunder och besökare, och visar att ni tar ansvar för er
              arbetsmiljö.
            </p>
            <div className="foto relative mt-10 aspect-[3/4] max-w-sm">
              <Image src={bildSkap} alt="Två personer bredvid en hjärtstartare i väggskåp på en arbetsplats" fill placeholder="blur" sizes="384px" className="object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="monitor-rutor overflow-hidden rounded-2xl p-8 text-monitor-text lg:p-12">
              <p className="siffror text-[clamp(4.5rem,10vw,6rem)] leading-[0.85] font-bold tracking-[-0.04em] text-white">
                3 min
              </p>
              <Ekg slag={[0.62]} hojd={64} className="my-6" />
              <p className="max-w-md text-xl">
                Så snabbt ska en person med hjärtstopp kunna få behandling med hjärtstartare i en Hjärtsäker zon.
              </p>
            </div>
            <h3 className="mt-12 text-2xl font-bold">Det här kräver standarden också</h3>
            <ul className="mt-4 divide-y divide-black/10 border-y border-black/10">
              {krav.map((k) => (
                <li key={k} className="flex items-baseline gap-4 py-4 text-lg">
                  <Slag className="size-5 shrink-0 translate-y-1 text-magenta" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-papper-djup">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Så hjälper vi er.</h2>
              <div className="foto relative mt-10 aspect-[4/3]">
                <Image src={bildGrupp} alt="Kollegor övar med träningshjärtstartare och docka" fill placeholder="blur" sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-7">
              {hjalp.map((h) => (
                <div key={h.rubrik} className="border-t border-black/15 py-6">
                  <dt className="text-xl font-bold">{h.rubrik}</dt>
                  <dd className="mt-2 text-grafit">{h.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Avslut
        rubrik="Vill ni bli en Hjärtsäker zon?"
        text="Berätta om er arbetsplats, så berättar vi hur ni kommer dit."
        amne={amnen.hjartsakerZon}
      />
    </>
  );
}
