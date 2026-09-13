import Link from "next/link";
import type { ReactNode } from "react";

import { restaurang } from "@/lib/kund";
import { grupperadeOppettider } from "@/lib/oppettider";
import BokaBordKnapp from "@/components/BokaBordKnapp";

const SOCIALA_NAMN: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  tripadvisor: "Tripadvisor",
  google: "Google",
};

/** Ikoner för sociala medier. Kanaler utan ikon visas som textlänk. */
const SOCIALA_IKONER: Record<string, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M13.5 21v-7.5h2.52l.38-2.93H13.5V8.7c0-.85.24-1.43 1.45-1.43h1.55V4.65c-.27-.04-1.19-.12-2.26-.12-2.23 0-3.76 1.36-3.76 3.87v2.16H7.96v2.93h2.52V21h3.02Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M12 4.6c2.41 0 2.7.01 3.65.05.88.04 1.36.19 1.68.31.42.16.72.36 1.04.68.32.32.52.62.68 1.04.12.32.27.8.31 1.68.04.95.05 1.24.05 3.64s-.01 2.7-.05 3.65c-.04.88-.19 1.36-.31 1.68-.16.42-.36.72-.68 1.04-.32.32-.62.52-1.04.68-.32.12-.8.27-1.68.31-.95.04-1.24.05-3.65.05s-2.7-.01-3.65-.05c-.88-.04-1.36-.19-1.68-.31a2.8 2.8 0 0 1-1.04-.68 2.8 2.8 0 0 1-.68-1.04c-.12-.32-.27-.8-.31-1.68-.04-.95-.05-1.24-.05-3.65s.01-2.7.05-3.64c.04-.88.19-1.36.31-1.68.16-.42.36-.72.68-1.04.32-.32.62-.52 1.04-.68.32-.12.8-.27 1.68-.31.95-.04 1.24-.05 3.65-.05M12 3c-2.44 0-2.75.01-3.71.05-.96.05-1.61.2-2.18.42-.6.23-1.1.54-1.6 1.04-.5.5-.81 1-1.04 1.6-.22.57-.37 1.22-.42 2.18C3.01 9.25 3 9.56 3 12s.01 2.75.05 3.71c.05.96.2 1.61.42 2.18.23.6.54 1.1 1.04 1.6.5.5 1 .81 1.6 1.04.57.22 1.22.37 2.18.42.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c.96-.05 1.61-.2 2.18-.42.6-.23 1.1-.54 1.6-1.04.5-.5.81-1 1.04-1.6.22-.57.37-1.22.42-2.18.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.05-.96-.2-1.61-.42-2.18a4.4 4.4 0 0 0-1.04-1.6c-.5-.5-1-.81-1.6-1.04-.57-.22-1.22-.37-2.18-.42C14.75 3.01 14.44 3 12 3Zm0 4.38a4.62 4.62 0 1 0 0 9.24 4.62 4.62 0 0 0 0-9.24ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.88-7.8a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z" />
    </svg>
  ),
};

export default function Footer() {
  const { kontakt, social, seo } = restaurang;
  const socialaLankar = Object.entries(social).filter(([, url]) => Boolean(url));
  const ar = new Date().getFullYear();

  return (
    <footer className="bg-primar text-white/80">
      <div className="omslag py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Namn och kort beskrivning */}
          <div className="lg:col-span-1">
            <p className="font-rubrik text-2xl text-white">{restaurang.namn}</p>
            <p className="mt-3 text-sm leading-relaxed">{restaurang.slogan}</p>
            {socialaLankar.length > 0 && (
              <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                {socialaLankar.map(([namn, url]) => {
                  const ikon = SOCIALA_IKONER[namn];
                  return (
                    <li key={namn}>
                      <a
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${restaurang.namn} på ${SOCIALA_NAMN[namn] ?? namn} - öppnas i nytt fönster`}
                        className={
                          ikon
                            ? "flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
                            : "text-sm underline-offset-4 hover:text-white hover:underline"
                        }
                      >
                        {ikon ?? (SOCIALA_NAMN[namn] ?? namn)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Kontaktuppgifter - adressen märks upp för Google */}
          <div>
            <p className="etikett">Hitta hit</p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed">
              <span className="block">{kontakt.gata}</span>
              <span className="block">
                {kontakt.postnummer} {kontakt.ort}
              </span>
              <a
                href={`tel:${kontakt.telefonLank}`}
                className="mt-3 block underline-offset-4 hover:text-white hover:underline"
              >
                {kontakt.telefon}
              </a>
              {kontakt.epost && (
                <a
                  href={`mailto:${kontakt.epost}`}
                  className="block underline-offset-4 hover:text-white hover:underline"
                >
                  {kontakt.epost}
                </a>
              )}
            </address>
          </div>

          {/* Öppettider, hopslagna till korta rader */}
          <div>
            <p className="etikett">Öppettider</p>
            <dl className="mt-4 space-y-1.5 text-sm">
              {grupperadeOppettider().map((rad) => (
                <div key={rad.dagar} className="flex justify-between gap-4">
                  <dt>{rad.dagar}</dt>
                  <dd className="tabular-nums">{rad.tid}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Bokning */}
          <div>
            <p className="etikett">Boka bord</p>
            <p className="mt-4 text-sm leading-relaxed">
              Vi tar emot bokningar för både små och stora sällskap.
            </p>
            <div className="mt-5">
              <BokaBordKnapp variant="ljus" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {ar} {restaurang.namn}, {kontakt.ort}. Alla rättigheter förbehållna.
          </p>
          <nav aria-label="Sidfotsmeny" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/meny" className="hover:text-white">
              Meny
            </Link>
            <Link href="/kontakt" className="hover:text-white">
              Kontakt
            </Link>
            <Link href="/hitta-hit" className="hover:text-white">
              {`Restaurang i ${seo.stad}`}
            </Link>
            <Link href="/integritetspolicy" className="hover:text-white">
              Integritetspolicy
            </Link>
          </nav>
        </div>

        {/* Signatur på alla kundsajter. PLATSHÅLLARE: byt mailto-länken mot
            byråns webbplats när den finns. */}
        <p className="mt-4 text-xs text-white/50">
          Hemsida av{" "}
          <a
            href="mailto:UmeaWebbdesign@gmail.com"
            className="underline-offset-4 hover:text-white hover:underline"
          >
            Umeå Webbdesign
          </a>
        </p>
      </div>
    </footer>
  );
}
