import Image from "next/image";
import Link from "next/link";

import { Avslut, KontaktKnapp, Korthet, PilLank, Sidrubrik } from "@/components/Block";
import { Bock, Grupp, Hus, Klocka, Pil } from "@/components/Ikoner";
import Snabbfakta from "@/components/Snabbfakta";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { amnen, utbildning } from "@/lib/site";

import bildHemma from "@/bilder/hjartstartare-hemma.webp";
import bildSpanien from "@/bilder/hjartstartare-spanien.webp";

const u = utbildning("ehlr-familj");

const BESKRIVNING =
  "eHLR-Familj: digital utbildning med enkel praktisk träning i hemmet. Hela familjen lär sig vad man gör om ett barn eller en vuxen sätter i halsen eller drabbas av hjärtstopp.";

export const metadata = metadataFor({
  titel: "eHLR-Familj - digital HLR-utbildning för hela familjen",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/ehlr-familj",
});

export default function EhlrFamilj() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "eHLR-Familj", href: "/utbildningar/ehlr-familj" },
        ]}
        rubrik="eHLR-Familj – skydda dina närmaste"
        ingress="En digital utbildning med enkel praktisk träning för hela familjen. Alla vet då exakt vad man ska göra om ett barn eller en vuxen sätter i halsen eller drabbas av ett hjärtstopp."
      >
        <div className="mt-9">
          {/* Köpet sker tills vidare via mejl: kunden har inte lämnat någon köplänk ännu. */}
          <KontaktKnapp amne={amnen.familj}>Köp eHLR-Familj</KontaktKnapp>
        </div>
        <Snabbfakta
          className="mt-14"
          rader={[
            { ikon: Grupp, etikett: "Licens", varde: "Hela hushållet" },
            { ikon: Klocka, etikett: "Öppen i", varde: "3 månader" },
            { ikon: Hus, etikett: "Träning", varde: "Hemma" },
            { ikon: Bock, etikett: "Betalning", varde: "Swish" },
          ]}
        />
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-6" data-in="vanster">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Trygghet i vardagen</h2>
            {u.korthet && <Korthet {...u.korthet} className="mt-8 text-lg" />}
          </div>
          <div className="grid grid-cols-5 items-start gap-4 lg:col-span-6">
            <div className="foto relative col-span-3 aspect-[4/5]" data-in="bild">
              <Image
                src={bildHemma}
                alt="Hjärtstartare på en bänk i hallen i ett svenskt hem"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 340px, 60vw"
                className="object-cover object-[58%_50%]"
              />
            </div>
            <div className="foto relative col-span-2 mt-16 aspect-[3/4]" data-in="bild" style={{ ["--i" as string]: 2 }}>
              <Image
                src={bildSpanien}
                alt="Hjärtstartare på en bänk i hallen i ett hus i Spanien"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 230px, 40vw"
                className="object-cover object-[78%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* eHLR-Familj som personalförmån, med kundens egen beskrivning från startsidan. */}
      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold lg:col-span-5" data-in="">
            Också en förmån till medarbetarna
          </h2>
          <div className="lg:col-span-7" data-in="" style={{ ["--i" as string]: 1 }}>
            <p className="text-xl leading-relaxed text-monitor-dampad">
              eHLR-Familj är en digital kurs som medarbetarna får ta med sig hem som en förmån. Hela familjen lär sig
              vad man gör när ett barn eller en vuxen sätter något i halsen eller drabbas av hjärtstopp, och de tränar
              hemma med en vanlig kudde.
            </p>
            <p className="mt-7">
              <Link
                href="/utbildningar/ehlr-och-eforstahjalpen"
                className="inline-flex items-center gap-2 font-semibold text-white underline decoration-white/30 underline-offset-[0.2em] hover:decoration-white"
              >
                Så fungerar eHLR och eFörstaHjälpen på arbetsplatsen
                <Pil className="size-5 shrink-0" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-papper">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-14 md:flex-row md:items-center md:justify-between lg:px-8" data-in="">
          <p className="max-w-2xl text-xl">Vill ni också ha en hjärtstartare hemma eller i huset i Spanien?</p>
          <PilLank href="/kop-hjartstartare" className="text-lg">
            Se hjärtstartarpaketen
          </PilLank>
        </div>
      </section>

      <Avslut
        rubrik="Vill du köpa eHLR-Familj?"
        text="Hör av dig så får du din utbildningslicens. Den gäller för hela hushållet och är öppen i 3 månader."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("ehlr-familj", BESKRIVNING))} />
    </>
  );
}
