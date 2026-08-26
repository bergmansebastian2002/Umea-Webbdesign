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
  /** Allergener som visas diskret under rätten, t.ex. ["Nötter", "Laktos"]. */
  allergener?: string[];
  /** Lyfter fram rätten med en ram och etikett. */
  populär?: boolean;
  /** Bild för menyhöjdpunkter på startsidan, t.ex. "/kunder/bjorken/ratt-1.png". */
  bild?: string;
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
  /** Sektions-id:n som visas i startsidans smakprov. Utelämnad = de två första. */
  smakprov?: string[];
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

/**
 * Art direction - sajtens grundkaraktär. Väljer standardfärger och typsnitt.
 *  "klassisk"  varm, mörk, serifrubriker, guldaccent - fine dining, husmanskost
 *  "nordisk"   ljus, luftig, sans-serif - bistro, brunch, bageri
 *  "livlig"    hög kontrast, kraftiga färger - pizzeria, burgare, streetfood
 */
export type ArtDirection = "klassisk" | "nordisk" | "livlig";

/** Ett recensionscitat, t.ex. från Google. */
export type Recension = {
  text: string;
  /** Förnamn räcker, t.ex. "Anna L.". */
  namn: string;
  /** Var omdömet kommer ifrån, t.ex. "Google". */
  kalla?: string;
};

/** Restaurangens betyg - visas i social proof-sektionen och i strukturerad data. */
export type Betyg = {
  /** Snittbetyg 1-5, t.ex. 4.6. */
  snitt: number;
  /** Antal omdömen betyget bygger på. */
  antal: number;
  recensioner: Recension[];
};

/** Ett evenemang eller erbjudande, t.ex. julbord eller afterwork. */
export type Evenemang = {
  rubrik: string;
  beskrivning: string;
  /** Fritext, t.ex. "Fredagar 16-18" eller "1-23 december". */
  datumText?: string;
  /** Valfri länk, t.ex. till bokningen. */
  lank?: string;
};

/**
 * Sektioner som kan visas på startsidan, i valfri ordning.
 * Utelämna en sektion ur listan för att dölja den.
 */
export type Startsidesektion =
  | "omOss"
  | "menySmakprov"
  | "menyHojdpunkter"
  | "galleri"
  | "betyg"
  | "evenemang"
  | "bokaCta"
  | "hittaHit";

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
  /** Accentfärg - knappar, länkar, detaljer. Minst 4.5:1 mot vitt och bakgrund. */
  accent: string;
  /** Ljus accentvariant för text på mörka sektioner. Minst 4.5:1 mot primär. */
  accentPaMork: string;
  /** Textfärg ovanpå accentfärgen. */
  accentText: string;
  /** Linjer och avgränsare. */
  ram: string;
};

export type Restaurangkonfig = {
  /** Kort id för kunden: små bokstäver utan åäö, t.ex. "bjorken". */
  slug: string;
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
  /** Organisationsnummer, t.ex. "556677-8899". Utelämna tills det finns. */
  orgNr?: string;
  /** Sökväg till logotyp i /public, t.ex. "/kunder/bjorken/logotyp.svg". Utelämnas visas namnet i text. */
  logotyp?: string;

  kontakt: {
    telefon: string;
    /** Telefonnummer i internationellt format för klickbara länkar, t.ex. "+4690123456". */
    telefonLank: string;
    /** Publik e-postadress. Utelämna om restaurangen inte har någon - mejlraderna döljs då. */
    epost?: string;
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

  /**
   * Demo av "beställ och hämta"-flödet med Swish-knapp på /bestall.
   * Endast utseende: ingen riktig betalning eller orderhantering sker.
   * Utelämna fältet (eller sätt aktiv: false) så finns sidan inte.
   */
  bestallningDemo?: {
    aktiv: boolean;
    /** Kort text som visas överst på beställningssidan. */
    notis?: string;
  };

  /** Google-betyg och recensionscitat. Utelämna tills kunden har omdömen. */
  betyg?: Betyg;
  /** Evenemang och erbjudanden. Tom lista eller utelämnad döljer sektionen. */
  evenemang?: Evenemang[];

  oppettider: Oppettider;
  specialdagar: Specialdag[];
  /** Text som visas under öppettiderna, t.ex. "Köket stänger 30 min före stängning." */
  oppettiderNotering?: string;

  bilder: {
    /** Stor bild överst på startsidan. Liggande, minst 1920 px bred. */
    hero: string;
    /** Valfri kort, tyst videoloop (mp4/webm, max ~5 MB). Bilden blir reserv. */
    heroVideo?: string;
    /** Bild i "Om oss"-sektionen. */
    omOss: string;
    /** Beskrivning av om oss-bilden för skärmläsare och Google. */
    omOssAlt?: string;
    /**
     * Valfri egen delningsbild (1200 x 630 px). Utelämnas den genereras en
     * grafisk delningsbild automatiskt i kundens färger (next/og) - har
     * kunden en bild används den som bakgrund med namnet ovanpå.
     */
    delning?: string;
    galleri: Galleribild[];
  };

  design: {
    /** Grundkaraktär - sätter standardfärger. Se ArtDirection ovan. */
    artDirection: ArtDirection;
    /** Överstyr enskilda färger från art direction. Utelämna för standard. */
    farger?: Partial<Fardschema>;
    /** Rundade hörn i px. 0 = skarpa kanter, 4-8 = modernt, 16+ = mjukt. Utelämna för art directionens standard. */
    rundning?: number;
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

  /**
   * Genererad bilddata från `npm run bilder -- <slug>`: mått och suddiga
   * platshållare per bild. Importera bilddata.json i kundens config.
   */
  bilddata?: Record<string, { bredd: number; hojd: number; blur: string }>;

  /** Startsidans sektioner, i den ordning de ska visas. Hero visas alltid först. */
  startsidaSektioner: Startsidesektion[];

  /** Slår av/på funktioner på undersidorna. */
  sektioner: {
    karta: boolean;
    kontaktformular: boolean;
  };

  meny: Meny;
};
