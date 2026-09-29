import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Prisskylt from "@/components/Prisskylt";
import { metadataFor } from "@/lib/seo";
import { foretag, oppettider } from "@/lib/site";

export const metadata: Metadata = metadataFor({
  titel: "Din Frisör - Drop in-frisör vid Järnvägstorget i Umeå",
  beskrivning:
    "Klipp dig utan att boka tid. Drop in till låga priser vid Järnvägstorget i centrala Umeå. " +
    "Öppet mån-fre 10-18, lör 10-17.",
  sokvag: "/",
});

function fordrojning(sekunder: number) {
  return { "--fordrojning": `${sekunder}s` } as CSSProperties;
}

export default function Startsida() {
  return (
    <>
      {/* Hjälteytan: budskapet till vänster, prisskylten till höger. */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-5 pt-14 pb-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8 lg:pt-24">
        <div>
          <p
            className="tona-in text-sm font-semibold tracking-[0.16em] uppercase text-rosa-djup"
            style={fordrojning(0)}
          >
            Drop in-frisör · Järnvägstorget, Umeå
          </p>
          <h1
            className="tona-in mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={fordrojning(0.05)}
          >
            Klipp dig utan att boka tid.
          </h1>
          <p className="tona-in mt-5 max-w-md text-xl text-grafit" style={fordrojning(0.1)}>
            Kom in när det passar dig. Vi klipper dig snabbt och billigt, mitt i
            centrala Umeå.
          </p>
          <div className="tona-in mt-8 flex flex-wrap items-center gap-4" style={fordrojning(0.15)}>
            <a
              href={foretag.telefonLank}
              className="flex min-h-13 items-center rounded-full bg-rosa-djup px-7 text-lg font-semibold text-white transition-colors hover:bg-rosa"
            >
              Ring {foretag.telefon}
            </a>
            <a
              href="#hitta-hit"
              className="flex min-h-13 items-center rounded-full border border-black/15 bg-papper px-7 text-lg font-semibold transition-colors hover:border-black/40"
            >
              Hitta hit
            </a>
          </div>
          <p className="tona-in mt-6 text-grafit" style={fordrojning(0.2)}>
            Öppet mån–fre 10–18 och lör 10–17.
          </p>
        </div>

        <div className="tona-in" style={fordrojning(0.1)}>
          <Prisskylt />
        </div>
      </section>

      {/* Drop in eller bokad tid - salongens två sätt, inget annat. */}
      <section aria-label="Så funkar det" className="border-y border-ljus-djup bg-papper">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">Drop in</h2>
            <p className="mt-3 max-w-sm text-grafit">
              Ingen bokning behövs. Kom in under öppettiderna, slå dig ner en
              stund och gå ut nyklippt.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Hellre en bokad tid?</h2>
            <p className="mt-3 max-w-sm text-grafit">
              Det går också bra. Ring{" "}
              <a href={foretag.telefonLank} className="font-semibold text-rosa-djup hover:underline">
                {foretag.telefon}
              </a>{" "}
              så bokar vi in dig på en tid som passar.
            </p>
          </div>
        </div>
      </section>

      {/* Öppettider och vägbeskrivning sida vid sida. */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-5 py-20 sm:grid-cols-2 lg:px-8">
        <div id="oppettider">
          <h2 className="text-3xl font-bold">Öppettider</h2>
          <ul className="mt-6 max-w-sm">
            {oppettider.map((rad) => (
              <li
                key={rad.dagar}
                className="flex items-baseline justify-between gap-6 border-b border-ljus-djup py-3.5"
              >
                <span className="font-medium">{rad.dagar}</span>
                <span className={rad.tid === "Stängt" ? "text-grafit" : "font-semibold tabular-nums"}>
                  {rad.tid}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div id="hitta-hit">
          <h2 className="text-3xl font-bold">Hitta hit</h2>
          <p className="mt-6 max-w-sm text-grafit">
            Salongen ligger vid Järnvägstorget i centrala Umeå, ett stenkast
            från centralstationen. Håll utkik efter den rosa skylten.
          </p>
          <address className="mt-5 font-semibold not-italic">
            {foretag.gata}
            <br />
            {foretag.postnummer} {foretag.ort}
          </address>
          <a
            href={foretag.kartlank}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex min-h-12 items-center rounded-full border border-black/15 bg-papper px-6 font-semibold transition-colors hover:border-black/40"
          >
            Öppna i Google Maps
            <span className="sr-only"> (öppnas i ny flik)</span>
          </a>
        </div>
      </section>

      {/* Avslut: en sista, konkret uppmaning. */}
      <section className="bg-ljus-djup/50">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center lg:px-8">
          <p className="skript text-3xl text-rosa-djup sm:text-4xl">Välkommen in!</p>
          <p className="mx-auto mt-4 max-w-md text-grafit">
            Ingen bokning, inga konstigheter. Är vi öppna är du välkommen -
            annars når du oss på{" "}
            <a href={foretag.telefonLank} className="font-semibold text-rosa-djup hover:underline">
              {foretag.telefon}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
