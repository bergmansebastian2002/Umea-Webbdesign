"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { bildProps } from "@/lib/bilder";
import type { Galleribild } from "@/lib/typer";

/**
 * Bildgalleri med enkel ljuslåda. Inga externa bibliotek - allt är
 * tangentbordsstyrt (piltangenter och Escape) och fungerar med touch.
 */
export default function Galleri({ bilder }: { bilder: Galleribild[] }) {
  const [aktivIndex, setAktivIndex] = useState<number | null>(null);

  const stang = useCallback(() => setAktivIndex(null), []);
  const stega = useCallback(
    (steg: number) =>
      setAktivIndex((nu) =>
        nu === null ? null : (nu + steg + bilder.length) % bilder.length,
      ),
    [bilder.length],
  );

  useEffect(() => {
    if (aktivIndex === null) return;

    const vidTangent = (e: KeyboardEvent) => {
      if (e.key === "Escape") stang();
      if (e.key === "ArrowRight") stega(1);
      if (e.key === "ArrowLeft") stega(-1);
    };

    document.addEventListener("keydown", vidTangent);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", vidTangent);
      document.body.style.overflow = "";
    };
  }, [aktivIndex, stang, stega]);

  if (bilder.length === 0) return null;

  const aktiv = aktivIndex === null ? null : bilder[aktivIndex];

  return (
    <>
      <ul className="grid auto-rows-[13rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] md:grid-cols-3 md:gap-4">
        {bilder.map((bild, index) => (
          <li
            key={bild.kalla}
            className={bild.staende ? "row-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setAktivIndex(index)}
              className="group relative block h-full w-full overflow-hidden rounded-mall bg-ram"
            >
              <Image
                src={bild.kalla}
                alt={bild.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                {...bildProps(bild.kalla)}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15"
              />
              <span className="sr-only">Visa bilden i större format: {bild.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      {aktiv && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={aktiv.alt}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 p-4 md:p-8"
          onClick={stang}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={stang}
              className="flex h-11 w-11 items-center justify-center text-2xl text-white/80 hover:text-white"
            >
              <span aria-hidden="true">&times;</span>
              <span className="sr-only">Stäng bildvisning</span>
            </button>
          </div>

          <div
            className="relative flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={aktiv.kalla}
              alt={aktiv.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <div
            className="mt-4 flex items-center justify-between gap-4 text-white/80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => stega(-1)}
              className="rounded-mall border border-white/30 px-5 py-2.5 text-sm hover:bg-white/10"
            >
              <span aria-hidden="true">&larr;</span> Föregående
            </button>

            <p className="hidden max-w-md text-center text-sm sm:block">{aktiv.alt}</p>

            <button
              type="button"
              onClick={() => stega(1)}
              className="rounded-mall border border-white/30 px-5 py-2.5 text-sm hover:bg-white/10"
            >
              Nästa <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
