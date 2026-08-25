import type { ArtDirection, Fardschema } from "@/lib/typer";

/**
 * Standardpaletter för de tre art directions. En kund väljer karaktär med
 * `design.artDirection` i sin config och kan överstyra enskilda färger
 * med `design.farger` - utan att röra den här filen.
 *
 * Alla kombinationer av text mot bakgrund/yta klarar WCAG AA.
 */
const PALETTER: Record<ArtDirection, Fardschema> = {
  // Varm, mörk, guldaccent - fine dining och klassisk husmanskost.
  klassisk: {
    bakgrund: "#faf8f5",
    yta: "#ffffff",
    text: "#1c1a17",
    textDampad: "#6b645b",
    primar: "#1f2b26",
    accent: "#966636",
    accentPaMork: "#cfa268",
    accentText: "#ffffff",
    ram: "#e6e0d7",
  },
  // Ljus, luftig, dämpad - bistro, brunch och bageri.
  nordisk: {
    bakgrund: "#fcfcfa",
    yta: "#f4f3ef",
    text: "#22242a",
    textDampad: "#63666e",
    primar: "#2b3440",
    accent: "#4a6b5c",
    accentPaMork: "#a8c5b6",
    accentText: "#ffffff",
    ram: "#e3e2dc",
  },
  // Hög kontrast, kraftiga färger - pizzeria, burgare, streetfood.
  livlig: {
    bakgrund: "#fffdf7",
    yta: "#ffffff",
    text: "#191411",
    textDampad: "#5f574f",
    primar: "#20140f",
    accent: "#c93c20",
    accentPaMork: "#ff9a7d",
    accentText: "#ffffff",
    ram: "#ecdfd2",
  },
};

/** Standardrundning i px per art direction. */
const RUNDNING: Record<ArtDirection, number> = {
  klassisk: 4,
  nordisk: 10,
  livlig: 14,
};

/** Slår ihop art directionens standard med kundens eventuella överstyrningar. */
export function byggFargschema(
  artDirection: ArtDirection,
  overstyrningar?: Partial<Fardschema>,
): Fardschema {
  return { ...PALETTER[artDirection], ...overstyrningar };
}

export function byggRundning(artDirection: ArtDirection, overstyrd?: number): number {
  return overstyrd ?? RUNDNING[artDirection];
}
