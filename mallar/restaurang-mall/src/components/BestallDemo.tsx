"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { meny, restaurang } from "@/lib/kund";

type Betalsatt = "swish" | "kort";

/** Tak per rätt. Hindrar orimliga summor från en fastnad plusknapp. */
const MAX_PER_RATT = 99;
/** Swishs meddelandefält rymmer ca 50 tecken. */
const SWISH_MEDDELANDE_MAX = 50;
const OVRIGT_MAX = 500;

const kronor = (belopp: number) => belopp.toLocaleString("sv-SE");

/**
 * Beställ och hämta: besökaren klickar ihop en beställning ur menyn,
 * skriver eventuella önskemål (t.ex. allergier) och väljer Swish eller
 * kort i den fasta betalraden längst ner. Finns `bestallningDemo.swishNummer`
 * i kundens config öppnar Swish-knappen appen med belopp och meddelande
 * förifyllt - annars visas en ruta som förklarar att betalningen kopplas
 * in inom kort och hänvisar till telefon.
 */
export default function BestallDemo() {
  const [antal, setAntal] = useState<Record<string, number>>({});
  const [ovrigt, setOvrigt] = useState("");
  const [betalsatt, setBetalsatt] = useState<Betalsatt | null>(null);
  const betalRutaRef = useRef<HTMLDivElement>(null);
  const betalRadRef = useRef<HTMLDivElement>(null);

  const { kontakt } = restaurang;
  const swishNummer = restaurang.bestallningDemo?.swishNummer?.replace(/\s/g, "");

  // Rutan ska gå att stänga med Escape och fånga fokus när den öppnas,
  // precis som ljuslådan i galleriet.
  useEffect(() => {
    if (!betalsatt) return;

    betalRutaRef.current?.focus();
    const vidTangent = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBetalsatt(null);
    };

    document.addEventListener("keydown", vidTangent);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", vidTangent);
      document.body.style.overflow = "";
    };
  }, [betalsatt]);

  // Talar om för cookie-bannern hur högt den ska lägga sig, så den inte
  // hamnar över betalknapparna.
  useEffect(() => {
    const rot = document.documentElement;
    const matUt = () => {
      const hojd = betalRadRef.current?.offsetHeight ?? 0;
      rot.style.setProperty("--fast-rad-hojd", `${hojd}px`);
    };

    matUt();
    window.addEventListener("resize", matUt);
    return () => {
      window.removeEventListener("resize", matUt);
      rot.style.removeProperty("--fast-rad-hojd");
    };
  }, []);

  const andra = (namn: string, steg: number) =>
    setAntal((nu) => {
      const nytt = Math.min(MAX_PER_RATT, Math.max(0, (nu[namn] ?? 0) + steg));
      const kopia = { ...nu };
      if (nytt === 0) delete kopia[namn];
      else kopia[namn] = nytt;
      return kopia;
    });

  // Alla rätter med fast pris, per sektion. Rätter utan pris kan inte
  // beställas online och filtreras bort.
  const sektioner = useMemo(
    () =>
      meny.sektioner
        .map((sektion) => ({
          ...sektion,
          ratter: sektion.ratter.filter((r) => typeof r.pris === "number"),
        }))
        .filter((sektion) => sektion.ratter.length > 0),
    [],
  );

  const valda = useMemo(() => {
    const rader: { namn: string; antal: number; summa: number }[] = [];
    for (const sektion of sektioner) {
      for (const ratt of sektion.ratter) {
        const n = antal[ratt.namn];
        if (n) rader.push({ namn: ratt.namn, antal: n, summa: n * (ratt.pris as number) });
      }
    }
    return rader;
  }, [antal, sektioner]);

  const totalsumma = valda.reduce((summa, rad) => summa + rad.summa, 0);
  const antalVaror = valda.reduce((n, rad) => n + rad.antal, 0);

  // Swishs meddelandefält rymmer ca 50 tecken - beställningen komprimeras
  // och kapas så att den alltid går att skicka med.
  const swishLank = useMemo(() => {
    if (!swishNummer) return null;
    // Kapa på hela rätter i stället för mitt i ett ord, så meddelandet
    // alltid går att läsa i restaurangens Swish-app.
    const rader: string[] = [];
    let langd = 0;
    for (const rad of valda) {
      const text = `${rad.antal}x ${rad.namn}`;
      const tillagg = rader.length === 0 ? text.length : text.length + 2;
      if (langd + tillagg > SWISH_MEDDELANDE_MAX) break;
      rader.push(text);
      langd += tillagg;
    }
    const meddelande =
      rader.length === valda.length
        ? rader.join(", ")
        : `${rader.join(", ")} m.fl.`.slice(0, SWISH_MEDDELANDE_MAX);
    const parametrar = new URLSearchParams({
      sw: swishNummer,
      amt: String(totalsumma),
      cur: "SEK",
      msg: meddelande,
    });
    return `https://app.swish.nu/1/p/sw/?${parametrar.toString()}`;
  }, [swishNummer, valda, totalsumma]);

  return (
    <div className="pb-36">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-14">
        {sektioner.map((sektion) => (
          <section key={sektion.id}>
            <h2 className="border-b border-ram pb-3 font-rubrik text-2xl">
              {sektion.rubrik}
            </h2>
            <ul className="mt-4 space-y-3">
              {sektion.ratter.map((ratt) => {
                const n = antal[ratt.namn] ?? 0;
                return (
                  <li key={ratt.namn} className="flex items-center gap-3">
                    {/* Rättens namn och beskrivning får radbrytas. Kapad text
                        döljer just det gästen behöver läsa, t.ex. innehållet
                        i en rätt de är allergisk mot. */}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium">{ratt.namn}</p>
                      {ratt.beskrivning && (
                        <p className="text-xs text-dampad">{ratt.beskrivning}</p>
                      )}
                    </div>
                    <span className="shrink-0 tabular-nums text-sm text-dampad">
                      {ratt.pris} kr
                    </span>
                    <div className="flex shrink-0 items-center gap-1">
                      <button
                        type="button"
                        onClick={() => andra(ratt.namn, -1)}
                        disabled={n === 0}
                        aria-label={`Ta bort en ${ratt.namn}`}
                        className="flex h-11 w-11 items-center justify-center rounded-mall border border-ram text-lg disabled:opacity-30"
                      >
                        &minus;
                      </button>
                      <span className="w-6 text-center tabular-nums" aria-live="polite">
                        {n}
                      </span>
                      <button
                        type="button"
                        onClick={() => andra(ratt.namn, 1)}
                        disabled={n >= MAX_PER_RATT}
                        aria-label={`Lägg till en ${ratt.namn}`}
                        className="flex h-11 w-11 items-center justify-center rounded-mall bg-accent text-lg text-accent-text disabled:opacity-30"
                      >
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      {/* Fritt fält för allergier och andra önskemål - följer med beställningen. */}
      <div className="mt-14 max-w-xl">
        <label htmlFor="bestallning-ovrigt" className="font-rubrik text-2xl">
          Övrigt, t.ex. allergier
        </label>
        <p id="ovrigt-hjalp" className="mt-1 text-sm text-dampad">
          Skriv fritt - texten följer med din beställning.
        </p>
        <textarea
          id="bestallning-ovrigt"
          value={ovrigt}
          onChange={(e) => setOvrigt(e.target.value.slice(0, OVRIGT_MAX))}
          rows={3}
          maxLength={OVRIGT_MAX}
          aria-describedby="ovrigt-hjalp ovrigt-antal"
          placeholder="T.ex. glutenfri pizzabotten, ingen lök ..."
          className="mt-3 w-full rounded-mall border border-ram bg-yta p-4 text-base leading-relaxed placeholder:text-dampad/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />
        {/* Räknaren visas först när gästen närmar sig taket, så fältet inte
            känns bevakat från första tecknet. */}
        <p
          id="ovrigt-antal"
          aria-live="polite"
          className={`mt-1 text-right text-xs ${
            ovrigt.length >= OVRIGT_MAX - 50 ? "text-dampad" : "sr-only"
          }`}
        >
          {ovrigt.length} av {OVRIGT_MAX} tecken
        </p>
      </div>

      {/* Fast betalrad som följer med när besökaren rullar i menyn */}
      <div
        ref={betalRadRef}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-ram bg-yta/95 backdrop-blur-md"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="omslag flex items-center justify-between gap-3 py-3">
          <div className="min-w-0 shrink-0">
            <p className="text-sm text-dampad">
              {antalVaror === 0
                ? "Inget valt ännu"
                : `${antalVaror} ${antalVaror === 1 ? "vara" : "varor"}`}
            </p>
            <p className="font-rubrik text-xl tabular-nums">{kronor(totalsumma)} kr</p>
          </div>
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setBetalsatt("kort")}
              disabled={antalVaror === 0}
              className="rounded-mall border border-ram px-4 py-3.5 text-sm font-medium tracking-wide transition-all hover:border-accent hover:text-accent disabled:opacity-40"
            >
              <span className="hidden sm:inline">Betala med kort</span>
              <span className="sm:hidden">Kort</span>
            </button>
            <button
              type="button"
              onClick={() => setBetalsatt("swish")}
              disabled={antalVaror === 0}
              className="flex items-center gap-2 rounded-mall bg-accent px-5 py-3.5 text-sm font-medium tracking-wide text-accent-text transition-all hover:brightness-110 disabled:opacity-40"
            >
              Betala med Swish
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sammanställning av beställningen + betalning */}
      {betalsatt && (
        <div
          ref={betalRutaRef}
          role="dialog"
          aria-modal="true"
          aria-label="Din beställning"
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setBetalsatt(null)}
        >
          <div
            className="max-h-[90svh] w-full max-w-md overflow-y-auto rounded-mall bg-yta p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="etikett">Din beställning</p>

            <ul className="mt-4 space-y-2 border-b border-ram pb-4 text-sm">
              {valda.map((rad) => (
                <li key={rad.namn} className="flex justify-between gap-4">
                  <span className="min-w-0">
                    {rad.antal} &times; {rad.namn}
                  </span>
                  <span className="shrink-0 tabular-nums">{kronor(rad.summa)} kr</span>
                </li>
              ))}
              {ovrigt.trim() && (
                <li className="pt-1 text-dampad">
                  <span className="font-medium text-text">Övrigt:</span> {ovrigt.trim()}
                </li>
              )}
            </ul>

            <p className="mt-4 flex justify-between font-rubrik text-xl">
              <span>Att betala</span>
              <span className="tabular-nums">{kronor(totalsumma)} kr</span>
            </p>

            {/* Swish-meddelandet rymmer bara en kort rad, så önskemål om
                allergier når inte köket den vägen. Det måste stå här -
                en gäst som skrivit "nötallergi" ska inte tro att den
                informationen kommit fram. */}
            {ovrigt.trim() && (
              <p className="mt-4 rounded-mall border border-accent/40 bg-accent/5 p-4 text-sm leading-relaxed">
                <strong className="font-medium">Viktigt om dina önskemål:</strong>{" "}
                de följer inte med betalningen. Ring oss på{" "}
                <a
                  href={`tel:${kontakt.telefonLank}`}
                  className="text-accent underline underline-offset-2"
                  data-spar="ring"
                >
                  {kontakt.telefon}
                </a>{" "}
                och bekräfta dem, särskilt om det gäller en allergi.
              </p>
            )}

            {betalsatt === "swish" && swishLank ? (
              <>
                <p className="mt-4 text-sm leading-relaxed text-dampad">
                  Knappen öppnar Swish med belopp och beställning förifyllda.
                  Visa kvittot när du hämtar maten hos oss.
                </p>
                <a
                  href={swishLank}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-mall bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-accent-text"
                >
                  Öppna Swish och betala {kronor(totalsumma)} kr
                </a>
              </>
            ) : (
              <>
                <p className="mt-4 text-sm leading-relaxed text-dampad">
                  {betalsatt === "swish"
                    ? "Swish-betalningen kopplas in inom kort. Tills dess - ring in din beställning så står maten redo när du kommer."
                    : "Kortbetalning online kopplas in inom kort. Tills dess - ring in din beställning och betala med kort när du hämtar."}
                </p>
                <a
                  href={`tel:${kontakt.telefonLank}`}
                  data-spar="ring"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-mall bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-accent-text"
                >
                  Ring och beställ {kontakt.telefon}
                </a>
              </>
            )}

            <button
              type="button"
              onClick={() => setBetalsatt(null)}
              className="mt-3 w-full rounded-mall border border-ram px-6 py-3 text-sm"
            >
              Stäng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
