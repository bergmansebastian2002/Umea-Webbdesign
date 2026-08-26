import { meny, restaurang } from "@/lib/kund";
import { absolutUrl, sajtUrl } from "@/lib/seo";
import { SCHEMA_DAGNAMN } from "@/lib/oppettider";
import { VECKODAGAR } from "@/lib/typer";

/**
 * Strukturerad data (JSON-LD) enligt schema.org.
 *
 * Det här är det som gör att Google kan visa öppettider, adress, prisnivå,
 * betyg och en "Boka bord"-knapp direkt i sökresultatet och på Google Maps.
 * Testa resultatet på https://search.google.com/test/rich-results
 */

const ORGANISATION_ID = `${sajtUrl}/#restaurang`;

/** Huvudschemat för restaurangen. Läggs in på varje sida. */
export function restaurangSchema() {
  const oppettider = VECKODAGAR.filter(
    (dag) => !restaurang.oppettider[dag].stangt,
  ).map((dag) => {
    const tid = restaurang.oppettider[dag];
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${SCHEMA_DAGNAMN[dag]}`,
      opens: tid.stangt ? undefined : tid.oppnar,
      closes: tid.stangt ? undefined : tid.stanger,
    };
  });

  const specialdagar = restaurang.specialdagar.map((dag) => ({
    "@type": "OpeningHoursSpecification",
    validFrom: dag.datum,
    validThrough: dag.datum,
    opens: dag.stangt ? "00:00" : dag.oppnar,
    closes: dag.stangt ? "00:00" : dag.stanger,
  }));

  const sociala = Object.values(restaurang.social).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": ORGANISATION_ID,
    name: restaurang.namn,
    description: restaurang.kortBeskrivning,
    url: sajtUrl,
    telephone: restaurang.kontakt.telefonLank,
    ...(restaurang.kontakt.epost ? { email: restaurang.kontakt.epost } : {}),
    image: absolutUrl(restaurang.bilder.hero),
    logo: absolutUrl(restaurang.logotyp ?? restaurang.bilder.delning ?? restaurang.bilder.hero),
    priceRange: restaurang.seo.prisniva,
    servesCuisine: restaurang.seo.kokstyper,
    currenciesAccepted: "SEK",
    paymentAccepted: "Kort, Swish, Kontant",
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurang.kontakt.gata,
      postalCode: restaurang.kontakt.postnummer,
      addressLocality: restaurang.kontakt.ort,
      addressRegion: restaurang.kontakt.ort,
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: restaurang.kontakt.latitud,
      longitude: restaurang.kontakt.longitud,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${restaurang.kontakt.latitud},${restaurang.kontakt.longitud}`,
    openingHoursSpecification: [...oppettider, ...specialdagar],
    // Bokning via telefon räknas också - bokning.aktiv styr bara om det
    // finns ett onlinesystem (ReserveAction nedan), inte om bord kan bokas.
    acceptsReservations: true,
    hasMenu: absolutUrl("/meny"),
    ...(sociala.length > 0 ? { sameAs: sociala } : {}),
    ...(restaurang.betyg
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: restaurang.betyg.snitt,
            reviewCount: restaurang.betyg.antal,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    ...(restaurang.bokning.aktiv
      ? {
          potentialAction: {
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: restaurang.bokning.lank,
              inLanguage: "sv-SE",
              actionPlatform: [
                "https://schema.org/DesktopWebPlatform",
                "https://schema.org/MobileWebPlatform",
              ],
            },
            result: { "@type": "FoodEstablishmentReservation", name: "Bordsbokning" },
          },
        }
      : {}),
  };
}

/** Menyn som schema.org-Menu, så Google kan läsa rätter och priser. */
export function menySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${meny.rubrik} - ${restaurang.namn}`,
    inLanguage: "sv-SE",
    url: absolutUrl("/meny"),
    hasMenuSection: meny.sektioner.map((sektion) => ({
      "@type": "MenuSection",
      name: sektion.rubrik,
      description: sektion.beskrivning,
      hasMenuItem: sektion.ratter.map((ratt) => ({
        "@type": "MenuItem",
        name: ratt.namn,
        description: ratt.beskrivning,
        ...(typeof ratt.pris === "number"
          ? { offers: { "@type": "Offer", price: ratt.pris, priceCurrency: "SEK" } }
          : {}),
        ...(ratt.markningar?.length
          ? { suitableForDiet: ratt.markningar.map(kostSchema).filter(Boolean) }
          : {}),
      })),
    })),
  };
}

function kostSchema(markning: string): string | undefined {
  const karta: Record<string, string> = {
    vegetariskt: "https://schema.org/VegetarianDiet",
    vegansk: "https://schema.org/VeganDiet",
    veganskt: "https://schema.org/VeganDiet",
    glutenfri: "https://schema.org/GlutenFreeDiet",
    glutenfritt: "https://schema.org/GlutenFreeDiet",
  };
  return karta[markning.toLowerCase()];
}

/** Brödsmulor så Google visar sidhierarkin i sökresultatet. */
export function brodsmulorSchema(smulor: { namn: string; sokvag: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: smulor.map((smula, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: smula.namn,
      item: absolutUrl(smula.sokvag),
    })),
  };
}

/** Renderar ett JSON-LD-script. Används i sidornas layout. */
export function jsonLd(data: object) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\u003c"),
  };
}
