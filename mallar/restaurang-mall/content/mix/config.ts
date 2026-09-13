import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  RESTAURANG MIX - Björnvägen 11 (Affärshuset Mariedal), Umeå.
 * ============================================================================
 *
 *  Modernisering av restaurangmix.se (WordPress-sajt "Skapad av BD 2020" där
 *  kontaktsidan fortfarande innehöll temats demo-innehåll). Adress, telefon,
 *  öppettider, lunchinfo och HELA menyn med priser är avlästa från befintliga
 *  sajten september 2026 och får inte ändras utan avstämning med kunden.
 *
 *  - Restaurangen kallar sig "Europeisk restaurang i Umeå" - lunchbuffé med
 *    husmanskost och asiatiska grytor, stor à la carte med pizza/pasta/kött,
 *    kebab och en mellanöstern-inspirerad grillmeny (utan priser på gamla
 *    sajten - därför prislösa rader med "ring oss" i sektionstexten).
 *  - Varsamt normaliserad stavning från gamla sajten: "Bruchetta"->Bruschetta,
 *    "Pagora"->pakora, "Ceasarsallad"->Caesarsallad, "Pankaka"->Pannkaka,
 *    "Kollgrillad"->kolgrillad. Egennamn som "Onion vazi", "Margarita" och
 *    "Vegetaria" är kvar som kunden skriver dem. Gyrosrullen låg sist i
 *    pizzalistan på gamla sajten men är flyttad till rullarna. STÄM AV med
 *    kunden före lansering.
 *  - Ingen publik e-postadress fanns - mejlrader döljs och formuläret är av.
 *  - Instagram-flödet på gamla sajten visade @restaurangmixumea (trasig
 *    token); Facebook-länken pekade på sidan Restaurang-Mix-443287149051958.
 *  - Koordinaterna pekar på Affärshuset Mariedal, Björnvägen 11 (OpenStreetMap)
 *    - finjustera kartnålen mot Google Maps vid överlämningen.
 *
 *  Färgerna är hämtade direkt ur kundens logotyp (uppmätt i originalfilen):
 *  grönt #007F3D och rött #ED1C24 på vitt - klassisk italiensk pizzeria.
 *  Accentröd är något mörkad för WCAG AA mot vitt/bakgrund.
 *
 *  Logotypen är kundens egen (hämtad i hög upplösning från gamla sajten).
 *  Alla FOTON är platshållare från Unsplash - se BILDRATTIGHETER.md.
 */
const meny = menyData as Meny;

