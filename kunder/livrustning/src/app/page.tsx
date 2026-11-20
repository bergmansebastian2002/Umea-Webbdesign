import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Avslut, OffertKnapp, PilLank, RingEllerMejla } from "@/components/Block";
import Ekg from "@/components/Ekg";
import { Grupp, Intyg, Pil, Skarm } from "@/components/Ikoner";
import Kundband from "@/components/Kundband";
import { metadataFor } from "@/lib/seo";
import { foretag } from "@/lib/site";

import bildEventStor from "@/bilder/ehlr-event-sal-stor.webp";
import bildInstruktorStor from "@/bilder/instruktorsutbildning-stor.webp";
import bildTraning from "@/bilder/praktisk-traning.webp";
import reco from "@/bilder/reco-5-ar-i-rad.webp";

export const metadata = metadataFor({
  titel: "Livrustning - Utbildning i HLR, första hjälpen och brand",
  beskrivning:
    "Vi gör alla till varandras livförsäkring. HLR, första hjälpen och brandskydd – på plats, digitalt eller via smidiga hybridlösningar.",
  sokvag: "/",
});

// Trygga arbetsplatsen: de tre digitala utbildningarna, med kundens egna beskrivningar.
const digitala = [
  {
    namn: "eHLR",
    text: "Digital HLR-utbildning med praktisk träning.",
    href: "/utbildningar/ehlr-och-eforstahjalpen#ehlr",
  },
  {
    namn: "eFörstaHjälpen",
    text: "Digital utbildning i första hjälpen med praktisk träning. Utbildningen innehåller även HLR med hjärtstartare.",
    href: "/utbildningar/ehlr-och-eforstahjalpen#eforstahjalpen",
  },
  {
    namn: "eHLR-Familj",
    text: "En digital kurs som medarbetarna får ta med sig hem som en förmån. Hela familjen lär sig vad man gör när ett barn eller en vuxen sätter något i halsen eller drabbas av hjärtstopp, och de tränar hemma med en vanlig kudde.",
    href: "/utbildningar/ehlr-familj",
  },
];

const eventpunkter = [
  {
    ikon: Skarm,
    rubrik: "Genomgång på storskärm",
    text: "Våra instruktörer kommer till er, var ni än finns i Sverige, och leder utbildningen på storskärm enligt eHLR-metoden.",
  },
  {
    ikon: Grupp,
    rubrik: "Praktisk träning i små grupper",
    text: "Deltagarna delas in i mindre grupper med en egen instruktör. De tränar på avancerade övningsdockor med LED-feedback, som visar direkt om kompressionerna blir rätt, och på träningshjärtstartare.",
  },
  {
    ikon: Intyg,
    rubrik: "Utbildningsintyg",
    text: "Alla deltagare får ett personligt utbildningsintyg, och företaget får ett intyg som visar att man har utbildat sin personal.",
  },
];

// Två timmar i proportion. Den praktiska träningen i mitten tar 50 minuter; resten är byten.
const tidslinje = [
  { namn: "Genomgång", minuter: 50, ton: "bg-white" },
  { namn: "Praktisk träning", minuter: 50, ton: "bg-white/55" },
  { namn: "Avslutning", minuter: 10, ton: "bg-white/25" },
];

const steg = [
  { rubrik: "Ni hör av er", text: "Mejla eller ring och berätta ungefär hur många ni är." },
  { rubrik: "Ni får en offert", text: "Priset utgår från antal deltagare och var ni finns." },
  { rubrik: "Vi kommer till er", text: "Eller ser till att utbildningslicensen skickas." },
  { rubrik: "Alla övar på riktigt", text: "Med övning i händerna, inte bara teori i huvudet." },
];

const fler = [
  {
    rubrik: "Säkerhetsdag (Halvdag)",
    text: "Brand, HLR och första hjälpen i praktiska stationer.",
    href: "/utbildningar/sakerhetsdag",
  },
  {
    rubrik: "Traditionella kurser på plats",
    text: "Vuxen-HLR, barn-HLR, första hjälpen och brandskydd.",
    href: "/utbildningar/kurser-pa-plats",
  },
  {
    rubrik: "Instruktörsutbildningar",
    text: "Bli instruktör i HLR och första hjälpen.",
    href: "/utbildningar/instruktorskurser",
  },
  {
    rubrik: "Köp hjärtstartare",
    text: "Färdiga paket för kontor, utomhus, hemmet och Spanien.",
    href: "/kop-hjartstartare",
  },
];

const SLUTRAD = "Hör av dig, så tar vi fram en offert som passar er.";

