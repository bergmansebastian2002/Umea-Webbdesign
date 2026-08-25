import bjorken from "./bjorken/config";
import ronyas from "./ronyas/config";

/**
 * ============================================================================
 *  KUNDREGISTER - lägg till en rad per kund.
 * ============================================================================
 *
 *  Ny kund:
 *   1. Skapa content/<slug>/config.ts (kopiera från bjorken).
 *   2. Importera och lägg till den i KUNDER nedan.
 *   3. Sätt NEXT_PUBLIC_KUND=<slug> i kundens Vercel-projekt.
 */
export const KUNDER = {
  bjorken,
  ronyas,
} as const;

/** Kunden som byggs när NEXT_PUBLIC_KUND inte är satt (lokal utveckling och demo). */
export const STANDARDKUND = "bjorken" satisfies keyof typeof KUNDER;