const mix: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "mix",
  namn: "Restaurang Mix",
  slogan: "Europeisk restaurang i Umeå",
  kortBeskrivning:
    "Restaurang Mix på Björnvägen 11 i Umeå serverar lunchbuffé med riktig husmanskost, pizza, pasta, kötträtter, kebab och grill från Mellanöstern. Ät på plats eller ring 090-14 24 14 och hämta. Öppet alla dagar 10:30-21:00.",
  omOssStycken: [
    "Restaurang Mix är precis vad namnet lovar - en europeisk restaurang där hela familjen hittar något att tycka om. Hos oss på Björnvägen 11 i Mariedal möts riktig svensk husmanskost, italiensk pizza och pasta, grillade kötträtter och smakrik grill från Mellanöstern under samma tak.",
    "Varje vardag och lördag dukar vi upp vår omtyckta lunchbuffé med husmanskost och asiatiska grytor, salladsbuffé, stekt och kokt potatis och olika såser - och minst en fiskrätt ingår alltid. Vill du hellre välja själv går det förstås lika bra att beställa från à la carte-menyn.",
    "På kvällen tar à la carte-menyn över: ett femtiotal pizzor, pasta, schnitzel och stekar, kebab och hamburgare - och vår mellanöstern-inspirerade grillmeny med shish kebab, lammspett och hel kolgrillad kyckling. Gluten- och laktosfria alternativ finns, det är bara att fråga oss.",
    "Du hittar oss i Affärshuset Mariedal på Björnvägen 11, med gott om parkering utanför. Ät på plats i matsalen eller ring 090-14 24 14 så står maten klar för avhämtning. Vi ordnar även catering till fester och företag. Varmt välkommen in!",
  ],

  sajtUrl: "https://restaurang-mix.vercel.app",
  logotyp: "/kunder/mix/logotyp.webp",

  // --- Kontaktuppgifter (från restaurangmix.se) ----------------------------
  kontakt: {
    telefon: "090-14 24 14",
    telefonLank: "+4690142414",
    // Ingen publik e-postadress på gamla sajten - mejlrader döljs.
    gata: "Björnvägen 11",
    postnummer: "906 40",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.8479,
    longitud: 20.3114,
  },

  social: {
    facebook: "https://www.facebook.com/Restaurang-Mix-443287149051958/",
    instagram: "https://www.instagram.com/restaurangmixumea/",
  },

  // --- Bokning: endast via telefon idag ------------------------------------
  bokning: {
    aktiv: false,
    lank: "",
    knapptext: "Boka bord",
  },

  // --- Beställ och hämta ----------------------------------------------------
  // OBS: swishNummer saknas - fyll i kundens Swish företag-nummer när det finns.
  bestallningDemo: {
    aktiv: true,
    notis:
      "Välj dina rätter och betala med Swish eller kort - sedan hämtar du maten hos oss på Björnvägen 11. Du kan alltid ringa in din beställning på 090-14 24 14. Avhämtning alla dagar 10:30-21:00.",
  },

  // --- Lunchbuffé, avhämtning och catering (från gamla sajten) --------------
  evenemang: [
    {
      rubrik: "Lunchbuffé",
      beskrivning:
        "Riktig husmanskost och asiatiska grytor, salladsbuffé, stekt och kokt potatis och olika såser - minst en fiskrätt ingår alltid. Det går även att beställa valfri rätt från à la carte-menyn.",
      datumText: "Vardagar 10:30-14:00 · Lördag 12:00-15:00",
    },
    {
      rubrik: "Avhämtning",
      beskrivning:
        "Hela menyn går att hämta - pizza, pasta, kebab, grill och kötträtter. Ring 090-14 24 14 så står maten klar när du kommer.",
      datumText: "Alla dagar 10:30-21:00",
    },
    {
      rubrik: "Catering",
      beskrivning:
        "Fest, möte eller kalas? Vi hjälper dig sätta ihop en meny som passar sällskapet - från grillfat till hela buffér. Kontakta oss så berättar vi mer.",
      datumText: "Enligt överenskommelse",
    },
  ],

  // --- Öppettider (från gamla sajten: alla dagar 10:30-21:00) ---------------
  oppettider: {
    mandag: { oppnar: "10:30", stanger: "21:00" },
    tisdag: { oppnar: "10:30", stanger: "21:00" },
    onsdag: { oppnar: "10:30", stanger: "21:00" },
    torsdag: { oppnar: "10:30", stanger: "21:00" },
    fredag: { oppnar: "10:30", stanger: "21:00" },
    lordag: { oppnar: "10:30", stanger: "21:00" },
    sondag: { oppnar: "10:30", stanger: "21:00" },
  },
  specialdagar: [],
  oppettiderNotering: "Kvällsservering från 17:00. Lunch serveras vardagar 10:30-14:00 och lördagar 12:00-15:00.",

  // --- Bilder: logotypen är kundens, alla foton är platshållare -------------
  // Byt en bild genom att lägga nytt foto i content/mix/bilder/ (samma
  // filnamn), köra `npm run bilder -- mix` och uppdatera alt-texten här.
  bilder: {
    hero: "/kunder/mix/hero.webp",
    omOss: "/kunder/mix/om-oss.webp",
    omOssAlt: "Varm restaurangmatsal med dukade bord och öppet kök",
    galleri: [
      { kalla: "/kunder/mix/galleri/pizza.webp", alt: "Nygräddad pizza med mozzarella och färsk basilika" },
      { kalla: "/kunder/mix/galleri/grillspett.webp", alt: "Grillfat med spett, kyckling och grillade grönsaker på nybakat bröd", staende: true },
      { kalla: "/kunder/mix/galleri/pasta.webp", alt: "Pennepasta i tomatsås med köttfärs och svartpeppar" },
      { kalla: "/kunder/mix/galleri/planka.webp", alt: "Grillad stek med pommes frites på vitt fat" },
      { kalla: "/kunder/mix/galleri/hamburgare.webp", alt: "Hamburgare med dressing, sallad, tomat och picklad gurka" },
      { kalla: "/kunder/mix/galleri/sallad.webp", alt: "Färgglad salladsskål med tomat, avokado och kikärtor" },
    ],
  },

  // --- Design: hämtad ur kundens logotyp ------------------------------------
  // Grönt (#007F3D) och rött (#ED1C24) ur logotypen - klassisk pizzeria på
  // gräddvit botten. Accentröd mörkad till #d51920 för AA mot vitt (4,5:1).
  // Rubrikerna sätts i Lobster ("skript") som ekar logotypens målade
  // "Restaurang"-skript och skiljer sajten från Ronyas (samma art direction).
  design: {
    artDirection: "livlig",
    rubrikTypsnitt: "skript",
    farger: {
      bakgrund: "#faf7ee",
      yta: "#fffdf6",
      text: "#1a1a14",
      textDampad: "#605e50",
      primar: "#0e4426",
      accent: "#d51920",
      accentPaMork: "#f5c983",
      accentText: "#ffffff",
      ram: "#e8e2cf",
    },
    rundning: 10,
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Mariedal",
    sokord: [
      "pizzeria Umeå",
      "pizza Umeå",
      "restaurang Mariedal",
      "restaurang Mariehem",
      "lunchbuffé Umeå",
      "lunch Umeå",
      "kebab Umeå",
      "husmanskost Umeå",
      "hämtmat Umeå",
      "catering Umeå",
    ],
    kokstyper: ["Europeiskt", "Pizza", "Mellanöstern"],
    prisniva: "$$",
  },

  // --- Startsidan: hero -> lunchbuffé -> smakprov -> beställ -> om oss ------
  startsidaSektioner: [
    "evenemang",
    "menySmakprov",
    "bestallCta",
    "omOss",
    "galleri",
    "hittaHit",
  ],

  sektioner: {
    karta: true,
    // Ingen publik e-postadress att ta emot formulärsvar på.
    kontaktformular: false,
  },

  bilddata,
  meny,
};

export default mix;
