import Link from "next/link";
import type { ReactNode } from "react";

import Ekg from "@/components/Ekg";
import { Pil, Telefon } from "@/components/Ikoner";
import { amnen, foretag, mejl, offert } from "@/lib/site";

/** Magenta Kontakta oss-knapp som öppnar mejlet med rätt ämnesrad. */
export function KontaktKnapp({
  amne = amnen.allmant,
  children = "Kontakta oss",
  className = "",
}: {
  amne?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a href={mejl(amne)} className={`knapp knapp-primar ${className}`}>
      {children}
    </a>
  );
}

/** Begär offert: leder till offertformuläret, förifyllt med vad det gäller. */
export function OffertKnapp({
  galler,
  children = "Begär offert",
  className = "",
}: {
  galler?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link href={offert(galler)} className={`knapp knapp-primar ${className}`}>
      {children}
    </Link>
  );
}

/** "Eller ring oss direkt ... Mejla ..." under en offertknapp. */
/** Länk på mörk botten: vit text, magenta understrykning. */
const LANK_MORK = "font-semibold text-white underline decoration-magenta underline-offset-[0.2em] hover:decoration-white";

export function RingEllerMejla({ className = "", mork = false }: { className?: string; mork?: boolean }) {
  // På mörk botten: vit länktext med magenta understrykning (mörk magenta klarar inte kontrasten där).
  const lank = mork
    ? "font-semibold text-white underline decoration-magenta underline-offset-[0.2em] hover:decoration-white"
    : "textlank";
  return (
    <p className={`${mork ? "text-monitor-dampad" : "text-grafit"} ${className}`}>
      Eller ring oss direkt:{" "}
      <a href={foretag.telefonHref} className={`${lank} siffror whitespace-nowrap`}>
        {foretag.telefon}
      </a>
      <br />
      Mejla:{" "}
      <a href={`mailto:${foretag.epost}`} className={lank}>
        {foretag.epost}
      </a>
    </p>
  );
}

/**
 * Kurvan som slutar i knappen: EKG-linjen löper in från vänster och
 * sista slaget landar precis vid Kontakta oss.
 */
export function KurvaTillKnapp({
  amne,
  knapptext = "Kontakta oss",
  slag = [0.34, 0.78],
  direkt = false,
}: {
  amne?: string;
  knapptext?: string;
  slag?: number[];
  direkt?: boolean;
}) {
  return (
    <div className="flex items-center">
      <Ekg slag={slag} hojd={72} puls direkt={direkt} className="min-w-0 flex-1" />
      <KontaktKnapp amne={amne} className="relative z-10 shrink-0">
        {knapptext}
      </KontaktKnapp>
    </div>
  );
}

