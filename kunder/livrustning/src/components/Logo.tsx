import Image from "next/image";
import Link from "next/link";

import loggaLjus from "@/bilder/logga-ntba-ljus-botten.webp";
import loggaMork from "@/bilder/logga-ntba-mork-botten.webp";

/** Nice To Be Alives logga. `botten` styr om ordmärket ska vara svart eller vitt. */
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
    <Link href="/" className={`inline-block shrink-0 ${className}`} aria-label="Nice To Be Alive, till startsidan">
      <Image
        src={botten === "ljus" ? loggaLjus : loggaMork}
        alt="Nice To Be Alive"
        sizes="(min-width: 1024px) 160px, 136px"
        priority={prioritet}
        className="h-auto w-full"
      />
    </Link>
  );
}
