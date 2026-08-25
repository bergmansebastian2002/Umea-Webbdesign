import Image from "next/image";

import { restaurang } from "@config/restaurang";
import { meny } from "@content/meny";
import BokaBordKnapp from "@/components/BokaBordKnapp";
import Galleri from "@/components/Galleri";
import Hero from "@/components/Hero";
import Karta from "@/components/Karta";
import Knapp from "@/components/Knapp";
import MenyLista from "@/components/MenyLista";
import Oppettider from "@/components/Oppettider";
import Sektion from "@/components/Sektion";
import { byggMetadata } from "@/lib/seo";

export const metadata = byggMetadata({
  titel: `${restaurang.namn} - ${restaurang.slogan}`,
  beskrivning: restaurang.kortBeskrivning,
  sokvag: "/",
});

/**
 * Startsidan. Ordningen är vald för att leda besökaren mot bokning:
 * bild och känsla -> vilka vi är -> maten -> miljön -> boka -> hitta hit.
 */
export default function Startsida() {
  const { sektioner, bilder, seo, kontakt } = restaurang;

  return (
    <>
      <Hero />

      {/* Kort presentation */}
      {sektioner.omOss && (
        <Sektion etikett="Om oss" rubrik={`Välkommen till ${restaurang.namn}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-5 text-base leading-relaxed text-dampad md:text-lg">
              {restaurang.omOssStycken.slice(0, 2).map((stycke) => (
                <p key={stycke.slice(0, 40)}>{stycke}</p>
              ))}
              <div className="pt-4">
                <Knapp href="/om-oss" variant="kontur">
                  Läs mer om oss
                </Knapp>
              </div>
            </div>

            <div className="relative aspect-4/5 overflow-hidden rounded-mall lg:aspect-square">
              <Image
                src={bilder.omOss}
                alt={`Interiör och stämning på ${restaurang.namn} i ${seo.stad}`}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Sektion>
      )}

      {/* Smakprov ur menyn */}
      <Sektion
        etikett="Menyn"
        rubrik="Ett smakprov ur menyn"
        ingress={meny.ingress}
        className="border-y border-ram bg-yta"
      >
        <MenyLista meny={meny} begransaTill={["forratter", "varmratter"]} />
        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <Knapp href="/meny">Se hela menyn</Knapp>
          <BokaBordKnapp variant="kontur" />
        </div>
      </Sektion>

      {/* Galleri */}
      {sektioner.galleri && bilder.galleri.length > 0 && (
        <Sektion
          etikett="Galleri"
          rubrik="Så ser det ut hos oss"
          ingress="Klicka på en bild för att se den i större format."
        >
          <Galleri bilder={bilder.galleri} />
        </Sektion>
      )}

      {/* Uppmaning att boka */}
      <Sektion mork centrerad rubrik="Boka ditt bord" ingress={restaurang.bokning.hjalptext}>
        <div className="flex flex-col items-center gap-4">
          <BokaBordKnapp />
          <p className="text-sm text-white/60">
            Större sällskap? Mejla oss på{" "}
            <a href={`mailto:${kontakt.epost}`} className="underline underline-offset-4">
              {kontakt.epost}
            </a>
          </p>
        </div>
      </Sektion>

      {/* Öppettider och karta */}
      <Sektion
        etikett="Hitta hit"
        rubrik={`Vi finns på ${kontakt.gata} i ${kontakt.ort}`}
        id="hitta-hit"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <Oppettider visaSpecialdagar={false} />

            <div className="mt-8 border-t border-ram pt-6 text-sm">
              <p className="etikett">Kontakt</p>
              <address className="mt-3 space-y-1 not-italic leading-relaxed text-dampad">
                <span className="block">{kontakt.gata}</span>
                <span className="block">
                  {kontakt.postnummer} {kontakt.ort}
                </span>
                <a
                  href={`tel:${kontakt.telefonLank}`}
                  className="mt-2 block text-text hover:text-accent"
                >
                  {kontakt.telefon}
                </a>
                <a href={`mailto:${kontakt.epost}`} className="block text-text hover:text-accent">
                  {kontakt.epost}
                </a>
              </address>
            </div>
          </div>

          {sektioner.karta && <Karta />}
        </div>
      </Sektion>
    </>
  );
}
