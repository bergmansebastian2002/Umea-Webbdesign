import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  LOTUS ASIATISK RESTAURANG - Ekonomstråket 7, Ålidhems centrum, Umeå.
 * ============================================================================
 *
 *  Kunden har ingen tidigare webbplats - sajten är byggd utifrån deras
 *  Facebook-sida (facebook.com/LotusAsiatiskRestaurang), foodora-profil och
 *  publika kataloguppgifter (restaurangmenyn.se, restaurantguru.com):
 *
 *  - Adress, telefon, e-post och presentationstexten "Buffé och à la carte"
 *    kommer från Facebook-sidans Om-flik.
 *  - Menyn med priser är avläst från foodora september 2026, med varsamt
 *    normaliserad stavning ("Sichaun" -> "Sichuan", "Kandon" -> "Kanton").
 *    STÄM AV rättnamn och priser med kunden före lansering.
 *  - Öppettiderna (mån-fre 11-20, lör-sön 12-20) kommer från katalogsajterna
 *    och ska bekräftas av kunden - de fanns inte på Facebook-sidan.
 *  - Buffé nämns utan pris och tider: inga verifierade uppgifter hittades
 *    för Umeå (sök inte på restauranglotus.se - det är en annan Lotus i
 *    Halmstad!). Komplettera när kunden lämnat pris och tider.
 *  - Koordinaterna pekar på Ekonomstråket (OpenStreetMap) - finjustera
 *    kartnålen mot Google Maps vid överlämningen.
 *
 *  Färgerna är härledda från kundens egen grafik: röd lotus-linjeteckning
 *  och röd serifordbild på mjukt rosa/gräddvit botten (Facebook-omslaget
 *  och deras rosa menykort med ätpinnar).
 *
 *  Samtliga foton är platshållare från Unsplash - se BILDRATTIGHETER.md
 *  och FOTOLISTA.md.
 */
const meny = menyData as Meny;

