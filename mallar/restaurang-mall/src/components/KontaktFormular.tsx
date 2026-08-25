"use client";

import { useState, type FormEvent } from "react";

import { restaurang } from "@/lib/kund";

type Status = "vilande" | "skickar" | "klart" | "fel";

const ARENDEN = [
  "Bordsbokning",
  "Större sällskap eller fest",
  "Allergier och kostbehov",
  "Övrig fråga",
];

const faltKlass =
  "w-full rounded-mall border border-ram bg-yta px-4 py-3 text-base " +
  "outline-none transition-colors placeholder:text-dampad/60 focus:border-accent";

/**
 * Kontaktformulär som skickar till /api/kontakt.
 *
 * Fungerar utan JavaScript-beroenden, validerar i webbläsaren och har
 * en dold honungsfälla ("webbplats") som fångar upp skräppost-robotar.
 */
export default function KontaktFormular() {
  const [status, setStatus] = useState<Status>("vilande");
  const [felmeddelande, setFelmeddelande] = useState("");

  async function skicka(handelse: FormEvent<HTMLFormElement>) {
    handelse.preventDefault();
    const formular = handelse.currentTarget;
    setStatus("skickar");
    setFelmeddelande("");

    try {
      const svar = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(formular))),
      });

      const data = (await svar.json()) as { fel?: string };

      if (!svar.ok) {
        setFelmeddelande(data.fel ?? "Något gick fel. Försök igen om en stund.");
        setStatus("fel");
        return;
      }

      formular.reset();
      setStatus("klart");
    } catch {
      setFelmeddelande("Vi kunde inte nå servern. Kontrollera din uppkoppling.");
      setStatus("fel");
    }
  }

  if (status === "klart") {
    return (
      <div
        role="status"
        className="rounded-mall border border-accent/40 bg-accent/5 p-8 text-center"
      >
        <p className="font-rubrik text-2xl">Tack för ditt meddelande!</p>
        <p className="mt-3 text-dampad">
          Vi återkommer så snart vi kan, oftast inom ett dygn. Vill du ha svar
          direkt är du välkommen att ringa {restaurang.kontakt.telefon}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("vilande")}
          className="mt-6 text-sm text-accent underline underline-offset-4"
        >
          Skicka ett till meddelande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={skicka} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="namn" className="mb-2 block text-sm font-medium">
            Namn <span className="text-accent">*</span>
          </label>
          <input
            id="namn"
            name="namn"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            className={faltKlass}
            placeholder="För- och efternamn"
          />
        </div>

        <div>
          <label htmlFor="epost" className="mb-2 block text-sm font-medium">
            E-post <span className="text-accent">*</span>
          </label>
          <input
            id="epost"
            name="epost"
            type="email"
            required
            autoComplete="email"
            maxLength={150}
            className={faltKlass}
            placeholder="namn@exempel.se"
          />
        </div>

        <div>
          <label htmlFor="telefon" className="mb-2 block text-sm font-medium">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            className={faltKlass}
            placeholder="070-123 45 67"
          />
        </div>

        <div>
          <label htmlFor="arende" className="mb-2 block text-sm font-medium">
            Ärende
          </label>
          <select id="arende" name="arende" className={faltKlass} defaultValue={ARENDEN[0]}>
            {ARENDEN.map((arende) => (
              <option key={arende} value={arende}>
                {arende}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="meddelande" className="mb-2 block text-sm font-medium">
          Meddelande <span className="text-accent">*</span>
        </label>
        <textarea
          id="meddelande"
          name="meddelande"
          required
          rows={6}
          maxLength={2000}
          className={`${faltKlass} resize-y`}
          placeholder="Berätta gärna datum, tid och antal personer om det gäller en bokning."
        />
      </div>

      {/* Honungsfälla - dold för människor, ifylld av robotar. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="webbplats">Lämna detta fält tomt</label>
        <input id="webbplats" name="webbplats" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "fel" && (
        <p role="alert" className="rounded-mall border border-red-300 bg-red-50 p-4 text-sm text-red-800">
          {felmeddelande}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "skickar"}
          className="inline-flex items-center justify-center rounded-mall bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-accent-text transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "skickar" ? "Skickar ..." : "Skicka meddelande"}
        </button>
        <p className="text-xs text-dampad">
          Vi använder bara dina uppgifter för att svara på ditt meddelande.
        </p>
      </div>
    </form>
  );
}
