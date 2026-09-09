import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Globe,
  LineChart,
  MapPin,
  MessageCircle,
  Search,
  Wrench,
  Zap,
} from "lucide-react";

/**
 * ============================================================================
 *  ALL COMPANY DATA AND SITE COPY LIVES HERE.
 *  Change contact details, services or examples in this file only -
 *  the components never hard-code content.
 * ============================================================================
 */

export const company = {
  name: "Umeå Webbdesign",
  city: "Umeå",
  /** Used in schema.org address data. */
  region: "Västerbotten",
  /** Shown next to the city on the site: "Umeå, Sverige". */
  country: "Sverige",
  email: "umeawebdesign@gmail.com",
  phone: "070-360 05 64",
  phoneHref: "+46703600564",
  siteUrl: "https://umea-webbdesign.vercel.app",
  responseTime: "Inom 24 timmar",
  /** PLACEHOLDER: replace with real registration details before invoicing. */
  orgDetails: "Organisationsuppgifter: [kompletteras]",
} as const;

/** Pre-filled e-mail draft used by every "Kontakta oss" button. */
export const contactMailto =
  `mailto:${company.email}` +
  "?subject=F%C3%B6rfr%C3%A5gan%20om%20ny%20hemsida" +
  "&body=Hej!%0A%0AJag%20%C3%A4r%20intresserad%20av%20en%20ny%20hemsida.%0A%0A" +
  "F%C3%B6retag%3A%0AVerksamhet%3A%0ATelefon%3A%0AVad%20jag%20vill%20uppn%C3%A5%3A%0A%0A" +
  "Med%20v%C3%A4nliga%20h%C3%A4lsningar%2C";

export type NavLink = { href: string; label: string };

/** Header and footer navigation. Anchors scroll on the start page. */
export const navLinks: NavLink[] = [
  { href: "/", label: "Hem" },
  { href: "/#tjanster", label: "Vad vi erbjuder" },
  { href: "/#process", label: "Hur vi jobbar" },
  { href: "/#hemsidor", label: "Hemsidor" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/din-data", label: "Din data" },
  { href: "/#kontakt", label: "Kontakt" },
];

export type Promise_ = { title: string; detail: string };

/** The three promises shown under the hero buttons. */
export const promises: Promise_[] = [
  { title: "Snabb leverans", detail: "Din nya sida live på 1-2 veckor" },
  { title: "Bättre resultat", detail: "Snabb, sökbar och byggd för Google" },
  { title: "Ökad försäljning", detail: "Design som lockar. Kunder som ökar." },
];

export type Service = { icon: LucideIcon; title: string; body: string };

export const servicesIntro =
  "Vi designar och bygger hemsidor från grunden - snabba, sökbara och enkla " +
  "att förvalta. Allt görs av samma person du pratar med, från första skiss " +
  "till publicerad sida.";

export const services: Service[] = [
  {
    icon: Globe,
    title: "Hemsida & Webbutveckling",
    body:
      "Design och utveckling av moderna, snabba hemsidor byggda från grunden. " +
      "Inga mallar från hyllan - varje sida anpassas efter er verksamhet, " +
      "era kunder och det ni vill uppnå.",
  },
  {
    icon: LineChart,
    title: "Google Ads",
    body:
      "Annonser som syns när kunderna faktiskt söker efter det ni erbjuder. " +
      "Vi sätter upp kampanjerna, följer resultatet och optimerar löpande så " +
      "att budgeten gör nytta.",
  },
  {
    icon: Search,
    title: "SEO & Lokal synlighet",
    body:
      "Struktur, metadata och Google Företagsprofil så att ni hittas i " +
      "Umeå-sökningar. Rätt grundarbete gör att sidan syns när någon söker " +
      "efter just er bransch.",
  },
  {
    icon: Wrench,
    title: "Förvaltning & Support",
    body:
      "Uppdateringar, säkerhet och innehållsändringar när ni behöver. Ni " +
      "ringer eller mejlar - vi fixar. Sidan står aldrig och förfaller.",
  },
];

export type ProcessStep = { number: string; title: string; body: string };

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Möte",
    body:
      "Vi går igenom er verksamhet, era mål och vad sidan ska göra för er. " +
      "Kostnadsfritt och förutsättningslöst.",
  },
  {
    number: "02",
    title: "Strategi",
    body:
      "Vi tar fram struktur, innehåll och design som är anpassad efter era " +
      "kunder och er bransch.",
  },
  {
    number: "03",
    title: "Genomförande",
    body:
      "Vi bygger sidan, fyller den med innehåll och ser till att den är " +
      "snabb och sökmotoroptimerad.",
  },
  {
    number: "04",
    title: "Uppföljning",
    body:
      "Vi mäter resultatet, justerar och finns kvar när ni vill " +
      "vidareutveckla sidan.",
  },
];

