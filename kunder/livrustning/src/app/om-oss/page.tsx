import Image from "next/image";

import { Avslut, PilLank, Sidrubrik } from "@/components/Block";
import { Facebook, Instagram } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { foretag } from "@/lib/site";

import bildGrupp from "@/bilder/grupp-dockor.webp";
import bildGenomgang from "@/bilder/grupp-genomgang.webp";
import bildPar from "@/bilder/hlr-par.webp";
import bildInstruktor from "@/bilder/instruktorsutbildning.webp";
import bildKontor from "@/bilder/kurs-kontor.webp";
import bildSkola from "@/bilder/skola-hjartstartare.webp";

export const metadata = metadataFor({
  titel: "Om oss - över 25 år av livräddande utbildning",
  beskrivning:
    "Med över 25 års samlad erfarenhet av HLR och första hjälpen gör vi livräddning enkel, engagerande och tillgänglig för alla.",
  sokvag: "/om-oss",
});

// Enligt kundens underlag 2026-11-19.
const varfor = [
  {
    rubrik: "Anpassat efter er",
    text: "Flexibla upplägg för hela arbetsplatsen – från stora personalevent till mindre grupper.",
  },
  {
    rubrik: "Alltid färska kunskaper",
    text: "Våra smarta lösningar gör det enkelt att träna regelbundet så att tryggheten hålls vid liv.",
  },
  {
    rubrik: "Certifierat och säkert",
    text: "Allt kursinnehåll följer gällande lagstiftning och Svenska HLR-rådets riktlinjer.",
  },
  {
    rubrik: "Komplett helhetsleverantör",
    text: "Vi erbjuder utbildning i HLR, första hjälpen och brand, samt hjärtstartare. Ni får allt via en enda kontaktperson.",
  },
];

const fakta = [
  { etikett: "Samlad erfarenhet", varde: "Över 25 år" },
  { etikett: "Utbildade per år", varde: "Cirka 2 000" },
  { etikett: "Bas", varde: "Stockholm, Umeå och Nerja" },
  { etikett: "Utbildar", varde: "Över hela Sverige" },
  { etikett: "Riktlinjer", varde: "Svenska HLR-rådets" },
  { etikett: "Nöjdhet", varde: "100 % nöjdhetsgaranti" },
];

export default function OmOss() {
  return (
    <>
      <Sidrubrik
        rubrik="Trygghet där ni lever och arbetar"
        ingress="Det är vårt mål. Kunskaperna ni får av oss ger er modet och förmågan att rädda liv, var ni än befinner er."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="space-y-5 text-xl leading-relaxed text-grafit lg:col-span-5" data-in="vanster">
            <h2 className="pb-2 text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold text-black">
              Över 25 år av livräddande utbildning
            </h2>
            <p>
              Med över 25 års samlad erfarenhet av HLR och första hjälpen gör vi livräddning enkel, engagerande och
              tillgänglig för alla.
            </p>
            <p>Vi arbetar för att alla ska kunna säga:</p>
            <blockquote className="text-[1.75rem] leading-tight font-bold tracking-[-0.025em] text-black lg:text-[2rem]">
              ”Vi är alla varandras livförsäkring, på jobbet och hemma.”
            </blockquote>
            <p className="pt-4">
              <PilLank href="/utbildningar">Se våra utbildningar</PilLank>
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="foto relative aspect-[1408/768]" data-in="bild">
              <Image
                src={bildInstruktor}
                alt="Instruktör visar hjärtkompressioner på en övningsdocka under en instruktörsutbildning"
                fill
                placeholder="blur"
                sizes="(min-width: 1280px) 690px, (min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Varför välja oss: fyra skäl, med kundens egna ord. */}
      <section className="border-t border-black/10 bg-papper-djup">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-4" data-in="">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Varför välja oss?</h2>
            <p className="mt-5 text-xl leading-relaxed text-grafit">
              Under flera år har vi haft äran att ha Sveriges nöjdaste kursdeltagare enligt Reco.se.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-12 sm:grid-cols-2 lg:col-span-8">
            {varfor.map((v, i) => (
              <li key={v.rubrik} className="border-t border-black/15 py-7" data-in="" style={{ ["--i" as string]: i }}>
                <h3 className="text-2xl font-bold lg:text-[1.75rem]">{v.rubrik}</h3>
                <p className="mt-2 text-lg text-grafit">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="sr-only">Nice To Be Alive i korthet</h2>
          <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {fakta.map((f) => (
              <div key={f.etikett} className="border-t border-white/15 py-6">
                <dt className="text-sm text-monitor-dampad">{f.etikett}</dt>
                <dd className="mt-1 text-2xl font-bold lg:text-3xl">{f.varde}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-papper">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Från våra kurser</h2>
              <p className="mt-5 text-xl text-grafit">
                Kontor, skolor och museer. Följ oss för fler bilder från vardagen som instruktörer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={foretag.facebook} target="_blank" rel="noopener" className="knapp knapp-sekundar min-h-11 px-5">
                <Facebook className="size-5" />
                Facebook
              </a>
              <a href={foretag.instagram} target="_blank" rel="noopener" className="knapp knapp-sekundar min-h-11 px-5">
                <Instagram className="size-5" />
                Instagram
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            <div className="foto relative col-span-2 row-span-2 aspect-square md:aspect-auto">
              <Image src={bildGrupp} alt="Kursdeltagare med övningsdockor efter en HLR-utbildning" fill placeholder="blur" sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="foto relative aspect-square">
              <Image src={bildSkola} alt="Lärare övar HLR med hjärtstartare i ett klassrum" fill placeholder="blur" sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="foto relative aspect-square">
              <Image src={bildPar} alt="Två deltagare övar HLR på dockor" fill placeholder="blur" sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
            <div className="foto relative aspect-square">
              <Image src={bildGenomgang} alt="Grupp som övar HLR framför en whiteboard" fill placeholder="blur" sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-[50%_65%]" />
            </div>
            <div className="foto relative aspect-square">
              <Image src={bildKontor} alt="Kontorspersonal övar hjärt-lungräddning på dockor" fill placeholder="blur" sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-[50%_70%]" />
            </div>
          </div>
        </div>
      </section>

      <Avslut />
    </>
  );
}
