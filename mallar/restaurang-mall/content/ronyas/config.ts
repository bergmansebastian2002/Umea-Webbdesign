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
 *  OBS: Alla bilder är tydligt märkta platshållare tills riktiga foton finns.
 *  Se FOTOLISTA.md i den här mappen för exakt vilka foton som ska beställas.
 */
const meny = menyData as Meny;

const ronyas: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "ronyas",
  namn: "Ronyas Restaurang",
  slogan: "Pizza, grill och buffé på Vasaplan",
  kortBeskrivning:
    "Ronyas Restaurang på Vasaplan i Umeå serverar pizza, grill, svensk husmanskost samt sallads- och pizzabuffé. Fullständiga rättigheter. Ring och boka på 090-12 99 12.",
  // Texterna nedan är återanvända från nuvarande ronyas.se.
  omOssStycken: [
    "Ronyas Restaurang på Vasaplan som drivs av kändiskrögarna Steve Galloway och El Patrone erbjuder bästa service, kvalitet, svensk husmanskost, grill, sallads- och pizzabuffé, öl, vin, cider, i en trevlig och gästvänlig miljö. Vi har även varm buffé lördag och söndagar.",
    "När du än besöker Ronyas Restaurang möts du av fräscha lokaler, vänlig personal och god serviceanda. Att maten skall lagas på utsökta råvaror och av kunnig personal är självklart för oss.",
    "Vi har som målsättning att alla våra rätter skall lämpa sig både för att avnjutas direkt i våra lokaler eller tas med. Dessutom strävar vi efter att vår mat skall passa alla; från barn till pensionärer, från vardag till fest. Men självklart är vi flexibla i vår matlagning, har ni speciella önskemål vid ert beställningstillfälle så gör vi allt för att hjälpa er.",
    "Ring och boka för avhämtning på tel: 090 12 99 12 eller avnjut den fantastiska smakupplevelsen på plats i vår restaurang på Vasaplan, sommartid serverar vi även på vår uteservering. Välkomna!",
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

  // --- Beställningsdemo: "beställ och hämta" med Swish (endast utseende) ---
  bestallningDemo: {
    aktiv: true,
    notis:
      "Demo: så här skulle beställning för avhämtning kunna se ut. Betalning är inte aktiv - ring 090-12 99 12 för att beställa.",
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

  // --- Bilder: TYDLIGT MÄRKTA PLATSHÅLLARE tills riktiga foton finns -------
  // Ordning i galleriet: mat först, sedan uteservering, matsal och sist kök.
  // Byt en bild genom att lägga riktiga fotot i content/ronyas/bilder/ (samma
  // filnamn), köra `npm run bilder -- ronyas` och uppdatera alt-texten här.
  bilder: {
    hero: "/kunder/ronyas/hero.webp",
    omOss: "/kunder/ronyas/om-oss.webp",
    omOssAlt: "Platshållare: bild på restaurangen saknas ännu",
    galleri: [
      { kalla: "/kunder/ronyas/galleri/mat-pizza.webp", alt: "Platshållare: foto på nygräddad pizza saknas ännu" },
      { kalla: "/kunder/ronyas/galleri/mat-grill.webp", alt: "Platshållare: foto på grillrätt saknas ännu" },
      { kalla: "/kunder/ronyas/galleri/mat-buffe.webp", alt: "Platshållare: foto på salladsbuffén saknas ännu", staende: true },
      { kalla: "/kunder/ronyas/galleri/uteservering-1.webp", alt: "Platshållare: sommarfoto från uteserveringen saknas ännu" },
      { kalla: "/kunder/ronyas/galleri/uteservering-2.webp", alt: "Platshållare: foto på gäster på uteserveringen saknas ännu", staende: true },
      { kalla: "/kunder/ronyas/galleri/matsal-1.webp", alt: "Platshållare: foto på matsalen saknas ännu" },
      { kalla: "/kunder/ronyas/galleri/matsal-2.webp", alt: "Platshållare: detaljfoto från matsalen saknas ännu", staende: true },
      { kalla: "/kunder/ronyas/galleri/kok.webp", alt: "Platshållare: foto från köket saknas ännu" },
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
    kokstyper: ["Pizza", "Grill", "Husmanskost"],
    prisniva: "$$",
  },

  // --- Startsidan: hero -> meny/buffé -> galleri -> hitta hit --------------
  startsidaSektioner: [
    "menySmakprov",
    "evenemang",
    "galleri",
    "omOss",
    "bokaCta",
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
