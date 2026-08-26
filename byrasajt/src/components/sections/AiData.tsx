import Link from "next/link";
import { ShieldCheck } from "lucide-react";

/** Wide, slightly lighter band about AI use and data handling. */
export default function AiData() {
  return (
    <section aria-labelledby="ai-och-data" className="border-t border-line py-16 md:py-24">
      <div className="wrap">
        <div className="reveal rounded-2xl border border-line bg-panel px-7 py-10 md:px-12 md:py-14">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="kicker flex items-center gap-2">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                Öppenhet
              </p>
              <h2 id="ai-och-data" className="mt-4 text-[length:var(--text-title)] leading-[1.12]">
                AI och din data
              </h2>
              <p className="mt-4 leading-relaxed text-mist">
                Vi använder AI som ett verktyg i design, text och kod - det gör
                arbetet snabbare och resultatet bättre. Din data förblir din:
                inget kundmaterial görs publikt och inget säljs vidare.
              </p>
            </div>
            <Link
              href="/ai-och-data"
              className="inline-flex min-h-12 items-center rounded-2xl border border-gold/60 px-6 py-3.5 text-sm font-semibold text-gold-2 transition-colors hover:bg-gold/10"
            >
              Läs mer om hur vi jobbar med AI och din data
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
