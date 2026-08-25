import { restaurang } from "@config/restaurang";
import Knapp from "@/components/Knapp";

type Props = {
  variant?: "fylld" | "kontur" | "ljus";
  className?: string;
  /** Visar hjälptexten under knappen, t.ex. "Eller ring oss på ...". */
  visaHjalptext?: boolean;
};

/**
 * Sajtens viktigaste knapp. Pekar på det externa bokningssystemet från
 * config/restaurang.ts. Är `bokning.aktiv` false visas ett telefonnummer
 * istället, så knappen aldrig blir en återvändsgränd.
 */
export default function BokaBordKnapp({
  variant = "fylld",
  className = "",
  visaHjalptext = false,
}: Props) {
  const { bokning, kontakt } = restaurang;

  if (!bokning.aktiv) {
    return (
      <Knapp href={`tel:${kontakt.telefonLank}`} variant={variant} className={className}>
        Ring och boka {kontakt.telefon}
      </Knapp>
    );
  }

  return (
    <div className={visaHjalptext ? "flex flex-col items-start gap-2" : "contents"}>
      <Knapp
        href={bokning.lank}
        variant={variant}
        className={className}
        ariaLabel={`${bokning.knapptext} hos ${restaurang.namn} - öppnas i nytt fönster`}
      >
        {bokning.knapptext}
        <span aria-hidden="true" className="text-[0.9em]">
          &#8599;
        </span>
      </Knapp>
      {visaHjalptext && bokning.hjalptext && (
        <p className="text-sm text-dampad">{bokning.hjalptext}</p>
      )}
    </div>
  );
}
