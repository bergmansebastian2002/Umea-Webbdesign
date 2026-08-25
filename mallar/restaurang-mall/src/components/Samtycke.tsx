"use client";

import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { useEffect, useSyncExternalStore } from "react";

const NYCKEL = "samtycke-analys";

/** "ssr" = värdet är inte läst ännu (serverrendering) - visa ingen banner. */
type Val = "ja" | "nej" | "ssr" | null;

function prenumerera(vidAndring: () => void) {
  window.addEventListener("storage", vidAndring);
  window.addEventListener("samtycke-andrad", vidAndring);
  return () => {
    window.removeEventListener("storage", vidAndring);
    window.removeEventListener("samtycke-andrad", vidAndring);
  };
}

function lasVal(): Val {
  const sparat = window.localStorage.getItem(NYCKEL);
  return sparat === "ja" || sparat === "nej" ? sparat : null;
}

/**
 * Cookie-/analyssamtycke enligt GDPR.
 *
 * Ingen analys laddas förrän besökaren uttryckligen godkänt - Vercel
 * Analytics monteras först efter "ja". Valet sparas i localStorage och
 * kan ångras via länken i integritetspolicyn (rensa webbplatsdata).
 *
 * Klickspårning: klick på element med data-spar="boka" eller
 * data-spar="ring" skickas som händelser, så du kan visa kunden hur
 * många som faktiskt klickar på Boka bord och Ring oss.
 */
export default function Samtycke() {
  // useSyncExternalStore läser localStorage utan setState-i-effekt och
  // hanterar skillnaden mellan server ("ssr") och webbläsare korrekt.
  const val = useSyncExternalStore<Val>(prenumerera, lasVal, () => "ssr");

  // Spåra Boka bord- och Ring-klick, men bara med samtycke.
  useEffect(() => {
    if (val !== "ja") return;

    const vidKlick = (handelse: MouseEvent) => {
      const mal = (handelse.target as HTMLElement).closest<HTMLElement>("[data-spar]");
      if (!mal) return;
      const typ = mal.dataset.spar;
      if (typ === "boka") track("boka_bord_klick");
      if (typ === "ring") track("ring_klick");
    };

    document.addEventListener("click", vidKlick);
    return () => document.removeEventListener("click", vidKlick);
  }, [val]);

  function valj(nytt: "ja" | "nej") {
    window.localStorage.setItem(NYCKEL, nytt);
    window.dispatchEvent(new Event("samtycke-andrad"));
  }

  return (
    <>
      {val === "ja" && <Analytics />}

      {val === null && (
        <div
          role="region"
          aria-label="Samtycke till analys"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-ram bg-yta p-4 shadow-svav md:inset-x-auto md:bottom-6 md:right-6 md:max-w-sm md:rounded-mall md:border"
        >
          <p className="text-sm leading-relaxed">
            Vi vill använda anonym besöksstatistik för att förstå hur sidan
            används. Inga uppgifter säljs eller delas. Läs mer i vår{" "}
            <a href="/integritetspolicy" className="underline underline-offset-2">
              integritetspolicy
            </a>
            .
          </p>
          <div className="mt-4 flex gap-3">
            <button
              type="button"
              onClick={() => valj("ja")}
              className="flex-1 rounded-mall bg-accent px-4 py-2.5 text-sm font-medium text-accent-text hover:brightness-110"
            >
              Tillåt
            </button>
            <button
              type="button"
              onClick={() => valj("nej")}
              className="flex-1 rounded-mall border border-ram px-4 py-2.5 text-sm hover:border-accent"
            >
              Avböj
            </button>
          </div>
        </div>
      )}
    </>
  );
}
