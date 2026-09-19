"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Kryss, Meny, Nedat, Pil, Telefon } from "@/components/Ikoner";
import Logo from "@/components/Logo";
import { amnen, foretag, mejl, meny } from "@/lib/site";

function aktiv(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

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
    <header className="sticky top-0 z-40 border-b border-black/10 bg-papper">
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-papper"
      >
        Hoppa till innehållet
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 lg:h-20 lg:px-6 xl:gap-6 xl:px-8">
        <Logo className="w-40 xl:w-48" prioritet />

        <nav aria-label="Huvudmeny" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {meny.map((punkt) =>
              "barn" in punkt ? (
                <li key={punkt.href} className="group relative">
                  <Link
                    href={punkt.href}
                    aria-current={pathname === punkt.href ? "page" : undefined}
                    className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 font-medium transition-colors hover:text-magenta-mork xl:px-3.5 ${
                      aktiv(pathname, punkt.href) ? "text-magenta-mork" : ""
                    }`}
                  >
                    {punkt.namn}
                    <Nedat className="size-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute top-full left-0 pt-2 opacity-0 transition-[opacity,translate] duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0">
                    <ul className="w-80 rounded-xl border border-black/10 bg-white p-2 shadow-[0_18px_40px_-20px_rgb(23_21_26/0.35)]">
                      {punkt.barn.map((u) => (
                        <li key={u.href}>
                          <Link
                            href={u.href}
                            aria-current={pathname === u.href ? "page" : undefined}
                            className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-papper"
                          >
                            <span className="block font-semibold">{u.namn}</span>
                            <span className="block text-sm leading-snug text-grafit">{u.pitch}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={punkt.href}>
                  <Link
                    href={punkt.href}
                    aria-current={aktiv(pathname, punkt.href) ? "page" : undefined}
                    className={`whitespace-nowrap rounded-full px-2.5 py-2 font-medium transition-colors hover:text-magenta-mork xl:px-3.5 ${
                      aktiv(pathname, punkt.href) ? "text-magenta-mork" : ""
                    }`}
                  >
                    {punkt.namn}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex xl:gap-5">
          <a
            href={foretag.telefonHref}
            className="siffror flex min-h-11 items-center justify-center gap-2 px-3 font-medium hover:text-magenta-mork xl:px-0 xl:text-base"
          >
            <Telefon className="size-5" />
            <span className="hidden xl:inline">{foretag.telefon}</span>
            <span className="sr-only xl:hidden">Ring {foretag.telefon}</span>
          </a>
          <a href={mejl(amnen.allmant)} className="knapp knapp-primar min-h-11 px-5">
            Kontakta oss
          </a>
        </div>

        <button
          ref={knapp}
          type="button"
          className="-mr-2 flex size-11 items-center justify-center rounded-full lg:hidden"
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
          className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-black/10 bg-papper lg:hidden"
        >
          <nav
            aria-label="Mobilmeny"
            className="px-5 pt-4 pb-10"
            onClick={(e) => {
              // Stäng menyn när en länk väljs (sidbyte eller mejl/telefon).
              if ((e.target as HTMLElement).closest("a")) setOppen(false);
            }}
          >
            <ul className="divide-y divide-black/10">
              {meny.map((punkt) => (
                <li key={punkt.href} className="py-1">
                  <Link
                    href={punkt.href}
                    aria-current={pathname === punkt.href ? "page" : undefined}
                    className="flex min-h-12 items-center justify-between text-2xl font-semibold tracking-tight"
                  >
                    {punkt.namn}
                    <Pil className="size-5 text-magenta" />
                  </Link>
                  {"barn" in punkt && (
                    <ul className="mb-3 ml-1 space-y-0.5 border-l border-black/15 pl-4">
                      {punkt.barn.map((u) => (
                        <li key={u.href}>
                          <Link
                            href={u.href}
                            aria-current={pathname === u.href ? "page" : undefined}
                            className="flex min-h-11 items-center text-lg"
                          >
                            {u.namn}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <a href={mejl(amnen.allmant)} className="knapp knapp-primar w-full">
                Kontakta oss
              </a>
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
