import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  RISTORANTE RUCCOLA - Östra Kyrkogatan 43, Haga, Umeå.
 * ============================================================================
 *
 *  Italiensk kvarterspizzeria på Haga med napolitansk surdegspizza. Kundens
 *  befintliga sajt (ruccolahaga.se, WordPress från 2020) är i princip tom -
 *  en hero, en halvt avklippt temabild och en Fasterorder-länk. Underlag
 *  oktober 2026:
 *
 *  - MENYN med priser är avläst från kundens ES Order-sida
 *    (app.fasterorder.se/menu/169 -> app.esorder.se/menu/sv/169) - den enda
 *    levande källan. Onlinepriser kan ligga över kassapriserna - STÄM AV
 *    prislistan med kunden före lansering.
 *  - Varsamt normaliserad stavning från ES Order: "fior de late/latte" ->
 *    fior di latte, "Pizza ala Diavola" -> alla, "spinata salami" ->
 *    spianata, "pistachio" -> pistage, "fikon marmelad" -> fikonmarmelad.
 *    Egennamn som Tuto Cavolo, Nali, Lalo och Mama Mia är kvar exakt som
 *    kunden skriver dem. Ordet "Annas" i caesarbeskrivningarna är oklart
 *    (dressing? ansjovis?) - struket tills kunden förklarat. Kebab-pizzan
 *    låg dubbelt (Pizza + Kebab-sektionen) - visas en gång under Pizza.
 *    Ananas på kebab-/kycklingtallriken ser udda ut men står i källan -
 *    VERIFIERA med kunden.
 *  - ÖPPETTIDER från Google Maps-profilen (okt 2026): mån 15-20,
 *    tis-tor 11-20:30, fre 11-21, lör-sön 12-21. Lördagens tid bekräftad
 *    mot ES Order ("Avhämtning 12:00-21:00"). VERIFIERA med kunden.
 *  - Adress och postnummer (903 42) bekräftade mot OpenStreetMap och
 *    Google - ES Orders sidfot säger 903 43, vilket ser ut som ett slarvfel.
 *  - Betyg 4,4 (222 omdömen) från Google Maps okt 2026. Recensionscitaten
 *    är riktiga Google-omdömen, det andra varsamt nedkortat.
 *  - Bolag: Lalo La Gondola AB, org nr 559577-7482 (från ES Orders sidfot).
 *    OrgNr utelämnat tills kunden bekräftar att det ska visas.
 *  - Ingen publik e-postadress hittad - mejlrader döljs, formuläret är av.
 *  - Kunden tar beställning och bordsbokning på telefon; onlinebeställning
 *    går idag via Fasterorder/ES Order (länken ovan). Den här sajtens
 *    /bestall-sida är säljdemot för eget Swish-flöde - swishNummer saknas
 *    tills kunden lämnar sitt.
 *
 *  Design: logotypen är en mörk kolgrå slab serif-ordbild ("RISTORANTE
 *  RUCCOLA") - klassisk trattoria. Därav art direction "klassisk" med
 *  kolgrå primär ur logotypen och en djup ruccolagrön accent (#3f6212,
 *  6,7:1 mot bakgrunden) istället för standardguldet. Ljusgrönt
 *  (#c0d96e, 9,2:1 mot primären) på mörka ytor.
 */
const meny = menyData as Meny;

const ruccola: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "ruccola",
  namn: "Ristorante Ruccola",
  slogan: "Napolitansk surdegspizza på Haga",
  kortBeskrivning:
    "Ristorante Ruccola på Haga i Umeå bakar napolitansk surdegspizza med san marzano-tomater och fior di latte - plus pasta och sallader. Ring 090-13 77 11 och beställ, eller ät på plats.",
  omOssStycken: [
    "Ristorante Ruccola är den italienska kvarterskrogen på Haga - ett par minuter från centrala Umeå. Hos oss står pizzan i centrum: surdegsbottnar som får jäsa länge och gräddas snabbt i hög värme, precis som i Neapel.",
    "Vi bakar traditionsenlig pizza från Neapel med en touch av Sverige. San marzano-tomater, fior di latte och färsk ruccola möter västerbottensost och rökt lax - och menyn rymmer allt från klassikerna till våra egna favoriter som Nali och Lalo.",
    "Förutom pizza lagar vi pasta, fräscha sallader och rullar - och det mesta finns även som vegetariskt eller veganskt. Ät på plats i matsalen eller ta med dig maten hem.",
    "Du hittar oss på Östra Kyrkogatan 43 på Haga. Ring 090-13 77 11 för att beställa eller boka bord - välkommen in!",
  ],

  sajtUrl: "https://ristorante-ruccola.vercel.app",

  logotyp: "/kunder/ruccola/logotyp.webp",

  // --- Kontaktuppgifter ------------------------------------------------------
  kontakt: {
    telefon: "090-13 77 11",
    telefonLank: "+4690137711",
    // Ingen publik e-postadress hittad - mejlrader döljs.
    gata: "Östra Kyrkogatan 43",
    postnummer: "903 42",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.83261,
    longitud: 20.27735,
  },

  social: {
    facebook: "https://www.facebook.com/ruccolaumea/",
    instagram: "https://www.instagram.com/ruccolaumea/",
  },

  // --- Bokning: bord bokas per telefon --------------------------------------
  bokning: {
    aktiv: false,
    lank: "",
    knapptext: "Boka bord",
  },

  // --- Beställ och hämta -----------------------------------------------------
  // OBS: swishNummer saknas - fyll i kundens Swish företag-nummer när det
  // finns. Kundens nuvarande onlinebeställning: app.fasterorder.se/menu/169.
  bestallningDemo: {
    aktiv: true,
    notis:
      "Välj dina rätter och betala med Swish eller kort - maten står klar för avhämtning på Östra Kyrkogatan 43. Du kan alltid ringa in din beställning på 090-13 77 11.",
  },

  // --- Betyg från Google (oktober 2026) --------------------------------------
  betyg: {
    snitt: 4.4,
    antal: 222,
    recensioner: [
      {
        text: "Extremt bra service och skulle säga godaste pizzan i Umeå. Rekommenderar starkt.",
        namn: "Hossein",
        kalla: "Google",
      },
      {
        text: "Mycket trevlig ägare som berättade att han varit i Italien och lärt sig göra napolitanska pizzor.",
        namn: "Piraten S.",
        kalla: "Google",
      },
    ],
  },

  // --- Öppettider (Google Maps okt 2026 - VERIFIERA med kunden) --------------
  oppettider: {
    mandag: { oppnar: "15:00", stanger: "20:00" },
    tisdag: { oppnar: "11:00", stanger: "20:30" },
    onsdag: { oppnar: "11:00", stanger: "20:30" },
    torsdag: { oppnar: "11:00", stanger: "20:30" },
    fredag: { oppnar: "11:00", stanger: "21:00" },
    lordag: { oppnar: "12:00", stanger: "21:00" },
    sondag: { oppnar: "12:00", stanger: "21:00" },
  },
  specialdagar: [],

  // --- Bilder ----------------------------------------------------------------
  // Logotypen är kundens egen (från ruccolahaga.se). Alla matbilder är
  // platshållare från Unsplash tills kunden fotograferat egna motiv
  // (se FOTOLISTA.md och BILDRATTIGHETER.md).
  bilder: {
    hero: "/kunder/ruccola/hero-margherita.webp",
    omOss: "/kunder/ruccola/om-oss-surdeg.webp",
    omOssAlt: "Nygräddad margherita på mjölat bakbord",
    galleri: [
      { kalla: "/kunder/ruccola/galleri/pizza-ruccola-burrata.webp", alt: "Pizza toppad med färsk ruccola och burrata på träbricka", staende: true },
      { kalla: "/kunder/ruccola/galleri/pizza-cheesepull.webp", alt: "Pizzaslice lyfts med smält ost i långa trådar" },
      { kalla: "/kunder/ruccola/galleri/pasta-carbonara.webp", alt: "Carbonara med guanciale och riven parmigiano" },
      { kalla: "/kunder/ruccola/galleri/sallad-caesar.webp", alt: "Caesarsallad med krutonger och parmigiano" },
      { kalla: "/kunder/ruccola/galleri/pasta-penne.webp", alt: "Pennepasta i tomatsås med svartpeppar" },
      { kalla: "/kunder/ruccola/galleri/pizza-rustik.webp", alt: "Rustik pizza på mörkt träbord" },
    ],
  },

  // --- Design: härledd ur kundens logotyp ------------------------------------
  // Kolgrå slab serif-ordbild -> klassisk art direction med kolgrå primär
  // och ruccolagrön accent. Kontraster (WCAG): accent 6,7:1 mot bakgrund,
  // 7,1:1 mot vitt; ljusgrönt 9,2:1 mot primären; dämpad text 5,4:1.
  design: {
    artDirection: "klassisk",
    // Vita logotypvarianten på mörk platta - sidhuvudet är transparent med
    // vit text över heron, där den kolgrå ordbilden annars försvinner.
    logotypMorkBotten: true,
    farger: {
      bakgrund: "#faf8f2",
      yta: "#ffffff",
      text: "#201f1b",
      textDampad: "#6a665c",
      primar: "#2b2a26",
      accent: "#3f6212",
      accentPaMork: "#c0d96e",
      accentText: "#ffffff",
      ram: "#e7e2d6",
    },
  },

  // --- SEO för lokala sökningar ---------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Haga",
    sokord: [
      "pizzeria Umeå",
      "pizza Haga Umeå",
      "napolitansk pizza Umeå",
      "surdegspizza Umeå",
      "italiensk restaurang Umeå",
      "pasta Umeå",
      "sallad Umeå",
      "take away pizza Umeå",
      "restaurang Haga Umeå",
      "vegansk pizza Umeå",
    ],
    kokstyper: ["Italiensk", "Pizza"],
    prisniva: "$$",
  },

  // --- Startsidan: hero -> smakprov -> beställ -> betyg -> om oss -> galleri -> hitta
  startsidaSektioner: [
    "menySmakprov",
    "bestallCta",
    "betyg",
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

export default ruccola;
