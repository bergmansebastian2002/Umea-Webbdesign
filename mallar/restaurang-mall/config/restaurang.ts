import type { Restaurangkonfig } from "@/lib/typer";

/**
 * ============================================================================
 *  KUNDKONFIGURATION - detta är den enda filen du normalt behöver ändra i.
 * ============================================================================
 *
 *  Allt på sajten (namn, färger, texter, öppettider, karta, bokningslänk och
 *  SEO) styrs härifrån. Menyn ligger separat i `content/meny.ts`.
 *
 *  Exempeldatan nedan tillhör en påhittad restaurang. Byt ut ALLT innan
 *  publicering - särskilt telefon, e-post och adress.
 */
export const restaurang: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  namn: "Björk & Salt",
  slogan: "Nordisk bistro i hjärtat av Umeå",
  kortBeskrivning:
    "Björk & Salt är en nordisk bistro i centrala Umeå där vi lagar allt från grunden på råvaror från Västerbotten. Boka bord för lunch, middag eller en långsam kväll vid elden.",
  omOssStycken: [
    "Vi öppnade Björk & Salt med en enkel tanke: att laga mat på det som växer, betar och simmar närmast oss. Menyn följer årstiderna och skrivs om var sjätte vecka.",
    "Köket leds av vårt team som tillsammans har över tjugo år i västerbottniska restaurangkök. Bröd, pasta, glass och charkuterier gör vi själva - i huset, varje dag.",
    "Matsalen rymmer 48 gäster och vi tar gärna emot sällskap. Hör av dig så löser vi en meny som passar er.",
  ],

  // Byt till kundens riktiga domän. Ingen avslutande snedstreck.
  sajtUrl: "https://www.bjorkochsalt.se",

  // --- Kontaktuppgifter ----------------------------------------------------
  kontakt: {
    telefon: "090-123 45 67",
    telefonLank: "+4690123456",
    epost: "boka@bjorkochsalt.se",
    gata: "Storgatan 42",
    postnummer: "903 26",
    ort: "Umeå",
    land: "Sverige",
    // Hämta koordinater: högerklicka på platsen i Google Maps -> klicka på siffrorna.
    latitud: 63.8258,
    longitud: 20.2630,
  },

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    // tripadvisor: "https://www.tripadvisor.se/",
    // google: "https://g.page/r/...",
  },

  // --- Bokning -------------------------------------------------------------
  bokning: {
    aktiv: true,
    // Klistra in kundens länk från Caspeco, Bokabord, OpenTable, Resy m.fl.
    lank: "https://www.bokabord.se/",
    knapptext: "Boka bord",
    hjalptext: "Eller ring oss på 090-123 45 67",
  },

  // --- Öppettider ----------------------------------------------------------
  // Format "HH:MM". Sätt { stangt: true } för stängda dagar.
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
  // Lägg kundens bilder i /public/bilder/ och peka hit.
  bilder: {
    hero: "/bilder/hero.png",
    omOss: "/bilder/om-oss.png",
    delning: "/bilder/delning.png",
    galleri: [
      { kalla: "/bilder/galleri/matsal.png", alt: "Matsalen med dukade bord och levande ljus" },
      { kalla: "/bilder/galleri/ratt-1.png", alt: "Halstrad röding med brynt smör och dill", staende: true },
      { kalla: "/bilder/galleri/baren.png", alt: "Baren med utvalda viner och cocktails" },
      { kalla: "/bilder/galleri/koket.png", alt: "Köket i arbete under kvällsservicen" },
      { kalla: "/bilder/galleri/ratt-2.png", alt: "Dessert med hjortron och gräddglass" },
      { kalla: "/bilder/galleri/entre.png", alt: "Entrén till Björk & Salt på Storgatan" },
    ],
  },

  // --- Design --------------------------------------------------------------
  // Alla färger anges som HEX. Testa kontrasten på webaim.org/resources/contrastchecker
  design: {
    farger: {
      bakgrund: "#faf8f5",
      yta: "#ffffff",
      text: "#1c1a17",
      textDampad: "#6b645b",
      primar: "#1f2b26",
      accent: "#a8763e",
      accentText: "#ffffff",
      ram: "#e6e0d7",
    },
    // Typsnitt väljs i src/lib/typsnitt/index.ts (en rad).
    rundning: 4,
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
      "nordisk mat Umeå",
      "bistro Umeå",
      "äta ute Umeå",
    ],
    kokstyper: ["Nordisk", "Svensk", "Bistro"],
    prisniva: "$$",
  },

  // --- Sektioner på/av ------------------------------------------------------
  sektioner: {
    galleri: true,
    omOss: true,
    karta: true,
    kontaktformular: true,
  },
};

export default restaurang;
