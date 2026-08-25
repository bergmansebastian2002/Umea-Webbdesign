import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  RESTAURANG BJÖRKEN - demokund och mall för nya kunder.
 * ============================================================================
 *
 *  Detta är den enda filen (plus meny.json och bilderna) som ändras per kund.
 *  Kopiera hela mappen content/bjorken till content/<ny-slug>, ändra värdena,
 *  registrera kunden i content/kunder.ts - klart.
 *
 *  Menyn ligger i ./meny.json så att kunder som vill kan uppdatera den själva
 *  utan att röra kod. Vill du hellre ha menyn här i filen: definiera den som
 *  `const meny: Meny = { ... }` och ta bort JSON-importen.
 */
const meny = menyData as Meny;

const bjorken: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "bjorken",
  namn: "Restaurang Björken",
  slogan: "Norrländsk mat, lagad från grunden",
  kortBeskrivning:
    "Restaurang Björken i centrala Umeå serverar norrländsk husmanskost och säsongsmenyer på råvaror från Västerbotten. Boka bord för lunch, middag eller större sällskap.",
  omOssStycken: [
    "Björken öppnade med en enkel idé: att laga den mat vi själva vuxit upp med, på riktiga råvaror från trakten. Menyn följer årstiderna och skrivs om var sjätte vecka.",
    "Köket leds av vårt team med över tjugo års samlad erfarenhet från västerbottniska restaurangkök. Bröd, glass och charkuterier gör vi själva - i huset, varje dag.",
    "Matsalen rymmer 48 gäster och vi tar gärna emot sällskap och firanden. Hör av dig så sätter vi ihop en meny som passar er.",
  ],

  sajtUrl: "https://www.restaurangbjorken.se",
  // orgNr: "556677-8899",  // fylls i när det finns

  // --- Kontaktuppgifter ----------------------------------------------------
  kontakt: {
    telefon: "090-123 45 67",
    telefonLank: "+4690123456",
    epost: "boka@restaurangbjorken.se",
    gata: "Storgatan 42",
    postnummer: "903 26",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.8258,
    longitud: 20.263,
  },

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  // --- Bokning -------------------------------------------------------------
  bokning: {
    aktiv: true,
    lank: "https://www.bokabord.se/",
    knapptext: "Boka bord",
    hjalptext: "Eller ring oss på 090-123 45 67",
  },

  // --- Betyg och recensioner (visas i social proof-sektionen) --------------
  betyg: {
    snitt: 4.6,
    antal: 214,
    recensioner: [
      {
        text: "Bästa middagen vi ätit i Umeå. Renskaven var fantastisk och personalen fick oss att känna oss som stammisar.",
        namn: "Anna L.",
        kalla: "Google",
      },
      {
        text: "Äntligen ett ställe som vågar servera riktig norrländsk mat. Priserna är dessutom helt rimliga.",
        namn: "Johan S.",
        kalla: "Google",
      },
      {
        text: "Perfekt för både lunch och fredagsmiddag. Boka bord i förväg - det är fullt av en anledning.",
        namn: "Maria K.",
        kalla: "Google",
      },
    ],
  },

  // --- Evenemang och erbjudanden -------------------------------------------
  evenemang: [
    {
      rubrik: "Afterwork",
      beskrivning: "Bar öppen med snacksmeny och drinkar till AW-pris.",
      datumText: "Fredagar 16-18",
    },
    {
      rubrik: "Julbord",
      beskrivning: "Klassiskt norrländskt julbord med egna charkuterier. Förbokning krävs.",
      datumText: "1-23 december",
      lank: "https://www.bokabord.se/",
    },
  ],

  // --- Öppettider ----------------------------------------------------------
  oppettider: {
    mandag: { stangt: true },
    tisdag: { oppnar: "11:00", stanger: "22:00" },
    onsdag: { oppnar: "11:00", stanger: "22:00" },
    torsdag: { oppnar: "11:00", stanger: "23:00" },
    fredag: { oppnar: "11:00", stanger: "01:00" },
    lordag: { oppnar: "13:00", stanger: "01:00" },
    sondag: { oppnar: "13:00", stanger: "20:00", notering: "Endast à la carte" },
  },
  specialdagar: [
    { datum: "2026-12-24", namn: "Julafton", stangt: true },
    { datum: "2026-12-25", namn: "Juldagen", stangt: true },
    { datum: "2026-12-31", namn: "Nyårsafton", oppnar: "17:00", stanger: "02:00" },
  ],
  oppettiderNotering: "Köket stänger 45 minuter före stängning.",

  // --- Bilder --------------------------------------------------------------
  bilder: {
    hero: "/kunder/bjorken/hero.webp",
    omOss: "/kunder/bjorken/om-oss.webp",
    omOssAlt: "Serverad förrätt med vin i matsalens kvällsljus",
    delning: "/kunder/bjorken/delning.webp",
    galleri: [
      { kalla: "/kunder/bjorken/galleri/matsal.webp", alt: "Matsalen med dukade bord i varmt kvällsljus" },
      { kalla: "/kunder/bjorken/galleri/ratt-1.webp", alt: "Färgstark bowl med tofu, majs och säsongens grönsaker", staende: true },
      { kalla: "/kunder/bjorken/galleri/baren.webp", alt: "Bartendern silar upp en cocktail i baren" },
      { kalla: "/kunder/bjorken/galleri/koket.webp", alt: "Matlagning vid köksbänken" },
      { kalla: "/kunder/bjorken/galleri/ratt-2.webp", alt: "Dessert med glass, brownie och kolasås", staende: true },
      { kalla: "/kunder/bjorken/galleri/entre.webp", alt: "Ljus matplats omgiven av gröna växter", staende: true },
    ],
  },

  // --- Design --------------------------------------------------------------
  design: {
    // "klassisk" | "nordisk" | "livlig" - sätter färger och känsla.
    artDirection: "klassisk",
    // Överstyr enskilda färger vid behov, t.ex.: farger: { accent: "#7a1f1f" }
    // rundning: 8,
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Centrum",
    sokord: [
      "restaurang Umeå",
      "boka bord Umeå",
      "middag Umeå centrum",
      "lunch Umeå",
      "husmanskost Umeå",
      "norrländsk mat Umeå",
      "julbord Umeå",
      "äta ute Umeå",
    ],
    kokstyper: ["Norrländsk", "Svensk", "Husmanskost"],
    prisniva: "$$",
  },

  // --- Startsidans sektioner, i visningsordning ----------------------------
  startsidaSektioner: [
    "omOss",
    "menySmakprov",
    "galleri",
    "betyg",
    "evenemang",
    "bokaCta",
    "hittaHit",
  ],

  sektioner: {
    karta: true,
    kontaktformular: true,
  },

  bilddata,
  meny,
};

export default bjorken;
