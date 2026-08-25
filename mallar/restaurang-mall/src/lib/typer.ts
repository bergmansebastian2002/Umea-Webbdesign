/**
 * Typdefinitioner för restaurangmallen.
 *
 * Du behöver normalt INTE ändra i den här filen när du bygger en ny kundsajt.
 * Den finns här för att ge dig autocomplete och felmeddelanden direkt i editorn
 * om något saknas i `config/restaurang.ts`.
 */

/** Veckodagar i svensk ordning (måndag först). */
export const VECKODAGAR = [
  "mandag",
  "tisdag",
  "onsdag",
  "torsdag",
  "fredag",
  "lordag",
  "sondag",
] as const;

export type Veckodag = (typeof VECKODAGAR)[number];

/**
 * Öppettid för en dag.
 * Sätt `stangt: true` för stängda dagar. Använd formatet "HH:MM" (24-timmars).
 */
export type Oppettid =
  | { stangt: true; notering?: string }
  | { stangt?: false; oppnar: string; stanger: string; notering?: string };

export type Oppettider = Record<Veckodag, Oppettid>;

/** En avvikande dag, t.ex. röd dag eller semesterstängt. */
export type Specialdag = {
  /** Datum i formatet "2026-12-24". */
  datum: string;
  /** Visas för besökaren, t.ex. "Julafton". */
  namn: string;
  stangt?: boolean;
  oppnar?: string;
  stanger?: string;
};

export type Menyratt = {
  namn: string;
  beskrivning?: string;
  /** Pris i kronor. Utelämna för rätter med dagspris. */
  pris?: number;
  /** Visas istället för pris, t.ex. "Dagens pris". */
  prisText?: string;
  /** Märkningar som visas som små etiketter, t.ex. ["Vegetariskt", "Glutenfri"]. */
  markningar?: string[];
  /** Lyfter fram rätten med en ram och etikett. */
  populär?: boolean;
};

export type Menysektion = {
  /** Kort id som används i länkar, t.ex. "forratter". Endast a-z och bindestreck. */
  id: string;
  rubrik: string;
  beskrivning?: string;
  ratter: Menyratt[];
};

export type Meny = {
  /** Visas överst på menysidan, t.ex. "Meny hösten 2026". */
  rubrik: string;
  ingress?: string;
  /** Liten notis under menyn, t.ex. allergiinformation. */
  fotnot?: string;
  sektioner: Menysektion[];
};

export type Galleribild = {
  /** Sökväg från /public, t.ex. "/bilder/galleri/matsal.jpg". */
  kalla: string;
  /** Beskrivning för skärmläsare och Google. Skriv den beskrivande och på svenska. */
  alt: string;
  /** Sätt true för stående bilder så de får dubbel höjd i rutnätet. */
  staende?: boolean;
};

export type Fardschema = {
  /** Bakgrund på sajten. Ljus, dämpad ton fungerar bäst. */
  bakgrund: string;
  /** Bakgrund på "upphöjda" ytor som kort och menyrader. */
  yta: string;
  /** Huvudsaklig textfärg. */
  text: string;
  /** Dämpad text: ingresser, bildtexter, öppettider. */
  textDampad: string;
  /** Profilfärg - rubriker, footer, mörka sektioner. */
  primar: string;
  /** Accentfärg - knappar, länkar, detaljer. Ska synas mot både bakgrund och primär. */
  accent: string;
  /** Textfärg ovanpå accentfärgen. */
  accentText: string;
  /** Linjer och avgränsare. */
  ram: string;
};

export type Restaurangkonfig = {
  /** Restaurangens namn, exakt som det ska visas. */
  namn: string;
  /** Kort slogan under logotypen, t.ex. "Nordisk bistro i Umeå". */
  slogan: string;
  /** 1-2 meningar som beskriver stället. Används i metabeskrivningar. */
  kortBeskrivning: string;
  /** Längre text till "Om oss". Varje sträng blir ett stycke. */
  omOssStycken: string[];

  /** Publik adress inklusive https, utan avslutande snedstreck. */
  sajtUrl: string;

  kontakt: {
    telefon: string;
    /** Telefonnummer i internationellt format för klickbara länkar, t.ex. "+4690123456". */
    telefonLank: string;
    epost: string;
    gata: string;
    postnummer: string;
    ort: string;
    land: string;
    /** Koordinater för karta och Google. Hämta genom att högerklicka i Google Maps. */
    latitud: number;
    longitud: number;
  };

  /** Länkar till sociala medier. Utelämna de kunden inte har. */
  social: {
    facebook?: string;
    instagram?: string;
    tripadvisor?: string;
    google?: string;
  };

  bokning: {
    /** Sätt false om restaurangen bara tar bokningar via telefon. */
    aktiv: boolean;
    /** Länk till externt bokningssystem (Caspeco, Bokabord, OpenTable, Resy ...). */
    lank: string;
    /** Text på knappen. */
    knapptext: string;
    /** Kort rad under knappen, t.ex. "Eller ring oss på 090-123 45 67". */
    hjalptext?: string;
  };

  oppettider: Oppettider;
  specialdagar: Specialdag[];
  /** Text som visas under öppettiderna, t.ex. "Köket stänger 30 min före stängning." */
  oppettiderNotering?: string;

  bilder: {
    /** Stor bild överst på startsidan. Liggande, minst 1920 px bred. */
    hero: string;
    /** Bild i "Om oss"-sektionen. */
    omOss: string;
    /** Delningsbild för Facebook, Instagram och Google. Exakt 1200 x 630 px. */
    delning: string;
    galleri: Galleribild[];
  };

  design: {
    farger: Fardschema;
    /** Rundade hörn i px. 0 = skarpa kanter, 4-8 = modernt, 16+ = mjukt. */
    rundning: number;
  };

  seo: {
    /** Orten restaurangen ligger i - används i titlar och strukturerad data. */
    stad: string;
    /** Stadsdel eller område, t.ex. "Centrum". Utelämna om det inte är relevant. */
    omrade?: string;
    /**
     * Lokala sökord. Skriv som en besökare söker, t.ex.
     * "restaurang Umeå", "boka bord Umeå centrum", "lunch Umeå".
     */
    sokord: string[];
    /** Kökstyper enligt Google, t.ex. ["Nordisk", "Svensk"]. */
    kokstyper: string[];
    /** Prisnivå enligt Google: "$", "$$", "$$$" eller "$$$$". */
    prisniva: "$" | "$$" | "$$$" | "$$$$";
  };

  /** Slår av/på hela sektioner utan att röra koden. */
  sektioner: {
    galleri: boolean;
    omOss: boolean;
    karta: boolean;
    kontaktformular: boolean;
  };
};
