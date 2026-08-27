import { ArrowUpRight } from "lucide-react";

import { examples, examplesOutro } from "@/data/site";
import Bildspel from "@/components/ui/Bildspel";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Demo sites, each presented with an auto-playing slideshow: the food, the
 * restaurant, the atmosphere and the menu page. All demo restaurants are
 * fictional; they run on the same template with different configurations.
 */
export default function Portfolio() {
  return (
    <section aria-labelledby="hemsidor" className="border-t border-line py-16 md:py-24">
      <div className="wrap">
        <SectionHeading
          title="Samma kvalitet. Aldrig samma sida."
          intro="Exempel som visar bredden i vad vi bygger. Egna färger, egna typsnitt, eget innehåll - varje sida formas efter din verksamhet."
          id="hemsidor"
        />

        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {examples.map((example) => (
            <li
              key={example.name}
              className="reveal group overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
            >
              <Bildspel slides={example.slides} name={example.name} />
              <a
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-6"
              >
                <div>
                  <h3 className="text-lg text-ink">{example.name}</h3>
                  <p className="mt-1 text-sm text-mist">{example.type}</p>
                </div>
                <span className="inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-semibold text-gold-2">
                  Se hemsidan
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="reveal mt-10 max-w-2xl text-sm leading-relaxed text-mist">
          {examplesOutro}
        </p>
      </div>
    </section>
  );
}
