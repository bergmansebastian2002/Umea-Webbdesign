import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Avslut, Sidrubrik } from "@/components/Block";
import { Pil } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { utbildningar } from "@/lib/site";

import bildBrand from "@/bilder/brand-slackare.webp";
import bildDigitalt from "@/bilder/hjartstartare-grupp.webp";
import bildGenomgang from "@/bilder/grupp-genomgang.webp";
import bildSkola from "@/bilder/skola-hjartstartare.webp";

export const metadata = metadataFor({
  titel: "Utbildningar i HLR, första hjälpen och brand",
  beskrivning:
    "Säkerhetsdag på 4 timmar, eHLR-Event på 2 timmar, digitala eHLR och eFörstaHjälpen eller klassiska kurser. " +
    "Enligt Svenska HLR-rådets riktlinjer.",
  sokvag: "/utbildningar",
});

const detaljer: Record<string, { bild: StaticImageData; alt: string; fakta: string; passar: string }> = {
  sakerhetsdag: {
    bild: bildBrand,
    alt: "Deltagare med brandsläckare under en brandövning",
    fakta: "4 timmar · Hos er · Brand, HLR och första hjälpen",
    passar: "Arbetsplatser som vill täcka brand, HLR och första hjälpen på en och samma dag.",
  },
  "ehlr-event": {
    bild: bildGenomgang,
    alt: "Grupp som övar HLR på dockor framför en whiteboard",
    fakta: "2 timmar · Hos er · Obegränsat antal deltagare",
    passar: "Kick-off, planeringsdag eller personalmöte där alla ska med, hur många ni än är.",
  },
  "ehlr-och-eforstahjalpen": {
    bild: bildDigitalt,
    alt: "Kollegor övar med träningshjärtstartare och docka",
    fakta: "Digitalt och praktiskt · Ett års access",
    passar: "Verksamheter där alla inte kan vara på samma plats samtidigt.",
  },
  "kurser-pa-plats": {
    bild: bildSkola,
    alt: "Lärare övar HLR med hjärtstartare i ett klassrum",
    fakta: "Hos er · Max 12 deltagare, 20 för brand",
    passar: "Mindre grupper som vill ha en traditionell kurs med instruktör.",
  },
};

export default function Utbildningar() {
  return (
    <>
      <Sidrubrik
        rubrik="Från två timmar till en halvdag."
        ingress="Vi kommer till er, eller så lär ni er digitalt. Allt följer Svenska HLR-rådets riktlinjer. Välj efter hur många ni är och hur mycket tid ni har."
      />

      <section className="bg-white">
        <ul className="mx-auto max-w-7xl divide-y divide-black/10 px-5 lg:px-8">
          {utbildningar.map((u) => {
            const d = detaljer[u.slug];
            return (
              <li key={u.slug} className="grupp relative grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:items-center md:gap-12 lg:py-16">
                <div className="foto relative aspect-[3/2] md:col-span-5">
                  <Image src={d.bild} alt={d.alt} fill placeholder="blur" sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
                </div>
                <div className="md:col-span-7">
                  <h2 className="text-3xl font-bold lg:text-[2.75rem] lg:leading-tight">
                    <Link href={u.href} className="after:absolute after:inset-0 focus-visible:outline-none">
                      {u.namn}
                    </Link>
                  </h2>
                  <p className="siffror mt-2 font-semibold text-grafit">{d.fakta}</p>
                  <p className="mt-4 text-lg">{u.pitch}</p>
                  <p className="mt-2 text-grafit">
                    <span className="font-semibold text-black">Passar för:</span> {d.passar}
                  </p>
                  <p className="mt-5 flex items-center gap-2 font-semibold text-magenta-mork">
                    Läs mer
                    <Pil className="size-5" />
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <Avslut />
    </>
  );
}
