import { Slag } from "@/components/Ikoner";
import { kunder } from "@/lib/site";

/**
 * Kunderna som ett långsamt rullande band. Första uppsättningen är den riktiga
 * listan; den andra är en kopia som bara finns för att bandet ska gå runt
 * utan skarv, och är dold för skärmläsare.
 *
 * Namnen sätts i text tills kundens loggor finns som filer.
 */
export default function Kundband({ className = "" }: { className?: string }) {
  const rad = (dold: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={dold || undefined}>
      {kunder.map((k) => (
        <li key={k} className="flex items-center whitespace-nowrap">
          <span className="text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold tracking-[-0.025em]">{k}</span>
          <Slag className="mx-7 size-6 shrink-0 text-rut-grov lg:mx-10" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`rullband border-y border-black/10 py-7 lg:py-9 ${className}`}>
      <div className="rullband-spar">
        {rad(false)}
        {rad(true)}
      </div>
    </div>
  );
}
