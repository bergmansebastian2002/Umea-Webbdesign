import Image from "next/image";

import { Avslut, PilLank } from "@/components/Block";
import Ekg from "@/components/Ekg";
import { metadataFor } from "@/lib/seo";

import bildHero from "@/bilder/instruktorsutbildning-skarp.webp";

export const metadata = metadataFor({
  titel: "Så går det till - från första mejlet till färdig utbildning",
  beskrivning:
    "Så går en utbildning hos Nice To Be Alive till: ni hör av er, får en offert, vi kommer till er och alla övar praktiskt på dockor och träningshjärtstartare.",
  sokvag: "/sa-gar-det-till",
});

const steg = [
  {
    rubrik: "Ni hör av er",
    text: "Mejla eller ring. Berätta ungefär hur många ni är, var ni finns och när det skulle passa.",
  },
  {
    rubrik: "Ni får en offert",
    text: "Utbildningarna anpassas efter hur många som ska utbildas och var i Sverige ni finns. Därför får ni alltid en offert med ett tydligt förslag på upplägg.",
  },
  {
    rubrik: "Vi kommer till er",
    text: "Instruktörerna kommer till er arbetsplats på det datum ni valt. Ni ordnar en lokal, och en storskärm om ni valt Säkerhetsdag eller eHLR-Event.",
  },
  {
    rubrik: "Alla övar på riktigt",
    text: "Kort teori, mycket praktik på dockor och träningshjärtstartare. Efter eHLR-Event gör deltagarna ett digitalt slutprov och får ett personligt intyg.",
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
      {/* Första vyn: rubriken, kurvan och ett riktigt kursfoto. */}
      <section className="monitor-hero border-b border-white/8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-12 pb-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(2.9rem,5.6vw,4.75rem)] leading-[0.95] font-bold tracking-[-0.035em]">
              Gör hela personalen till livräddare.
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-grafit lg:text-2xl lg:leading-relaxed">
              Utbildning i HLR, första hjälpen och brand. Vi kommer till er och utbildar alla på två eller fyra
              timmar.
            </p>
            <Ekg direkt puls slag={[0.28, 0.72]} hojd={72} className="mt-10 lg:mt-12" />
          </div>
          <div className="lg:col-span-4">
            <div className="foto relative aspect-[4/5]">
              <Image
                src={bildHero}
                alt="Instruktör visar hjärtkompressioner på en övningsdocka medan kollegor tittar på"
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-[36%_50%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <ol className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
          {steg.map((s, i) => (
            <li
              key={s.rubrik}
              // Varje steg glider in från sidan, växelvis vänster och höger, som rutorna på startsidan.
              data-in={i % 2 === 0 ? "fran-vanster" : "fran-hoger"}
              data-in-alltid=""
              className="border-b border-black/10 py-12 last:border-b-0 lg:py-16"
            >
              <h2 className="flex items-baseline gap-4 text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.05] font-bold">
                <span className="siffror text-grafit">{i + 1}</span>
                {s.rubrik}
              </h2>
              <p className="mt-4 max-w-lg text-xl leading-relaxed text-grafit">{s.text}</p>
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

      <Avslut ekg={false} />
    </>
  );
}
