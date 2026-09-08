import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  RONYAS RESTAURANG - Vasaplan, Umeå.
 * ============================================================================
 *
 *  Modernisering av ronyas.se. Adress, telefonnummer, öppettider, priser och
 *  menyinnehåll är avlästa från den befintliga sajten och får inte ändras
 *  utan avstämning med kunden.
 *
 *  Bilderna kommer från kundens egna ronyas.se (se BILDRATTIGHETER.md).
 *  FOTOLISTA.md listar vilka motiv som kan ersättas med nytagna foton.
 */
const meny = menyData as Meny;

const ronyas: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "ronyas",
  namn: "Ronyas Restaurang",
  slogan: "Pizza, grill och buffé på Vasaplan",
  kortBeskrivning:
    "Ronyas Restaurang på Vasaplan i Umeå serverar pizza, grill, svensk husmanskost samt sallads- och pizzabuffé. Fullständiga rättigheter. Ring och beställ på 090-12 99 12.",
  // Texterna nedan bygger på nuvarande ronyas.se, justerade i samråd med användaren.
  omOssStycken: [
    "Ronyas Restaurang på Vasaplan som drivs av kändiskrögarna Steve Galloway och El Patrone erbjuder bästa service, kvalitet, grill, sallads- och pizzabuffé i en trevlig och gästvänlig miljö. Vi serverar även öl, vin och cider. Vi har även varm buffé lördag och söndagar.",
    "När du än besöker Ronyas Restaurang möts du av fräscha lokaler, vänlig personal och god serviceanda. Att maten skall lagas på utsökta råvaror och av kunnig personal är självklart för oss.",
    "Vi har som målsättning att alla våra rätter skall lämpa sig både för att avnjutas direkt i våra lokaler eller tas med. Dessutom strävar vi efter att vår mat skall passa alla; från barn till pensionärer, från vardag till fest. Men självklart är vi flexibla i vår matlagning, har ni speciella önskemål vid ert beställningstillfälle så gör vi allt för att hjälpa er.",
    "Ring och beställ för avhämtning på tel: 090 12 99 12, eller beställ och betala direkt i menyn här på hemsidan. Du kan förstås också avnjuta den fantastiska smakupplevelsen på plats i vår restaurang på Vasaplan - sommartid serverar vi även på vår uteservering. Välkomna!",
  ],

  sajtUrl: "https://www.ronyas.se",

  // --- Kontaktuppgifter ----------------------------------------------------
  kontakt: {
    telefon: "090-12 99 12",
    telefonLank: "+4690129912",
    // Ingen publik e-postadress på nuvarande sajt - mejlrader döljs.
    gata: "Skolgatan 65F",
    // OBS: postnumret står inte på nuvarande sajt - verifiera med kunden.
    postnummer: "903 29",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.8271,
    longitud: 20.2605,
  },

  social: {
    facebook: "https://www.facebook.com/profile.php?id=100063490243037",
  },

  // --- Bokning: endast telefon idag ---------------------------------------
  bokning: {
    aktiv: false,
    lank: "",
    knapptext: "Boka bord",
  },

  // --- Beställ och hämta: Swish/kort i menyn -------------------------------
  // OBS: swishNummer saknas ännu - fyll i kundens Swish företag-nummer när
  // det finns, så öppnar "Betala med Swish" appen med belopp förifyllt.
  bestallningDemo: {
    aktiv: true,
    notis:
      "Välj dina rätter, skriv eventuella önskemål och betala med Swish eller kort - sedan hämtar du maten hos oss på Vasaplan. Du kan alltid ringa in din beställning på 090-12 99 12.",
  },

  // --- Buffé och erbjudanden (från nuvarande sajt, inga priser påhittade) --
  evenemang: [
    {
      rubrik: "Sallads- och pizzabuffé",
      beskrivning:
        "Buffé med pizza, grill och sallad serveras på vardagar. Ring oss för dagens tider och pris.",
      datumText: "Vardagar",
    },
    {
      rubrik: "Varm buffé",
      beskrivning: "Vi har även varm buffé lördag och söndagar.",
      datumText: "Lördag & söndag",
    },
  ],

  // --- Öppettider (från nuvarande sajt) ------------------------------------
  oppettider: {
    mandag: { oppnar: "10:00", stanger: "21:00" },
    tisdag: { oppnar: "10:00", stanger: "21:00" },
    onsdag: { oppnar: "10:00", stanger: "21:00" },
    torsdag: { oppnar: "10:00", stanger: "21:00" },
    fredag: { oppnar: "10:00", stanger: "21:00" },
    lordag: { oppnar: "11:00", stanger: "21:00" },
    sondag: { oppnar: "11:00", stanger: "21:00" },
  },
  specialdagar: [],

  // --- Bilder: från kundens egna ronyas.se (se BILDRATTIGHETER.md) ---------
  // Ordning i galleriet: mat och buffé först, sedan fasad, matsal och kök.
  // Byt en bild genom att lägga nytt foto i content/ronyas/bilder/ (samma
  // filnamn), köra `npm run bilder -- ronyas` och uppdatera alt-texten här.
  bilder: {
    hero: "/kunder/ronyas/hero.webp",
    omOss: "/kunder/ronyas/om-oss.webp",
    omOssAlt: "Matsalen på Ronyas Restaurang med gäster vid borden",
    galleri: [
      { kalla: "/kunder/ronyas/galleri/mat-pizza.webp", alt: "Nygräddade pizzabitar på pizzabuffén" },
      { kalla: "/kunder/ronyas/galleri/mat-grill.webp", alt: "Entrecote med stekt potatis och svampfräs" },
      { kalla: "/kunder/ronyas/galleri/salladsbuffe.webp", alt: "Salladsbuffén med färska grönsaker och tillbehör" },
      { kalla: "/kunder/ronyas/galleri/varmbuffe.webp", alt: "Varma buffén med pizza under värmelamporna" },
      { kalla: "/kunder/ronyas/galleri/fasad.webp", alt: "Ronyas Restaurangs entré på Vasaplan i Umeå" },
      { kalla: "/kunder/ronyas/galleri/matsal.webp", alt: "Matsalen med bås, fåtöljer och stämningsbelysning" },
      { kalla: "/kunder/ronyas/galleri/disken.webp", alt: "Disken med pizzabuffé och menyskärmar" },
      { kalla: "/kunder/ronyas/galleri/kok.webp", alt: "Pizzaugnen i det öppna köket" },
    ],
  },

  // --- Design: varm palett som känns pizza/grill, inte startup -------------
  design: {
    artDirection: "livlig",
    farger: {
      bakgrund: "#fdf8f0",
      yta: "#fffdf8",
      primar: "#2e1a12",
      accent: "#b23c1d",
      accentPaMork: "#ffab88",
      ram: "#eadfd0",
    },
    rundning: 10,
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Vasaplan",
    sokord: [
      "pizzeria Umeå",
      "pizza Vasaplan Umeå",
      "restaurang Vasaplan",
      "lunchbuffé Umeå",
      "pizzabuffé Umeå",
      "grill Umeå",
      "kebab Umeå",
      "avhämtning Umeå centrum",
    ],
    kokstyper: ["Pizza", "Grill", "Pizzabuffé"],
    prisniva: "$$",
  },

  // --- Startsidan: hero -> meny -> beställ/swisha -> buffé -> bildspel -----
  startsidaSektioner: [
    "menySmakprov",
    "bestallCta",
    "evenemang",
    "bildspel",
    "omOss",
    "hittaHit",
  ],

  sektioner: {
    karta: true,
    // Ingen publik e-postadress att ta emot formulärsvar på ännu.
    kontaktformular: false,
  },

  bilddata,
  meny,
};

export default ronyas;
