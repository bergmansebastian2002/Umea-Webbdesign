import { KUNDER, STANDARDKUND } from "@content/kunder";
import { byggFargschema, byggRundning } from "@/lib/art-direction";

/**
 * Väljer aktiv kund utifrån miljövariabeln NEXT_PUBLIC_KUND.
 *
 * Varje kund får ett eget Vercel-projekt som pekar på samma repo men har
 * olika NEXT_PUBLIC_KUND - så byggs varje kundsajt med rätt innehåll.
 * Lokalt: sätt variabeln i .env.local, eller utelämna den för demokunden.
 */
const slug = process.env.NEXT_PUBLIC_KUND ?? STANDARDKUND;
const vald = KUNDER[slug as keyof typeof KUNDER];

if (!vald && process.env.NEXT_PUBLIC_KUND) {
  // Byggtidsfel är bättre än att fel kunds sajt publiceras i tysthet.
  throw new Error(
    `Okänd kund "${slug}" i NEXT_PUBLIC_KUND. Registrerade kunder: ${Object.keys(KUNDER).join(", ")}. ` +
      `Lägg till kunden i content/kunder.ts.`,
  );
}

/** Den aktiva kundens fullständiga konfiguration. */
export const restaurang = vald ?? KUNDER[STANDARDKUND];

/** Den aktiva kundens meny. */
export const meny = restaurang.meny;

/** Färdigt färgschema: art directionens standard + kundens överstyrningar. */
export const farger = byggFargschema(
  restaurang.design.artDirection,
  restaurang.design.farger,
);

/** Rundning i px enligt art direction, om kunden inte valt eget värde. */
export const rundning = byggRundning(
  restaurang.design.artDirection,
  restaurang.design.rundning,
);
