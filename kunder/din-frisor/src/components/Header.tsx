import Link from "next/link";

import Logotyp from "@/components/Logotyp";
import { foretag } from "@/lib/site";

const lankar = [
  { href: "#priser", text: "Priser" },
  { href: "#oppettider", text: "Öppettider" },
  { href: "#hitta-hit", text: "Hitta hit" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ljus-djup bg-ljus/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="/" className="text-xl" aria-label="Din Frisör - till startsidan">
          <Logotyp />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden items-center gap-1 sm:flex">
          {lankar.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-11 items-center rounded-full px-3 font-medium text-grafit transition-colors hover:text-black"
            >
              {l.text}
            </a>
          ))}
        </nav>

        <a
          href={foretag.telefonLank}
          className="flex min-h-11 items-center rounded-full bg-rosa-djup px-5 font-semibold text-white transition-colors hover:bg-rosa"
        >
          <span className="sm:hidden">Ring oss</span>
          <span className="hidden sm:inline">{foretag.telefon}</span>
        </a>
      </div>
    </header>
  );
}
