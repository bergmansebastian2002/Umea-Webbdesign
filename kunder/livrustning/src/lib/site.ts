/**
 * All fakta om Livrustning samlad på ett ställe. Källor: nuvarande
 * livrustning.se (2026-09-18), kundens PDF:er om Säkerhetsdag och
 * eHLR-Event, kundens underlag "Hemsida åt Nice To Be Alive AB /
 * Livrustning AB" (2026-11-19) samt besked från Sebbe.
 * Ändra inga siffror utan kundens ok.
 */
export const foretag = {
  // Varumärket på sajten är Nice To Be Alive sedan 2026-11-22 (logga och namn).
  namn: "Nice To Be Alive",
  // Bolag, adress, org.nr och mejl enligt kundens underlag 2026-11-19.
  juridisktNamn: "Nice To Be Alive AB",
  slogan: "Kunskap för säkerhets skull",
  url: "https://www.livrustning.se",
  epost: "info@nicetobealive.se",
  telefon: "070-733 32 54",
  telefonHref: "tel:+46707333254",
  gata: "Katarina Bangata 26",
  postnummer: "116 39",
  ort: "Stockholm",
  orgnr: "559408-6547",
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
  sakerhetsdag: "Offert - Säkerhetsdag (halvdag)",
  ehlrEvent: "Offert - eHLR-Event (2 timmar)",
  digitalt: "Offert - eHLR och eFörstaHjälpen",
  kurs: "Offert - traditionell kurs på plats",
  familj: "Köp - eHLR-Familj",
  instruktor: "Instruktörsutbildning - datum och anmälan",
  hjartstartare: "Hjärtstartarpaket - frågor eller offert",
  hjartsakerZon: "Hjärtsäker zon - vill veta mer",
} as const;

/** Offertformuläret. `galler` fyller i vad förfrågan handlar om. */
export function offert(galler?: string) {
  return galler ? `/offert?galler=${encodeURIComponent(galler)}` : "/offert";
}

export type Utbildning = {
  slug: string;
  /** Namnet som rubrik på Utbildningar-sidan och i sidfoten. */
  namn: string;
  /** Namnet i menyn under Utbildningar. */
  menynamn: string;
  /** Ingressen under rubriken på Utbildningar-sidan. */
  pitch: string;
  /** Kort text under namnet i Utbildningar-menyn (max två rader). */
  menytext: string;
  href: string;
  amne: string;
  /** Länktexten på Utbildningar-sidan. */
  lanktext: string;
  /** Passar för / Upplägg / Fördel, med kundens egna formuleringar. */
  korthet?: { passar: string; upplagg: string; fordel: string };
};

