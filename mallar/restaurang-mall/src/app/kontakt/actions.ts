"use server";

import { z } from "zod";

import { restaurang } from "@/lib/kund";

/**
 * Server action för kontaktformuläret.
 *
 * - Validering med Zod (svenska felmeddelanden)
 * - Honungsfälla ("webbplats") som fångar skräppost-robotar
 * - Takbegränsning per IP: max 5 meddelanden per kvart
 * - E-post via Resend (RESEND_API_KEY m.fl. i miljövariabler)
 */

const KontaktSchema = z.object({
  namn: z
    .string()
    .trim()
    .min(2, "Skriv ditt namn.")
    .max(100, "Namnet är för långt."),
  epost: z
    .string()
    .trim()
    .email("Kontrollera e-postadressen.")
    .max(150, "E-postadressen är för lång."),
  telefon: z.string().trim().max(30, "Telefonnumret är för långt.").optional(),
  arende: z.string().trim().max(60).catch("Övrig fråga"),
  meddelande: z
    .string()
    .trim()
    .min(5, "Skriv ett meddelande.")
    .max(2000, "Meddelandet är för långt (max 2000 tecken)."),
  webbplats: z.string().max(0).optional().or(z.literal("")),
});

export type KontaktResultat = {
  status: "vilande" | "klart" | "fel";
  fel?: string;
};

/** Takbegränsning per IP: max 5 meddelanden per 15 minuter. */
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

/** Tar bort tecken som skulle kunna tolkas som HTML i e-postmeddelandet. */
function rensa(varde: string): string {
  return varde.replace(/[<>]/g, "").trim();
}

export async function skickaKontakt(
  _tidigare: KontaktResultat,
  formData: FormData,
): Promise<KontaktResultat> {
  // Robot i honungsfällan: låtsas att allt gick bra.
  if (formData.get("webbplats")) {
    return { status: "klart" };
  }

  const tolkat = KontaktSchema.safeParse({
    namn: formData.get("namn") ?? "",
    epost: formData.get("epost") ?? "",
    telefon: formData.get("telefon") ?? "",
    arende: formData.get("arende") ?? "",
    meddelande: formData.get("meddelande") ?? "",
    webbplats: formData.get("webbplats") ?? "",
  });

  if (!tolkat.success) {
    return {
      status: "fel",
      fel: tolkat.error.issues[0]?.message ?? "Kontrollera uppgifterna och försök igen.",
    };
  }

  const { headers } = await import("next/headers");
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "okand";
  if (!farSkicka(ip)) {
    return {
      status: "fel",
      fel: "Du har skickat flera meddelanden på kort tid. Försök igen om en stund.",
    };
  }

  const data = tolkat.data;
  const rader = [
    `Ärende: ${rensa(data.arende)}`,
    `Namn: ${rensa(data.namn)}`,
    `E-post: ${rensa(data.epost)}`,
    data.telefon ? `Telefon: ${rensa(data.telefon)}` : null,
    "",
    rensa(data.meddelande),
  ].filter((rad): rad is string => rad !== null);

  const apiNyckel = process.env.RESEND_API_KEY;
  const avsandare = process.env.KONTAKT_AVSANDARE;
  const mottagare = process.env.KONTAKT_MOTTAGARE ?? restaurang.kontakt.epost;

  if (!apiNyckel || !avsandare) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[kontakt] E-post ej konfigurerad. Meddelande:\n" + rader.join("\n"));
      return { status: "klart" };
    }
    console.error("[kontakt] RESEND_API_KEY eller KONTAKT_AVSANDARE saknas.");
    return {
      status: "fel",
      fel: `Formuläret är inte färdigkopplat. Ring oss gärna på ${restaurang.kontakt.telefon}.`,
    };
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
        reply_to: rensa(data.epost),
        subject: `${rensa(data.arende)} - ${rensa(data.namn)}`,
        text: rader.join("\n"),
      }),
    });

    if (!svar.ok) {
      console.error("[kontakt] Resend svarade med fel:", await svar.text());
      return {
        status: "fel",
        fel: "Meddelandet kunde inte skickas just nu. Försök igen senare.",
      };
    }
  } catch (fel) {
    console.error("[kontakt] Kunde inte nå e-posttjänsten:", fel);
    return {
      status: "fel",
      fel: "Meddelandet kunde inte skickas just nu. Försök igen senare.",
    };
  }

  return { status: "klart" };
}
