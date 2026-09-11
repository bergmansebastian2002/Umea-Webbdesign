import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  RESTAURANG SHANGHAI - Storgatan 113, Umeå.
 * ============================================================================
 *
 *  Modernisering av restaurangshanghai.se (gammalt Net3DG-CMS med .htm-sidor,
 *  tabellayout och PDF-hämtmeny). Adress, telefon, öppettider, buffépriser och
 *  hela menyn är avlästa från befintliga sajten och hämtmenyn 2025
 *  (files/user/hämtmeny 2025-komprimerad_compressed.pdf) och får inte ändras
 *  utan avstämning med kunden. Faxnumret på gamla sajten är medvetet borttaget.
 *
 *  Rättnumren (S1, T2, 48 ...) är kvar med flit - gäster beställer per nummer
 *  över telefon, precis som i den tryckta hämtmenyn.
 *
 *  Bilder: hero och logotyp från kundens egen sajt, övriga är platshållare
 *  från Unsplash tills kunden fotograferat - se BILDRATTIGHETER.md/FOTOLISTA.md.
 */
const meny = menyData as Meny;

const shanghai: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "shanghai",
  namn: "Restaurang Shanghai",
  slogan: "Kinesiskt kök och buffé i Umeå",
  kortBeskrivning:
    "Restaurang Shanghai på Storgatan i Umeå lagar klassiskt kinesiskt kök - wokrätter, Tie Ban Shao och buffé till både lunch och kväll. Ring och beställ för avhämtning på 090-77 45 88.",
  // Bygger på fann/tsái-texten från nuvarande sajt, omarbetad i samma anda.
  omOssStycken: [
    "En måltid på Shanghai bygger på den kinesiska principen om fann och tsái. Ris och nudlar hör till fann, medan grönsaker, kött, fågel och fisk hör till tsái. När de två möts i rätt balans uppstår det som kinesisk matlagning alltid har strävat efter: harmoni mellan smak, textur, färg och doft.",
    "Våra kockar följer de gamla traditionerna för hur rätterna ska tillredas. Vi väljer råvarorna med omsorg och wokar över hög värme enligt kinesisk tradition, så att de naturliga smakerna får smälta samman i stället för att täckas över.",
    "Du hittar oss på Storgatan 113, ett stenkast öster om centrum. Ät på plats i matsalen eller ta maten med dig hem - och till både lunch och kväll dukar vi upp vårt buffébord, med ett extra påkostat urval på helgen.",
    "Alla rätter i menyn har ett nummer, precis som i vår tryckta hämtmeny. Ring 090-77 45 88 och säg numret, så står maten klar när du kommer. Välkommen in!",
  ],

  sajtUrl: "https://www.restaurangshanghai.se",
  logotyp: "/kunder/shanghai/logotyp.webp",

  // --- Kontaktuppgifter ----------------------------------------------------
  kontakt: {
    telefon: "090-77 45 88",
    telefonLank: "+4690774588",
    // Ingen publik e-postadress på nuvarande sajt - mejlrader döljs.
    gata: "Storgatan 113",
    postnummer: "903 33",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.81958,
    longitud: 20.28802,
  },

  // Gamla sajten har bara delningsknappar, ingen egen Facebook-sida hittad.
  social: {},

  // --- Bokning: endast telefon idag ---------------------------------------
  bokning: {
    aktiv: false,
    lank: "",
    knapptext: "Boka bord",
  },

  // --- Beställ och hämta: ersätter gamla sajtens PDF-hämtmeny --------------
  // OBS: swishNummer saknas - fyll i kundens Swish företag-nummer när det finns.
  bestallningDemo: {
    aktiv: true,
    notis:
      "Välj dina rätter och betala med Swish eller kort - sedan hämtar du maten hos oss på Storgatan 113. Du kan alltid ringa in din beställning på 090-77 45 88, varje rätt har ett nummer.",
  },

  // --- Buffé (priser och tider från nuvarande sajt) ------------------------
  evenemang: [
    {
      rubrik: "Lunchbuffé",
      beskrivning:
        "Buffébord med bröd, sallader, varmrätter och dessert - friterade bananer med glass. 139 kr inklusive dryck.",
      datumText: "Vardagar 11:00-14:00",
    },
    {
      rubrik: "Kvällsbuffé",
      beskrivning: "Kvällens buffébord med ett rikt urval varmrätter. 185 kr exklusive dryck.",
      datumText: "Måndag-torsdag 16:30-20:00",
    },
    {
      rubrik: "Helgbuffé",
      beskrivning:
        "Helgens påkostade buffé med bland annat oxfilé, bläckfisk, anka och tigerräkor. 229 kr exklusive dryck.",
      datumText: "Fredag 16:30-21:00, lördag 15:30-21:00, söndag 15:30-20:00",
    },
  ],

  // --- Öppettider (från nuvarande sajt och hämtmenyn 2025) -----------------
  oppettider: {
    mandag: { oppnar: "11:00", stanger: "21:00", notering: "Lunchstängt 14:30-16:00" },
    tisdag: { oppnar: "11:00", stanger: "21:00", notering: "Lunchstängt 14:30-16:00" },
    onsdag: { oppnar: "11:00", stanger: "21:00", notering: "Lunchstängt 14:30-16:00" },
    torsdag: { oppnar: "11:00", stanger: "21:00", notering: "Lunchstängt 14:30-16:00" },
    fredag: { oppnar: "11:00", stanger: "22:00", notering: "Lunchstängt 14:30-16:00" },
    lordag: { oppnar: "15:00", stanger: "22:00" },
    sondag: { oppnar: "15:00", stanger: "21:00" },
  },
  specialdagar: [],

  // --- Bilder: hero från kundens sajt, resten platshållare -----------------
  // Byt en bild genom att lägga nytt foto i content/shanghai/bilder/ (samma
  // filnamn), köra `npm run bilder -- shanghai` och uppdatera alt-texten här.
  bilder: {
    hero: "/kunder/shanghai/hero.webp",
    omOss: "/kunder/shanghai/om-oss.webp",
    omOssAlt: "Dukad matsal i mörkt trä med varm belysning",
    galleri: [
      { kalla: "/kunder/shanghai/galleri/dumplings.webp", alt: "Ångade dumplings i bambukorg" },
      { kalla: "/kunder/shanghai/galleri/nudlar.webp", alt: "Stekta nudlar med grönsaker, serverade med ätpinnar" },
      { kalla: "/kunder/shanghai/galleri/rakwok.webp", alt: "Wokade nudlar med räkor och tomat i panna" },
      { kalla: "/kunder/shanghai/galleri/cashew.webp", alt: "Kötträtt med cashewnötter, chili och färska örter" },
      { kalla: "/kunder/shanghai/galleri/curry.webp", alt: "Currygryta med kokosmjölk och grönsaker" },
      { kalla: "/kunder/shanghai/galleri/te.webp", alt: "Nybryggt te i glaskanna" },
    ],
  },

  // --- Design: härledd från kundens egen profil ----------------------------
  // Gamla sajten: svart sidhuvud, gulddrakar (#ad803d), djupröda detaljer
  // (#973445) och gräddvit botten (#f8e6d2). Samma värld, modern kostym:
  // lacksvart primär, mässingsguld på mörka ytor, sidenröd accent.
  design: {
    artDirection: "klassisk",
    farger: {
      bakgrund: "#faf5ec",
      yta: "#fffcf5",
      text: "#211a13",
      textDampad: "#6d6153",
      primar: "#161210",
      accent: "#8f3040",
      accentPaMork: "#c89e5f",
      accentText: "#ffffff",
      ram: "#e8ddcb",
    },
    rundning: 2,
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Öst på stan",
    sokord: [
      "kinesisk restaurang Umeå",
      "kinamat Umeå",
      "buffé Umeå",
      "lunchbuffé Umeå",
      "kvällsbuffé Umeå",
      "hämtmat Umeå",
      "wok Umeå",
      "restaurang Storgatan Umeå",
    ],
    kokstyper: ["Kinesiskt"],
    prisniva: "$$",
  },

  // --- Startsidan: hero -> buffé -> smakprov -> beställ -> om oss -> galleri
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

export default shanghai;
