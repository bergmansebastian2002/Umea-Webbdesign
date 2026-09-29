import { priser } from "@/lib/site";

/**
 * Sajtens signaturelement: prislistan som en mörk skylt, som gatuprataren
 * utanför salongen. Raderna tonar in i tur och ordning vid sidladdning.
 */
export default function Prisskylt() {
  return (
    <div
      id="priser"
      className="rounded-3xl border border-tavla-linje bg-tavla p-7 shadow-[0_24px_60px_-24px_rgba(35,30,32,0.45)] sm:p-9"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="skript neon text-4xl text-rosa-neon sm:text-5xl">Priser</h2>
        <p className="text-sm font-semibold tracking-[0.14em] uppercase text-tavla-dampad">
          Drop in
        </p>
      </div>

      <ul className="mt-7 space-y-4">
        {priser.map((rad, i) => (
          <li
            key={rad.tjanst}
            className="tona-in flex items-baseline"
            style={{ "--fordrojning": `${0.15 + i * 0.08}s` } as React.CSSProperties}
          >
            <span className="text-lg font-medium text-tavla-text">{rad.tjanst}</span>
            <span className="prislinje" aria-hidden="true" />
            <span className="text-3xl font-bold tracking-tight text-white tabular-nums">
              {rad.pris}
              <span className="text-xl font-semibold text-tavla-dampad">:-</span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-8 border-t border-tavla-linje pt-5 text-tavla-dampad">
        Kom in som du är - ingen bokning behövs.
      </p>
    </div>
  );
}
