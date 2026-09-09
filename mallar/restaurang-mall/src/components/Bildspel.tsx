"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { bildProps } from "@/lib/bilder";
import type { Galleribild } from "@/lib/typer";

/** Hur länge varje bild visas innan bildspelet går vidare. */
const VISNINGSTID_MS = 5000;

/**
 * Bildspel med mjuk övertoning för startsidan. Går vidare av sig självt,
 * men pausar vid hovring, fokus och dold flik, och står helt stilla för
 * besökare med "minskad rörelse" i systeminställningarna. Styrs även med
 * piltangenter, svep och prickarna under bildspelet.
 */
export default function Bildspel({ bilder }: { bilder: Galleribild[] }) {
  const [aktiv, setAktiv] = useState(0);
  const [pausad, setPausad] = useState(false);
  const [minskadRorelse, setMinskadRorelse] = useState(false);
  const svepStart = useRef<number | null>(null);

  const stega = useCallback(
    (steg: number) =>
      setAktiv((nu) => (nu + steg + bilder.length) % bilder.length),
    [bilder.length],
  );

  useEffect(() => {
    const fraga = window.matchMedia("(prefers-reduced-motion: reduce)");
    const uppdatera = () => setMinskadRorelse(fraga.matches);
    uppdatera();
    fraga.addEventListener("change", uppdatera);
    return () => fraga.removeEventListener("change", uppdatera);
  }, []);

  // Automatisk stegning - avstängd vid paus, minskad rörelse och dold flik.
  useEffect(() => {
    if (pausad || minskadRorelse || bilder.length < 2) return;

    const vidFlikbyte = () => setPausad(document.hidden);
    document.addEventListener("visibilitychange", vidFlikbyte);
    const timer = window.setInterval(() => stega(1), VISNINGSTID_MS);
    return () => {
      document.removeEventListener("visibilitychange", vidFlikbyte);
      window.clearInterval(timer);
    };
  }, [pausad, minskadRorelse, bilder.length, stega]);

  if (bilder.length === 0) return null;

  return (
    <div
      role="region"
      aria-roledescription="bildspel"
      aria-label="Bilder på mat och restaurangen"
      className="relative overflow-hidden rounded-mall bg-primar"
      onMouseEnter={() => setPausad(true)}
      onMouseLeave={() => setPausad(false)}
      onFocus={() => setPausad(true)}
      onBlur={() => setPausad(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") stega(1);
        if (e.key === "ArrowLeft") stega(-1);
      }}
      onTouchStart={(e) => (svepStart.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (svepStart.current === null) return;
        const svep = e.changedTouches[0].clientX - svepStart.current;
        if (Math.abs(svep) > 40) stega(svep < 0 ? 1 : -1);
        svepStart.current = null;
      }}
    >
      <div className="relative aspect-3/2 md:aspect-21/9">
        {bilder.map((bild, index) => (
          <div
            key={bild.kalla}
            aria-hidden={index !== aktiv}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === aktiv ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={bild.kalla}
              alt={bild.alt}
              fill
              loading="lazy"
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
              {...bildProps(bild.kalla)}
            />
          </div>
        ))}

        {/* Bildtext ur alt-texten, på svag tonplatta för läsbarhet. */}
        <p
          aria-live="polite"
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-black/0 px-5 pb-4 pt-12 text-sm text-white/90 md:px-6"
        >
          {bilder[aktiv].alt}
        </p>
      </div>

      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-2 md:px-3">
        {[
          { steg: -1, text: "Föregående bild", pil: "←" },
          { steg: 1, text: "Nästa bild", pil: "→" },
        ].map((knapp) => (
          <button
            key={knapp.steg}
            type="button"
            onClick={() => stega(knapp.steg)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-lg text-white backdrop-blur-xs transition-colors hover:bg-black/60"
          >
            <span aria-hidden="true">{knapp.pil}</span>
            <span className="sr-only">{knapp.text}</span>
          </button>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-1 flex justify-center">
        {bilder.map((bild, index) => (
          <button
            key={bild.kalla}
            type="button"
            onClick={() => setAktiv(index)}
            aria-current={index === aktiv}
            className="flex h-11 w-6 items-center justify-center"
          >
            <span
              aria-hidden="true"
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === aktiv ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
            <span className="sr-only">{`Visa bild ${index + 1} av ${bilder.length}`}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