export type ExampleSlide = {
  image: string;
  alt: string;
  /** Small chip shown on the slide: "Maten", "Menyn" ... */
  label: string;
};

export type Example = {
  name: string;
  type: string;
  url: string;
  slides: ExampleSlide[];
};

/**
 * Demo sites built on our restaurant template. All three restaurants are
 * fictional demo customers - no real businesses. Photos are Unsplash
 * (documented in BILDKALLOR.md); menu slides are real screenshots of the
 * demo sites - regenerate with `npm run exempelbilder`.
 */
export const examples: Example[] = [
  {
    name: "Restaurang Björken",
    type: "Norrländsk restaurang - demosajt",
    url: "https://restaurang-bjorken-coral.vercel.app",
    slides: [
      { image: "/images/exempel/bjorken-mat.webp", alt: "Färgstark bowl med säsongens grönsaker", label: "Maten" },
      { image: "/images/exempel/bjorken-restaurang.webp", alt: "Matsalen med dukade bord i varmt kvällsljus", label: "Restaurangen" },
      { image: "/images/exempel/bjorken-miljo.webp", alt: "Bartendern silar upp en cocktail i baren", label: "Miljön" },
      { image: "/images/exempel/bjorken-meny.webp", alt: "Menysidan på Restaurang Björkens hemsida", label: "Menyn" },
    ],
  },
  {
    name: "Restaurang Norrsken",
    type: "Modern finkrog - demosajt",
    url: "https://restaurang-norrsken.vercel.app",
    slides: [
      { image: "/images/exempel/norrsken-mat.webp", alt: "Elegant uppläggning på tallrik", label: "Maten" },
      { image: "/images/exempel/norrsken-restaurang.webp", alt: "Restaurangens matsal", label: "Restaurangen" },
      { image: "/images/exempel/norrsken-miljo.webp", alt: "Stämningsfull miljö i restaurangen", label: "Miljön" },
      { image: "/images/exempel/norrsken-meny.webp", alt: "Menysidan på Restaurang Norrskens hemsida", label: "Menyn" },
    ],
  },
  {
    name: "Pizzeria Vedugnen",
    type: "Kvarterspizzeria - demosajt",
    url: "https://pizzeria-vedugnen.vercel.app",
    slides: [
      { image: "/images/exempel/vedugnen-mat.webp", alt: "Nygräddad pizza", label: "Maten" },
      { image: "/images/exempel/vedugnen-restaurang.webp", alt: "Pizzerians lokal", label: "Restaurangen" },
      { image: "/images/exempel/vedugnen-miljo.webp", alt: "Pizza gräddas i ugnen", label: "Miljön" },
      { image: "/images/exempel/vedugnen-meny.webp", alt: "Menysidan på Pizzeria Vedugnens hemsida", label: "Menyn" },
    ],
  },
];

export const examplesOutro =
  "Alla tre är fiktiva demorestauranger som visar vad mallen klarar. " +
  "Restaurang är bara ett exempel - vi bygger även sidor för frisörer, " +
  "hantverkare, kliniker och butiker. Samma noggrannhet, anpassat efter din bransch.";

export type TrustPoint = { icon: LucideIcon; title: string; detail: string };

export const trustPoints: TrustPoint[] = [
  {
    icon: MessageCircle,
    title: "Lätt att kontakta",
    detail: "Ring eller mejla direkt till den som bygger din sida",
  },
  {
    icon: CalendarCheck,
    title: "Enkelt att boka möte",
    detail: "På plats i Umeå eller digitalt - som det passar dig",
  },
  {
    icon: Zap,
    title: "Snabbt svar",
    detail: "Oftast inom 24 timmar, även på kvällar och helger",
  },
];

/**
 * Photo of Väven by the Umeälven river. CC BY-SA 3.0 - the visible credit
 * line below is required by the license. Source documented in BILDKALLOR.md.
 */
export const vavenPhoto = {
  src: "/images/vaven-umea.webp",
  alt: "Kulturhuset Väven vid Umeälven i Umeå en solig sensommardag",
  credit: "Foto: Mikael Lindmark (CC BY-SA 3.0, Wikimedia Commons)",
} as const;

export const aboutText = [
  "Umeå Webbdesign drivs lokalt i Umeå. När du hör av dig pratar du direkt " +
    "med den som faktiskt designar och bygger din sida - inga mellanhänder, " +
    "inga projektledare som skickar ärenden vidare.",
  "Det gör vägen kort: vi är lätta att nå, vi svarar snabbt, och det är " +
    "enkelt att boka ett möte - på plats över en fika eller digitalt.",
] as const;

export const localIcon = MapPin;
