import { restaurang } from "@config/restaurang";

/**
 * Karta över restaurangens plats.
 *
 * Använder Google Maps inbäddade karta, som inte kräver någon API-nyckel.
 * Kartan laddas först när besökaren rullar ner till den (`loading="lazy"`),
 * så den påverkar inte sidans laddningstid.
 */
export default function Karta({ hojd = "h-[24rem] md:h-[30rem]" }: { hojd?: string }) {
  const { kontakt } = restaurang;
  const adress = `${restaurang.namn}, ${kontakt.gata}, ${kontakt.postnummer} ${kontakt.ort}`;
  const koordinater = `${kontakt.latitud},${kontakt.longitud}`;

  const inbaddad = `https://www.google.com/maps?q=${encodeURIComponent(adress)}&z=16&output=embed`;
  const vagbeskrivning = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(adress)}`;
  const appleKartor = `https://maps.apple.com/?daddr=${encodeURIComponent(adress)}&ll=${koordinater}`;

  return (
    <div>
      <div className={`w-full overflow-hidden rounded-mall border border-ram ${hojd}`}>
        <iframe
          title={`Karta som visar var ${restaurang.namn} ligger i ${kontakt.ort}`}
          src={inbaddad}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <a
          href={vagbeskrivning}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          Vägbeskrivning i Google Maps &#8599;
        </a>
        <a
          href={appleKartor}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dampad underline-offset-4 hover:text-accent hover:underline"
        >
          Öppna i Apple Kartor &#8599;
        </a>
      </div>
    </div>
  );
}