// Ordning, namn och texter enligt kundens underlag 2026-11-19.
export const utbildningar: Utbildning[] = [
  {
    slug: "sakerhetsdag",
    namn: "Säkerhetsdag (Halvdag)",
    menynamn: "Säkerhetsdag",
    menytext: "En halvdag för hela personalen med praktiska stationer i brand, HLR och Första hjälpen.",
    pitch: "Utbilda hela personalen effektivt genom praktiska stationer inom brand, HLR och Första hjälpen.",
    href: "/utbildningar/sakerhetsdag",
    amne: amnen.sakerhetsdag,
    lanktext: "Läs mer och beställ offert här",
    korthet: {
      passar: "Alla företag som vill samla hela personalen under en gemensam säkerhetsdag.",
      upplagg:
        "Vi anpassar antalet instruktörer efter er gruppstorlek och varvar praktiska stationer med fokus på brand, HLR och Första hjälpen.",
      fordel: "Inget tak för antal deltagare. Perfekt för att skapa ett starkt, gemensamt säkerhetstänk på företaget.",
    },
  },
  {
    slug: "kurser-pa-plats",
    namn: "Traditionella kurser på plats",
    menynamn: "Kurser på plats",
    menytext: "Vuxen-HLR, Barn-HLR, Första hjälpen och brandskydd, anpassat efter er.",
    pitch: "Traditionella och anpassade kurser i vuxen-HLR, Barn-HLR, Första hjälpen och brandskydd.",
    href: "/utbildningar/kurser-pa-plats",
    amne: amnen.kurs,
    lanktext: "Läs mer och boka traditionell kurs här",
    korthet: {
      passar: "Företag med upp till 100 anställda.",
      upplagg:
        "Vi kommer till er arbetsplats, var som helst i Sverige. Max 12 deltagare per instruktör, och flera grupper kan utbildas parallellt eller efter varandra under samma dag.",
      fordel:
        "Ett tryggt och engagerande sätt att se till att upp till 100 % av personalen får aktuella kunskaper i HLR och Första hjälpen.",
    },
  },
  {
    slug: "ehlr-event",
    namn: "eHLR-Event",
    menynamn: "eHLR-Event",
    menytext: "HLR och hjärtstartare för hela personalen på två timmar, med praktisk träning.",
    pitch:
      "Ge hela personalstyrkan kunskap i HLR och hantering av hjärtstartare på bara två timmar inklusive praktisk träning.",
    href: "/utbildningar/ehlr-event",
    amne: amnen.ehlrEvent,
    lanktext: "Läs mer och beställ offert här",
    korthet: {
      passar: "Kick-off, teambuilding eller planeringsdagar när hela företaget är samlat.",
      upplagg:
        "Två intensiva och engagerande timmar. Våra instruktörer kommer till er och leder utbildningen på storskärm med hjälp av eHLR-metoden. Den praktiska träningen sker sedan i mindre grupper, med LED-dockor och träningshjärtstartare.",
      fordel: "Obegränsat antal deltagare. Ett fartfyllt och livsviktigt inslag på företagets gemensamma dag.",
    },
  },
  {
    slug: "ehlr-och-eforstahjalpen",
    namn: "eHLR och eFörstaHjälpen (Digitalt + praktisk träning)",
    menynamn: "eHLR & eFörstaHjälpen",
    menytext: "Digitalt med praktisk träning. Obegränsat antal medarbetare i 12 månader.",
    pitch:
      "Flexibelt digitalt lärande kombinerat med praktisk träning. Utbilda obegränsat antal medarbetare under 12 månader.",
    href: "/utbildningar/ehlr-och-eforstahjalpen",
    amne: amnen.digitalt,
    lanktext: "Läs mer och beställ offert här",
    korthet: {
      passar: "Större företag med 100 anställda och uppåt.",
      upplagg:
        "Era medarbetare får full tillgång till den digitala kursen i ett år, och träningsmaterialet skickar vi direkt till er arbetsplats. Var och en kan gå kursen i egen takt, eller så tränar ni tillsammans i grupp.",
      fordel:
        "Extremt kostnadseffektivt när många ska utbildas. Ni utbildar 100 % av personalen till en bråkdel av priset, samtidigt som tidsåtgången halveras och produktionsbortfallet minimeras. Metoden används idag av tusentals anställda på några av Sveriges största företag.",
    },
  },
  {
    slug: "ehlr-familj",
    namn: "eHLR-Familj",
    menynamn: "eHLR-Familj",
    menytext: "Digital HLR för hela familjen, för barn och vuxna. Med praktisk träning.",
    pitch:
      "Skydda dina närmaste med en digital utbildning med enkel praktisk träning för hela familjen. Alla vet då exakt vad man ska göra om ett barn eller en vuxen sätter i halsen eller drabbas av ett hjärtstopp.",
    href: "/utbildningar/ehlr-familj",
    amne: amnen.familj,
    lanktext: "Köp och ladda ner eHLR-Familj här",
    korthet: {
      passar: "Hela familjen och barnvakter som t.ex. mormor och morfar.",
      upplagg:
        "Digital utbildning med enkel praktisk träning i hemmet. Utbildningslicensen gäller för hela hushållet och är öppen i 3 månader. Köps direkt och betalas smidigt med Swish.",
      fordel:
        "Ger trygghet i vardagen så att ni vet exakt vad ni ska göra om ett barn eller en vuxen sätter i halsen eller drabbas av ett hjärtstopp.",
    },
  },
  {
    slug: "instruktorskurser",
    namn: "Instruktörsutbildningar",
    menynamn: "Instruktörsutbildning",
    menytext: "Bli instruktör i HLR och Första hjälpen och lär ut till kollegor, elever eller medlemmar.",
    pitch:
      "Bli instruktör i HLR och Första hjälpen. Du får behörighet och kunskap som gör dig redo att lära ut HLR och öva dina kollegor, elever eller medlemmar.",
    href: "/utbildningar/instruktorskurser",
    amne: amnen.instruktor,
    lanktext: "Läs mer om instruktörsutbildningarna",
  },
];

export function utbildning(slug: string) {
  const u = utbildningar.find((x) => x.slug === slug);
  if (!u) throw new Error(`Okänd utbildning: ${slug}`);
  return u;
}

export const meny = [
  { namn: "Utbildningar", href: "/utbildningar", barn: utbildningar },
  { namn: "Köp hjärtstartare", href: "/kop-hjartstartare" },
  { namn: "Så går det till", href: "/sa-gar-det-till" },
  { namn: "Hjärtsäker zon", href: "/hjartsaker-zon" },
  { namn: "Om oss", href: "/om-oss" },
  { namn: "Kontakt", href: "/kontakt" },
] as const;

/**
 * Kunder enligt kundens underlag 2026-11-19. Loggorna ska in som filer
 * (helst SVG) när kunden skickat dem; tills dess sätts namnen i text.
 */
export const kunder = [
  "Handelsbanken",
  "Atlas Copco",
  "ATEA",
  "Fastighetsbyrån",
  "Svenska kyrkan",
  "Hitachi",
  "Stockholms stad",
  "DB Schenker",
  "Sturebadet",
  "Folkbildningsrådet",
  "Itrim",
];
