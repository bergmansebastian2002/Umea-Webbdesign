"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { restaurang } from "@/lib/kund";

/**
 * Fast beställningsfält i botten på mobil. Visas när besökaren rullat förbi
 * heron, så det aldrig ligger ovanpå startvyn. Beställ/boka + "Ring oss"
 * är de två handlingar en hungrig mobilbesökare faktiskt vill göra.
 */
export default function MobilBokningsRad() {
  const [synlig, setSynlig] = useState(false);
  const sokvag = usePathname();
  const radRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const vidRullning = () => setSynlig(window.scrollY > window.innerHeight * 0.7);
    vidRullning();
    window.addEventListener("scroll", vidRullning, { passive: true });
    return () => window.removeEventListener("scroll", vidRullning);
  }, []);

  // Talar om för cookie-bannern hur högt den ska lägga sig medan raden är
  // uppe. Raden finns bara på mobil, så på större skärmar är höjden 0.
  useEffect(() => {
    // På beställningssidan renderas den här raden inte alls - då äger
    // betalraden variabeln, och vi får inte nollställa den under den.
    if (sokvag === "/bestall") return;

    const rot = document.documentElement;
    const matUt = () => {
      const mobil = window.matchMedia("(max-width: 767px)").matches;
      const hojd = synlig && mobil ? (radRef.current?.offsetHeight ?? 0) : 0;
      rot.style.setProperty("--fast-rad-hojd", `${hojd}px`);
    };

    matUt();
    window.addEventListener("resize", matUt);
    return () => {
      window.removeEventListener("resize", matUt);
      rot.style.removeProperty("--fast-rad-hojd");
    };
  }, [synlig, sokvag]);

  const { bokning, bestallningDemo, kontakt } = restaurang;

  // Beställningssidan har en egen fast betalrad i botten - visa inte två.
  if (sokvag === "/bestall") return null;

  return (
    <div
      ref={radRef}
      aria-hidden={!synlig}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ram bg-yta/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        synlig ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-3 px-4 py-3">
        {bokning.aktiv ? (
          <a
            href={bokning.lank}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={synlig ? 0 : -1}
            data-spar="boka"
            className="flex flex-1 items-center justify-center rounded-mall bg-accent px-4 py-3 text-sm font-medium tracking-wide text-accent-text"
          >
            {bokning.knapptext}
          </a>
        ) : bestallningDemo?.aktiv ? (
          <Link
            href="/bestall"
            tabIndex={synlig ? 0 : -1}
            data-spar="boka"
            className="flex flex-1 items-center justify-center rounded-mall bg-accent px-4 py-3 text-sm font-medium tracking-wide text-accent-text"
          >
            Beställ &amp; hämta
          </Link>
        ) : (
          <a
            href={`tel:${kontakt.telefonLank}`}
            tabIndex={synlig ? 0 : -1}
            data-spar="ring"
            className="flex flex-1 items-center justify-center rounded-mall bg-accent px-4 py-3 text-sm font-medium tracking-wide text-accent-text"
          >
            Ring och beställ
          </a>
        )}
        <a
          href={`tel:${kontakt.telefonLank}`}
          tabIndex={synlig ? 0 : -1}
          data-spar="ring"
          className="flex flex-1 items-center justify-center rounded-mall border border-ram px-4 py-3 text-sm font-medium tracking-wide"
        >
          Ring oss
        </a>
      </div>
    </div>
  );
}
