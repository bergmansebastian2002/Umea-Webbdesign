import { restaurang } from "@config/restaurang";
import { DAGNAMN, formateraOppettid } from "@/lib/oppettider";
import { VECKODAGAR } from "@/lib/typer";
import OppetNu from "@/components/OppetNu";

type Props = {
  /** Visar "Öppet nu"-raden överst. */
  visaStatus?: boolean;
  /** Visar avvikande dagar (röda dagar) under tabellen. */
  visaSpecialdagar?: boolean;
  className?: string;
};

/** Full lista över veckans öppettider, med dagens rad markerad. */
export default function Oppettider({
  visaStatus = true,
  visaSpecialdagar = true,
  className = "",
}: Props) {
  return (
    <div className={className}>
      {visaStatus && <OppetNu className="mb-5 font-medium" />}

      <dl className="divide-y divide-ram/70">
        {VECKODAGAR.map((dag) => {
          const tid = restaurang.oppettider[dag];
          return (
            <div key={dag} className="flex items-baseline justify-between gap-6 py-3">
              <dt className="text-sm">{DAGNAMN[dag]}</dt>
              <dd className="text-right text-sm tabular-nums">
                <span className={tid.stangt ? "opacity-55" : ""}>
                  {formateraOppettid(tid)}
                </span>
                {tid.notering && (
                  <span className="block text-xs opacity-60">{tid.notering}</span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>

      {restaurang.oppettiderNotering && (
        <p className="mt-5 text-xs opacity-70">{restaurang.oppettiderNotering}</p>
      )}

      {visaSpecialdagar && restaurang.specialdagar.length > 0 && (
        <div className="mt-7 border-t border-ram/70 pt-5">
          <p className="etikett">Avvikande dagar</p>
          <ul className="mt-3 space-y-1.5 text-sm opacity-80">
            {restaurang.specialdagar.map((dag) => (
              <li key={dag.datum} className="flex justify-between gap-6">
                <span>{dag.namn}</span>
                <span className="tabular-nums">
                  {dag.stangt || !dag.oppnar || !dag.stanger
                    ? "Stängt"
                    : `${dag.oppnar.replace(":", ".")}-${dag.stanger.replace(":", ".")}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
