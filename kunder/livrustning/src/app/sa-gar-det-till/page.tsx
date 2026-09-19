import Image from "next/image";

import { Avslut, KurvaTillKnapp, PilLank } from "@/components/Block";
import Ekg from "@/components/Ekg";
import { metadataFor } from "@/lib/seo";
import { amnen, foretag, mejl } from "@/lib/site";

import bildGrupp from "@/bilder/grupp-dockor.webp";
import bildOvning from "@/bilder/hlr-ovning.webp";
import bildGenomgang from "@/bilder/grupp-genomgang.webp";
import bildHero from "@/bilder/hlr-par.webp";

export const metadata = metadataFor({
  titel: "Så går det till - från första mejlet till färdig utbildning",
  beskrivning:
    "Så går en utbildning hos Livrustning till: ni hör av er, får en offert, vi kommer till er och alla övar praktiskt på dockor och träningshjärtstartare.",
  sokvag: "/sa-gar-det-till",
});

const steg = [
  {
    rubrik: "Ni hör av er",
    text: "Mejla eller ring. Berätta ungefär hur många ni är, var ni finns och när det skulle passa.",
    bild: bildOvning,
    alt: "Två deltagare övar HLR med hjärtstartare på en docka",
  },
  {
    rubrik: "Ni får en offert",
    text: "Utbildningarna anpassas efter hur många som ska utbildas och var i Sverige ni finns. Därför får ni alltid en offert med ett tydligt förslag på upplägg.",
    bild: null,
    alt: "",
  },
  {
    rubrik: "Vi kommer till er",
    text: "Instruktörerna kommer till er arbetsplats på det datum ni valt. Ni ordnar en lokal, och en storskärm om ni valt Säkerhetsdag eller eHLR-Event.",
    bild: bildGenomgang,
    alt: "Grupp som övar HLR på dockor framför en whiteboard",
  },
  {
    rubrik: "Alla övar på riktigt",
    text: "Kort teori, mycket praktik på dockor och träningshjärtstartare. Efter eHLR-Event gör deltagarna ett digitalt slutprov och får ett personligt intyg.",
    bild: bildGrupp,
    alt: "Glada kursdeltagare med övningsdockor efter avslutad utbildning",
  },
];

const fragor = [
  {
    fraga: "Hur många kan vara med?",
    svar: "På eHLR-Event obegränsat många. På Säkerhetsdag anpassar vi antalet instruktörer efter gruppen. Klassiska kurser har max 12 deltagare för HLR och första hjälpen, och 20 för brand.",
  },
  {
    fraga: "Var sker utbildningen?",
    svar: "Hos er, på er arbetsplats. Vi utbildar över hela Sverige och har bas i Stockholm, Umeå och Nerja i Spanien.",
  },
  {
    fraga: "Vad kostar det?",
    svar: "Priset beror på antal deltagare och var ni finns. Hör av er så skickar vi en offert.",
  },
  {
    fraga: "Vilka riktlinjer följer ni?",
    svar: "Allt kursinnehåll följer gällande lagstiftning och Svenska HLR-rådets riktlinjer.",
  },
  {
    fraga: "Tänk om vi inte blir nöjda?",
    svar: "Då gäller vår 100 % nöjdhetsgaranti.",
  },
];

export default function SaGarDetTill() {
  return (
    <>
      {/* Samma första vy som startsidan: kurvan slutar i knappen, kursfoto bredvid. */}
      <section className="ekg-papper ekg-papper-tonad border-b border-black/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(2.9rem,5.6vw,4.75rem)] leading-[0.95] font-bold tracking-[-0.035em]">
              Alla kan rädda liv.
              <br />
              Vi visar hur.
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-grafit lg:text-2xl lg:leading-relaxed">
              {"Vi ger hela personalen förutsättningarna att rädda liv när det gäller."}
            </p>
            <div className="mt-10 lg:mt-12">
              <KurvaTillKnapp direkt slag={[0.28, 0.72]} />
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="foto relative aspect-[4/5]">
              <Image
                src={bildHero}
                alt="Två deltagare övar HLR med träningshjärtstartare på en docka"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1280px) 380px, (min-width: 1024px) 33vw, 100vw"
                className="object-cover object-[40%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <ol className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
          {steg.map((s, i) => (
            <li key={s.rubrik} className="grid grid-cols-1 gap-8 border-b border-black/10 py-12 last:border-b-0 md:grid-cols-12 md:items-center md:gap-12 lg:py-16">
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <h2 className="flex items-baseline gap-4 text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.05] font-bold">
                  <span className="siffror text-grafit">{i + 1}</span>
                  {s.rubrik}
                </h2>
                <p className="mt-4 max-w-lg text-xl leading-relaxed text-grafit">{s.text}</p>
                {i === 0 && (
                  <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-lg">
                    <a href={foretag.telefonHref} className="textlank siffror">{foretag.telefon}</a>
                    <a href={mejl(amnen.allmant)} className="textlank">
                      {foretag.epost}
                    </a>
                  </p>
                )}
              </div>
              <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                {s.bild ? (
                  <div className="foto relative aspect-[4/3]">
                    <Image src={s.bild} alt={s.alt} fill placeholder="blur" sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                ) : (
                  <div className="ekg-papper flex aspect-[4/3] flex-col justify-center rounded-md border border-black/10 px-8">
                    <p className="text-lg font-semibold">Offerten utgår från</p>
                    <ul className="mt-4 space-y-2 text-2xl font-bold">
                      <li>Antal deltagare</li>
                      <li>Vilken utbildning</li>
                      <li>Var ni finns</li>
                    </ul>
                    <Ekg slag={[0.7]} hojd={56} className="mt-8" />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-papper-djup">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Bra att veta.</h2>
            <p className="mt-5 text-xl text-grafit">Svar på det vi oftast får frågor om.</p>
            <p className="mt-8">
              <PilLank href="/utbildningar">Jämför utbildningarna</PilLank>
            </p>
          </div>
          <dl className="divide-y divide-black/10 border-y border-black/10 lg:col-span-8">
            {fragor.map((f) => (
              <div key={f.fraga} className="grid grid-cols-1 gap-2 py-7 md:grid-cols-[16rem_1fr] md:gap-8">
                <dt className="text-xl font-bold">{f.fraga}</dt>
                <dd className="text-lg text-grafit">{f.svar}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Avslut />
    </>
  );
}
