import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  RESTAURANG EURASIA - Renmarksesplanaden 12, Umeå.
 * ============================================================================
 *
 *  Modernisering av eurasia.se (klassisk ASP-sajt i 3dg websystem där
 *  undersidorna 404:ar utan /system/-prefixet - sajten ser därför tom ut).
 *  Adress, telefon, öppettider, buffétider, om oss-texten och HELA menyn
 *  med rättnummer och priser är avlästa från befintliga sajten och
 *  à la carte-PDF:en "eurasia2025-komprimerad.pdf" i september 2026 och
 *  får inte ändras utan avstämning med kunden.
 *
 *  - "Kinarestaurang & Steakhouse" är kundens egen tagline (står i logotypen)
 *    - 130 asiatiska/kontinentala rätter och pizzor, buffé lunch och kväll.
 *  - Rättnumren i menyn är kundens egna (inkl. udda "010.", "62b.", "020.")
 *    - gästerna beställer med numret, så de behålls exakt som i PDF:en.
 *  - VERIFIERA MED KUNDEN: gamla sajten skriver "Renmarksesplanden 12,
 *    903 26" - officiella gatunamnet är Renmarksesplanaden (används här).
 *    OpenStreetMap anger 903 25 för gatan. Postnumret är kundens uppgift.
 *  - Gamla sajten listar även fax (090-13 97 10) - utelämnat medvetet.
 *  - Ingen publik e-postadress finns - mejlrader döljs och formuläret är av.
 *    Gamla sajtens bokningsformulär gick till nedlagda CMS:et; bokning sker
 *    via telefon tills kunden väljer ett bokningssystem.
 *  - Facebook-sidan i sökresultaten ("pages/Restaurang-Eurasia/1321689...")
 *    ser autogenererad ut - länkas inte förrän kunden bekräftat att den är
 *    deras. Tripadvisor-profilen är äkta och länkas.
 *  - Koordinaterna kommer från OpenStreetMaps Eurasia-nål vid Renmarkstorget.
 *
 *  Färgerna är uppmätta direkt i kundens headergrafik (header_bg.png från
 *  gamla sajten): mahognyröd träpanel #9B342E och logotypens guld #FCCE7C
 *  på gräddvit botten. Klassisk art direction (Playfair) utan karaktärsrubrik
 *  - logotypens graverade guldversaler är eleganta snarare än penseldragna,
 *  och "asiatisk" (Shojumaru) är redan Lotus signum.
 *
 *  Bilder: logotypen är utskuren ur kundens header_bg.png. ALLA foton är
 *  platshållare från Unsplash tills kunden fotograferat - se
 *  BILDRATTIGHETER.md och FOTOLISTA.md.
 */
const meny = menyData as Meny;

