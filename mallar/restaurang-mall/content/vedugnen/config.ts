import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  PIZZERIA VEDUGNEN - FIKTIV demokund (kvarterspizzeria, mindre budget).
 * ============================================================================
 *
 *  Pizzerian finns inte på riktigt. Den används som exempel på byråsajten
 *  för att visa att mallen även passar en enklare, varmare kvarterskrog.
 *  Alla uppgifter är påhittade och alla bilder är Unsplash-demobilder
 *  (se BILDRATTIGHETER.md).
 */
const meny = menyData as Meny;

const vedugnen: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "vedugnen",
  namn: "Pizzeria Vedugnen",
  slogan: "Surdegspizza ur vedugnen, mitt i kvarteret",
  kortBeskrivning:
    "Pizzeria Vedugnen är en fiktiv demorestaurang: en kvarterspizzeria i Umeå " +
    "med surdegspizza ur vedugn. Sajten visar hur en enklare restauranghemsida " +
    "från Umeå Webbdesign kan se ut.",
  omOssStycken: [
    "Vedugnen är en påhittad pizzeria - tänk kvarterskrogen där degen jäser i två dygn, ugnen håller 450 grader och pizzan är klar på nittio sekunder.",
    "Menyn är kort och ärlig: klassikerna görs ordentligt, specialpizzorna byts efter säsong och allt går lika bra att ta med hem som att äta på plats.",
    "Hos oss är det välkommet med barnkalas, fredagsmys och stora sällskap. Ring så står lådorna klara när du kommer.",
  ],

  sajtUrl: "https://pizzeria-vedugnen.vercel.app",

  // --- Kontaktuppgifter (påhittade demouppgifter) --------------------------
  kontakt: {
    telefon: "090-765 43 21",
    telefonLank: "+4690765432",
    epost: "hej@pizzeriavedugnen.se",
    gata: "Östra Kyrkogatan 8",
    postnummer: "903 30",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.8285,
    longitud: 20.2706,
  },

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  // --- Bokning: ring oss, helt enkelt --------------------------------------
  bokning: {
    aktiv: false,
    lank: "",
    knapptext: "Boka bord",
  },

  // --- Betyg och recensioner (demodata) ------------------------------------
  betyg: {
    snitt: 4.5,
    antal: 327,
    recensioner: [
      {
        text: "Bästa pizzan i Umeå, punkt. Kanterna är som små kuddar och de snålar aldrig med toppingen.",
        namn: "Jonas B.",
        kalla: "Google",
      },
      {
        text: "Alltid snabbt, alltid varmt, alltid trevliga. Vår fredagstradition sedan två år.",
        namn: "Amina K.",
        kalla: "Google",
      },
      {
        text: "Margheritan med buffelmozzarella är löjligt bra för priset.",
        namn: "Erik N.",
        kalla: "Google",
      },
    ],
  },

  // --- Evenemang och erbjudanden -------------------------------------------
  evenemang: [
    {
      rubrik: "Lunchpizza",
      beskrivning: "Valfri klassiker, sallad och dryck till fast pris.",
      datumText: "Vardagar 11-14",
    },
    {
      rubrik: "Familjefredag",
      beskrivning: "Två stora och två små pizzor till paketpris. Ring och beställ för avhämtning.",
      datumText: "Fredagar",
    },
  ],

  // --- Öppettider ----------------------------------------------------------
  oppettider: {
    mandag: { oppnar: "11:00", stanger: "21:00" },
    tisdag: { oppnar: "11:00", stanger: "21:00" },
    onsdag: { oppnar: "11:00", stanger: "21:00" },
    torsdag: { oppnar: "11:00", stanger: "21:00" },
    fredag: { oppnar: "11:00", stanger: "22:00" },
    lordag: { oppnar: "12:00", stanger: "22:00" },
    sondag: { oppnar: "12:00", stanger: "21:00" },
  },
  specialdagar: [],
  oppettiderNotering: "Sista beställning 30 minuter före stängning.",

  // --- Bilder --------------------------------------------------------------
  bilder: {
    hero: "/kunder/vedugnen/hero.webp",
    omOss: "/kunder/vedugnen/om-oss.webp",
    omOssAlt: "Lokalen med träbord, bardisk och hängande lampor",
    delning: "/kunder/vedugnen/delning.webp",
    galleri: [
      { kalla: "/kunder/vedugnen/galleri/mat-margherita.webp", alt: "Nygräddad margherita med buffelmozzarella och basilika" },
      { kalla: "/kunder/vedugnen/galleri/mat-bbq.webp", alt: "Pizza med kyckling, rödlök och barbecuesås", staende: true },
      { kalla: "/kunder/vedugnen/galleri/ugnen.webp", alt: "Pizza på spaden framför den glödande vedugnen" },
      { kalla: "/kunder/vedugnen/galleri/mat-burrata.webp", alt: "Pizza toppad med burrata och ruccola" },
      { kalla: "/kunder/vedugnen/galleri/mat-ost.webp", alt: "Skivad ostpizza på träbricka" },
    ],
  },

  // --- Design: varm och livlig kvarterskänsla ------------------------------
  design: {
    artDirection: "livlig",
    farger: {
      bakgrund: "#faf6ee",
      yta: "#fffcf5",
      primar: "#1f2a1d",
      accent: "#a63c22",
      accentPaMork: "#ffb494",
      ram: "#e7dfcd",
    },
    rundning: 12,
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Centrum",
    sokord: [
      "pizzeria Umeå",
      "pizza Umeå centrum",
      "vedugnspizza Umeå",
      "surdegspizza Umeå",
      "pizza avhämtning Umeå",
      "lunchpizza Umeå",
    ],
    kokstyper: ["Pizza", "Italienskt"],
    prisniva: "$",
  },

  // --- Startsidan: meny först, sedan bilder och omdömen --------------------
  startsidaSektioner: [
    "menySmakprov",
    "evenemang",
    "bildspel",
    "omOss",
    "betyg",
    "bokaCta",
    "hittaHit",
  ],

  sektioner: {
    karta: true,
    // Ingen e-postmottagning konfigurerad för demoprojektet.
    kontaktformular: false,
  },

  bilddata,
  meny,
};

export default vedugnen;