/**
 * Mörkt bildkort i två delar.
 * Överst ett bildfält: fotot fyller högra delen och tonar ut i det mörka
 * fältet till vänster, där siffran, rubriken och ingressen ligger. Under det
 * ett mörkt fält med punkterna i kolumner och offertraden.
 * Bildfältet hålls lågt (bannerformat) så att fotona inte förstoras.
 * På mobil ligger fotot överst och tonar ned i texten.
 */
function Bildkort({
  bild,
  alt,
  lage = "",
  siffra,
  enhet,
  namn,
  rubrik,
  text,
  galler,
  ordning = 0,
  children,
}: {
  bild: StaticImageData;
  alt: string;
  lage?: string;
  siffra: string;
  enhet: string;
  namn: string;
  rubrik: string;
  text: string;
  galler: string;
  ordning?: number;
  children: ReactNode;
}) {
  return (
    <article
      className="overflow-hidden rounded-2xl bg-monitor text-monitor-text"
      data-in=""
      style={{ ["--i" as string]: ordning }}
    >
      <div className="relative isolate lg:flex lg:min-h-[30rem] lg:items-center">
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[66%]">
          <Image
            src={bild}
            alt={alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1280px) 810px, (min-width: 1024px) 66vw, 100vw"
            className={`object-cover ${lage}`}
          />
          <div
            aria-hidden
            className="absolute -inset-0.5 bg-linear-to-t from-monitor via-monitor/0 via-30% to-transparent lg:bg-linear-to-r lg:from-monitor lg:via-monitor/65 lg:via-30% lg:to-transparent lg:to-75%"
          />
          {/* Fotot tonar också ned mot detaljfältet, så att kortet blir en enda yta. */}
          <div aria-hidden className="absolute inset-x-0 -bottom-0.5 hidden h-28 bg-linear-to-t from-monitor to-transparent lg:block" />
        </div>
        <div className="relative px-6 sm:px-10 lg:max-w-[min(40rem,50%)] lg:px-14 lg:py-14">
          <div className="-mt-2 flex items-end gap-4 lg:mt-0">
            <p className="siffror text-[5.5rem] leading-[0.8] font-bold tracking-[-0.04em] text-white" aria-hidden="true">
              {siffra}
              <span className="ml-1.5 text-[2.5rem] tracking-normal">{enhet}</span>
            </p>
            <p className="pb-1 text-lg font-semibold text-white">{namn}</p>
          </div>
          <h3 className="mt-6 text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.08] font-bold text-white">{rubrik}</h3>
          <p className="mt-4 text-lg leading-relaxed text-monitor-dampad">{text}</p>
        </div>
      </div>

      {/* relative: ligger ovanpå fotots nedre toning, så att linjerna syns hela vägen. */}
      <div className="relative px-6 pb-8 sm:px-10 sm:pb-10 lg:px-14 lg:pb-12">
        {children}
        <div className="mt-8 flex flex-col gap-5 border-t border-white/12 pt-7 lg:flex-row lg:items-center lg:gap-10">
          <p className="text-lg font-semibold text-white lg:max-w-xs">{SLUTRAD}</p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <OffertKnapp galler={galler} className="self-start" />
            <RingEllerMejla mork />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Startsida() {
  return (
    <>
      {/* Första vyn, "Monitor natt": en hjärtmonitor i mörker. Rubriken bär sidan
          och den levande kurvan lyser över hela bredden. */}
      <section className="monitor-hero text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 pt-14 pb-14 lg:px-8 lg:pt-24 lg:pb-20">
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-end lg:gap-12">
            <h1 className="intro text-[clamp(2.5rem,5.7vw,5.25rem)] leading-[0.97] font-bold tracking-[-0.035em] text-white lg:col-span-8">
              Vi gör alla till varandras livförsäkring
            </h1>
            <p
              className="intro max-w-md text-xl leading-relaxed text-monitor-dampad lg:col-span-4 lg:pb-2 lg:text-[1.375rem] lg:leading-relaxed"
              style={{ ["--i" as string]: 1 }}
            >
              HLR, första hjälpen och brandskydd – på plats, digitalt eller via smidiga hybridlösningar.
            </p>
          </div>
          <Ekg direkt live puls slag={[0.3, 0.8]} hojd={56} className="ekg-monitor mt-10 lg:hidden" />
          <Ekg direkt live puls slag={[0.18, 0.52, 0.86]} hojd={88} className="ekg-monitor mt-16 hidden lg:block" />
          <p className="intro mt-8 lg:mt-10" style={{ ["--i" as string]: 3 }}>
            <PilLank href="/utbildningar" className="text-lg text-white [&>span]:decoration-magenta [&>svg]:text-magenta-ljus">
              Se alla utbildningar
            </PilLank>
          </p>
        </div>
      </section>

      {/* De två huvudspåren för hela arbetsplatser. */}
      <section className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl" data-in="">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">
              Två vägar till en tryggare arbetsplats
            </h2>
            <p className="mt-5 text-xl text-grafit">
              Utbilda digitalt när det passar er, eller samla alla på plats i två timmar.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:gap-8">
            {/* Trygga arbetsplatsen: eHLR, eFörstaHjälpen och eHLR-Familj. */}
            <Bildkort
              bild={bildInstruktorStor}
              alt="Instruktör visar hjärtkompressioner på en övningsdocka medan kollegor tittar på"
              lage="object-[50%_35%] lg:object-[38%_40%]"
              siffra="6"
              enhet="mån"
              namn="eHLR och eFörstaHjälpen"
              rubrik="Trygga arbetsplatsen"
              text="Utbilda så många ni vill, så ofta ni vill och när det passar er, under sex månader. Med eHLR och eFörstaHjälpen får era medarbetare digitala utbildningar med praktisk träning på unik utrustning. Utrustningen skickas till er arbetsplats och ingår i licensen."
              galler="Trygga arbetsplatsen – eHLR och eFörstaHjälpen"
            >
              <ul className="grid grid-cols-1 gap-x-10 lg:grid-cols-3">
                {digitala.map((d) => (
                  <li key={d.namn} className="border-t border-white/12 py-5">
                    <Link href={d.href} className="grupp inline-flex items-center gap-2 text-lg font-semibold text-white">
                      <span className="underline decoration-magenta underline-offset-[0.2em] hover:decoration-white">
                        {d.namn}
                      </span>
                      <Pil className="pil size-5 text-magenta-ljus" />
                    </Link>
                    <p className="mt-1.5 text-monitor-dampad">{d.text}</p>
                  </li>
                ))}
              </ul>
            </Bildkort>

            {/* eHLR-Event: två timmar på plats. */}
            <Bildkort
              bild={bildEventStor}
              alt="eHLR-Event i en fullsatt hörsal: två instruktörer leder utbildningen på storskärm"
              lage="object-[62%_40%] lg:object-[80%_35%]"
              siffra="2"
              enhet="h"
              namn="eHLR-Event"
              rubrik="Två timmar som räddar liv – när ni ändå är samlade"
              text="Gör er planeringsdag eller kick-off ännu mer värdefull. Vi kommer till er och levererar en effektiv HLR-utbildning med eHLR-metoden inkl. praktisk träning för alla på endast 2 timmar. Passar perfekt in i ert schema."
              galler="eHLR-Event (2 timmar)"
              ordning={1}
            >
              <ul className="grid grid-cols-1 gap-x-10 lg:grid-cols-3">
                {eventpunkter.map(({ ikon: Ikon, rubrik, text }) => (
                  <li key={rubrik} className="flex gap-3.5 border-t border-white/12 py-5 lg:flex-col lg:gap-3">
                    <Ikon className="mt-0.5 size-5 shrink-0 text-monitor-dampad lg:mt-0 lg:size-6" />
                    <div>
                      <p className="text-lg font-semibold text-white">{rubrik}</p>
                      <p className="mt-1.5 text-monitor-dampad">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Tidslinjen: varje del är lika bred som sin andel av de två timmarna. */}
              <div className="mt-8">
                <div className="flex h-3 gap-1" aria-hidden="true">
                  {tidslinje.map((t, i) => (
                    <div
                      key={t.namn}
                      className={`rounded-full ${t.ton}`}
                      style={{ flexGrow: t.minuter, ["--i" as string]: i * 2 }}
                      data-in="vax"
                    />
                  ))}
                </div>
                {/* Smalt: förklaringen som lista. Brett: etiketterna står där respektive del börjar. */}
                <ol className="siffror mt-4 space-y-1.5 sm:hidden">
                  {tidslinje.map((t) => (
                    <li key={t.namn} className="flex items-center gap-2.5">
                      <span className={`size-2.5 shrink-0 rounded-full ${t.ton}`} aria-hidden="true" />
                      <span className="font-semibold text-white">{t.minuter} min</span>
                      <span className="text-monitor-dampad">{t.namn}</span>
                    </li>
                  ))}
                </ol>
                <ol className="siffror relative mt-3 hidden h-11 text-sm sm:block">
                  {tidslinje.map((t, i) => {
                    const fore = tidslinje.slice(0, i).reduce((sum, x) => sum + x.minuter, 0);
                    const sist = i === tidslinje.length - 1;
                    return (
                      <li
                        key={t.namn}
                        className={`absolute top-0 leading-snug whitespace-nowrap ${sist ? "right-0 text-right" : ""}`}
                        style={sist ? undefined : { left: `${(fore / 110) * 100}%` }}
                      >
                        <span className="block font-semibold text-white">{t.minuter} min</span>
                        <span className="block text-monitor-dampad">{t.namn}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Bildkort>
          </div>

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:gap-x-8">
            {fler.map((f, i) => (
              <li key={f.href} data-in="" style={{ ["--i" as string]: i % 2 }}>
                <Link
                  href={f.href}
                  className="grupp flex h-full items-center justify-between gap-6 rounded-2xl border border-black/10 px-6 py-5 transition-colors hover:border-black/25 hover:bg-papper lg:px-9"
                >
                  <span>
                    <span className="block text-lg font-semibold">{f.rubrik}</span>
                    <span className="block text-grafit">{f.text}</span>
                  </span>
                  <Pil className="pil size-6 shrink-0 text-magenta" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reco-märket: på ett enda ställe, stort nog att faktiskt läsas. */}
      <section className="border-t border-black/10 bg-papper-djup">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 md:grid-cols-12 lg:px-8 lg:py-28">
          <div className="md:col-span-5" data-in="vanster">
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
          <div className="md:col-span-7" data-in="hoger">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">
              Rekommenderade av kursdeltagarna. Fem år i rad.
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-grafit">
              Våra kursdeltagare betygsätter oss på Reco.se, Sveriges största oberoende omdömessajt. Där har vi varit
              rekommenderade fem år i rad.
            </p>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-grafit">
              Och skulle ni inte bli nöjda gäller vår <strong className="font-semibold text-black">100 % nöjdhetsgaranti</strong>.
            </p>
            <p className="mt-8">
              <a href={foretag.reco} target="_blank" rel="noopener" className="textlank inline-flex items-center gap-2 text-lg no-underline">
                <span className="underline decoration-magenta/35 underline-offset-[0.2em]">Läs omdömena på Reco.se</span>
                <Pil className="pil size-5" />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Monitorn: fyra slag, fyra steg, och en puls som går hela tiden. */}
      <section className="monitor-rutor text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end" data-in="">
            <h2 className="max-w-2xl text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold">
              Fyra steg. Sen kan alla rädda liv.
            </h2>
            <Link
              href="/sa-gar-det-till"
              className="inline-flex items-center gap-2 font-semibold text-white underline decoration-white/30 underline-offset-[0.2em] hover:decoration-white"
            >
              Så går det till
              <Pil className="pil size-5" />
            </Link>
          </div>

          <Ekg live slag={[0.125, 0.375, 0.625, 0.875]} hojd={96} tjocklek={2.5} className="mt-14 hidden md:block" tid={2.2} />
          <ol className="mt-10 grid grid-cols-1 gap-10 md:mt-6 md:grid-cols-4 md:gap-6">
            {steg.map((s, i) => (
              <li key={s.rubrik} className="md:text-center" data-in="" style={{ ["--i" as string]: i }}>
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

      {/* Kunder enligt kundens underlag. Sätts i text tills loggorna finns som filer. */}
      <section className="bg-white">
        <div className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8" data-in="">
            <h2 className="max-w-3xl text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.05] font-bold">
              Vi utbildar tusentals medarbetare – år efter år
            </h2>
          </div>
          <Kundband className="mt-10 lg:mt-14" />
        </div>
      </section>

      <Avslut live />

      {/* Sista ordet: varför allt bygger på praktisk träning. */}
      {/* Mörk final mot sidfoten: fotot fyller högra delen och tonar ut i
          bakgrunden, texten ligger i det mörka fältet till vänster. På mobil
          ligger fotot överst och tonar ned i texten. */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-monitor text-monitor-text">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[57%]">
          <Image
            src={bildTraning}
            alt="En deltagare gör hjärt-lungräddning på en övningsdocka medan en annan förbereder träningshjärtstartaren och instruktören tittar på"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 57vw, 100vw"
            className="object-cover object-[50%_45%]"
          />
          <div
            aria-hidden
            className="absolute -inset-0.5 bg-linear-to-t from-monitor via-monitor/0 via-25% to-transparent lg:bg-linear-to-r lg:from-monitor lg:via-monitor/55 lg:via-25% lg:to-transparent lg:to-65%"
          />
        </div>
        <div className="relative mx-auto flex max-w-7xl items-center px-5 pb-20 lg:min-h-[min(44vw,52rem)] lg:px-8 lg:py-28">
          <div className="pt-6 max-w-xl sm:pt-10 lg:pt-0 lg:max-w-[min(33rem,38vw)]" data-in="vanster">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold text-white">
              Praktisk träning ger trygghet
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-monitor-dampad">
              Praktisk träning är kärnan i våra utbildningar. Du tränar med en egen övningsdocka och en
              träningshjärtstartare tills handgreppen sitter i muskelminnet. Då kan du agera snabbt och tryggt när det
              verkligen gäller.
            </p>
            <p className="mt-9">
              <PilLank href="/utbildningar" className="text-lg text-white [&>span]:decoration-magenta">
                Välj rätt utbildning
              </PilLank>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
