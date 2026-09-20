import Image from "next/image";

import { Avslut, KontaktKnapp, Sidrubrik } from "@/components/Block";
import { Grupp, Kalender, Klocka, Plats } from "@/components/Ikoner";
import Snabbfakta from "@/components/Snabbfakta";
import { jsonLd, kursSchema, metadataFor } from "@/lib/seo";
import { amnen } from "@/lib/site";

import bildBrand from "@/bilder/brand-slackare.webp";
import bildHlr from "@/bilder/hlr-ovning.webp";
import bildKontor from "@/bilder/kurs-kontor.webp";

const BESKRIVNING =
  "Säkerhetsdag för företag: brand, HLR med hjärtstartare och första hjälpen på fyra timmar, i ett stationsupplägg hos er.";

export const metadata = metadataFor({
  titel: "Säkerhetsdag - säker arbetsplats på 4 timmar",
  beskrivning: BESKRIVNING,
  sokvag: "/utbildningar/sakerhetsdag",
});

const stationer = [
  {
    namn: "Brand, teori",
    text: "Arbetsplatsens vanligaste brandrisker och hur ni förebygger dem. Hur en brand utvecklas, riskerna med rök och brandgaser, och hur ni agerar rätt vid brandlarm och olika typer av bränder.",
  },
  {
    namn: "Brand, praktik",
    text: "Praktisk släckövning inomhus med modern och avancerad övningsutrustning.",
  },
  {
    namn: "HLR med hjärtstartare",
    text: "Kontrollera medvetande och andning, gör hjärt-lungräddning och larma rätt. Ni övar på dockor och lär er exakt hur er egen hjärtstartare fungerar.",
  },
  {
    namn: "Första hjälpen",
    text: "Agera som första person på en olycksplats: säkerhet, medvetandekontroll, stabilt sidoläge, luftvägsstopp, sår och brännskador, cirkulationssvikt och akuta sjukdomstillstånd.",
  },
];

const schema = [
  { tid: "00:00–00:15", namn: "Gemensam start", text: "Samling i storsal med storbildsskärm. Vi går igenom dagen och delar in grupperna." },
  { tid: "00:15–01:00", namn: "Pass 1", text: "Station 1–4, 45 minuter." },
  { tid: "01:05–01:50", namn: "Pass 2", text: "Station 1–4, 45 minuter." },
  { tid: "01:50–02:10", namn: "Kaffepaus och fika", text: "20 minuter." },
  { tid: "02:10–02:55", namn: "Pass 3", text: "Station 1–4, 45 minuter." },
  { tid: "03:00–03:45", namn: "Pass 4", text: "Station 1–4, 45 minuter." },
  { tid: "03:45–04:00", namn: "Avslutning", text: "Sammanfattning på storbildsskärm och tips på bra appar för första hjälpen." },
];

export default function Sakerhetsdag() {
  return (
    <>
      <Sidrubrik
        sokvag={[
          { namn: "Utbildningar", href: "/utbildningar" },
          { namn: "Säkerhetsdag", href: "/utbildningar/sakerhetsdag" },
        ]}
        rubrik="Säker arbetsplats på 4 timmar."
        ingress="Under en effektiv halvdag får hela personalen de kunskaper som krävs om olyckan eller branden skulle vara framme. Teori blandas med praktiska övningar i fyra stationer."
      >
        <div className="mt-9">
          <KontaktKnapp amne={amnen.sakerhetsdag}>Be om offert</KontaktKnapp>
        </div>
        <Snabbfakta
          className="mt-14"
          rader={[
            { ikon: Klocka, etikett: "Tid", varde: "4 timmar" },
            { ikon: Plats, etikett: "Plats", varde: "Hos er" },
            { ikon: Kalender, etikett: "Datum", varde: "Enligt era önskemål" },
            { ikon: Grupp, etikett: "Instruktörer", varde: "En per station" },
          ]}
        />
      </Sidrubrik>

      {/* Stationerna. Numren behövs: schemat nedan hänvisar till dem. */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Fyra stationer. Alla övar.</h2>
            <p className="mt-5 text-xl text-grafit">
              Deltagarna delas in i fyra mindre grupper som roterar mellan stationerna. Då hålls energin uppe och alla
              får gott om tid att träna praktiskt.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="foto relative aspect-[3/4]">
                <Image src={bildBrand} alt="Deltagare med brandsläckare under en brandövning" fill placeholder="blur" sizes="(min-width: 1024px) 230px, 50vw" className="object-cover" />
              </div>
              <div className="foto relative mt-10 aspect-[3/4]">
                <Image src={bildHlr} alt="Två deltagare övar HLR med hjärtstartare på en docka" fill placeholder="blur" sizes="(min-width: 1024px) 230px, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {stationer.map((s, i) => (
              <li key={s.namn} className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-black/10 py-8 first:border-t-0 first:pt-0 lg:grid-cols-[5rem_1fr] lg:py-10">
                <span className="siffror text-5xl leading-none font-bold lg:text-6xl" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-bold lg:text-[1.75rem]">
                    <span className="sr-only">Station {i + 1}: </span>
                    {s.namn}
                  </h3>
                  <p className="mt-2 max-w-xl text-lg text-grafit">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Schemat som tidtabell på mörk botten. */}
      <section className="bg-monitor text-monitor-text">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02] font-bold">Dagen, minut för minut.</h2>
            <p className="mt-5 text-xl text-monitor-dampad">
              Fyra pass om 45 minuter, med fika i mitten. Fem minuters förflyttning mellan passen är inräknad.
            </p>
            <div className="foto relative mt-10 hidden aspect-[3/4] max-w-sm lg:block">
              <Image src={bildKontor} alt="Kontorspersonal övar hjärt-lungräddning på dockor" fill placeholder="blur" sizes="384px" className="object-cover" />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {schema.map((p) => (
              <li
                key={p.tid}
                className={`grid grid-cols-1 gap-1 border-t border-white/12 py-5 sm:grid-cols-[9.5rem_1fr] sm:gap-6 ${
                  p.namn.startsWith("Pass") ? "" : "text-monitor-dampad"
                }`}
              >
                <p className="siffror font-semibold text-magenta-ljus">
                  <time>{p.tid}</time>
                </p>
                <div>
                  <h3 className={`text-xl font-bold ${p.namn.startsWith("Pass") ? "text-white" : "text-monitor-text"}`}>{p.namn}</h3>
                  <p className="mt-1">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Avslut
        rubrik="Vill ni boka en säkerhetsdag?"
        text="Berätta hur många ni är, var ni finns och vilket datum ni önskar, så skickar vi en offert. Är ni många anpassar vi antalet instruktörer så att alla får öva."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(kursSchema("sakerhetsdag", BESKRIVNING))} />
    </>
  );
}
