import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { aboutText, trustPoints, vavenPhoto } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

/**
 * Two-column trust section with the Väven photo.
 * On mobile the photo shrinks and floats to the RIGHT of the text
 * (magazine style) instead of stacking below it; on lg+ it is the
 * full left column, exactly as before.
 */
export default function About() {
  return (
    <section aria-labelledby="om-oss" className="border-t border-line py-16 md:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Desktop/tablet-landscape image - hidden on mobile. */}
        <figure className="reveal relative order-2 hidden lg:order-1 lg:block">
          {/* inset-0, not negative: the blur spreads the glow visually
              without making the box overflow the viewport on mobile. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-3xl bg-gold/15 blur-2xl"
          />
          <Image
            src={vavenPhoto.src}
            alt={vavenPhoto.alt}
            width={800}
            height={1000}
            loading="lazy"
            className="relative aspect-4/5 w-full rounded-2xl border border-line object-cover"
          />
          <figcaption className="relative mt-2 text-right text-xs text-mist/70">
            {vavenPhoto.credit}
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <SectionHeading
            kicker="Om oss"
            title="Din lokala webbdesigner"
            id="om-oss"
          />

          {/* Mobile image - floats right so the text wraps around it. */}
          <figure className="float-right -mt-4 mb-2 ml-4 w-2/5 max-w-44 lg:hidden">
            <Image
              src={vavenPhoto.src}
              alt={vavenPhoto.alt}
              width={800}
              height={1000}
              loading="lazy"
              sizes="40vw"
              className="aspect-4/5 w-full rounded-xl border border-line object-cover"
            />
            <figcaption className="mt-1 text-right text-[0.6rem] leading-tight text-mist/70">
              {vavenPhoto.credit}
            </figcaption>
          </figure>

          <div className="-mt-6 space-y-4 text-base leading-relaxed text-mist md:text-lg lg:-mt-6">
            {aboutText.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-9 clear-both space-y-5">
            {trustPoints.map((point) => (
              <li key={point.title} className="reveal flex gap-4">
                <point.icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-2" />
                <div>
                  <p className="font-semibold text-ink">{point.title}</p>
                  <p className="text-sm text-mist">{point.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/om-oss"
            className="mt-9 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-2 underline-offset-4 hover:underline"
          >
            Läs mer om oss
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
