import Link from "next/link";
import { ShieldCheck } from "lucide-react";

/** Wide, slightly lighter band about data handling and security. */
export default function AiData() {
  return (
    <section aria-labelledby="din-data" className="border-t border-line py-16 md:py-24">
      <div className="wrap">
        <div className="reveal rounded-2xl border border-line bg-panel px-7 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="kicker flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                Öppenhet
              </p>
              <h2 id="din-data" className="mt-4 text-[length:var(--text-title)] leading-[1.12]">
                Din data
              </h2>
              <p className="mt-4 leading-relaxed text-mist">
                Säkerhet är en prioritet i allt vi bygger. Ditt material
                behandlas förtroligt: inget kundmaterial görs publikt utan
                ditt godkännande och inget säljs vidare. Vi hanterar
                personuppgifter enligt GDPR - tydligt, sparsamt och bara så
                länge det behövs.
              </p>
            </div>
            <Link
              href="/din-data"
              className="inline-flex min-h-12 items-center rounded-2xl border border-gold/60 px-6 py-3.5 text-sm font-semibold text-gold-2 transition-colors hover:bg-gold/10"
            >
              Läs mer om hur vi jobbar med din data
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
