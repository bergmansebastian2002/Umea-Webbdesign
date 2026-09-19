import Image from "next/image";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import { Slag } from "@/components/Ikoner";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

import bildHjartstartare from "@/bilder/hjartstartare-par.webp";
import bildKontor from "@/bilder/hlr-hjartstartare-kontor.webp";

const BESKRIVNING =
  "eHLR® och eFörstaHjälpen: digitalt lärande kombinerat med praktisk träning på LED-docka och träningshjärtstartare. Ett års full arbetsplatsaccess.";

export const metadata = metadataFor({
  titel: "eHLR och eFörstaHjälpen - digital HLR-utbildning med praktisk träning",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/ehlr-och-eforstahjalpen",
});

const fordelar = [
  { rubrik: "Låg kostnad", text: "Ett prisvärt sätt att utbilda många." },
  { rubrik: "Själv eller i grupp", text: "Var och en i sin takt, eller tillsammans." },
  { rubrik: "Praktisk träning", text: "LED-dockan visar direkt hur det går." },
  { rubrik: "Flera språk", text: "Utbildningen finns på flera språk." },
  { rubrik: "Klimatsmart", text: "Mindre resor för både deltagare och instruktörer." },
];

export default function Digitalt() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "eHLR och eFörstaHjälpen", href: "/utbildningar/ehlr-och-eforstahjalpen" },
        ]}
        rubrik="Digitalt när det passar. Praktiskt på riktigt."
        ingress="eHLR® och eFörstaHjälpen kombinerar digitalt lärande med praktisk träning på LED-docka och träningshjärtstartare. Ni behöver inte samla alla på samma plats samtidigt."
      >
        <div className="mt-9">
          <KontaktKnapp amne={amnen.digitalt}>Be om mer information</KontaktKnapp>
        </div>
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Ett år att repetera.</h2>
            <p className="mt-5 text-xl leading-relaxed text-grafit">
              Med ett års full arbetsplatsaccess kan alla gå tillbaka och repetera när som helst. Då hålls kunskapen
              färsk, även för den som inte behövt använda den på länge.
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
            <div className="foto relative col-span-3 aspect-[3/4]">
              <Image src={bildHjartstartare} alt="Två deltagare övar HLR med träningshjärtstartare" fill placeholder="blur" sizes="(min-width: 1024px) 340px, 60vw" className="object-cover" />
            </div>
            <div className="foto relative col-span-2 mt-16 aspect-[3/4]">
              <Image src={bildKontor} alt="Kollegor övar hjärt-lungräddning på kontorsgolvet" fill placeholder="blur" sizes="(min-width: 1024px) 230px, 40vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Avslut
        rubrik="Vill ni veta mer om eHLR?"
        text="Berätta hur många ni är och hur er verksamhet ser ut, så föreslår vi ett upplägg och skickar en offert."
        amne={amnen.digitalt}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("ehlr-och-eforstahjalpen", BESKRIVNING))} />
    </>
  );
}
