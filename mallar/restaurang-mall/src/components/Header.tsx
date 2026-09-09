"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { restaurang } from "@/lib/kund";
import BokaBordKnapp from "@/components/BokaBordKnapp";

/** Sidhuvudets länkar. Lägg till eller ta bort rader här vid behov. */
const LANKAR = [
  { href: "/", text: "Start" },
  { href: "/meny", text: "Meny" },
  ...(restaurang.bestallningDemo?.aktiv ? [{ href: "/bestall", text: "Beställ" }] : []),
  { href: "/om-oss", text: "Om oss" },
  { href: "/hitta-hit", text: "Hitta hit" },
  { href: "/kontakt", text: "Kontakt" },
];

export default function Header() {
  const sokvag = usePathname();
  const [oppenMeny, setOppenMeny] = useState(false);
  const [harRullat, setHarRullat] = useState(false);

  // Genomskinligt sidhuvud ovanpå startsidans stora bild.
  const overHero = sokvag === "/" && !harRullat && !oppenMeny;

  useEffect(() => {
    const vidRullning = () => setHarRullat(window.scrollY > 40);
    vidRullning();
    window.addEventListener("scroll", vidRullning, { passive: true });
    return () => window.removeEventListener("scroll", vidRullning);
  }, []);

  // Stäng mobilmenyn vid sidbyte (justering under rendering enligt Reacts
  // rekommenderade mönster, istället för setState i en effekt).
  const [senasteSokvag, setSenasteSokvag] = useState(sokvag);
  if (sokvag !== senasteSokvag) {
    setSenasteSokvag(sokvag);
    setOppenMeny(false);
  }

  // Lås bakgrundens rullning när mobilmenyn är öppen.
  useEffect(() => {
    document.body.style.overflow = oppenMeny ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [oppenMeny]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overHero
          ? "bg-transparent text-white"
          : "bg-bakgrund/90 text-text shadow-[0_1px_0_0_var(--farg-ram)] backdrop-blur-md"
      }`}
    >
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-mall focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-text"
      >
        Hoppa till innehållet
      </a>

      <div className="omslag flex h-20 items-center justify-between gap-6 md:h-24">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-rubrik text-xl md:text-2xl tracking-tight">
            {restaurang.namn}
          </span>
          <span
            className={`mt-1 text-[0.65rem] uppercase tracking-[0.2em] ${
              overHero ? "text-white/70" : "text-dampad"
            }`}
          >
            {restaurang.seo.stad}
          </span>
        </Link>

        {/* Meny för surfplatta och dator */}
        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {LANKAR.map((lank) => {
              const aktiv =
                lank.href === "/" ? sokvag === "/" : sokvag.startsWith(lank.href);
              return (
                <li key={lank.href}>
                  <Link
                    href={lank.href}
                    aria-current={aktiv ? "page" : undefined}
                    className={`relative text-sm tracking-wide transition-opacity hover:opacity-100 ${
                      aktiv ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {lank.text}
                    {aktiv && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1.5 left-0 h-px w-full bg-current"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <BokaBordKnapp variant={overHero ? "ljus" : "fylld"} className="px-6 py-3" />
        </div>

        {/* Hamburgerknapp för mobil */}
        <button
          type="button"
          onClick={() => setOppenMeny((v) => !v)}
          aria-expanded={oppenMeny}
          aria-controls="mobilmeny"
          className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center"
        >
          <span className="sr-only">{oppenMeny ? "Stäng meny" : "Öppna meny"}</span>
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                oppenMeny ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-full bg-current transition-opacity duration-200 ${
                oppenMeny ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                oppenMeny ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobilmeny */}
      <div
        id="mobilmeny"
        hidden={!oppenMeny}
        className="lg:hidden border-t border-ram bg-bakgrund text-text"
      >
        <nav aria-label="Mobilmeny" className="omslag py-6">
          <ul className="flex flex-col">
            {LANKAR.map((lank) => (
              <li key={lank.href} className="border-b border-ram/70 last:border-0">
                <Link
                  href={lank.href}
                  className="block py-4 font-rubrik text-2xl"
                  onClick={() => setOppenMeny(false)}
                >
                  {lank.text}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BokaBordKnapp className="w-full" visaHjalptext />
          </div>
          <p className="mt-6 text-sm text-dampad">
            <a href={`tel:${restaurang.kontakt.telefonLank}`} className="hover:text-accent">
              {restaurang.kontakt.telefon}
            </a>
            <span className="mx-2">&middot;</span>
            {restaurang.kontakt.gata}, {restaurang.kontakt.ort}
          </p>
        </nav>
      </div>
    </header>
  );
}