const lotus: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "lotus",
  namn: "Lotus",
  slogan: "Asiatisk restaurang i Umeå",
  kortBeskrivning:
    "Lotus asiatiska restaurang i Ålidhems centrum lagar wok, friterade favoriter och buffé - något för alla. Ät på plats, hämta själv på Ekonomstråket 7 eller få maten hemkörd via foodora. Ring 090-77 75 55.",
  // Bygger på Facebook-presentationen "Utforska asiatiska maträtter hos oss!
  // Buffé och à la carte något för alla! Varmt välkommen!".
  omOssStycken: [
    "Lotusblomman står för enkelhet och renhet - och det är precis så vi vill laga mat. Hos Lotus i Ålidhems centrum hittar du asiatiska maträtter för alla: klassiska wokrätter, krispigt friterade favoriter, soppor och gröna alternativ, alltid lagade med färska grönsaker.",
    "Menyn spänner från het Sichuan-kyckling och Kung Pao till mild honungskyckling och husets egen Lotus wok med lotusfrukt och skogsöron. Buffé och à la carte - något för alla, oavsett om du vill äta stort eller bara ta något snabbt mellan föreläsningarna.",
    "Du hittar oss på Ekonomstråket 7, mitt i Ålidhems centrum ett stenkast från universitetet. Ät på plats i restaurangen, ring 090-77 75 55 och hämta själv, eller luta dig tillbaka och få maten hemkörd via foodora.",
    "Följ oss gärna på Facebook och Instagram - där lägger vi upp nyheter och erbjudanden. Varmt välkommen in!",
  ],

  sajtUrl: "https://restaurang-lotus.vercel.app",

  // --- Kontaktuppgifter (från Facebook-sidans Om-flik) ---------------------
  kontakt: {
    telefon: "090-77 75 55",
    telefonLank: "+4690777555",
    epost: "lotuscateringumea@hotmail.com",
    gata: "Ekonomstråket 7",
    postnummer: "907 30",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.81185,
    longitud: 20.31548,
  },

  social: {
    facebook: "https://www.facebook.com/LotusAsiatiskRestaurang/",
    instagram: "https://www.instagram.com/lotus.restaurang.ume/",
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
      "Välj dina rätter och betala med Swish eller kort - sedan hämtar du maten hos oss i Ålidhems centrum. Du kan alltid ringa in din beställning på 090-77 75 55, eller få den hemkörd via foodora.",
  },

  // --- Buffé och foodora (pris och tider för buffén ej verifierade) --------
  evenemang: [
    {
      rubrik: "Buffé i restaurangen",
      beskrivning:
        "Vi dukar upp buffé med ett brett urval ur vårt kök - ett enkelt sätt att smaka lite av allt. Ring 090-77 75 55 för dagens tider och pris.",
      datumText: "Ät på plats",
    },
    {
      rubrik: "Få maten hemkörd",
      beskrivning:
        "Hela menyn finns på foodora för leverans eller avhämtning - 4,3 av 5 i betyg från över 500 beställningar.",
      datumText: "Leverans via foodora",
      lank: "https://www.foodora.se/restaurant/l0el/lotus-asiatisk-restaurang",
    },
  ],

  // --- Öppettider (restaurangmenyn.se/restaurantguru - bekräfta med kund) --
  oppettider: {
    mandag: { oppnar: "11:00", stanger: "20:00" },
    tisdag: { oppnar: "11:00", stanger: "20:00" },
    onsdag: { oppnar: "11:00", stanger: "20:00" },
    torsdag: { oppnar: "11:00", stanger: "20:00" },
    fredag: { oppnar: "11:00", stanger: "20:00" },
    lordag: { oppnar: "12:00", stanger: "20:00" },
    sondag: { oppnar: "12:00", stanger: "20:00" },
  },
  specialdagar: [],

  // --- Bilder: samtliga är platshållare från Unsplash ----------------------
  // Byt en bild genom att lägga nytt foto i content/lotus/bilder/ (samma
  // filnamn), köra `npm run bilder -- lotus` och uppdatera alt-texten här.
  bilder: {
    hero: "/kunder/lotus/hero.webp",
    omOss: "/kunder/lotus/om-oss.webp",
    omOssAlt: "Nudelskål med ägg, svamp och grönsaker i svart gryta",
    galleri: [
      { kalla: "/kunder/lotus/galleri/friterad-kyckling.webp", alt: "Fat med krispigt friterad kyckling och dippsås" },
      { kalla: "/kunder/lotus/galleri/wok.webp", alt: "Wokad kyckling i mustig sås toppad med salladslök" },
      { kalla: "/kunder/lotus/galleri/nudlar.webp", alt: "Wokade risnudlar med räkor" },
      { kalla: "/kunder/lotus/galleri/riswok.webp", alt: "Stekt ris med kyckling, ärtor och grönsaker" },
      { kalla: "/kunder/lotus/galleri/curry.webp", alt: "Skål med röd curry och kaffirlimeblad" },
      { kalla: "/kunder/lotus/galleri/varrullar.webp", alt: "Friterade vårrullar med dippsås" },
    ],
  },

  // --- Design: härledd från kundens egen grafik ----------------------------
  // Facebookprofilen: röd lotus i linjeteckning, rött sigill med 莲花 och
  // röd serifordbild på rosa/gräddvit gradient. Rosa menykort med röda ramar.
  design: {
    artDirection: "livlig",
    // Rubrikerna sätts i Shojumaru - ornamental display med österländsk
    // känsla som knyter an till lotus-kalligrafin på kundens Facebook-grafik
    // (och skiljer sajten från Ronyas, som delar art direction).
    rubrikTypsnitt: "asiatisk",
    farger: {
      bakgrund: "#fdf4f1",
      yta: "#fffaf7",
      text: "#231517",
      textDampad: "#71595a",
      primar: "#47161c",
      accent: "#b3242c",
      accentPaMork: "#f2aaa5",
      accentText: "#ffffff",
      ram: "#f2ddd7",
    },
    rundning: 12,
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Ålidhem",
    sokord: [
      "asiatisk restaurang Umeå",
      "kinesisk restaurang Umeå",
      "restaurang Ålidhem",
      "restaurang Ålidhems centrum",
      "hämtmat Umeå",
      "wok Umeå",
      "buffé Umeå",
      "lunch Ålidhem",
    ],
    kokstyper: ["Asiatiskt", "Kinesiskt"],
    prisniva: "$$",
  },

  // --- Startsidan: hero -> smakprov -> buffé/foodora -> beställ -> om oss --
  startsidaSektioner: [
    "menySmakprov",
    "evenemang",
    "bestallCta",
    "omOss",
    "galleri",
    "hittaHit",
  ],

  sektioner: {
    karta: true,
    // E-post finns (hotmail), men formuläret aktiveras först när kunden är
    // med på tåget och Resend-nycklar är satta i Vercel-projektet.
    kontaktformular: false,
  },

  bilddata,
  meny,
};

export default lotus;
