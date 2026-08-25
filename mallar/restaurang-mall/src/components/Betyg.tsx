import { restaurang } from "@/lib/kund";
import Sektion from "@/components/Sektion";

/** Fem stjärnor där andelen fylld yta motsvarar betyget (t.ex. 4.6 av 5). */
function Stjarnor({ snitt }: { snitt: number }) {
  const andel = Math.max(0, Math.min(1, snitt / 5)) * 100;
  return (
    <span
      role="img"
      aria-label={`${snitt.toLocaleString("sv-SE")} av 5 stjärnor`}
      className="relative inline-block text-2xl leading-none tracking-[0.1em]"
    >
      <span aria-hidden="true" className="text-white/25">★★★★★</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden whitespace-nowrap text-[color:var(--farg-accent-pa-mork)]"
        style={{ width: `${andel}%` }}
      >
        ★★★★★
      </span>
    </span>
  );
}

/**
 * Social proof: Google-betyg och recensionscitat från kundens config.
 * Sektionen renderas inte alls om kunden saknar `betyg`.
 */
export default function Betyg() {
  const betyg = restaurang.betyg;
  if (!betyg || betyg.recensioner.length === 0) return null;

  return (
    <Sektion mork centrerad etikett="Omdömen" rubrik="Vad våra gäster säger">
      <div className="flex flex-col items-center gap-3">
        <Stjarnor snitt={betyg.snitt} />
        <p className="text-white/80">
          <span className="font-rubrik text-3xl text-white">
            {betyg.snitt.toLocaleString("sv-SE")}
          </span>{" "}
          <span className="text-sm">
            av 5 - baserat på {betyg.antal.toLocaleString("sv-SE")} omdömen
          </span>
        </p>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {betyg.recensioner.slice(0, 3).map((recension) => (
          <li key={recension.text.slice(0, 40)}>
            <figure className="flex h-full flex-col rounded-mall border border-white/15 bg-white/5 p-6 text-left">
              <blockquote className="flex-1 text-sm leading-relaxed text-white/85">
                &ldquo;{recension.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs text-white/60">
                {recension.namn}
                {recension.kalla && <> &middot; via {recension.kalla}</>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Sektion>
  );
}
