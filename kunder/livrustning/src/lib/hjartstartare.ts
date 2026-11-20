import type { StaticImageData } from "next/image";

import bildHand from "@/bilder/hjartstartare-i-hand.webp";
import bildHemma from "@/bilder/hjartstartare-hemma.webp";
import bildKontor from "@/bilder/hjartstartarpaket-kontor.webp";
import bildSpanien from "@/bilder/hjartstartare-spanien.webp";

/**
 * Hjärtstartarpaketen. Allt innehåll kommer ordagrant ur kundens underlag
 * 2026-11-19. Ändra inga uppgifter om modeller, IP-klass eller garanti utan
 * kundens ok.
 */
export type Paket = {
  slug: string;
  namn: string;
  kortnamn: string;
  /** En mening som sammanfattar paketet, byggd av det som ingår. */
  ingress: string;
  ingar: { rubrik: string; text?: string }[];
  utbildning: { namn: string; licens: string; text: string };
  bilder: { src: StaticImageData; alt: string }[];
};

const HJARTSTARTARE = { rubrik: "Hjärtstartare", text: "Primedic Y eller Primedic MyPAD." };
const RESCUE = { rubrik: "Rescue-kit", text: "Med tillbehör som klädsax, handskar, rakhyvel etc." };
const SKYLT = { rubrik: "Hjärtstartarskylt", text: "För att märka upp hjärtstartarens placering." };
const IP = { rubrik: "Hög damm- och vattentäthet", text: "IP55 eller IP66 beroende på hjärtstartarval." };
const VOLYM = { rubrik: "Automatisk volymjustering", text: "Volymen anpassas efter omgivande ljud." };
const BARN = { rubrik: "Barnknapp", text: "Fungerar lika bra på barn som vuxna." };

const sprak = (exempel: string) => ({
  rubrik: "Språkval för hjälprösten",
  text: `Fyra språk kan väljas och förprogrammeras vid beställning efter dina önskemål, t.ex. ${exempel}.`,
});

export const paket: Paket[] = [
  {
    slug: "kontor",
    namn: "Hjärtstartarpaket kontor",
    kortnamn: "Kontor",
    ingress: "Hjärtstartare, inomhusskåp med larm, skylt och utbildning för hela personalen i ett och samma paket.",
    ingar: [
      HJARTSTARTARE,
      sprak("svenska, engelska, arabiska och tyska"),
      VOLYM,
      IP,
      { rubrik: "Inomhusskåp med larm" },
      RESCUE,
      SKYLT,
    ],
    utbildning: {
      namn: "eHLR-Beredd",
      licens: "1-månadslicens för hela personalen",
      text: "En digital utbildning som ger era anställda kunskap om hur hjärtstartare används tillsammans med HLR.",
    },
    bilder: [{ src: bildKontor, alt: "Primedic-hjärtstartare i vitt väggskåp med AED-skylt på ett kontor" }],
  },
  {
    slug: "utomhus",
    namn: "Hjärtstartarpaket utomhus",
    kortnamn: "Utomhus",
    ingress: "Hjärtstartare i uppvärmt utomhusskåp, med skylt och utbildning för alla som vistas i närheten.",
    ingar: [
      HJARTSTARTARE,
      sprak("svenska, engelska, arabiska och tyska"),
      VOLYM,
      IP,
      { rubrik: "Utomhusskåp", text: "Rotaid Solid Plus Heat (kräver 230 V elström)." },
      RESCUE,
      SKYLT,
    ],
    utbildning: {
      namn: "eHLR-Beredd",
      licens: "1-månadslicens för alla i närheten av hjärtstartaren",
      text: "En digital utbildning som ger de som vistas i närheten av hjärtstartaren kunskap om hur hjärtstartare används tillsammans med HLR.",
    },
    // Kunden har inte skickat någon bild på utomhuspaketet ännu.
    bilder: [],
  },
  {
    slug: "hemma",
    namn: "Hjärtstartarpaket hemma",
    kortnamn: "Hemma",
    ingress: "En hjärtstartare för hemmet som fungerar lika bra på barn som vuxna, med utbildning för hela familjen.",
    ingar: [HJARTSTARTARE, sprak("svenska, engelska, spanska och finska"), BARN, IP, RESCUE, SKYLT],
    utbildning: {
      namn: "eHLR-Familj",
      licens: "1-månadslicens för alla i familjen",
      text: "En digital utbildning som ger alla familjemedlemmar kunskap om hur hjärtstartare används tillsammans med vuxen-HLR och barn-HLR samt kunskap om någon sätter i halsen.",
    },
    bilder: [
      { src: bildHemma, alt: "Hjärtstartare på en bänk i hallen i ett svenskt hem" },
      { src: bildHand, alt: "Primedic MyPAD, en kompakt hjärtstartare som ryms i handen" },
    ],
  },
  {
    slug: "spanien",
    namn: "Hjärtstartarpaket Spanien",
    kortnamn: "Spanien",
    ingress: "Hjärtstartare till huset i Spanien, levererad för samma fraktkostnad som inom Sverige.",
    ingar: [
      HJARTSTARTARE,
      sprak("svenska, spanska, engelska och tyska"),
      BARN,
      IP,
      RESCUE,
      { rubrik: "AED-skylt", text: "För att märka upp hjärtstartarens placering." },
      { rubrik: "Leverans till Spanien", text: "För samma fraktkostnad som inom Sverige." },
    ],
    utbildning: {
      namn: "eHLR-Familj",
      licens: "1-månadslicens för alla i familjen",
      text: "En digital utbildning på svenska som ger alla familjemedlemmar kunskap om hur hjärtstartare används tillsammans med vuxen-HLR och barn-HLR samt kunskap om någon sätter i halsen.",
    },
    bilder: [{ src: bildSpanien, alt: "Hjärtstartare på en bänk i hallen i ett hus i Spanien" }],
  },
];

export const varforPrimedic = [
  { rubrik: "10 års garanti", text: "Ett kvitto på högsta kvalitet och pålitlighet." },
  { rubrik: "Anpassas snabbt", text: "Fungerar lika bra på vuxna som på barn." },
  { rubrik: "Flerspråkig", text: "Ger tydliga instruktioner på det språk du väljer." },
  { rubrik: "Tål tuffa miljöer", text: "Både vattentät och stöttålig." },
];

export const modeller = [
  {
    namn: "Primedic HeartSave myPAD",
    karaktar: "Betydligt mer kompakt och bärbar.",
    matt: "15 × 15 cm",
    vikt: "1,1 kg",
    ip: "IP66",
    talighet: "Mycket hög damm- och vattentålighet.",
  },
  {
    namn: "Primedic HeartSave Y",
    karaktar: "Den större modellen.",
    matt: "ca 29,6 × 22,0 × 9,7 cm",
    vikt: "ca 2,2–2,5 kg",
    ip: "IP55",
    talighet: "Hög damm- och vattentålighet.",
  },
];
