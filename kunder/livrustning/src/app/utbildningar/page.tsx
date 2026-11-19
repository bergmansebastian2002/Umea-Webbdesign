import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import { Avslut, Korthet, Sidrubrik } from "@/components/Block";
import { Pil } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { utbildningar } from "@/lib/site";

import bildEvent from "@/bilder/ehlr-event-sal.webp";
import bildFamilj from "@/bilder/hjartstartare-hemma.webp";
import bildDigitalt from "@/bilder/hjartstartare-grupp.webp";
import bildInstruktor from "@/bilder/instruktorsutbildning.webp";
import bildSakerhetsdag from "@/bilder/sakerhetsdag-kollage.webp";
import bildKurs from "@/bilder/traning-pa-plats-2.webp";

export const metadata = metadataFor({
  titel: "Utbildningar i HLR, första hjälpen och brand",
  beskrivning:
    "Välj rätt utbildning: Säkerhetsdag, traditionella kurser på plats, eHLR-Event på 2 timmar, eHLR och eFörstaHjälpen, eHLR-Familj eller instruktörsutbildning.",
  sokvag: "/utbildningar",
});

const bilder: Record<string, { bild: StaticImageData; alt: string; lage?: string }> = {
  sakerhetsdag: {
    bild: bildSakerhetsdag,
    alt: "Säkerhetsdag: släckövning, brandföreläsning och HLR-träning i stationer på en arbetsplats",
  },
  "kurser-pa-plats": {
    bild: bildKurs,
    alt: "Instruktör leder en mindre grupp som tränar HLR på övningsdockor",
    lage: "object-[50%_35%]",
  },
  "ehlr-event": {
    bild: bildEvent,
    alt: "eHLR-Event i en fullsatt hörsal med två instruktörer framför storskärm",
    lage: "object-[62%_50%]",
  },
  "ehlr-och-eforstahjalpen": {
    bild: bildDigitalt,
    alt: "Kollegor övar med träningshjärtstartare och övningsdocka",
  },
  "ehlr-familj": {
    bild: bildFamilj,
    alt: "Hjärtstartare på en bänk i hallen i ett hem",
    lage: "object-[50%_62%]",
  },
  instruktorskurser: {
    bild: bildInstruktor,
    alt: "Blivande instruktörer tränar HLR under en instruktörsutbildning",
  },
};

export default function Utbildningar() {
  return (
    <>
      <Sidrubrik
        rubrik="Välj rätt utbildning"
        ingress="Vi kommer till er, eller så lär ni er digitalt. Allt följer Svenska HLR-rådets riktlinjer. Välj efter hur många ni är och hur mycket tid ni har."
      />

      <section className="bg-white">
        <ul className="mx-auto max-w-7xl divide-y divide-black/10 px-5 lg:px-8">
          {utbildningar.map((u) => {
            const b = bilder[u.slug];
            return (
              <li
                key={u.slug}
                id={u.slug}
                className="grupp relative grid grid-cols-1 gap-7 py-12 md:grid-cols-12 md:items-start md:gap-12 lg:py-16"
              >
                <div className="foto relative aspect-[3/2] md:sticky md:top-28 md:col-span-5" data-in="bild">
                  <Image
                    src={b.bild}
                    alt={b.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, 100vw"
                    className={`object-cover ${b.lage ?? ""}`}
                  />
                </div>
                <div className="md:col-span-7" data-in="">
                  <h2 className="text-3xl leading-tight font-bold lg:text-[2.5rem] lg:leading-[1.08]">
                    <Link href={u.href} className="after:absolute after:inset-0 focus-visible:outline-none">
                      {u.namn}
                    </Link>
                  </h2>
                  {u.korthet ? (
                    <Korthet {...u.korthet} className="mt-6" />
                  ) : (
                    <p className="mt-4 max-w-2xl text-lg text-grafit">{u.pitch}</p>
                  )}
                  <p className="mt-6 flex items-center gap-2 font-semibold text-magenta-mork">
                    {u.lanktext}
                    <Pil className="size-5 shrink-0" />
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
