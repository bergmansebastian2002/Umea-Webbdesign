import Image from "next/image";

import { restaurang } from "@/lib/kund";
import { bildProps } from "@/lib/bilder";
import BokaBordKnapp from "@/components/BokaBordKnapp";
import Knapp from "@/components/Knapp";
import OppetNu from "@/components/OppetNu";

/**
 * Startsidans toppsektion. Bilden laddas med `priority` eftersom den är
 * det första besökaren ser - det ger snabbare upplevd laddningstid.
 */
export default function Hero() {
  const { bilder, namn, slogan, kortBeskrivning, kontakt } = restaurang;

  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-screen">
      {bilder.heroVideo ? (
        // Kort, tyst videoloop. Bilden är reserv för webbläsare utan videostöd.
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={bilder.hero}
          aria-hidden="true"
        >
          <source src={bilder.heroVideo} />
        </video>
      ) : (
        <Image
          src={bilder.hero}
          alt={`${namn} - ${slogan}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          {...bildProps(bilder.hero)}
        />
      )}

      {/* Mörk toning så texten alltid är läsbar, oavsett bild. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35"
      />

      <div className="omslag relative z-10 pb-16 pt-32 text-white md:pb-24">
        <div className="max-w-3xl glid-in">
          <p className="etikett text-white/80">
            {restaurang.seo.kokstyper.join(" · ")} i {kontakt.ort}
          </p>

          <h1 className="mt-5 font-rubrik text-[length:var(--text-hero)] leading-[1.08]">
            {namn}
          </h1>

          <p className="mt-5 text-lg text-white/90 md:text-xl">{slogan}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            {kortBeskrivning}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BokaBordKnapp className="w-full sm:w-auto" />
            <Knapp href="/meny" variant="ljus" className="w-full sm:w-auto">
              Se menyn
            </Knapp>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/75">
            <OppetNu />
            <a
              href={`tel:${kontakt.telefonLank}`}
              className="text-sm underline-offset-4 hover:text-white hover:underline"
            >
              {kontakt.telefon}
            </a>
            <span className="text-sm">
              {kontakt.gata}, {kontakt.ort}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
