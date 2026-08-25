import type { Meny, Menysektion } from "@/lib/typer";

/** Formaterar pris till svensk standard: 335 -> "335 kr". */
function visaPris(pris?: number, prisText?: string): string {
  if (prisText) return prisText;
  if (typeof pris === "number") return `${pris.toLocaleString("sv-SE")} kr`;
  return "";
}

function Sektion({ sektion }: { sektion: Menysektion }) {
  return (
    <section id={sektion.id} className="scroll-mt-32">
      <header className="border-b border-ram pb-4">
        <h2 className="font-rubrik text-2xl md:text-3xl">{sektion.rubrik}</h2>
        {sektion.beskrivning && (
          <p className="mt-2 text-sm text-dampad">{sektion.beskrivning}</p>
        )}
      </header>

      <ul className="mt-6 space-y-6">
        {sektion.ratter.map((ratt) => (
          <li
            key={ratt.namn}
            className={
              ratt.populär
                ? "rounded-mall border border-accent/30 bg-accent/5 p-4 -mx-4"
                : ""
            }
          >
            <div className="flex items-baseline gap-4">
              <h3 className="font-rubrik text-lg md:text-xl">{ratt.namn}</h3>
              {/* Prickad linje mellan namn och pris - klassiskt menyutseende. */}
              <span
                aria-hidden="true"
                className="mb-1 min-w-6 flex-1 border-b border-dotted border-ram"
              />
              <span className="shrink-0 tabular-nums text-base">
                {visaPris(ratt.pris, ratt.prisText)}
              </span>
            </div>

            {ratt.beskrivning && (
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-dampad">
                {ratt.beskrivning}
              </p>
            )}

            {ratt.allergener && ratt.allergener.length > 0 && (
              <p className="mt-1.5 text-xs text-dampad/80">
                Innehåller: {ratt.allergener.join(", ").toLowerCase()}
              </p>
            )}

            {(ratt.markningar?.length || ratt.populär) && (
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {ratt.populär && (
                  <li className="rounded-mall bg-accent px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-accent-text">
                    Populär
                  </li>
                )}
                {ratt.markningar?.map((markning) => (
                  <li
                    key={markning}
                    className="rounded-mall border border-ram px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-dampad"
                  >
                    {markning}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

type Props = {
  meny: Meny;
  /** Visa bara vissa sektioner, t.ex. ["forratter", "varmratter"] på startsidan. */
  begransaTill?: string[];
  /** Snabblänkar till sektionerna. Bra på menysidan. */
  visaSnabblankar?: boolean;
};

export default function MenyLista({ meny, begransaTill, visaSnabblankar }: Props) {
  const sektioner = begransaTill
    ? meny.sektioner.filter((s) => begransaTill.includes(s.id))
    : meny.sektioner;

  return (
    <div>
      {visaSnabblankar && sektioner.length > 1 && (
        <nav aria-label="Snabblänkar i menyn" className="mb-12">
          <ul className="flex flex-wrap gap-2">
            {sektioner.map((sektion) => (
              <li key={sektion.id}>
                <a
                  href={`#${sektion.id}`}
                  className="inline-block rounded-mall border border-ram px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {sektion.rubrik}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="grid gap-14 md:grid-cols-2 md:gap-x-14 md:gap-y-16">
        {sektioner.map((sektion) => (
          <Sektion key={sektion.id} sektion={sektion} />
        ))}
      </div>

      {!begransaTill && meny.fotnot && (
        <p className="mt-14 border-t border-ram pt-6 text-sm text-dampad">
          {meny.fotnot}
        </p>
      )}
    </div>
  );
}
