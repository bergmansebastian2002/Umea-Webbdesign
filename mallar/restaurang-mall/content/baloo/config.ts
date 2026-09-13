import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  BALOO GRILLEN - Ålidhems centrum, Ekonomstråket 1, Umeå.
 * ============================================================================
 *
 *  Gatukök/grill i Ålidhems centrum utan egen fungerande sajt (baloogrillen.se
 *  ligger nere). Underlag september 2026:
 *
 *  - MENYN med priser är avläst från kundens Uber Eats-sida (den mest
 *    kompletta källan). OBS: leveransappars priser ligger ofta över kassa-
 *    priserna - STÄM AV hela prislistan med kunden före lansering.
 *  - Varsamt normaliserad stavning från Uber Eats: "brlöd"->bröd,
 *    "rädlök"->rödlök, "fylling"->fyllning, "krnonärtskocka"->kronärtskocka,
 *    "Quattro Stagione"->Quattro Stagioni, "stips"->strips. Falafelsalladens
 *    beskrivning sa "Med kyckling" (kopieringsfel i appen) - rättad till
 *    falafel. Egennamn som Sorena, Sorneneto, Maffia, Lambada, Ufo, Ubåt,
 *    Skrovmål och Aja Special är kvar exakt som kunden skriver dem.
 *  - Uber Eats "Kombomeny" (pizza + dryck) är utelämnad - ser ut som en
 *    app-konstruktion. Fråga kunden om de vill ha med den.
 *  - ÖPPETTIDER spretar mellan källorna: öppettider.nu säger mån-tor 11-21,
 *    fre-lör 11-03, sön 12-21; skylten på Facebook-omslaget säger mån-lör
 *    11-22, sön 12-22 med "Nattöppet fre-lör 22-04"; Uber Eats (leverans)
 *    stänger 19:30-20:30. Nattöppet fre-lör återkommer i flera källor och är
 *    en riktig USP i studentkvarteren - tiderna nedan följer öppettider.nu.
 *    VERIFIERA med kunden före lansering.
 *  - Adress och postnummer bekräftade mot OpenStreetMap (Ekonomstråket 1,
 *    907 30). Telefon 090-19 54 40 återkommer i alla källor och på kundens
 *    egen banderoll.
 *  - Ingen publik e-postadress hittad - mejlrader döljs, formuläret är av.
 *  - Ingen frilagd logotypfil finns - sidhuvudet sätter namnet i rubrik-
 *    typsnittet istället. Be kunden om logotypen (björnen!) till lansering.
 *
 *  Design: kundens profil är tecknad och glad - bubbliga "BALOO"-bokstäver,
 *  björnfigurer och flammor på svarta banderoller med orange/gult. Därav:
 *  art direction "livlig", rubriktypsnittet "bubbel" (Baloo 2 - typsnittet
 *  heter faktiskt Baloo, ett kul säljargument), kolsvart primär som
 *  banderollerna, flamorange accent (#c2410c, AA mot ljus botten) och varm
 *  gul på mörka ytor. Rundningen är hög (14 px) för att eka bubbelkänslan.
 */
const meny = menyData as Meny;

const baloo: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "baloo",
  namn: "Baloo Grillen",
  slogan: "Grillen i Ålidhems centrum",
  kortBeskrivning:
    "Baloo Grillen i Ålidhems centrum serverar pizza, skrovmål, kebab och grill - rejäla portioner till bra pris. Ring 090-19 54 40 och hämta, eller ät på plats. Nattöppet fredag och lördag.",
  omOssStycken: [
    "Baloo Grillen är gatuköket mitt i Ålidhems centrum - ett stenkast från universitetet och studentkorridorerna. Hos oss får du riktig gatuköksmat utan krusiduller: pizza, hamburgare, kebab och grill, alltid i rejäla portioner och alltid till bra pris.",
    "Menyn har allt du väntar dig av ett riktigt gatukök - femtiotalet pizzor från Margherita till Baloos Special med oxfilé och bearnaisesås, skrovmål i fem storlekar från Miniskrov till Mega Meal med 300-gramsburgare, och kebab i rulle, på tallrik eller i pitabröd.",
    "Fredag och lördag har vi nattöppet - vi finns här när kvällen blir sen och hungern slår till. Ät på plats i centrumgallerian eller ta med dig maten hem.",
    "Du hittar oss på Ekonomstråket 1 i Ålidhems centrum. Ring 090-19 54 40 så står maten klar när du kommer. Välkommen till Baloo!",
  ],

  sajtUrl: "https://baloo-grillen.vercel.app",

  // --- Kontaktuppgifter ------------------------------------------------------
  kontakt: {
    telefon: "090-19 54 40",
    telefonLank: "+4690195440",
    // Ingen publik e-postadress hittad - mejlrader döljs.
    gata: "Ekonomstråket 1",
    postnummer: "907 30",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.81187,
    longitud: 20.31367,
  },

  social: {
    facebook: "https://www.facebook.com/baloogrillen/",
  },

  // --- Bokning: gatukök, ingen bordsbokning ---------------------------------
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
      "Välj dina rätter och betala med Swish eller kort - sedan hämtar du maten hos oss i Ålidhems centrum. Du kan alltid ringa in din beställning på 090-19 54 40.",
  },

  // --- Öppettider (öppettider.nu sept 2026 - VERIFIERA med kunden) ----------
  oppettider: {
    mandag: { oppnar: "11:00", stanger: "21:00" },
    tisdag: { oppnar: "11:00", stanger: "21:00" },
    onsdag: { oppnar: "11:00", stanger: "21:00" },
    torsdag: { oppnar: "11:00", stanger: "21:00" },
    fredag: { oppnar: "11:00", stanger: "03:00" },
    lordag: { oppnar: "11:00", stanger: "03:00" },
    sondag: { oppnar: "12:00", stanger: "21:00" },
  },
  specialdagar: [],
  oppettiderNotering:
    "Nattöppet fredag och lördag - vi har öppet till 03 på natten.",

  // --- Bilder ----------------------------------------------------------------
  // Alla matbilder är platshållare från Unsplash tills kunden fotograferat
  // egna motiv (se FOTOLISTA.md). Om oss-bilden är kundens eget Facebook-
  // omslag och visar den riktiga grillen i Ålidhems centrum.
  bilder: {
    hero: "/kunder/baloo/hero-burgare.webp",
    omOss: "/kunder/baloo/om-oss-alidhem.webp",
    omOssAlt: "Baloo Grillen i Ålidhems centrum med svarta banderoller och skylt ovanför disken",
    galleri: [
      { kalla: "/kunder/baloo/galleri/hamburgare.webp", alt: "Cheeseburgare med sallad, tomat och picklad gurka" },
      { kalla: "/kunder/baloo/galleri/kebabrulle.webp", alt: "Kebabrullar med pommes frites, rödlök och vitlökssås" },
      { kalla: "/kunder/baloo/galleri/pizza.webp", alt: "Nygräddad pizza i skivor med gyllene ost" },
      { kalla: "/kunder/baloo/galleri/pommes.webp", alt: "Krispiga pommes frites på svart tallrik" },
      { kalla: "/kunder/baloo/galleri/grillen.webp", alt: "Grillspett med kött och grönsaker över glöden" },
      { kalla: "/kunder/baloo/galleri/falafel.webp", alt: "Falafeltallrik med tunnbröd, sallad och vitlökssås" },
    ],
  },

  // --- Design: härledd ur kundens banderoller och skylt ----------------------
  // Svarta banderoller med flammor i orange/gult, bubbliga vita "BALOO"-
  // bokstäver och tecknade björnar. Livlig art direction, rubriker i Baloo 2
  // ("bubbel"), kolsvart primär, flamorange accent (AA mot ljus botten:
  // #c2410c ger 4,8:1 mot #faf6ef) och varm flamgul på mörka ytor.
  design: {
    artDirection: "livlig",
    rubrikTypsnitt: "bubbel",
    farger: {
      bakgrund: "#faf6ef",
      yta: "#fffdf7",
      text: "#1c1917",
      textDampad: "#615a4f",
      primar: "#191512",
      accent: "#c2410c",
      accentPaMork: "#ffb03b",
      accentText: "#ffffff",
      ram: "#eae2d3",
    },
    rundning: 14,
  },

  // --- SEO för lokala sökningar ---------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Ålidhem",
    sokord: [
      "gatukök Umeå",
      "grill Umeå",
      "pizzeria Ålidhem",
      "pizza Ålidhem",
      "kebab Umeå",
      "hamburgare Umeå",
      "skrovmål Umeå",
      "nattöppet Umeå",
      "hämtmat Ålidhem",
      "restaurang Ålidhems centrum",
    ],
    kokstyper: ["Grill", "Pizza", "Kebab"],
    prisniva: "$",
  },

  // --- Startsidan: hero -> smakprov -> beställ -> om oss -> galleri -> hitta -
  startsidaSektioner: [
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

export default baloo;
