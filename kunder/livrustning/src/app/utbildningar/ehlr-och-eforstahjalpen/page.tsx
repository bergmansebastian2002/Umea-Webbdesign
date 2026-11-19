import Image from "next/image";
import Link from "next/link";

import { Avslut, KorthetBand, OffertKnapp, Sidrubrik } from "@/components/Block";
import { Pil, Slag } from "@/components/Ikoner";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { utbildning } from "@/lib/site";

import bildHjartstartare from "@/bilder/hjartstartare-par.webp";
import bildKontor from "@/bilder/hlr-hjartstartare-kontor.webp";

const u = utbildning("ehlr-och-eforstahjalpen");

const BESKRIVNING =
  "eHLR® och eFörstaHjälpen: digitala utbildningar med praktisk träning på LED-docka och träningshjärtstartare. Full arbetsplatsaccess för all personal.";

export const metadata = metadataFor({
  titel: "eHLR och eFörstaHjälpen - digitala utbildningar med praktisk träning",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/ehlr-och-eforstahjalpen",
});

const fordelar = [
  { rubrik: "Själv eller i grupp", text: "Helt i din egen takt eller tillsammans med andra." },
  { rubrik: "Klimatsmart val", text: "Inga onödiga resor för varken deltagare eller instruktörer." },
  { rubrik: "Fler språk", text: "eHLR finns även på engelska." },
];

// De två utbildningarna, med kundens egna beskrivningar. Startsidan länkar hit.
const kurser = [
  {
    id: "ehlr",
    namn: "eHLR",
    text: "Digital HLR-utbildning med praktisk träning.",
  },
  {
    id: "eforstahjalpen",
    namn: "eFörstaHjälpen",
    text: "Digital utbildning i första hjälpen med praktisk träning. Utbildningen innehåller även HLR med hjärtstartare.",
  },
];

const andra = [
  {
    rubrik: "Kurser på plats",
    text: "Traditionella kurser i HLR, första hjälpen och brand i små grupper.",
    href: "/utbildningar/kurser-pa-plats",
  },
  {
    rubrik: "eHLR-Familj",
    text: "Samma trygghet hemma, för hela familjen.",
    href: "/utbildningar/ehlr-familj",
  },
  {
    rubrik: "eHLR-Event",
    text: "Hela personalen utbildad på plats på två timmar.",
    href: "/utbildningar/ehlr-event",
  },
];

export default function Digitalt() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "eHLR och eFörstaHjälpen", href: "/utbildningar/ehlr-och-eforstahjalpen" },
        ]}
        rubrik={
          <span className="block text-[clamp(2.1rem,4.7vw,3.75rem)] leading-[1.02]">
            Digitala utbildningar med praktisk träning i HLR med hjärtstartare och Första Hjälpen
          </span>
        }
        ingress={
          <div className="space-y-4">
            <p>
              eHLR® och eFörstaHjälpen kombinerar digitalt lärande med praktisk träning via LED-docka och
              träningshjärtstartare. Med full arbetsplatsaccess för all personal kan kunskapen repeteras när som helst
              för ökad beredskap.
            </p>
            <p>
              Ni väljer själva hur många ni vill utbilda och hur länge ni vill ha tillgång till utbildningslicensen –
              minimum 6 månader. Ett eller flera träningspaket i en praktisk väska (LED-docka, träningshjärtstartare
              och hygienmateriel) skickas till er arbetsplats. Ni har tillgång till utrustningen under licensperioden.
            </p>
          </div>
        }
      >
        <div className="mt-9">
          <OffertKnapp galler="Trygga arbetsplatsen – eHLR och eFörstaHjälpen" />
        </div>
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-6" data-in="vanster">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">
              Halvera kostnaden, maximera tiden
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-grafit">
              Upp till 70 % billigare och 70 % kortare kurstid än traditionella utbildningar.
            </p>
            <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {fordelar.map((f) => (
                <li key={f.rubrik} className="flex items-baseline gap-4 py-4">
                  <Slag className="size-5 shrink-0 translate-y-1 text-magenta" />
                  <p>
                    <span className="text-lg font-semibold">{f.rubrik}.</span>{" "}
                    <span className="text-grafit">{f.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-5 gap-4 lg:col-span-6">
            <div className="foto relative col-span-3 aspect-[3/4]" data-in="bild">
              <Image src={bildHjartstartare} alt="Två deltagare övar HLR med träningshjärtstartare" fill placeholder="blur" sizes="(min-width: 1024px) 340px, 60vw" className="object-cover" />
            </div>
            <div className="foto relative col-span-2 mt-16 aspect-[3/4]" data-in="bild" style={{ ["--i" as string]: 2 }}>
              <Image src={bildKontor} alt="Kollegor övar hjärt-lungräddning på kontorsgolvet" fill placeholder="blur" sizes="(min-width: 1024px) 230px, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* De två utbildningarna var för sig. */}
      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <h2 className="max-w-2xl text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold" data-in="">
            Två utbildningar att välja mellan
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {kurser.map((k, i) => (
              <div
                key={k.id}
                id={k.id}
                className="scroll-mt-28 border-t border-white/15 py-8"
                data-in=""
                style={{ ["--i" as string]: i }}
              >
                <h3 className="text-[1.75rem] font-bold lg:text-[2rem]">{k.namn}</h3>
                <p className="mt-3 max-w-md text-xl leading-relaxed text-monitor-dampad">{k.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {u.korthet && <KorthetBand rubrik="eHLR och eFörstaHjälpen i korthet" korthet={u.korthet} />}

      <section className="bg-papper">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl leading-tight font-bold lg:text-[2.25rem]" data-in="">
            Passar något annat bättre?
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {andra.map((a, i) => (
              <li key={a.href} data-in="" style={{ ["--i" as string]: i }}>
                <Link
                  href={a.href}
                  className="grupp flex h-full items-start justify-between gap-5 rounded-2xl border border-black/10 bg-white px-6 py-5 transition-colors hover:border-black/25"
                >
                  <span>
                    <span className="block text-lg font-semibold">{a.rubrik}</span>
                    <span className="mt-1 block text-grafit">{a.text}</span>
                  </span>
                  <Pil className="mt-1 size-6 shrink-0 text-magenta" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Avslut
        rubrik="Vill ni veta mer om konceptet Trygga Arbetsplatsen – eHLR och eFörstaHjälpen?"
        text="Kontakta oss så skickar vi direkt en fördelaktig offert."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("ehlr-och-eforstahjalpen", BESKRIVNING))} />
    </>
  );
}
