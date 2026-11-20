import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import { Bock, Pil } from "@/components/Ikoner";
import { paket } from "@/lib/hjartstartare";
import { metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return paket.map((p) => ({ paket: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ paket: string }> }) {
  const { paket: slug } = await params;
  const p = paket.find((x) => x.slug === slug);
  if (!p) return {};
  return metadataFor({
    titel: `${p.namn} - hjärtstartare med skylt, tillbehör och utbildning`,
    beskrivning: `${p.namn}: ${p.ingress} Primedic Y eller Primedic MyPAD.`,
    sokvag: `/kop-hjartstartare/${p.slug}`,
  });
}

export default async function Paketsida({ params }: { params: Promise<{ paket: string }> }) {
  const { paket: slug } = await params;
  const p = paket.find((x) => x.slug === slug);
  if (!p) notFound();
  const andra = paket.filter((x) => x.slug !== p.slug);

  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Köp hjärtstartare", href: "/kop-hjartstartare" },
          { namn: p.kortnamn, href: `/kop-hjartstartare/${p.slug}` },
        ]}
        rubrik={p.namn}
        ingress={p.ingress}
      >
        <div className="mt-9">
          <KontaktKnapp amne={`${amnen.hjartstartare} (${p.namn})`}>Fråga oss eller be om offert</KontaktKnapp>
        </div>
      </Sidrubrik>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold" data-in="">
              Det här ingår
            </h2>
            <ul className="mt-8 border-b border-black/10">
              {p.ingar.map((rad, i) => (
                <li
                  key={rad.rubrik}
                  className="flex gap-4 border-t border-black/10 py-5"
                  data-in=""
                  style={{ ["--i" as string]: Math.min(i, 5) }}
                >
                  <Bock className="mt-1 size-5 shrink-0 text-grafit" />
                  <div>
                    <h3 className="text-xl font-bold">{rad.rubrik}</h3>
                    {rad.text && <p className="mt-1 text-lg text-grafit">{rad.text}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4 lg:sticky lg:top-28">
              {p.bilder.length > 0 ? (
                p.bilder.map((b, i) => (
                  <div
                    key={b.alt}
                    className={`foto relative ${i === 0 ? "aspect-square" : "aspect-[3/2]"}`}
                    data-in="bild"
                    style={{ ["--i" as string]: i * 2 }}
                  >
                    <Image
                      src={b.src}
                      alt={b.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className={`object-cover ${i > 0 ? "object-[50%_42%]" : ""}`}
                    />
                  </div>
                ))
              ) : (
                // Kunden har inte skickat någon bild på utomhuspaketet: skåpets uppgifter på monitorn.
                <div className="monitor-rutor rounded-2xl p-7 text-monitor-text lg:p-9" data-in="">
                  <p className="text-monitor-dampad">Utomhusskåp</p>
                  <p className="mt-1 text-[1.75rem] leading-tight font-bold">Rotaid Solid Plus Heat</p>
                  <dl className="mt-8">
                    <div className="flex items-baseline justify-between gap-6 border-t border-white/12 py-4">
                      <dt className="text-monitor-dampad">Elanslutning</dt>
                      <dd className="siffror text-2xl font-bold">230 V</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-6 border-t border-white/12 py-4">
                      <dt className="text-monitor-dampad">IP-klass, hjärtstartare</dt>
                      <dd className="siffror text-2xl font-bold">IP55 / IP66</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-6 border-t border-white/12 py-4">
                      <dt className="text-monitor-dampad">Hjälpröst</dt>
                      <dd className="siffror text-2xl font-bold">4 språk</dd>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Utbildningen som följer med paketet. */}
      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
          <div className="lg:col-span-5" data-in="">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Utbildning ingår: {p.utbildning.namn}</h2>
          </div>
          <div className="lg:col-span-7" data-in="" style={{ ["--i" as string]: 1 }}>
            <p className="siffror text-2xl font-bold text-magenta-ljus">{p.utbildning.licens}</p>
            <p className="mt-4 text-xl leading-relaxed text-monitor-dampad">{p.utbildning.text}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-papper">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-3xl leading-tight font-bold lg:text-[2.25rem]" data-in="">
            Fler hjärtstartarpaket
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {andra.map((a, i) => (
              <li key={a.slug} data-in="" style={{ ["--i" as string]: i }}>
                <Link
                  href={`/kop-hjartstartare/${a.slug}`}
                  className="grupp flex h-full items-start justify-between gap-5 rounded-2xl border border-black/10 bg-white px-6 py-5 transition-colors hover:border-black/25"
                >
                  <span>
                    <span className="block text-lg font-semibold">{a.namn}</span>
                    <span className="mt-1 block text-grafit">{a.ingress}</span>
                  </span>
                  <Pil className="mt-1 size-6 shrink-0 text-magenta" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Avslut rubrik="Frågor eller offertförfrågan?" text="Välkommen att kontakta oss så hjälper vi dig direkt." />
    </>
  );
}
