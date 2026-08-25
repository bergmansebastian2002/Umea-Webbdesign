"use client";

import { useEffect, useState } from "react";

import { restaurang } from "@/lib/kund";

/**
 * Fast bokningsfält i botten på mobil. Visas när besökaren rullat förbi
 * heron, så det aldrig ligger ovanpå startvyn. "Boka bord" + "Ring oss"
 * är de två handlingar en hungrig mobilbesökare faktiskt vill göra.
 */
export default function MobilBokningsRad() {
  const [synlig, setSynlig] = useState(false);

  useEffect(() => {
    const vidRullning = () => setSynlig(window.scrollY > window.innerHeight * 0.7);
    vidRullning();
    window.addEventListener("scroll", vidRullning, { passive: true });
    return () => window.removeEventListener("scroll", vidRullning);
  }, []);

  const { bokning, kontakt } = restaurang;

  return (
    <div
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
        ) : (
          <a
            href={`tel:${kontakt.telefonLank}`}
            tabIndex={synlig ? 0 : -1}
            data-spar="ring"
            className="flex flex-1 items-center justify-center rounded-mall bg-accent px-4 py-3 text-sm font-medium tracking-wide text-accent-text"
          >
            Ring och boka
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
