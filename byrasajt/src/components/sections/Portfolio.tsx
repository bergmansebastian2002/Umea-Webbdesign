import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { examples, examplesOutro } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Live example sites. Both run on the same reusable template with
 * different configurations - that is the point we want to show.
 */
export default function Portfolio() {
  return (
    <section aria-labelledby="exempel" className="border-t border-line py-16 md:py-24">
      <div className="wrap">
        <SectionHeading
          kicker="Portfölj"
          title="Exempel på hemsidor vi byggt"
          intro="Båda sajterna drivs av samma mall men har helt egna färger, typsnitt och innehåll - så mycket kan anpassas per kund."
          id="exempel"
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {examples.map((example) => (
            <li
              key={example.name}
              className="reveal group overflow-hidden rounded-2xl border border-line bg-panel transition-all duration-300 hover:-translate-y-1 hover:border-gold/60"
            >
              <a
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-16/9 overflow-hidden">
                  <Image
                    src={example.image}
                    alt={example.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-lg text-ink">{example.name}</h3>
                    <p className="mt-1 text-sm text-mist">{example.type}</p>
                  </div>
                  <span className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-gold-2">
                    Se hemsidan
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>
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
