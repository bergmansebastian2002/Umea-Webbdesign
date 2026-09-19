import Link from "next/link";

import { Facebook, Instagram, Kuvert, Telefon } from "@/components/Ikoner";
import Logo from "@/components/Logo";
import { amnen, foretag, mejl, utbildningar } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-monitor text-monitor-text">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo botten="mork" className="w-52" />
            <p className="mt-6 max-w-xs text-monitor-dampad">
              Utbildning i HLR, första hjälpen och brand. Vi kommer till er, var i Sverige ni än finns.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={foretag.facebook}
                target="_blank"
                rel="noopener"
                className="flex size-11 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-magenta"
                aria-label="Livrustning på Facebook (öppnas i ny flik)"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href={foretag.instagram}
                target="_blank"
                rel="noopener"
                className="flex size-11 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-magenta"
                aria-label="Livrustning på Instagram (öppnas i ny flik)"
              >
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Utbildningar" className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-monitor-dampad">Utbildningar</h2>
            <ul className="mt-4 space-y-1">
              {utbildningar.map((u) => (
                <li key={u.href}>
                  <Link href={u.href} className="inline-flex min-h-10 items-center hover:text-white hover:underline">
                    {u.namn}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Livrustning" className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-monitor-dampad">Livrustning</h2>
            <ul className="mt-4 space-y-1">
              {[
                ["Så går det till", "/sa-gar-det-till"],
                ["Hjärtsäker zon", "/hjartsaker-zon"],
                ["Om oss", "/om-oss"],
                ["Kontakt", "/kontakt"],
              ].map(([namn, href]) => (
                <li key={href}>
                  <Link href={href} className="inline-flex min-h-10 items-center hover:text-white hover:underline">
                    {namn}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-monitor-dampad">Kontakt</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a href={mejl(amnen.allmant)} className="inline-flex min-h-10 items-center gap-2.5 hover:text-white hover:underline">
                  <Kuvert className="size-5 text-monitor-dampad" />
                  {foretag.epost}
                </a>
              </li>
              <li>
                <a href={foretag.telefonHref} className="siffror inline-flex min-h-10 items-center gap-2.5 hover:text-white hover:underline">
                  <Telefon className="size-5 text-monitor-dampad" />
                  {foretag.telefon}
                </a>
              </li>
            </ul>
            <address className="mt-4 text-monitor-dampad not-italic">
              {foretag.juridisktNamn}
              <br />
              {foretag.gata}, {foretag.postnummer} {foretag.ort}
              <br />
              <span className="siffror">Org.nr {foretag.orgnr}</span>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-6 text-sm text-monitor-dampad md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {[
              ["Integritetspolicy", "/integritetspolicy"],
              ["Kvalitetspolicy", "/kvalitetspolicy"],
              ["Miljöpolicy", "/miljopolicy"],
            ].map(([namn, href]) => (
              <li key={href}>
                <Link href={href} className="inline-flex min-h-10 items-center hover:text-white hover:underline">
                  {namn}
                </Link>
              </li>
            ))}
          </ul>
          <p className="siffror">
            © {new Date().getFullYear()} {foretag.juridisktNamn} ·{" "}
            <a href="https://umea-webbdesign.vercel.app" className="hover:text-white hover:underline">
              Hemsida av Umeå Webbdesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
