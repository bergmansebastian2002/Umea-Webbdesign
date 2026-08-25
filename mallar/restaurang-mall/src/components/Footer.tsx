import Link from "next/link";

import { restaurang } from "@/lib/kund";
import { grupperadeOppettider } from "@/lib/oppettider";
import BokaBordKnapp from "@/components/BokaBordKnapp";

const SOCIALA_NAMN: Record<string, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  tripadvisor: "Tripadvisor",
  google: "Google",
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
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {socialaLankar.map(([namn, url]) => (
                  <li key={namn}>
                    <a
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:text-white hover:underline"
                    >
                      {SOCIALA_NAMN[namn] ?? namn}
                    </a>
                  </li>
                ))}
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
          </nav>
        </div>
      </div>
    </footer>
  );
}
