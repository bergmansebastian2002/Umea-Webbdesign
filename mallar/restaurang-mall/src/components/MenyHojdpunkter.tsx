import Image from "next/image";

import { meny, restaurang } from "@/lib/kund";
import { bildProps } from "@/lib/bilder";
import Knapp from "@/components/Knapp";
import Sektion from "@/components/Sektion";
import type { Menyratt } from "@/lib/typer";

function visaPris(ratt: Menyratt): string {
  if (ratt.prisText) return ratt.prisText;
  if (typeof ratt.pris === "number") return `${ratt.pris.toLocaleString("sv-SE")} kr`;
  return "";
}

/**
 * Signaturrätter på startsidan: alla rätter i menyn som har en bild,
 * max fyra stycken. Styr urvalet genom att sätta `bild` på rätterna
 * i kundens meny.
 */
export default function MenyHojdpunkter() {
  const ratter = meny.sektioner
    .flatMap((sektion) => sektion.ratter)
    .filter((ratt): ratt is Menyratt & { bild: string } => Boolean(ratt.bild))
    .slice(0, 4);

  if (ratter.length === 0) return null;

  return (
    <Sektion
      etikett="Ur menyn"
      rubrik="Rätterna våra gäster pratar om"
      ingress={`Ett urval ur menyn hos ${restaurang.namn}. Hela menyn hittar du längre in.`}
    >
      <ul
        className={`grid gap-6 sm:grid-cols-2 ${
          ratter.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {ratter.map((ratt) => (
          <li
            key={ratt.namn}
            className="group overflow-hidden rounded-mall border border-ram bg-yta shadow-kort transition-shadow duration-300 hover:shadow-svav"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={ratt.bild}
                alt={ratt.namn}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                {...bildProps(ratt.bild)}
              />
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-rubrik text-lg">{ratt.namn}</h3>
                <span className="shrink-0 text-sm tabular-nums text-dampad">
                  {visaPris(ratt)}
                </span>
              </div>
              {ratt.beskrivning && (
                <p className="mt-1.5 text-sm leading-relaxed text-dampad">
                  {ratt.beskrivning}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Knapp href="/meny" variant="kontur">
          Se hela menyn
        </Knapp>
      </div>
    </Sektion>
  );
}
