import { processSteps } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Four numbered steps: horizontal with a connecting line on desktop,
 * stacked with a line along the left edge on mobile.
 */
export default function Process() {
  return (
    <section aria-labelledby="process" className="border-t border-line py-16 md:py-24">
      <div className="wrap">
        <SectionHeading
          kicker="Arbetssätt"
          title="Hur vi jobbar"
          intro="Första mötet är kostnadsfritt. Efter det vet du priset, tidsplanen och vem du ringer när något ska ändras - det är samma person som ritar, bygger och svarar i telefon, från första skiss till publicerad sida och vidare."
          id="process"
        />

        <ol className="relative grid gap-10 border-l border-line pl-8 md:grid-cols-4 md:gap-6 md:border-l-0 md:pl-0">
          {/* Connecting line on desktop */}
          <span
            aria-hidden="true"
            className="absolute left-0 top-5 hidden h-px w-full bg-line md:block"
          />
          {processSteps.map((step) => (
            <li key={step.number} className="reveal relative md:pt-12">
              <span
                aria-hidden="true"
                className="gold-text absolute -left-8 top-0 hidden font-heading text-3xl md:static md:mb-4 md:block"
              >
                {step.number}
              </span>
              <span
                aria-hidden="true"
                className="absolute -left-[2.45rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold/60 bg-night md:hidden"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold-2" />
              </span>
              <h3 className="text-lg text-ink">
                <span className="gold-text mr-2 font-heading md:hidden">{step.number}</span>
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
