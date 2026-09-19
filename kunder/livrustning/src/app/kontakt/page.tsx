import { KurvaTillKnapp } from "@/components/Block";
import { Facebook, Instagram, Kuvert, Pil, Plats, Telefon } from "@/components/Ikoner";
import { metadataFor } from "@/lib/seo";
import { amnen, foretag, mejl } from "@/lib/site";

export const metadata = metadataFor({
  titel: "Kontakt - be om offert",
  beskrivning: `Kontakta Livrustning för offert på HLR, första hjälpen och brand. Mejla ${foretag.epost} eller ring ${foretag.telefon}.`,
  sokvag: "/kontakt",
});

const arenden = [
  { namn: "Säkerhetsdag, 4 timmar", amne: amnen.sakerhetsdag },
  { namn: "eHLR-Event, 2 timmar", amne: amnen.ehlrEvent },
  { namn: "eHLR och eFörstaHjälpen", amne: amnen.digitalt },
  { namn: "Kurs på plats", amne: amnen.kurs },
  { namn: "Hjärtsäker zon", amne: amnen.hjartsakerZon },
  { namn: "Något annat", amne: amnen.allmant },
];

export default function Kontakt() {
  return (
    <>
      <section className="ekg-papper ekg-papper-tonad border-b border-black/10">
        <div className="mx-auto max-w-7xl px-5 pt-12 pb-16 lg:px-8 lg:pt-20 lg:pb-24">
          <h1 className="max-w-4xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] font-bold">Berätta vad ni behöver.</h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-grafit lg:text-[1.375rem]">
            Skriv gärna hur många ni är, var ni finns och vilket datum ni önskar. Då kan vi skicka en offert direkt.
          </p>
          <div className="mt-10 max-w-4xl">
            <KurvaTillKnapp direkt knapptext="Mejla oss" slag={[0.3, 0.75]} />
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <p className="flex items-center gap-2 text-sm text-grafit">
                <Kuvert className="size-5 text-grafit" />
                E-post
              </p>
              <a href={mejl(amnen.allmant)} className="mt-2 block text-2xl font-bold break-words hover:text-magenta-mork lg:text-[1.75rem]">
                {foretag.epost}
              </a>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-grafit">
                <Telefon className="size-5 text-grafit" />
                Telefon
              </p>
              <a href={foretag.telefonHref} className="siffror mt-2 block text-2xl font-bold hover:text-magenta-mork lg:text-[1.75rem]">
                {foretag.telefon}
              </a>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-grafit">
                <Plats className="size-5 text-grafit" />
                Adress
              </p>
              <address className="mt-2 text-lg not-italic">
                {foretag.juridisktNamn}
                <br />
                {foretag.gata}, {foretag.postnummer} {foretag.ort}
                <br />
                <span className="siffror text-grafit">Org.nr {foretag.orgnr}</span>
              </address>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-bold">Välj ärende, så blir det rätt från början.</h2>
            <p className="mt-5 text-xl text-grafit">
              Knapparna öppnar ett mejl med rätt ämnesrad och en kort mall att fylla i.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
            {arenden.map((a) => (
              <li key={a.namn}>
                <a
                  href={mejl(a.amne)}
                  className="grupp flex min-h-16 items-center justify-between gap-4 rounded-xl border border-black/10 bg-papper px-5 py-4 font-semibold transition-colors hover:border-magenta hover:bg-white"
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
          <p className="text-xl">
            Vi finns i Stockholm, Umeå och Nerja, och utbildar över hela Sverige.
          </p>
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