/** Rubrikblock för undersidor, på EKG-papper. */
export function Sidrubrik({
  rubrik,
  ingress,
  sokvag,
  children,
}: {
  rubrik: ReactNode;
  ingress: ReactNode;
  sokvag?: { namn: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="ekg-papper ekg-papper-tonad border-b border-black/10">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-14 lg:px-8 lg:pt-20 lg:pb-20">
        {sokvag && (
          <nav aria-label="Du är här" className="mb-8 text-sm text-grafit">
            <ol className="flex flex-wrap items-center gap-2">
              {sokvag.map((s, i) => (
                <li key={s.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i < sokvag.length - 1 ? (
                    <Link href={s.href} className="hover:text-magenta-mork hover:underline">
                      {s.namn}
                    </Link>
                  ) : (
                    <span aria-current="page">{s.namn}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="intro max-w-4xl text-[clamp(2.4rem,6vw,4.75rem)] leading-[0.98] font-bold">{rubrik}</h1>
        <div
          className="intro mt-6 max-w-2xl text-xl leading-relaxed text-grafit lg:text-[1.375rem]"
          style={{ ["--i" as string]: 1 }}
        >
          {ingress}
        </div>
        {children}
      </div>
    </section>
  );
}

/**
 * Passar för / Upplägg / Fördel: samma tre svar för varje utbildning,
 * med kundens egna formuleringar.
 */
export function Korthet({
  passar,
  upplagg,
  fordel,
  staplad = false,
  className = "",
}: {
  passar: string;
  upplagg: string;
  fordel: string;
  /** Etiketten ovanför texten i stället för bredvid (smala spalter). */
  staplad?: boolean;
  className?: string;
}) {
  const rader = [
    ["Passar för", passar],
    ["Upplägg", upplagg],
    ["Fördel", fordel],
  ];
  return (
    <dl className={`divide-y divide-black/10 border-y border-black/10 ${className}`}>
      {rader.map(([etikett, text]) => (
        <div key={etikett} className={`grid grid-cols-1 gap-x-6 gap-y-1 py-4 ${staplad ? "" : "sm:grid-cols-[7.5rem_1fr]"}`}>
          <dt className="font-semibold">{etikett}</dt>
          <dd className="text-grafit">{text}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Passar för / Upplägg / Fördel som eget band överst på en utbildningssida. */
export function KorthetBand({
  rubrik,
  korthet,
}: {
  rubrik: string;
  korthet: { passar: string; upplagg: string; fordel: string };
}) {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-14 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl leading-tight font-bold lg:col-span-4 lg:text-[2.25rem]" data-in="">
          {rubrik}
        </h2>
        <div className="lg:col-span-8" data-in="" style={{ ["--i" as string]: 1 }}>
          <Korthet {...korthet} className="text-lg" />
        </div>
      </div>
    </section>
  );
}

/** Avslutande uppmaning, samma på alla sidor: kurvan slutar i kontaktuppgifterna. */
export function Avslut({
  rubrik = "Hur många hos er har aktuella kunskaper för att rädda liv?",
  text = "Mejla eller ring och berätta vilken utbildning ni är intresserad av, var ni finns och ungefär hur många ni är.",
  live = false,
  mork = false,
  galler,
}: {
  rubrik?: string;
  text?: string;
  /** Levande puls på kurvan (startsidan). */
  live?: boolean;
  /** Mörk monitorbotten med lysande puls (startsidans mörka slut). */
  mork?: boolean;
  /** Visar en Begär offert-knapp som leder till formuläret. */
  galler?: string;
}) {
  return (
    <section
      className={
        mork ? "monitor-hero border-t border-white/8 text-monitor-text" : "ekg-papper border-t border-black/10"
      }
    >
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl" data-in="">
          <h2 className={`text-[clamp(2.1rem,4.6vw,3.75rem)] leading-[1.02] font-bold ${mork ? "text-white" : ""}`}>
            {rubrik}
          </h2>
          <p className={`mt-5 max-w-xl text-xl ${mork ? "text-monitor-dampad" : "text-grafit"}`}>{text}</p>
        </div>
        <Ekg puls live={live} slag={[0.3, 0.75]} hojd={72} className={`mt-10 max-w-4xl ${mork ? "ekg-monitor" : ""}`} />
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:gap-10" data-in="">
          {galler && <OffertKnapp galler={galler} className="self-start" />}
          <p className={`text-xl ${mork ? "text-monitor-dampad" : "text-grafit"}`}>
            Mejla{" "}
            <a href={`mailto:${foretag.epost}`} className={mork ? LANK_MORK : "textlank"}>
              {foretag.epost}
            </a>{" "}
            eller ring{" "}
            <a
              href={foretag.telefonHref}
              className={`${mork ? LANK_MORK : "textlank"} siffror inline-flex items-center gap-1.5 whitespace-nowrap`}
            >
              <Telefon className="size-5" />
              {foretag.telefon}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/** Pil-länk i löptext eller under ett block. */
export function PilLank({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`textlank inline-flex items-center gap-2 no-underline ${className}`}>
      <span className="underline decoration-magenta/35 underline-offset-[0.2em] hover:decoration-current">{children}</span>
      <Pil className="size-5 shrink-0" />
    </Link>
  );
}
