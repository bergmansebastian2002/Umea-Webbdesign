import Image from "next/image";
import Link from "next/link";

import { Avslut, PilLank } from "@/components/Block";
import Ekg from "@/components/Ekg";
import { Flamma, Grupp, Intyg, Klocka, Pil, Slag } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { foretag, kunder } from "@/lib/site";

import bildBrand from "@/bilder/brand-slackare.webp";
import bildHjartstartare from "@/bilder/hlr-hjartstartare-kontor.webp";
import bildKlass from "@/bilder/instruktor-klass.webp";
import reco from "@/bilder/reco-5-ar-i-rad.webp";

export const metadata = metadataFor({
  titel: "Livrustning - Utbildning i HLR, första hjälpen och brand",
  beskrivning:
    "Gör hela personalen till livräddare. Vi utbildar i HLR, första hjälpen och brand hos er, på 2 eller 4 timmar. " +
    "Sveriges nöjdaste kursdeltagare enligt Reco.se.",
  sokvag: "/",
});

const eventen = [
  {
    tid: "2",
    namn: "eHLR-Event",
    rubrik: "Hela personalen i HLR.",
    text: "Gemensam start på storskärm, sedan övar alla i mindre grupper. En perfekt programpunkt på kick-off eller planeringsdag.",
    fakta: [
      { ikon: Grupp, text: "Obegränsat antal deltagare" },
      { ikon: Slag, text: "Övningsdockor med LED-feedback" },
      { ikon: Intyg, text: "Personligt intyg till alla" },
    ],
    bild: bildKlass,
    alt: "Instruktör visar en grupp som övar HLR på dockor",
    href: "/utbildningar/ehlr-event",
  },
  {
    tid: "4",
    namn: "Säkerhetsdag",
    rubrik: "Brand, HLR och första hjälpen.",
    text: "Fyra stationer, fyra grupper som roterar och en instruktör per station. Alla övar praktiskt, ingen sitter still.",
    fakta: [
      { ikon: Slag, text: "HLR med hjärtstartare" },
      { ikon: Flamma, text: "Släckövning inomhus" },
      { ikon: Klocka, text: "Fyra pass om 45 minuter" },
    ],
    bild: bildBrand,
    alt: "Deltagare med brandsläckare under en brandövning",
    href: "/utbildningar/sakerhetsdag",
  },
];

const steg = [
  { rubrik: "Ni hör av er", text: "Mejla eller ring och berätta ungefär hur många ni är." },
  { rubrik: "Ni får en offert", text: "Priset utgår från antal deltagare och var ni finns." },
  { rubrik: "Vi kommer till er", text: "På er arbetsplats, den dag som passar er." },
  { rubrik: "Alla övar på riktigt", text: "Med övning i händerna, inte bara teori i huvudet." },
];

// Det som gör upplägget effektivt för arbetsgivaren, utan att upprepa första vyn.
const skal = [
  {
    rubrik: "Alla på en gång",
    text: "Hela personalen får samma kunskap samma dag, i stället för några i taget under flera år.",
  },
  {
    rubrik: "Teambuilding på köpet",
    text: "En programpunkt på kick-offen eller planeringsdagen där alla gör något meningsfullt tillsammans.",
  },
  {
    rubrik: "Intyg till alla",
    text: "Efter eHLR-Event får varje deltagare ett personligt intyg och företaget ett samlingsintyg.",
  },
];

