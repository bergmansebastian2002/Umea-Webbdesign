import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { contactMailto, promises } from "@/data/site";
import Button from "@/components/ui/Button";

/**
 * Start page hero: headline, promises and a CSS-built laptop + phone
 * mockup showing two of the demo sites. No external mockup images.
 */
export default function Hero() {
  return (
    <section aria-labelledby="hero-rubrik" className="hero-glow relative overflow-hidden">
      <div className="wrap grid min-h-[92svh] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="kicker">Webbyrå i Umeå</p>
          <h1
            id="hero-rubrik"
            className="mt-5 max-w-xl text-[length:var(--text-hero)] leading-[1.06]"
          >
            Din nya hemsida.
            <br />
            Klar på <span className="gold-text">två veckor</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
            Smidiga lösningar för företag i Umeå som behöver en sida som
            faktiskt fungerar - snabb, sökbar och gjord för mobilen där dina
            kunder redan är.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={contactMailto}>Kontakta oss</Button>
            <Button href="/#hemsidor" variant="outline">
              Se våra hemsidor
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-4">
            {promises.map((p) => (
              <div key={p.title} className="sm:border-l sm:border-line sm:pl-4 sm:first:border-0 sm:first:pl-0">
                <dt className="text-sm font-semibold text-ink">{p.title}</dt>
                <dd className="mt-1 text-sm text-mist">{p.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo of demo restaurant Björken with a phone mockup in front
            showing the menu page of its site. */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-line shadow-lift">
            <Image
              src="/images/exempel/bjorken-restaurang.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-8 -right-2 w-28 rounded-3xl border border-line bg-panel p-1.5 shadow-lift sm:w-32">
            <div className="relative aspect-9/19 overflow-hidden rounded-[1.15rem]">
              <Image
                src="/images/exempel/bjorken-meny-mobil.webp"
                alt=""
                fill
                sizes="130px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center md:flex">
        <ChevronDown aria-hidden="true" className="pulse-soft h-6 w-6 text-mist" />
      </div>
    </section>
  );
}
