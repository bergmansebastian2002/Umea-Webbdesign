"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Kryss, Meny, Nedat, Pil, Telefon } from "@/components/Ikoner";
import Logo from "@/components/Logo";
import { foretag, utbildningar } from "@/lib/site";

function aktiv(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

// Till vänster, intill loggan. De två sista visas först på bredare skärmar;
// de finns alltid i rullgardinens nederkant och i sidfoten.
const vanster = [
  { namn: "Köp hjärtstartare", href: "/kop-hjartstartare", alltid: true },
  { namn: "Så går det till", href: "/sa-gar-det-till", alltid: false },
  { namn: "Hjärtsäker zon", href: "/hjartsaker-zon", alltid: false },
];

const mobil = [
  { namn: "Köp hjärtstartare", href: "/kop-hjartstartare" },
  { namn: "Så går det till", href: "/sa-gar-det-till" },
  { namn: "Hjärtsäker zon", href: "/hjartsaker-zon" },
  { namn: "Om oss", href: "/om-oss" },
  { namn: "Kontakt", href: "/kontakt" },
];

const LANK =
  "whitespace-nowrap rounded-full px-3 py-2 text-base font-medium transition-colors hover:text-magenta-ljus 2xl:px-3.5 2xl:text-[1.0625rem]";

export default function Header() {
  const pathname = usePathname();
  const [oppen, setOppen] = useState(false);
  const knapp = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  // Escape stänger, fokus flyttas in i panelen och tillbaka till knappen.
  useEffect(() => {
    if (!oppen) return;
    const forsta = panel.current?.querySelector<HTMLElement>("a, button");
    forsta?.focus();
    const tangent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOppen(false);
        knapp.current?.focus();
      }
    };
    document.addEventListener("keydown", tangent);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", tangent);
      document.body.style.overflow = "";
    };
  }, [oppen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-monitor text-monitor-text">
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Hoppa till innehållet
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-5 lg:h-20 lg:gap-6 lg:px-8 xl:gap-8">
        <Logo botten="mork" className="w-32 lg:w-36" prioritet />

        {/* Till vänster: Utbildningar (rullgardin vid hovring) och Köp hjärtstartare. */}
        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li className="group relative">
              <Link
                href="/utbildningar"
                aria-current={pathname === "/utbildningar" ? "page" : undefined}
                className={`flex items-center gap-1 ${LANK} ${aktiv(pathname, "/utbildningar") ? "text-magenta-ljus" : ""}`}
              >
                Utbildningar
                <Nedat className="size-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
              </Link>
              {/* pt-3 håller hovringen vid liv mellan länken och panelen. */}
              <div className="rullgardin absolute top-full left-0 pt-3">
                <div className="w-[46rem] rounded-2xl border border-black/10 bg-white p-2.5 text-black shadow-[0_28px_56px_-24px_rgb(0_0_0/0.55)]">
                  <ul className="grid grid-cols-2 gap-1">
                    {utbildningar.map((u, i) => (
                      <li key={u.href} className="rullgardin-rad" style={{ ["--i" as string]: i }}>
                        <Link
                          href={u.href}
                          aria-current={pathname === u.href ? "page" : undefined}
                          className={`block h-full rounded-xl px-3.5 py-3 transition-colors hover:bg-papper ${
                            pathname === u.href ? "bg-papper" : ""
                          }`}
                        >
                          <span className="block font-semibold">{u.menynamn}</span>
                          <span className="mt-0.5 block text-sm leading-snug text-grafit">{u.menytext}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="rullgardin-rad mt-2 flex items-center justify-between gap-4 border-t border-black/10 px-3.5 pt-3 pb-1.5"
                    style={{ ["--i" as string]: utbildningar.length }}
                  >
                    <Link href="/utbildningar" className="textlank inline-flex items-center gap-2 no-underline">
                      <span className="underline decoration-magenta/35 underline-offset-[0.2em]">Alla utbildningar</span>
                      <Pil className="size-4" />
                    </Link>
                    <span className="flex gap-5 text-sm font-medium text-grafit">
                      <Link href="/sa-gar-det-till" className="hover:text-magenta-mork">
                        Så går det till
                      </Link>
                      <Link href="/hjartsaker-zon" className="hover:text-magenta-mork">
                        Hjärtsäker zon
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            {vanster.map((p) => (
              <li key={p.href} className={p.alltid ? "" : "hidden xl:block"}>
                <Link
                  href={p.href}
                  aria-current={aktiv(pathname, p.href) ? "page" : undefined}
                  className={`${LANK} ${aktiv(pathname, p.href) ? "text-magenta-ljus" : ""}`}
                >
                  {p.namn}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Till höger: Om oss och Kontakt som knappar. */}
        <div className="ml-auto hidden items-center gap-2.5 lg:flex">
          <Link
            href="/om-oss"
            aria-current={aktiv(pathname, "/om-oss") ? "page" : undefined}
            className="knapp knapp-kontur min-h-11 px-5"
          >
            Om oss
          </Link>
          <Link
            href="/kontakt"
            aria-current={aktiv(pathname, "/kontakt") ? "page" : undefined}
            className="knapp knapp-primar min-h-11 px-5"
          >
            Kontakt
          </Link>
        </div>

        <button
          ref={knapp}
          type="button"
          className="-mr-2 ml-auto flex size-11 items-center justify-center rounded-full lg:hidden"
          aria-expanded={oppen}
          aria-controls="mobilmeny"
          onClick={() => setOppen((v) => !v)}
        >
          {oppen ? <Kryss className="size-6" /> : <Meny className="size-6" />}
          <span className="sr-only">{oppen ? "Stäng menyn" : "Öppna menyn"}</span>
        </button>
      </div>

      {oppen && (
        <div
          id="mobilmeny"
          ref={panel}
          data-lenis-prevent
          className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-black/10 bg-papper text-black lg:hidden"
        >
          <nav
            aria-label="Mobilmeny"
            className="mx-auto max-w-3xl px-5 pt-4 pb-10"
            onClick={(e) => {
              // Stäng menyn när en länk väljs (sidbyte eller telefon).
              if ((e.target as HTMLElement).closest("a")) setOppen(false);
            }}
          >
            <ul className="divide-y divide-black/10">
              <li className="py-1">
                <Link
                  href="/utbildningar"
                  aria-current={pathname === "/utbildningar" ? "page" : undefined}
                  className="flex min-h-12 items-center justify-between text-2xl font-semibold tracking-tight"
                >
                  Utbildningar
                  <Pil className="size-5 text-magenta" />
                </Link>
                <ul className="mb-3 ml-1 space-y-0.5 border-l border-black/15 pl-4">
                  {utbildningar.map((u) => (
                    <li key={u.href}>
                      <Link
                        href={u.href}
                        aria-current={pathname === u.href ? "page" : undefined}
                        className="flex min-h-11 items-center text-lg"
                      >
                        {u.menynamn}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {mobil.map((p) => (
                <li key={p.href} className="py-1">
                  <Link
                    href={p.href}
                    aria-current={aktiv(pathname, p.href) ? "page" : undefined}
                    className="flex min-h-12 items-center justify-between text-2xl font-semibold tracking-tight"
                  >
                    {p.namn}
                    <Pil className="size-5 text-magenta" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Link href="/kontakt" className="knapp knapp-primar w-full">
                Kontakt
              </Link>
              <a href={foretag.telefonHref} className="knapp knapp-sekundar siffror w-full">
                <Telefon className="size-5" />
                {foretag.telefon}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