export default function Startsida() {
  return (
    <>
      {/* Första vyn: rubriken bär sidan och kurvan löper över hela bredden. */}
      <section className="ekg-papper ekg-papper-tonad">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-14 lg:px-8 lg:pt-24 lg:pb-20">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h1 className="text-[clamp(2.9rem,6.2vw,5.75rem)] leading-[0.95] font-bold tracking-[-0.035em] lg:col-span-7">
              Alla kan rädda liv.
              <br />
              Vi visar hur.
            </h1>
            <p className="max-w-md text-xl leading-relaxed text-grafit lg:col-span-5 lg:pb-2 lg:text-2xl lg:leading-relaxed">
              {"Vi ger hela personalen förutsättningarna att rädda liv när det gäller."}
            </p>
          </div>
          <Ekg direkt puls slag={[0.3, 0.8]} hojd={56} className="mt-10 lg:hidden" />
          <Ekg direkt puls slag={[0.18, 0.52, 0.86]} hojd={88} className="mt-16 hidden lg:block" />
          <p className="mt-8 lg:mt-10">
            <PilLank href="/utbildningar" className="text-lg">Se alla utbildningar</PilLank>
          </p>
        </div>
      </section>

      {/* De två eventen för hela arbetsplatser. */}
      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">Två timmar eller en halvdag?</h2>
            <p className="mt-5 text-xl text-grafit">
              Båda sker på er arbetsplats, på ett datum som ni väljer.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {eventen.map((e) => (
              <article key={e.namn} className="grupp relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-papper">
                <div className="relative aspect-[3/2]">
                  <Image
                    src={e.bild}
                    alt={e.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-9">
                  <div className="flex items-end gap-4">
                    <p className="siffror text-[5.5rem] leading-[0.8] font-bold tracking-[-0.04em]" aria-hidden="true">
                      {e.tid}
                      <span className="ml-1 text-[2.5rem] tracking-normal">h</span>
                    </p>
                    <p className="pb-1 text-lg font-semibold">{e.namn}</p>
                  </div>
                  <h3 className="mt-6 text-[1.75rem] leading-tight font-bold">
                    <Link href={e.href} className="after:absolute after:inset-0 focus-visible:outline-none">
                      {e.rubrik}
                    </Link>
                  </h3>
                  <p className="mt-3 text-grafit">{e.text}</p>
                  <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
                    {e.fakta.map(({ ikon: Ikon, text }) => (
                      <li key={text} className="flex items-center gap-3 py-3">
                        <Ikon className="size-5 shrink-0 text-grafit" />
                        {text}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto flex items-center gap-2 pt-7 font-semibold text-magenta-mork">
                    Läs mer om {e.namn}
                    <Pil className="size-5" />
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <Link
              href="/utbildningar/ehlr-och-eforstahjalpen"
              className="grupp flex items-center justify-between gap-6 rounded-2xl border border-black/10 px-6 py-5 transition-colors hover:border-black/25 hover:bg-papper lg:px-9"
            >
              <span>
                <span className="block text-lg font-semibold">Hellre digitalt? eHLR och eFörstaHjälpen</span>
                <span className="block text-grafit">Lär er när det passar, öva på riktigt. Ett års access.</span>
              </span>
              <Pil className="size-6 shrink-0 text-magenta" />
            </Link>
            <Link
              href="/utbildningar/kurser-pa-plats"
              className="grupp flex items-center justify-between gap-6 rounded-2xl border border-black/10 px-6 py-5 transition-colors hover:border-black/25 hover:bg-papper lg:px-9"
            >
              <span>
                <span className="block text-lg font-semibold">Hellre en klassisk kurs? Kurser på plats</span>
                <span className="block text-grafit">HLR, första hjälpen och brand i små grupper.</span>
              </span>
              <Pil className="size-6 shrink-0 text-magenta" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reco-märket: på ett enda ställe, stort nog att faktiskt läsas. */}
      <section className="border-t border-black/10 bg-papper-djup">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 md:grid-cols-12 lg:px-8 lg:py-28">
          <div className="md:col-span-5">
            <a
              href={foretag.reco}
              target="_blank"
              rel="noopener"
              className="mx-auto block w-full max-w-[22rem] md:max-w-[26rem]"
            >
              <Image
                src={reco}
                alt="Reco.se: Rekommenderat 5 år i rad"
                sizes="(min-width: 768px) 416px, 352px"
                className="h-auto w-full drop-shadow-[0_18px_28px_rgb(90_20_60/0.25)]"
              />
            </a>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">
              Sveriges nöjdaste kursdeltagare. Fem år i rad.
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-grafit">
              Våra kursdeltagare betygsätter oss på Reco.se, Sveriges största oberoende omdömessajt. Där har vi varit
              rekommenderade fem år i rad.
            </p>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-grafit">
              Och skulle ni inte bli nöjda gäller vår <strong className="font-semibold text-black">100 % nöjdhetsgaranti</strong>.
            </p>
            <p className="mt-8">
              <a href={foretag.reco} target="_blank" rel="noopener" className="textlank inline-flex items-center gap-2 text-lg no-underline">
                <span className="underline decoration-magenta/35 underline-offset-[0.2em]">Läs omdömena på Reco.se</span>
                <Pil className="size-5" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Monitorn: fyra slag, fyra steg. */}
      <section className="monitor-rutor text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">
              Fyra steg. Sen kan alla rädda liv.
            </h2>
            <Link
              href="/sa-gar-det-till"
              className="inline-flex items-center gap-2 font-semibold text-white underline decoration-white/30 underline-offset-[0.2em] hover:decoration-white"
            >
              Så går det till
              <Pil className="size-5" />
            </Link>
          </div>

          <Ekg slag={[0.125, 0.375, 0.625, 0.875]} hojd={96} tjocklek={2.5} className="mt-14 hidden md:block" tid={2.2} />
          <ol className="mt-10 grid grid-cols-1 gap-10 md:mt-6 md:grid-cols-4 md:gap-6">
            {steg.map((s, i) => (
              <li key={s.rubrik} className="md:text-center">
                <h3 className="flex items-baseline gap-3 text-2xl font-bold md:justify-center">
                  <span className="siffror text-magenta-ljus">{i + 1}</span>
                  {s.rubrik}
                </h3>
                <p className="mt-2 max-w-sm pl-7 text-monitor-dampad md:mx-auto md:max-w-[15rem] md:pl-0">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Varför det lönar sig för arbetsgivaren. */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <div>
              <h2 className="text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">
                Effektivare när alla lär sig samtidigt.
              </h2>
              <p className="mt-5 text-xl text-grafit">
                När alla utbildas samtidigt och på plats blir det enklare för er och tryggare för alla.
              </p>
              <div className="foto relative mt-10 aspect-[4/3]">
                <Image
                  src={bildHjartstartare}
                  alt="Två kollegor övar HLR med träningshjärtstartare på kontorsgolvet"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <ul className="divide-y divide-black/10 border-y border-black/10 self-center lg:col-span-7">
            {skal.map(({ rubrik, text }) => (
              <li key={rubrik} className="py-8 lg:py-10">
                <h3 className="text-2xl font-bold lg:text-[2rem]">{rubrik}</h3>
                <p className="mt-2 max-w-xl text-lg text-grafit">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Kundnamn ur Livrustnings egna Facebookinlägg - FÖRSLAG, kräver kundens godkännande. */}
      <section className="border-t border-black/10 bg-papper">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-2xl font-bold lg:text-3xl">De har redan övat med oss.</h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {kunder.map((k) => (
              <li key={k} className="border-t border-black/10 py-5 text-[clamp(1.35rem,2.4vw,1.9rem)] font-semibold tracking-tight">
                {k}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Avslut />
    </>
  );
}
