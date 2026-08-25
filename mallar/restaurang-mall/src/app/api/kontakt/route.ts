import { NextResponse } from "next/server";

import { restaurang } from "@config/restaurang";

/**
 * Tar emot kontaktformuläret och skickar det vidare som e-post via Resend.
 *
 * Så här kopplar du på e-post för en ny kund:
 *   1. Skapa ett konto på https://resend.com och verifiera kundens domän.
 *   2. Lägg in RESEND_API_KEY, KONTAKT_AVSANDARE och KONTAKT_MOTTAGARE
 *      som miljövariabler i Vercel (och i .env.local vid lokal utveckling).
 *
 * Vill du använda en annan e-posttjänst byter du bara ut `skickaEpost` nedan.
 */

export const runtime = "nodejs";

type Formulardata = {
  namn?: string;
  epost?: string;
  telefon?: string;
  arende?: string;
  meddelande?: string;
  /** Honungsfälla - fylls bara i av robotar. */
  webbplats?: string;
};

/** Enkel takbegränsning per IP: max 5 meddelanden per kvart. */
const forsok = new Map<string, number[]>();
const FONSTER_MS = 15 * 60 * 1000;
const MAX_PER_FONSTER = 5;

function farSkicka(ip: string): boolean {
  const nu = Date.now();
  const tidigare = (forsok.get(ip) ?? []).filter((t) => nu - t < FONSTER_MS);
  if (tidigare.length >= MAX_PER_FONSTER) return false;
  tidigare.push(nu);
  forsok.set(ip, tidigare);
  return true;
}

function arGiltigEpost(varde: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(varde);
}

/** Tar bort tecken som skulle kunna tolkas som HTML i e-postmeddelandet. */
function rensa(varde: string): string {
  return varde
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

export async function POST(begaran: Request) {
  let data: Formulardata;

  try {
    data = (await begaran.json()) as Formulardata;
  } catch {
    return NextResponse.json({ fel: "Ogiltig förfrågan." }, { status: 400 });
  }

  // Robot upptäckt - vi svarar OK så roboten inte försöker igen.
  if (data.webbplats) {
    return NextResponse.json({ ok: true });
  }

  const ip =
    begaran.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "okand";
  if (!farSkicka(ip)) {
    return NextResponse.json(
      { fel: "Du har skickat flera meddelanden. Försök igen om en stund." },
      { status: 429 },
    );
  }

  const namn = rensa(data.namn ?? "");
  const epost = rensa(data.epost ?? "");
  const telefon = rensa(data.telefon ?? "");
  const arende = rensa(data.arende ?? "Övrig fråga");
  const meddelande = rensa(data.meddelande ?? "");

  if (namn.length < 2 || meddelande.length < 5 || !arGiltigEpost(epost)) {
    return NextResponse.json(
      { fel: "Kontrollera att namn, e-post och meddelande är ifyllda." },
      { status: 422 },
    );
  }

  const rader = [
    `Ärende: ${arende}`,
    `Namn: ${namn}`,
    `E-post: ${epost}`,
    telefon ? `Telefon: ${telefon}` : null,
    "",
    meddelande,
  ].filter(Boolean) as string[];

  const apiNyckel = process.env.RESEND_API_KEY;
  const avsandare = process.env.KONTAKT_AVSANDARE;
  const mottagare = process.env.KONTAKT_MOTTAGARE ?? restaurang.kontakt.epost;

  if (!apiNyckel || !avsandare) {
    // Under utveckling skriver vi ut meddelandet istället för att skicka det.
    if (process.env.NODE_ENV !== "production") {
      console.info("[kontakt] E-post ej konfigurerad. Meddelande:\n" + rader.join("\n"));
      return NextResponse.json({ ok: true, lage: "utveckling" });
    }
    console.error("[kontakt] RESEND_API_KEY eller KONTAKT_AVSANDARE saknas.");
    return NextResponse.json(
      {
        fel: `Formuläret är inte färdigkopplat. Ring oss gärna på ${restaurang.kontakt.telefon}.`,
      },
      { status: 500 },
    );
  }

  try {
    const svar = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiNyckel}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${restaurang.namn} webbplats <${avsandare}>`,
        to: [mottagare],
        reply_to: epost,
        subject: `${arende} - ${namn}`,
        text: rader.join("\n"),
      }),
    });

    if (!svar.ok) {
      console.error("[kontakt] Resend svarade med fel:", await svar.text());
      return NextResponse.json(
        { fel: "Meddelandet kunde inte skickas just nu. Försök igen senare." },
        { status: 502 },
      );
    }
  } catch (fel) {
    console.error("[kontakt] Kunde inte nå e-posttjänsten:", fel);
    return NextResponse.json(
      { fel: "Meddelandet kunde inte skickas just nu. Försök igen senare." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
