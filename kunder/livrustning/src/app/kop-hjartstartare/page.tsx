import Image from "next/image";
import Link from "next/link";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import { Droppe, Pil, Skold, Sprak, Grupp } from "@/components/Ikoner";
import { modeller, paket, varforPrimedic } from "@/lib/hjartstartare";
import { metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

import bildHand from "@/bilder/hjartstartare-i-hand.webp";

export const metadata = metadataFor({
  titel: "Köp hjärtstartare - färdiga paket med Primedic",
  beskrivning:
    "Köp hjärtstartare i färdiga paket för kontor, utomhus, hemmet och Spanien. Vi har valt ut Primedic Y och Primedic MyPAD: 10 års garanti, för både vuxna och barn.",
  sokvag: "/kop-hjartstartare",
});

const ikoner = [Skold, Grupp, Sprak, Droppe];

const jamforelse = [
  { etikett: "Mått", nyckel: "matt" },
  { etikett: "Vikt", nyckel: "vikt" },
  { etikett: "IP-klass", nyckel: "ip" },
] as const;

export default function KopHjartstartare() {
  return (
    <>
      <Sidrubrik
        rubrik="Rätt utrustad för att rädda liv – vi har gjort valet åt dig"
        ingress="Det finns mängder av hjärtstartare på marknaden för dig som ska köpa hjärtstartare. För att spara din tid har vi valt ut de absolut bästa modellerna för en trygg och enkel användning: Primedic Y eller Primedic MyPAD."
      >
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <KontaktKnapp amne={amnen.hjartstartare}>Fråga oss eller be om offert</KontaktKnapp>
          <a href="#paket" className="textlank inline-flex items-center gap-2 text-lg no-underline">
            <span className="underline decoration-magenta/35 underline-offset-[0.2em]">Se hjärtstartarpaketen</span>
            <Pil className="size-5" />
          </a>
        </div>
      </Sidrubrik>

      {/* Varför Primedic, med produkten i handen. */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <div className="foto relative mx-auto aspect-square max-w-md lg:max-w-none" data-in="bild">
              <Image
                src={bildHand}
                alt="Primedic MyPAD, en kompakt hjärtstartare som ryms i en hand, framför en hjärtstartarskylt"
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold" data-in="">
              Varför välja Primedic?
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {varforPrimedic.map((v, i) => {
                const Ikon = ikoner[i];
                return (
                  <li key={v.rubrik} className="border-t border-black/10 py-6" data-in="" style={{ ["--i" as string]: i }}>
                    <Ikon className="size-6 text-grafit" />
                    <h3 className="mt-3 text-2xl font-bold">{v.rubrik}</h3>
                    <p className="mt-1.5 text-lg text-grafit">{v.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* De två modellerna sida vid sida, som en avläsning på monitorn. */}
      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl" data-in="">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Två modeller. Det här skiljer dem åt.</h2>
            <p className="mt-5 text-xl text-monitor-dampad">
              Det som framförallt skiljer de två hjärtstartarmodellerna åt är storlek, vikt och tålighet.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {modeller.map((m, i) => (
              <div
                key={m.namn}
                className="rounded-2xl border border-white/12 bg-white/[0.035] p-6 lg:p-9"
                data-in=""
                style={{ ["--i" as string]: i }}
              >
                <h3 className="text-[1.75rem] leading-tight font-bold lg:text-[2rem]">{m.namn}</h3>
                <p className="mt-2 text-lg text-monitor-dampad">{m.karaktar}</p>
                <dl className="mt-7">
                  {jamforelse.map((j) => (
                    <div key={j.nyckel} className="flex items-baseline justify-between gap-6 border-t border-white/12 py-4">
                      <dt className="text-monitor-dampad">{j.etikett}</dt>
                      <dd className="siffror text-right text-xl font-bold lg:text-2xl">{m[j.nyckel]}</dd>
                    </div>
                  ))}
                </dl>
                <p className="border-t border-white/12 pt-4 text-monitor-dampad">{m.talighet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketen: fyra ingångar till var sin sida. */}
      <section id="paket" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl" data-in="">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Välj ditt hjärtstartarpaket</h2>
            <p className="mt-5 text-xl text-grafit">
              För mer information – klicka på det hjärtstartarpaket som du är intresserad av.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {paket.map((p, i) => {
              const bild = p.bilder[0];
              return (
                <li key={p.slug} data-in="" style={{ ["--i" as string]: i }}>
                  <Link
                    href={`/kop-hjartstartare/${p.slug}`}
                    className="lyft grupp flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-papper hover:border-black/20"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {bild ? (
                        <Image
                          src={bild.src}
                          alt=""
                          fill
                          placeholder="blur"
                          sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
                          className={`zoom object-cover ${p.slug === "spanien" ? "object-[80%_60%]" : p.slug === "hemma" ? "object-[55%_62%]" : "object-[62%_40%]"}`}
                        />
                      ) : (
                        // Utomhuspaketet saknar bild: skåpets nyckeluppgifter på monitorn i stället.
                        <div className="monitor-rutor flex h-full flex-col justify-end p-5 text-monitor-text">
                          <p className="siffror text-4xl leading-none font-bold">230 V</p>
                          <p className="mt-2 text-sm leading-snug text-monitor-dampad">Uppvärmt skåp: Rotaid Solid Plus Heat</p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-2xl leading-tight font-bold">{p.namn}</h3>
                      <p className="mt-2 text-grafit">{p.ingress}</p>
                      <p className="mt-auto flex items-center gap-2 pt-6 font-semibold text-magenta-mork">
                        Se vad som ingår
                        <Pil className="size-5" />
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Avslut
        rubrik="Frågor eller offertförfrågan?"
        text="Välkommen att kontakta oss så hjälper vi dig direkt."
      />
    </>
  );
}
