import Image from "next/image";

import { aboutText, company, contactMailto, processSteps, trustPoints, vavenPhoto } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = buildMetadata({
  title: "Om oss - webbdesigner i Umeå",
  description:
    "Umeå Webbdesign drivs lokalt i Umeå. Du pratar direkt med den som " +
    "bygger din sida - snabba svar och enkelt att boka möte.",
  path: "/om-oss",
});

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="om-oss-rubrik" className="py-32 md:py-36">
        <div className="wrap grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Om oss"
              title="Din lokala webbdesigner i Umeå"
              asH1
              id="om-oss-rubrik"
            />
            <div className="-mt-6 space-y-4 text-base leading-relaxed text-mist md:text-lg">
              {aboutText.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>
                Att vi finns i {company.city} spelar roll: vi känner det lokala
                näringslivet, vi kan mötas på riktigt, och vi finns kvar när
                sidan är publicerad. En hemsida är inte ett projekt som tar
                slut - den ska leva, uppdateras och fortsätta ge nya kunder.
              </p>
            </div>

            <ul className="mt-9 space-y-5">
              {trustPoints.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <point.icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-2" />
                  <div>
                    <p className="font-semibold text-ink">{point.title}</p>
                    <p className="text-sm text-mist">{point.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative">
            <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gold/15 blur-2xl" />
            <Image
              src={vavenPhoto.src}
              alt={vavenPhoto.alt}
              width={800}
              height={1000}
              priority
              className="relative aspect-4/5 w-full rounded-2xl border border-line object-cover"
            />
            <figcaption className="relative mt-2 text-right text-xs text-mist/70">
              {vavenPhoto.credit}
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="var-process" className="border-t border-line py-16 md:py-24">
        <div className="wrap">
          <SectionHeading
            kicker="Arbetssätt"
            title="Så går ett projekt till"
            id="var-process"
          />
          <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
            {processSteps.map((step) => (
              <li key={step.number} className="reveal">
                <span aria-hidden="true" className="gold-text font-heading text-3xl">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14">
            <Button href={contactMailto}>Boka ett kostnadsfritt möte</Button>
          </div>
        </div>
      </section>
    </>
  );
}