const eurasia: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "eurasia",
  namn: "Restaurang Eurasia",
  slogan: "Kinarestaurang & Steakhouse i Umeå",
  kortBeskrivning:
    "Restaurang Eurasia på Renmarksesplanaden 12 i centrala Umeå serverar kinesiska klassiker, steakhouse-rätter och pizza - över 130 rätter, lunchbuffé varje vardag och lördag samt kvällsbuffé alla dagar. Ring 090-13 97 00 och beställ för avhämtning.",
  omOssStycken: [
    "Eurasia är en kinesisk restaurang i vacker, avslappnande orientalisk miljö mitt i centrala Umeå - en av stadens mest etablerade kinarestauranger. Du hittar oss på Renmarksesplanaden 12, i korsningen Storgatan och Götgatan bredvid informationscentrum.",
    "Som kinarestaurang och steakhouse har vi något för alla: ett stort utbud på totalt 130 asiatiska och kontinentala rätter och pizzor. Välj bland kinesiska klassiker som kung-pao, szechuananka och stekta äggnudlar - eller en ordentlig pepparstek, entrecôte eller pizza från vår kontinentala sida.",
    "Varje vardag och lördag dukar vi upp vår härligt goda kinesiska lunchbuffé med olika grytor tillsammans med friterat och pizza. På kvällen tar kvällsbuffén över - den serveras alla dagar 16:30-20:30 - och hela à la carte-menyn finns förstås alltid att beställa från.",
    "Naturligtvis går det bra att ta med maten hem också. Ring 090-13 97 00 och beställ med rättnumret, så står maten klar när du kommer. Varmt välkommen till Eurasia!",
  ],

  sajtUrl: "https://restaurang-eurasia.vercel.app",
  logotyp: "/kunder/eurasia/logotyp.webp",

  // --- Kontaktuppgifter (från eurasia.se - se verifieringsnot ovan) --------
  kontakt: {
    telefon: "090-13 97 00",
    telefonLank: "+4690139700",
    // Ingen publik e-postadress på gamla sajten - mejlrader döljs.
    gata: "Renmarksesplanaden 12",
    postnummer: "903 26",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.827,
    longitud: 20.2613,
  },

  social: {
    tripadvisor:
      "https://www.tripadvisor.com/Restaurant_Review-g189818-d785394-Reviews-Eurasia-Umea_Vasterbotten_County.html",
  },

  // --- Bokning: via telefon tills kunden valt bokningssystem ----------------
  bokning: {
    aktiv: false,
    lank: "",
    knapptext: "Boka bord",
  },

  // --- Beställ och hämta -----------------------------------------------------
  // OBS: swishNummer saknas - fyll i kundens Swish företag-nummer när det finns.
  bestallningDemo: {
    aktiv: true,
    notis:
      "Välj dina rätter och betala med Swish eller kort - sedan hämtar du maten hos oss på Renmarksesplanaden 12. Du kan alltid ringa in din beställning med rättnumret på 090-13 97 00.",
  },

  // --- Buffé och erbjudanden (tider och priser från eurasia.se + PDF 2025) --
  evenemangSektion: {
    etikett: "Buffé och erbjudanden",
    rubrik: "Buffé både lunch och kväll",
  },
  evenemang: [
    {
      rubrik: "Lunchbuffé",
      beskrivning:
        "Härligt god kinesisk buffé med olika grytor tillsammans med friterat och pizza. Det går förstås också bra att beställa från à la carte-menyn.",
      datumText: "Vardagar 11:00-14:00 · Lördag 12:00-15:00",
      bild: "/kunder/eurasia/evenemang/lunchbuffe.webp",
      bildAlt: "Buffébord med varmrätter i uppvärmda serveringskärl",
      utvald: true,
    },
    {
      rubrik: "Kvällsbuffé",
      beskrivning:
        "Buffén är inte bara för lunchen - varje kväll serverar vi kvällsbuffé med kinesiska grytor och tillbehör.",
      datumText: "Alla dagar 16:30-20:30",
      bild: "/kunder/eurasia/evenemang/kvallsbuffe.webp",
      bildAlt: "Stekpanna med stekt ris, räkor och grönsaker",
    },
    {
      rubrik: "Kvällserbjudande",
      beskrivning:
        "Valfri förrätt (värde 65:-) och chili kyckling med ris, tillsammans med starköl (40 cl) eller ett glas husets vin - 259:-. Med alkoholfri dryck 219:-.",
      datumText: "Varje kväll",
      bild: "/kunder/eurasia/evenemang/kvallserbjudande.webp",
      bildAlt: "Friterad kyckling med röd chili på bananblad",
    },
    {
      rubrik: "Middag för två",
      beskrivning:
        "Trerätters för hela sällskapet: förrätt, tre varmrätter att dela och dessert med kaffe eller te - 549:- för två. Middag för en 269:-.",
      datumText: "Beställs på plats",
      bild: "/kunder/eurasia/evenemang/middag-for-tva.webp",
      bildAlt: "Uppdukad restaurangmiddag med vinglas",
    },
  ],

  // --- Öppettider (från eurasia.se: lunch- och kvällsservering) -------------
  oppettider: {
    mandag: { oppnar: "11:00", stanger: "21:00", notering: "stängt 14.30-16.30" },
    tisdag: { oppnar: "11:00", stanger: "21:00", notering: "stängt 14.30-16.30" },
    onsdag: { oppnar: "11:00", stanger: "21:00", notering: "stängt 14.30-16.30" },
    torsdag: { oppnar: "11:00", stanger: "21:00", notering: "stängt 14.30-16.30" },
    fredag: { oppnar: "11:00", stanger: "22:00", notering: "stängt 14.30-16.30" },
    lordag: { oppnar: "12:00", stanger: "22:00" },
    sondag: { oppnar: "15:00", stanger: "21:00" },
  },
  specialdagar: [],
  oppettiderNotering:
    "Söndagstiderna gäller även helgdagar. Köket stänger 30 minuter före stängningstid.",

  // --- Bilder ----------------------------------------------------------------
  // SAMTLIGA foton är Unsplash-platshållare - se BILDRATTIGHETER.md.
  // Byt en bild: nytt foto med NYTT filnamn i content/eurasia/bilder/,
  // kör `npm run bilder -- eurasia` och uppdatera sökväg + alt-text här.
  bilder: {
    hero: "/kunder/eurasia/hero.webp",
    omOss: "/kunder/eurasia/om-oss.webp",
    omOssAlt: "Bambukorgar med dumplings i dämpad restaurangbelysning",
    galleri: [
      { kalla: "/kunder/eurasia/galleri/sotsur-kyckling.webp", alt: "Kyckling i sötsursås med broccoli, apelsin och ris" },
      { kalla: "/kunder/eurasia/galleri/stek.webp", alt: "Grillad stek med sparris och grönsaker på het järnplatta" },
      { kalla: "/kunder/eurasia/galleri/stekt-ris.webp", alt: "Stekt ris med grönsaker på vitt fat" },
      { kalla: "/kunder/eurasia/galleri/majssoppa.webp", alt: "Nudelskål med kyckling, ägg och majs", staende: true },
      { kalla: "/kunder/eurasia/galleri/revbensspjall.webp", alt: "Revbensspjäll på träbräda med tillbehör" },
      { kalla: "/kunder/eurasia/galleri/pizza.webp", alt: "Nygräddad pizza i skivor på träbord" },
    ],
  },

  // --- Design: uppmätt i kundens headergrafik -------------------------------
  // Mahognyröd träpanel (#9B342E, 7,2:1 mot vitt) som accent, logotypens
  // guld (#FCCE7C, tonad till #f2c983) på mörka ytor och djup mahogny som
  // primär. Klassisk Playfair-serif ekar logotypens graverade guldversaler.
  design: {
    artDirection: "klassisk",
    // Guld-/vitgraverad logotyp med genomskinlig botten - på mörk platta i
    // sidhuvudet så den läses mot ljus bakgrund.
    logotypMorkBotten: true,
    farger: {
      bakgrund: "#faf6ea",
      yta: "#fffdf4",
      text: "#231710",
      textDampad: "#6f5f4e",
      primar: "#4a1812",
      accent: "#9b342e",
      accentPaMork: "#f2c983",
      accentText: "#ffffff",
      ram: "#e9dfca",
    },
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Centrum",
    sokord: [
      "kinarestaurang Umeå",
      "kinesisk restaurang Umeå",
      "kinamat Umeå",
      "lunchbuffé Umeå",
      "kvällsbuffé Umeå",
      "buffé Umeå",
      "steakhouse Umeå",
      "pizza Umeå centrum",
      "restaurang Umeå centrum",
      "hämtmat Umeå",
    ],
    kokstyper: ["Kinesiskt", "Steakhouse", "Pizza"],
    prisniva: "$$",
  },

  // --- Startsidan: hero -> buffé -> smakprov -> beställ -> om oss ------------
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

export default eurasia;
