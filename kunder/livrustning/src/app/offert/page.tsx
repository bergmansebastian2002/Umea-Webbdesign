import { Suspense } from "react";

import Ekg from "@/components/Ekg";
import { Kuvert, Telefon } from "@/components/Ikoner";
import OffertFormular from "@/components/OffertFormular";
import { metadataFor } from "@/lib/seo";
import { foretag } from "@/lib/site";

export const metadata = metadataFor({
  titel: "Begär offert",
  beskrivning: `Begär offert på utbildning i HLR, första hjälpen och brand. Fyll i formuläret, mejla ${foretag.epost} eller ring ${foretag.telefon}.`,
  sokvag: "/offert",
});

const steg = [
  "Fyll i formuläret, det tar under en minut.",
  "Vi tar fram en offert som passar er.",
  "Ni väljer datum, eller så skickas utbildningslicensen.",
];

export default function Offert() {
  return (
    <section className="monitor-hero border-b border-white/8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pt-12 pb-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="lg:col-span-5">
          <h1 className="intro text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98] font-bold">Begär offert</h1>
          <p className="intro mt-6 text-xl leading-relaxed text-grafit lg:text-[1.375rem]" style={{ ["--i" as string]: 1 }}>
            Hör av dig, så tar vi fram en offert som passar er.
          </p>
          <Ekg direkt puls slag={[0.45, 0.85]} hojd={64} className="mt-9" />

          <ol className="mt-9 border-b border-black/15">
            {steg.map((s, i) => (
              <li key={s} className="grid grid-cols-[2.25rem_1fr] items-baseline border-t border-black/15 py-4 text-lg">
                <span className="siffror text-2xl font-bold">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>

          <div className="mt-9 space-y-3 text-lg">
            <p className="font-semibold">Eller ring oss direkt</p>
            <a href={foretag.telefonHref} className="siffror flex items-center gap-3 text-2xl font-bold hover:text-magenta-mork">
              <Telefon className="size-6 text-grafit" />
              {foretag.telefon}
            </a>
            <a href={`mailto:${foretag.epost}`} className="flex items-center gap-3 text-xl font-bold break-all hover:text-magenta-mork">
              <Kuvert className="size-6 shrink-0 text-grafit" />
              {foretag.epost}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {/* useSearchParams kräver en Suspense-gräns när sidan byggs statiskt. */}
          <Suspense fallback={<div className="min-h-[34rem] rounded-2xl border border-black/10 bg-white" />}>
            <OffertFormular />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
