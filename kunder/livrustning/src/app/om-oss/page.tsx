import Image from "next/image";

import { Avslut, PilLank, Sidrubrik } from "@/components/Block";
import { Facebook, Instagram } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { foretag } from "@/lib/site";

import bildGrupp from "@/bilder/grupp-dockor.webp";
import bildGenomgang from "@/bilder/grupp-genomgang.webp";
import bildPar from "@/bilder/hlr-par.webp";
import bildPortratt from "@/bilder/instruktor-portratt.webp";
import bildKontor from "@/bilder/kurs-kontor.webp";
import bildSkola from "@/bilder/skola-hjartstartare.webp";

export const metadata = metadataFor({
  titel: "Om oss - över 30 år av livräddande utbildning",
  beskrivning:
    "Livrustning är ett utbildningsföretag med bas i Stockholm, Umeå och Nerja. Över 30 års erfarenhet och cirka 2 000 utbildade deltagare per år.",
  sokvag: "/om-oss",
});

const fakta = [
  { etikett: "Erfarenhet", varde: "Över 30 år" },
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
        rubrik="Trygghet där ni lever och arbetar."
        ingress="Det är vårt mål. Kunskaperna ni får av oss ger er modet och förmågan att rädda liv, var ni än befinner er."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="space-y-5 text-xl leading-relaxed text-grafit lg:col-span-7">
            <h2 className="pb-2 text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold text-black">
              Över 30 år av livräddande utbildning.
            </h2>
            <p>
              Livrustning är ett utbildningsföretag med bas i Stockholm, Umeå och Nerja i Spanien. Med över 30 års
              erfarenhet och cirka 2 000 utbildade deltagare per år är vi en av Sveriges ledande leverantörer av kurser i
              HLR och första hjälpen.
            </p>
            <p>
              Den höga kvaliteten märks på resultatet. Under flera år har vi haft äran att ha Sveriges nöjdaste
              kursdeltagare enligt Reco.se.
            </p>
            <p>
              Vi kommer till er, oavsett om det gäller ett event för hela personalen eller en klassisk kurs i en mindre
              grupp. Allt kursinnehåll följer gällande lagstiftning och Svenska HLR-rådets riktlinjer.
            </p>
            <p className="pt-4">
              <PilLank href="/utbildningar">Se våra utbildningar</PilLank>
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="foto relative aspect-[4/5] bg-white">
              <Image
                src={bildPortratt}
                alt="Instruktör från Livrustning med en träningshjärtstartare"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="sr-only">Livrustning i korthet</h2>
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
              <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Från våra kurser.</h2>
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
