"use client";

import { useMemo, useState } from "react";

import MenyLista from "@/components/MenyLista";
import type { Meny } from "@/lib/typer";

const FILTER = [
  { id: "alla", text: "Hela menyn" },
  { id: "vegetariskt", text: "Vegetariskt" },
  { id: "veganskt", text: "Veganskt" },
  { id: "glutenfritt", text: "Glutenfritt" },
] as const;

type FilterId = (typeof FILTER)[number]["id"];

/** Veganskt räknas alltid även som vegetariskt. */
function matchar(filter: FilterId, markningar: string[]): boolean {
  switch (filter) {
    case "alla":
      return true;
    case "vegetariskt":
      return markningar.some((m) => /vegetari|vegan/i.test(m));
    case "veganskt":
      return markningar.some((m) => /vegan/i.test(m));
    case "glutenfritt":
      return markningar.some((m) => /glutenfri/i.test(m));
  }
}

/**
 * Filtrerbar meny: knappar för vegetariskt, veganskt och glutenfritt.
 * Filtreringen sker på rätternas `markningar` i menydatat. Sektioner som
 * blir tomma döljs helt.
 */
export default function MenyFilter({ meny }: { meny: Meny }) {
  const [aktivt, setAktivt] = useState<FilterId>("alla");

  const filtrerad = useMemo<Meny>(() => {
    if (aktivt === "alla") return meny;
    return {
      ...meny,
      sektioner: meny.sektioner
        .map((sektion) => ({
          ...sektion,
          ratter: sektion.ratter.filter((ratt) =>
            matchar(aktivt, ratt.markningar ?? []),
          ),
        }))
        .filter((sektion) => sektion.ratter.length > 0),
    };
  }, [meny, aktivt]);

  return (
    <div>
      <div role="group" aria-label="Filtrera menyn" className="mb-10 flex flex-wrap gap-2">
        {FILTER.map((filter) => {
          const vald = filter.id === aktivt;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setAktivt(filter.id)}
              aria-pressed={vald}
              className={`rounded-mall border px-4 py-2 text-sm transition-colors ${
                vald
                  ? "border-accent bg-accent text-accent-text"
                  : "border-ram hover:border-accent hover:text-accent"
              }`}
            >
              {filter.text}
            </button>
          );
        })}
      </div>

      {filtrerad.sektioner.length === 0 ? (
        <p className="rounded-mall border border-ram bg-yta p-8 text-dampad">
          Inga rätter matchar filtret just nu - fråga oss gärna på plats, vi
          anpassar det mesta.
        </p>
      ) : (
        <MenyLista meny={filtrerad} visaSnabblankar={aktivt === "alla"} />
      )}
    </div>
  );
}
