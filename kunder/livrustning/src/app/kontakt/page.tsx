import Image from "next/image";

import { KurvaTillKnapp, OffertKnapp } from "@/components/Block";
import { Facebook, Instagram, Kuvert, Pil, Plats, Telefon } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { amnen, foretag, mejl } from "@/lib/site";

import bildJohnny from "@/bilder/johnny-sundin.webp";
import bildPeter from "@/bilder/peter-jonsson.webp";

export const metadata = metadataFor({
  titel: "Kontakt - be om offert",
  beskrivning: `Kontakta oss för offert på HLR, första hjälpen och brand. Mejla ${foretag.epost} eller ring ${foretag.telefon}.`,
  sokvag: "/kontakt",
});

// Texter och porträtt enligt kundens underlag 2026-11-19.
const vi = [
  {
    namn: "Johnny Sundin",
    text: "HLR-instruktör och erfaren kommunikatör med gedigen pedagogisk kunskap om hur det digitala formatet ska användas på bästa sätt.",
    bild: bildJohnny,
  },
  {
    namn: "Peter Jonsson",
    text: "Huvudinstruktör som i över 25 år har utbildat ca 30 000 personer i HLR och Första Hjälpen. Peter har under många år haft Sveriges nöjdaste kursdeltagare enligt Reco.se.",
    bild: bildPeter,
  },
];

const arenden = [
  { namn: "Säkerhetsdag (Halvdag)", amne: amnen.sakerhetsdag },
  { namn: "eHLR-Event, 2 timmar", amne: amnen.ehlrEvent },
  { namn: "eHLR och eFörstaHjälpen", amne: amnen.digitalt },
  { namn: "Traditionell kurs på plats", amne: amnen.kurs },
  { namn: "eHLR-Familj", amne: amnen.familj },
  { namn: "Instruktörsutbildning", amne: amnen.instruktor },
  { namn: "Köp hjärtstartare", amne: amnen.hjartstartare },
  { namn: "Något annat", amne: amnen.allmant },
];

export default function Kontakt() {
  return (
    <>
      <section className="ekg-papper ekg-papper-tonad border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 pt-12 pb-16 lg:px-8 lg:pt-20 lg:pb-24">
          <h1 className="intro max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] font-bold">Berätta vad ni behöver</h1>
          <p className="intro mt-6 max-w-2xl text-xl leading-relaxed text-grafit lg:text-[1.375rem]" style={{ ["--i" as string]: 1 }}>
            Skriv gärna hur många ni är, var ni finns och vilket datum ni önskar. Då kan vi skicka en offert direkt.
          </p>
          <div className="mt-10 max-w-4xl">
            <KurvaTillKnapp direkt knapptext="Mejla oss" slag={[0.3, 0.75]} />
          </div>

          <h2 className="mt-16 text-3xl leading-tight font-bold lg:text-[2.25rem]">Kontaktuppgifter</h2>
          <div className="mt-7 grid grid-cols-1 border-t border-black/15 md:grid-cols-3">
            <div className="border-b border-black/15 py-7 md:border-b-0 md:pr-8">
              <p className="flex items-center gap-2 text-sm font-semibold text-grafit">
                <Kuvert className="size-5" />
                Mejla oss
              </p>
              <a href={mejl(amnen.allmant)} className="mt-2 block text-2xl font-bold break-words hover:text-magenta-mork lg:text-[1.75rem]">
                {foretag.epost}
              </a>
            </div>
            <div className="border-b border-black/15 py-7 md:border-b-0 md:border-l md:px-8">
              <p className="flex items-center gap-2 text-sm font-semibold text-grafit">
                <Telefon className="size-5" />
                Ring oss
              </p>
              <a href={foretag.telefonHref} className="siffror mt-2 block text-2xl font-bold hover:text-magenta-mork lg:text-[1.75rem]">
                {foretag.telefon}
              </a>
            </div>
            <div className="py-7 md:border-l md:border-black/15 md:pl-8">
              <p className="flex items-center gap-2 text-sm font-semibold text-grafit">
                <Plats className="size-5" />
                Adress
              </p>
              <address className="mt-2 text-lg not-italic">
                <span className="font-bold">{foretag.juridisktNamn}</span>
                <br />
                {foretag.gata}, {foretag.postnummer} {foretag.ort}
                <br />
                <span className="siffror text-grafit">Org.nr {foretag.orgnr}</span>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Vilka är vi? Två personer, två porträtt. */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold" data-in="">
            Vilka är vi?
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {vi.map((p, i) => (
              <li
                key={p.namn}
                className="grid grid-cols-[6.5rem_1fr] items-start gap-6 border-t border-black/10 pt-8 lg:grid-cols-[9rem_1fr] lg:gap-8"
                data-in=""
                style={{ ["--i" as string]: i }}
              >
                <div className="foto relative aspect-square">
                  <Image src={p.bild} alt={`Porträtt av ${p.namn}`} fill placeholder="blur" sizes="(min-width: 1024px) 144px, 104px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl leading-tight font-bold lg:text-[1.75rem]">{p.namn}</h3>
                  <p className="mt-2 text-lg text-grafit">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/10 bg-papper-djup">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-5" data-in="">
            <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold">Välj ärende, så blir det rätt från början</h2>
            <p className="mt-5 text-xl text-grafit">
              Knapparna öppnar ett mejl med rätt ämnesrad och en kort mall att fylla i. Vill ni hellre fylla i ett
              formulär?
            </p>
            <OffertKnapp className="mt-7" />
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
            {arenden.map((a, i) => (
              <li key={a.namn} data-in="" style={{ ["--i" as string]: i % 2 }}>
                <a
                  href={mejl(a.amne)}
                  className="grupp flex min-h-16 items-center justify-between gap-4 rounded-xl border border-black/10 bg-white px-5 py-4 font-semibold transition-colors hover:border-magenta"
                >
                  {a.namn}
                  <Pil className="size-5 shrink-0 text-magenta" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/10 bg-papper">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xl">Vi finns i Stockholm, Umeå och Nerja, och utbildar över hela Sverige.</p>
          <div className="flex flex-wrap gap-3">
            <a href={foretag.facebook} target="_blank" rel="noopener" className="knapp knapp-sekundar min-h-11 px-5">
              <Facebook className="size-5" />
              Facebook
            </a>
            <a href={foretag.instagram} target="_blank" rel="noopener" className="knapp knapp-sekundar min-h-11 px-5">
              <Instagram className="size-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
