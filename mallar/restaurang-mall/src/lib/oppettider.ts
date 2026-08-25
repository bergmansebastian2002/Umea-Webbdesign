import { restaurang } from "@/lib/kund";
import { VECKODAGAR, type Oppettid, type Veckodag } from "@/lib/typer";

/** Svenska namn på veckodagarna, i samma ordning som VECKODAGAR. */
export const DAGNAMN: Record<Veckodag, string> = {
  mandag: "Måndag",
  tisdag: "Tisdag",
  onsdag: "Onsdag",
  torsdag: "Torsdag",
  fredag: "Fredag",
  lordag: "Lördag",
  sondag: "Söndag",
};

/** Motsvarande namn enligt schema.org - används i strukturerad data för Google. */
export const SCHEMA_DAGNAMN: Record<Veckodag, string> = {
  mandag: "Monday",
  tisdag: "Tuesday",
  onsdag: "Wednesday",
  torsdag: "Thursday",
  fredag: "Friday",
  lordag: "Saturday",
  sondag: "Sunday",
};

const TIDSZON = "Europe/Stockholm";

/** "11:00" -> 660 minuter efter midnatt. */
function tillMinuter(tid: string): number {
  const [timmar, minuter] = tid.split(":").map(Number);
  return timmar * 60 + minuter;
}

/** Formaterar en dags öppettid för visning: "11.00-22.00" eller "Stängt". */
export function formateraOppettid(tid: Oppettid): string {
  if (tid.stangt) return "Stängt";
  return `${tid.oppnar.replace(":", ".")}-${tid.stanger.replace(":", ".")}`;
}

/**
 * Slår ihop dagar med identiska tider till rader som
 * "Tisdag-onsdag 11.00-22.00". Används i footern och på kontaktsidan.
 */
export function grupperadeOppettider(): { dagar: string; tid: string }[] {
  const rader: { dagar: string; tid: string }[] = [];
  let start = 0;

  for (let i = 0; i < VECKODAGAR.length; i++) {
    const nuvarande = formateraOppettid(restaurang.oppettider[VECKODAGAR[i]]);
    const nasta =
      i + 1 < VECKODAGAR.length
        ? formateraOppettid(restaurang.oppettider[VECKODAGAR[i + 1]])
        : null;

    if (nuvarande !== nasta) {
      const forsta = DAGNAMN[VECKODAGAR[start]];
      const sista = DAGNAMN[VECKODAGAR[i]].toLowerCase();
      rader.push({
        dagar: start === i ? forsta : `${forsta}-${sista}`,
        tid: nuvarande,
      });
      start = i + 1;
    }
  }

  return rader;
}

/** Aktuell tid i svensk tidszon, oavsett var servern eller besökaren står. */
function svenskTidNu(nu: Date): { veckodag: Veckodag; minuter: number; datum: string } {
  const delar = new Intl.DateTimeFormat("sv-SE", {
    timeZone: TIDSZON,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour12: false,
  }).formatToParts(nu);

  const hamta = (typ: string) => delar.find((d) => d.type === typ)?.value ?? "";

  // Intl ger "mån", "tis", ... på svenska.
  const kortDag = hamta("weekday").toLowerCase().slice(0, 3);
  const karta: Record<string, Veckodag> = {
    mån: "mandag",
    tis: "tisdag",
    ons: "onsdag",
    tor: "torsdag",
    fre: "fredag",
    lör: "lordag",
    sön: "sondag",
  };

  return {
    veckodag: karta[kortDag] ?? "mandag",
    minuter: Number(hamta("hour")) * 60 + Number(hamta("minute")),
    datum: `${hamta("year")}-${hamta("month")}-${hamta("day")}`,
  };
}

export type Oppetstatus = {
  oppet: boolean;
  /** Färdig text att visa, t.ex. "Öppet nu - stänger 22.00". */
  text: string;
};

/**
 * Räknar ut om restaurangen är öppen just nu. Hanterar stängningstider
 * efter midnatt (t.ex. fredag 11.00-01.00) och avvikande specialdagar.
 */
export function oppetStatus(nu: Date = new Date()): Oppetstatus {
  const { veckodag, minuter, datum } = svenskTidNu(nu);

  const special = restaurang.specialdagar.find((d) => d.datum === datum);
  if (special) {
    if (special.stangt || !special.oppnar || !special.stanger) {
      return { oppet: false, text: `Stängt - ${special.namn}` };
    }
    const oppnar = tillMinuter(special.oppnar);
    const stanger = tillMinuter(special.stanger);
    const stangerSent = stanger <= oppnar ? stanger + 1440 : stanger;
    const oppet = minuter >= oppnar && minuter < stangerSent;
    return {
      oppet,
      text: oppet
        ? `Öppet nu - ${special.namn} till ${special.stanger.replace(":", ".")}`
        : `${special.namn} - öppnar ${special.oppnar.replace(":", ".")}`,
    };
  }

  // Kolla först om gårdagens pass fortfarande pågår (stängning efter midnatt).
  const igarIndex = (VECKODAGAR.indexOf(veckodag) + 6) % 7;
  const igar = restaurang.oppettider[VECKODAGAR[igarIndex]];
  if (!igar.stangt) {
    const oppnar = tillMinuter(igar.oppnar);
    const stanger = tillMinuter(igar.stanger);
    if (stanger <= oppnar && minuter < stanger) {
      return { oppet: true, text: `Öppet nu - stänger ${igar.stanger.replace(":", ".")}` };
    }
  }

  const idag = restaurang.oppettider[veckodag];
  if (idag.stangt) {
    return { oppet: false, text: `Stängt i dag - ${nastaOppning(veckodag)}` };
  }

  const oppnar = tillMinuter(idag.oppnar);
  const stanger = tillMinuter(idag.stanger);
  const stangerSent = stanger <= oppnar ? stanger + 1440 : stanger;

  if (minuter < oppnar) {
    return { oppet: false, text: `Stängt just nu - öppnar ${idag.oppnar.replace(":", ".")}` };
  }
  if (minuter < stangerSent) {
    return { oppet: true, text: `Öppet nu - stänger ${idag.stanger.replace(":", ".")}` };
  }
  return { oppet: false, text: `Stängt för i dag - ${nastaOppning(veckodag)}` };
}

/** "öppnar torsdag 11.00" - används när restaurangen är stängd. */
function nastaOppning(fran: Veckodag): string {
  const startIndex = VECKODAGAR.indexOf(fran);
  for (let steg = 1; steg <= 7; steg++) {
    const dag = VECKODAGAR[(startIndex + steg) % 7];
    const tid = restaurang.oppettider[dag];
    if (!tid.stangt) {
      const namn = steg === 1 ? "i morgon" : DAGNAMN[dag].toLowerCase();
      return `öppnar ${namn} ${tid.oppnar.replace(":", ".")}`;
    }
  }
  return "se öppettider";
}
