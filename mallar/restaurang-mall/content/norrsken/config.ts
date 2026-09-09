import type { Meny, Restaurangkonfig } from "@/lib/typer";

import bilddata from "./bilddata.json";
import menyData from "./meny.json";

/**
 * ============================================================================
 *  RESTAURANG NORRSKEN - FIKTIV demokund (modern finkrog).
 * ============================================================================
 *
 *  Restaurangen finns inte på riktigt. Den används som exempel på byråsajten
 *  för att visa mallens spännvidd. Alla uppgifter är påhittade och alla
 *  bilder är Unsplash-demobilder (se BILDRATTIGHETER.md).
 */
const meny = menyData as Meny;

const norrsken: Restaurangkonfig = {
  // --- Identitet -----------------------------------------------------------
  slug: "norrsken",
  namn: "Restaurang Norrsken",
  slogan: "Avsmakningsmenyer med smaker från norr",
  kortBeskrivning:
    "Restaurang Norrsken är en fiktiv demorestaurang: en modern finkrog i Umeå " +
    "med avsmakningsmenyer på norrländska råvaror. Sajten visar hur en " +
    "restauranghemsida från Umeå Webbdesign kan se ut.",
  omOssStycken: [
    "Norrsken är en påhittad restaurang - men idén är enkel: ett litet kök som lagar avsmakningsmenyer på det som fjäll, skog och kust ger just nu. Menyn byts när råvarorna byts.",
    "Vi arbetar med små producenter, eget bröd och ett vinlager som valts för att möta syrligheten i norrländska bär och örter. Varje servering får sin berättelse vid bordet.",
    "Matsalen har plats för 32 gäster. Kvällens meny serveras vid två sittningar - och baren blandar drinkar på granskott, havtorn och rökt honung.",
  ],

  sajtUrl: "https://restaurang-norrsken.vercel.app",

  // --- Kontaktuppgifter (påhittade demouppgifter) --------------------------
  kontakt: {
    telefon: "090-123 45 67",
    telefonLank: "+4690123456",
    epost: "boka@restaurangnorrsken.se",
    gata: "Storgatan 15",
    postnummer: "903 26",
    ort: "Umeå",
    land: "Sverige",
    latitud: 63.8267,
    longitud: 20.2652,
  },

  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  // --- Bokning -------------------------------------------------------------
  bokning: {
    aktiv: true,
    lank: "https://www.bokabord.se/",
    knapptext: "Boka bord",
    hjalptext: "Eller ring oss på 090-123 45 67",
  },

  // --- Betyg och recensioner (demodata) ------------------------------------
  betyg: {
    snitt: 4.8,
    antal: 156,
    recensioner: [
      {
        text: "En av de finaste matupplevelserna i Norrland. Sju serveringar och varenda en satt.",
        namn: "Elin H.",
        kalla: "Google",
      },
      {
        text: "Dryckespaketet var lika genomtänkt som maten. Personalen kan verkligen sitt hantverk.",
        namn: "Petter A.",
        kalla: "Google",
      },
      {
        text: "Hit tar vi alla gäster som besöker Umeå. Norrländska råvaror när de är som bäst.",
        namn: "Sara V.",
        kalla: "Google",
      },
    ],
  },

  // --- Evenemang och erbjudanden -------------------------------------------
  evenemang: [
    {
      rubrik: "Vinprovning",
      beskrivning: "Sommelierens favoriter i fem glas, med tilltugg från köket. Förbokning krävs.",
      datumText: "Första torsdagen i månaden",
      lank: "https://www.bokabord.se/",
    },
    {
      rubrik: "Norrskensmenyn",
      beskrivning: "Säsongens stora avsmakningsmeny i sju serveringar, med eller utan dryckespaket.",
      datumText: "Onsdag-lördag",
    },
  ],

  // --- Öppettider ----------------------------------------------------------
  oppettider: {
    mandag: { stangt: true },
    tisdag: { stangt: true },
    onsdag: { oppnar: "17:00", stanger: "23:00" },
    torsdag: { oppnar: "17:00", stanger: "23:00" },
    fredag: { oppnar: "17:00", stanger: "00:00" },
    lordag: { oppnar: "16:00", stanger: "00:00" },
    sondag: { stangt: true },
  },
  specialdagar: [],
  oppettiderNotering: "Sista sittning två timmar före stängning.",

  // --- Bilder --------------------------------------------------------------
  bilder: {
    hero: "/kunder/norrsken/hero.webp",
    omOss: "/kunder/norrsken/om-oss.webp",
    omOssAlt: "Dukat bord med champagneglas och serverad förrätt",
    delning: "/kunder/norrsken/delning.webp",
    galleri: [
      { kalla: "/kunder/norrsken/galleri/ratt-1.webp", alt: "Halstrad lax med gurksalsa och brynt smör", staende: true },
      { kalla: "/kunder/norrsken/galleri/ratt-2.webp", alt: "Helstekt biff med friterad potatis och örter" },
      { kalla: "/kunder/norrsken/galleri/baren.webp", alt: "Baren med hyllor av flaskor i varmt ljus" },
      { kalla: "/kunder/norrsken/galleri/koket.webp", alt: "Kocken finhackar grönsaker i köket", staende: true },
      { kalla: "/kunder/norrsken/galleri/uteservering.webp", alt: "Uteserveringen vid vattnet en sommarkväll" },
    ],
  },

  // --- Design --------------------------------------------------------------
  design: {
    artDirection: "nordisk",
  },

  // --- SEO för lokala sökningar -------------------------------------------
  seo: {
    stad: "Umeå",
    omrade: "Centrum",
    sokord: [
      "finkrog Umeå",
      "avsmakningsmeny Umeå",
      "fine dining Umeå",
      "restaurang Umeå centrum",
      "vinprovning Umeå",
      "norrländska råvaror",
    ],
    kokstyper: ["Norrländsk", "Fine dining", "Säsongsbaserad"],
    prisniva: "$$$",
  },

  // --- Startsidans sektioner, i visningsordning ----------------------------
  startsidaSektioner: [
    "omOss",
    "menyHojdpunkter",
    "galleri",
    "betyg",
    "evenemang",
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

export default norrsken;
