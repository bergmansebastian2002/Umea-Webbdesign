import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { contactMailto, promises } from "@/data/site";
import Bildspel from "@/components/ui/Bildspel";
import Button from "@/components/ui/Button";

/** Auto-playing hero slideshow: the Björken demo site and what it shows off. */
const HERO_SLIDES = [
  { image: "/images/exempel/bjorken-hem.webp", alt: "Startsidan på Restaurang Björkens hemsida", label: "Hemsidan" },
  { image: "/images/exempel/bjorken-restaurang.webp", alt: "Matsalen på restaurangen", label: "Restaurangen" },
  { image: "/images/exempel/bjorken-mat.webp", alt: "Färgstark rätt från menyn", label: "Maten" },
  { image: "/images/exempel/bjorken-meny.webp", alt: "Menysidan på Restaurang Björkens hemsida", label: "Menyn" },
];

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
            className="mt-5 text-[length:var(--text-hero)] leading-[1.1]"
          >
            <span className="block whitespace-nowrap">Din nya hemsida.</span>
            <span className="block whitespace-nowrap">
              Klar på <span className="gold-text">två veckor</span>.
            </span>
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

        {/* Auto-playing slideshow of the Björken demo (site, restaurant,
            food, menu) with a phone mockup in front showing the menu page. */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line shadow-lift">
            <Bildspel slides={HERO_SLIDES} name="Restaurang Björken" eager />
          </div>

          <div
            aria-hidden="true"
            className="absolute -bottom-8 -right-2 w-28 rounded-3xl border border-line bg-panel p-1.5 shadow-lift sm:w-32"
          >
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
