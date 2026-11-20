import Image, { type StaticImageData } from "next/image";

import atea from "@/bilder/kunder/atea.png";
import atlasCopco from "@/bilder/kunder/atlas-copco.png";
import dbSchenker from "@/bilder/kunder/db-schenker.png";
import fastighetsbyran from "@/bilder/kunder/fastighetsbyran.png";
import folkbildningsradet from "@/bilder/kunder/folkbildningsradet.png";
import handelsbanken from "@/bilder/kunder/handelsbanken.png";
import hitachi from "@/bilder/kunder/hitachi.png";
import itrim from "@/bilder/kunder/itrim.png";
import stockholmsStad from "@/bilder/kunder/stockholms-stad.png";
import sturebadet from "@/bilder/kunder/sturebadet.png";
import svenskaKyrkan from "@/bilder/kunder/svenska-kyrkan.png";

/**
 * Kundloggorna, i den ordning kunden listade dem (underlaget 2026-11-19).
 * Loggorna visas i sina egna färger. `vikt` finjusterar storleken för loggor
 * som ser tyngre eller lättare ut än sin form, t.ex. HITACHIs feta röda
 * versaler eller Sturebadets tunna linje.
 */
const loggor: { namn: string; bild: StaticImageData; vikt?: number }[] = [
  { namn: "Handelsbanken", bild: handelsbanken },
  { namn: "Atlas Copco", bild: atlasCopco, vikt: 0.86 },
  { namn: "ATEA", bild: atea, vikt: 0.9 },
  { namn: "Fastighetsbyrån", bild: fastighetsbyran, vikt: 1.18 },
  { namn: "Svenska kyrkan", bild: svenskaKyrkan, vikt: 1.05 },
  { namn: "Hitachi", bild: hitachi, vikt: 0.76 },
  { namn: "Stockholms stad", bild: stockholmsStad, vikt: 1.12 },
  { namn: "DB Schenker", bild: dbSchenker, vikt: 0.92 },
  { namn: "Sturebadet", bild: sturebadet, vikt: 1.04 },
  { namn: "Folkbildningsrådet", bild: folkbildningsradet, vikt: 1.02 },
  { namn: "Itrim", bild: itrim, vikt: 0.86 },
];

/**
 * Optiskt lika stora loggor: höjden minskar med kvadratroten ur bredden, så
 * att ett långt ordmärke och ett kompakt märke tar ungefär lika stor yta.
 */
function hojd({ bild, vikt = 1 }: (typeof loggor)[number]) {
  const proportion = bild.width / bild.height;
  return Math.round(Math.min(60, Math.max(22, 44 * Math.sqrt(2.6 / proportion) * vikt)));
}

/**
 * Kunderna som ett långsamt rullande band. Första uppsättningen är den riktiga
 * listan; den andra är en kopia som bara finns för att bandet ska gå runt utan
 * skarv, och är dold för skärmläsare. Med minskad rörelse står loggorna i ett
 * stilla, centrerat rutnät i stället (se globals.css).
 */
export default function Kundband({ className = "" }: { className?: string }) {
  const rad = (dold: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={dold || undefined}>
      {loggor.map((l) => {
        const h = hojd(l);
        return (
          <li key={l.namn} className="kundlogga flex shrink-0 items-center justify-center px-7 lg:px-11">
            <Image
              src={l.bild}
              alt={dold ? "" : l.namn}
              sizes={`${Math.round((h * l.bild.width) / l.bild.height)}px`}
              className="w-auto"
              style={{ height: `calc(${h}px * var(--logga-skala, 1))` }}
            />
          </li>
        );
      })}
    </ul>
  );
  return (
    <div className={`rullband border-y border-black/10 py-9 lg:py-12 ${className}`}>
      <div className="rullband-spar">
        {rad(false)}
        {rad(true)}
      </div>
    </div>
  );
}
