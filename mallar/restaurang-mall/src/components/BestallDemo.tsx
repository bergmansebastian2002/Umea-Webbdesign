"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { meny, restaurang } from "@/lib/kund";

/**
 * Demo av "beställ och hämta": besökaren klickar ihop en beställning ur
 * menyn och ser en Swish-knapp för betalning på distans. Hela flödet är
 * endast utseende - ingen betalning eller order skickas någonstans, och
 * knappen leder till en ruta som förklarar det och hänvisar till telefon.
 */
export default function BestallDemo() {
  const [antal, setAntal] = useState<Record<string, number>>({});
  const [visaSwishRuta, setVisaSwishRuta] = useState(false);
  const swishRutaRef = useRef<HTMLDivElement>(null);

  const { kontakt } = restaurang;

  // Rutan ska gå att stänga med Escape och fånga fokus när den öppnas,
  // precis som ljuslådan i galleriet.
  useEffect(() => {
    if (!visaSwishRuta) return;

    swishRutaRef.current?.focus();
    const vidTangent = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisaSwishRuta(false);
    };

    document.addEventListener("keydown", vidTangent);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", vidTangent);
      document.body.style.overflow = "";
    };
  }, [visaSwishRuta]);

  const andra = (namn: string, steg: number) =>
    setAntal((nu) => {
      const nytt = Math.max(0, (nu[namn] ?? 0) + steg);
      const kopia = { ...nu };
      if (nytt === 0) delete kopia[namn];
      else kopia[namn] = nytt;
      return kopia;
    });

  // Alla rätter med fast pris, per sektion. Rätter utan pris kan inte
  // beställas i demon och filtreras bort.
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

  return (
    <div className="pb-32">
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
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{ratt.namn}</p>
                      {ratt.beskrivning && (
                        <p className="truncate text-xs text-dampad">{ratt.beskrivning}</p>
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
                        aria-label={`Lägg till en ${ratt.namn}`}
                        className="flex h-11 w-11 items-center justify-center rounded-mall bg-accent text-lg text-accent-text"
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

      {/* Fast summeringsrad med Swish-knapp */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-ram bg-yta/95 backdrop-blur-md"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="omslag flex items-center justify-between gap-4 py-3">
          <div className="min-w-0">
            <p className="text-sm text-dampad">
              {antalVaror === 0
                ? "Inget valt ännu"
                : `${antalVaror} ${antalVaror === 1 ? "vara" : "varor"}`}
            </p>
            <p className="font-rubrik text-xl tabular-nums">{totalsumma} kr</p>
          </div>
          <button
            type="button"
            onClick={() => setVisaSwishRuta(true)}
            disabled={antalVaror === 0}
            className="flex items-center gap-2 rounded-mall bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-accent-text transition-all hover:brightness-110 disabled:opacity-40"
          >
            Betala med Swish
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Demoruta istället för riktig betalning */}
      {visaSwishRuta && (
        <div
          ref={swishRutaRef}
          role="dialog"
          aria-modal="true"
          aria-label="Demo av Swish-betalning"
          tabIndex={-1}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setVisaSwishRuta(false)}
        >
          <div
            className="w-full max-w-md rounded-mall bg-yta p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="etikett">Demo</p>
            <h2 className="mt-3 font-rubrik text-2xl">Här skulle Swish öppnas</h2>
            <p className="mt-4 text-sm leading-relaxed text-dampad">
              I en färdig lösning betalar du {totalsumma} kr med Swish här och
              hämtar sedan maten i restaurangen. Betalningen är inte inkopplad
              ännu - ring oss så tar vi din beställning direkt.
            </p>
            <a
              href={`tel:${kontakt.telefonLank}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-mall bg-accent px-6 py-3.5 text-sm font-medium tracking-wide text-accent-text"
            >
              Ring och beställ {kontakt.telefon}
            </a>
            <button
              type="button"
              onClick={() => setVisaSwishRuta(false)}
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
