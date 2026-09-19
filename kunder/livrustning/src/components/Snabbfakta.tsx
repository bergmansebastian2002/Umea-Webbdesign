import type { ComponentType } from "react";

/** Snabbfakta som en utskrift från monitorn: etikett, värde, tunna linjer. */
export default function Snabbfakta({
  rader,
  className = "",
}: {
  rader: { ikon: ComponentType<{ className?: string }>; etikett: string; varde: string }[];
  className?: string;
}) {
  return (
    <dl className={`grid grid-cols-2 border-t border-black/15 lg:grid-cols-4 ${className}`}>
      {rader.map(({ ikon: Ikon, etikett, varde }) => (
        <div key={etikett} className="flex items-start gap-3 border-b border-black/15 py-5 pr-4 lg:pr-6">
          <Ikon className="mt-0.5 size-5 shrink-0 text-grafit" />
          <div>
            <dt className="text-sm text-grafit">{etikett}</dt>
            <dd className="mt-0.5 text-lg font-semibold">{varde}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
