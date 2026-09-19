import Image from "next/image";
import Link from "next/link";

import loggaLjus from "@/bilder/logga-ljus-botten.webp";
import loggaMork from "@/bilder/logga-mork-botten.webp";

/** Livrustnings logga. `botten` styr om ordmärket ska vara mörkt eller vitt. */
export default function Logo({
  botten = "ljus",
  className = "",
  prioritet = false,
}: {
  botten?: "ljus" | "mork";
  className?: string;
  prioritet?: boolean;
}) {
  return (
    <Link href="/" className={`inline-block shrink-0 ${className}`} aria-label="Livrustning, till startsidan">
      <Image
        src={botten === "ljus" ? loggaLjus : loggaMork}
        alt="Livrustning - Kunskap för säkerhets skull"
        sizes="(min-width: 1024px) 200px, 160px"
        priority={prioritet}
        className="h-auto w-full"
      />
    </Link>
  );
}
