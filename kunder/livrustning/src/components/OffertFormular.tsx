"use client";

import { useSearchParams } from "next/navigation";
import { useId, useRef, useState, type FormEvent } from "react";

import { Bock, Pil } from "@/components/Ikoner";
import { foretag } from "@/lib/site";

type Falt = "foretag" | "namn" | "anstallda" | "telefon" | "epost";

const FALT: { id: Falt; etikett: string; typ: string; auto: string; lage?: "numeric" | "tel" | "email"; platshallare: string }[] = [
  { id: "foretag", etikett: "Företagsnamn", typ: "text", auto: "organization", platshallare: "Företaget AB" },
  { id: "namn", etikett: "Namn", typ: "text", auto: "name", platshallare: "För- och efternamn" },
  { id: "anstallda", etikett: "Antal anställda", typ: "text", auto: "off", lage: "numeric", platshallare: "T.ex. 45" },
  { id: "telefon", etikett: "Telefon", typ: "tel", auto: "tel", lage: "tel", platshallare: "070-123 45 67" },
  { id: "epost", etikett: "Mejl", typ: "email", auto: "email", lage: "email", platshallare: "namn@foretaget.se" },
];

const TOMT: Record<Falt, string> = { foretag: "", namn: "", anstallda: "", telefon: "", epost: "" };

function kontrollera(v: Record<Falt, string>) {
  const fel: Partial<Record<Falt, string>> = {};
  if (!v.foretag.trim()) fel.foretag = "Skriv företagets namn.";
  if (!v.namn.trim()) fel.namn = "Skriv ditt namn.";
  if (!/\d/.test(v.anstallda)) fel.anstallda = "Skriv ungefär hur många ni är, med siffror.";
  if (v.telefon.replace(/\D/g, "").length < 7) fel.telefon = "Skriv ett telefonnummer vi kan nå dig på.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.epost.trim())) fel.epost = "Skriv en mejladress, till exempel namn@foretaget.se.";
  return fel;
}

/**
 * Offertformuläret. Sajten är helt statisk och har ingen server som kan skicka
 * mejl, så formuläret öppnar besökarens mejlprogram med förfrågan färdigskriven
 * till info@. Byts mot ett riktigt utskick när en mejltjänst finns kopplad.
 */
export default function OffertFormular() {
  const galler = useSearchParams().get("galler")?.slice(0, 120) ?? "";
  const [varden, setVarden] = useState(TOMT);
  const [fel, setFel] = useState<Partial<Record<Falt, string>>>({});
  const [skickat, setSkickat] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const uid = useId();

  const amne = galler ? `Offertförfrågan - ${galler}` : "Offertförfrågan";
  const brodtext = [
    "Hej!",
    "",
    galler ? `Vi vill ha en offert på: ${galler}` : "Vi vill ha en offert.",
    "",
    `Företagsnamn: ${varden.foretag.trim()}`,
    `Namn: ${varden.namn.trim()}`,
    `Antal anställda: ${varden.anstallda.trim()}`,
    `Telefon: ${varden.telefon.trim()}`,
    `Mejl: ${varden.epost.trim()}`,
    "",
    "Med vänliga hälsningar",
    varden.namn.trim(),
  ].join("\n");
  const lank = `mailto:${foretag.epost}?subject=${encodeURIComponent(amne)}&body=${encodeURIComponent(brodtext)}`;

  function skicka(e: FormEvent) {
    e.preventDefault();
    const nyaFel = kontrollera(varden);
    setFel(nyaFel);
    const forsta = FALT.find((f) => nyaFel[f.id]);
    if (forsta) {
      form.current?.querySelector<HTMLInputElement>(`[name="${forsta.id}"]`)?.focus();
      return;
    }
    window.location.href = lank;
    setSkickat(true);
  }

  if (skickat) {
    return (
      <div className="rounded-2xl border border-black/10 bg-white p-6 lg:p-10" role="status">
        <span className="flex size-12 items-center justify-center rounded-full bg-black text-papper">
          <Bock className="size-6" />
        </span>
        <h2 className="mt-6 text-3xl leading-tight font-bold">Nästan klart, {varden.namn.trim().split(" ")[0]}</h2>
        <p className="mt-4 text-lg text-grafit">
          Ditt mejlprogram har öppnats med förfrågan färdigskriven. Tryck på skicka där, så återkommer vi med en offert.
        </p>
        <p className="mt-4 text-lg text-grafit">
          Öppnades inget mejl?{" "}
          <a href={lank} className="textlank">
            Försök igen
          </a>
          , mejla{" "}
          <a href={`mailto:${foretag.epost}`} className="textlank">
            {foretag.epost}
          </a>{" "}
          eller ring{" "}
          <a href={foretag.telefonHref} className="textlank siffror whitespace-nowrap">
            {foretag.telefon}
          </a>
          .
        </p>
        <button type="button" className="knapp knapp-sekundar mt-8" onClick={() => setSkickat(false)}>
          Ändra uppgifterna
        </button>
      </div>
    );
  }

  return (
    <form
      ref={form}
      onSubmit={skicka}
      noValidate
      // Reserv om skriptet inte hunnit laddas: webbläsaren öppnar själv ett mejl
      // med fälten, i stället för att lägga uppgifterna i adressfältet.
      action={`mailto:${foretag.epost}?subject=${encodeURIComponent(amne)}`}
      method="post"
      encType="text/plain"
      className="rounded-2xl border border-black/10 bg-white p-6 lg:p-10"
      aria-labelledby={`${uid}-rubrik`}
    >
      <h2 id={`${uid}-rubrik`} className="text-3xl leading-tight font-bold">
        Era uppgifter
      </h2>
      {galler && (
        <p className="mt-3 text-lg text-grafit">
          Förfrågan gäller: <strong className="font-semibold text-black">{galler}</strong>
        </p>
      )}

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        {FALT.map((f) => {
          const id = `${uid}-${f.id}`;
          const felet = fel[f.id];
          return (
            <div key={f.id} className={f.id === "foretag" ? "sm:col-span-2" : ""}>
              <label htmlFor={id} className="mb-2 block font-semibold">
                {f.etikett}
              </label>
              <input
                id={id}
                name={f.id}
                type={f.typ}
                inputMode={f.lage}
                autoComplete={f.auto}
                placeholder={f.platshallare}
                value={varden[f.id]}
                onChange={(e) => {
                  setVarden((v) => ({ ...v, [f.id]: e.target.value }));
                  if (felet) setFel((x) => ({ ...x, [f.id]: undefined }));
                }}
                aria-invalid={felet ? true : undefined}
                aria-describedby={felet ? `${id}-fel` : undefined}
                required
                className="falt"
              />
              {felet && (
                <p id={`${id}-fel`} className="mt-2 font-medium text-magenta-mork">
                  {felet}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
        <button type="submit" className="knapp knapp-primar grupp self-start">
          Begär offert
          <Pil className="size-5" />
        </button>
        <p className="max-w-sm text-sm leading-snug text-grafit">
          Knappen öppnar ditt mejlprogram med uppgifterna ifyllda. Inget sparas på webbplatsen.
        </p>
      </div>
    </form>
  );
}
