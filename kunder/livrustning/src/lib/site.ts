/**
 * All fakta om Livrustning samlad på ett ställe. Källor: nuvarande
 * livrustning.se (2026-09-18), kundens PDF:er om Säkerhetsdag och
 * eHLR-Event samt besked från Sebbe. Ändra inga siffror utan kundens ok.
 */
export const foretag = {
  namn: "Livrustning",
  juridisktNamn: "Livrustning AB",
  slogan: "Kunskap för säkerhets skull",
  url: "https://www.livrustning.se",
  epost: "kontakt@livrustning.se",
  telefon: "070-733 32 54",
  telefonHref: "tel:+46707333254",
  gata: "Hökaren 49",
  postnummer: "907 88",
  ort: "Täfteå",
  orgnr: "556824-9022",
  baser: ["Stockholm", "Umeå", "Nerja i Spanien"],
  facebook: "https://www.facebook.com/livrustning.se/",
  instagram: "https://www.instagram.com/livrustning/",
  reco: "https://www.reco.se/livrustning-ab",
} as const;

/**
 * Sökmotorer får bara indexera sajten när den ligger på livrustning.se och
 * kunden godkänt innehållet. Sätt INDEXERA=ja i Vercel vid lansering.
 */
export const indexera = process.env.INDEXERA === "ja";

const brodtext =
  "Hej!\n\nVi är ungefär ___ personer.\nOrt: \nÖnskat datum: \n\nMed vänliga hälsningar\n";

/** Kontakta oss öppnar mejlprogrammet med förifylld ämnesrad, som på gamla sajten. */
export function mejl(amne: string, medMall = true) {
  const delar = [`subject=${encodeURIComponent(amne)}`];
  if (medMall) delar.push(`body=${encodeURIComponent(brodtext)}`);
  return `mailto:${foretag.epost}?${delar.join("&")}`;
}

export const amnen = {
  allmant: "Förfrågan via livrustning.se",
  sakerhetsdag: "Offert - Säkerhetsdag (4 timmar)",
  ehlrEvent: "Offert - eHLR-Event (2 timmar)",
  digitalt: "Mer info eller offert - eHLR eller eFörstaHjälpen",
  kurs: "Offert - kurs på plats",
  hjartsakerZon: "Hjärtsäker zon - vill veta mer",
} as const;

export type Utbildning = {
  slug: string;
  namn: string;
  kortnamn: string;
  pitch: string;
  href: string;
  amne: string;
};

export const utbildningar: Utbildning[] = [
  {
    slug: "sakerhetsdag",
    namn: "Säkerhetsdag",
    kortnamn: "Säkerhetsdag",
    pitch: "Brand, HLR och första hjälpen på en halvdag, i fyra stationer.",
    href: "/utbildningar/sakerhetsdag",
    amne: amnen.sakerhetsdag,
  },
  {
    slug: "ehlr-event",
    namn: "eHLR-Event",
    kortnamn: "eHLR-Event",
    pitch: "Hela personalen utbildad i HLR med hjärtstartare på två timmar.",
    href: "/utbildningar/ehlr-event",
    amne: amnen.ehlrEvent,
  },
  {
    slug: "ehlr-och-eforstahjalpen",
    namn: "eHLR och eFörstaHjälpen",
    kortnamn: "Digitalt",
    pitch: "Digitalt lärande och praktisk träning, med ett års access för repetition.",
    href: "/utbildningar/ehlr-och-eforstahjalpen",
    amne: amnen.digitalt,
  },
  {
    slug: "kurser-pa-plats",
    namn: "Kurser på plats",
    kortnamn: "Kurser på plats",
    pitch: "Klassiska kurser i HLR, första hjälpen och brand i små grupper.",
    href: "/utbildningar/kurser-pa-plats",
    amne: amnen.kurs,
  },
];

export const meny = [
  { namn: "Utbildningar", href: "/utbildningar", barn: utbildningar },
  { namn: "Så går det till", href: "/sa-gar-det-till" },
  { namn: "Hjärtsäker zon", href: "/hjartsaker-zon" },
  { namn: "Om oss", href: "/om-oss" },
  { namn: "Kontakt", href: "/kontakt" },
] as const;

/**
 * Kunder som Livrustning själva tackat i egna Facebookinlägg 2020-2022.
 * FÖRSLAG: måste godkännas av Livrustning innan sajten publiceras.
 */
export const kunder = [
  "Handelsbanken",
  "Svenska Filminstitutet",
  "Spritmuseum",
  "Armémuseum",
  "Kraftringen",
  "Tyska skolan",
];
