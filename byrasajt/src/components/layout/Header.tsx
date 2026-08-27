"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { company, navLinks } from "@/data/site";
import Logo from "@/components/layout/Logo";

/**
 * Sticky header: transparent at the top, gains blur + hairline after 40px.
 * On mobile the hamburger opens a full-screen overlay with large type.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-night/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#innehall"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-gold focus:px-4 focus:py-2 focus:text-night"
      >
        Hoppa till innehållet
      </a>

      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Umeå Webbdesign - till startsidan">
          <Logo />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-mist transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobilmeny"
          className="-mr-2 flex h-11 w-11 items-center justify-center xl:hidden"
        >
          <span className="sr-only">{open ? "Stäng meny" : "Öppna meny"}</span>
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1/2 h-px w-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${open ? "top-1/2 -rotate-45" : "top-full"}`} />
          </span>
        </button>
      </div>

      {/* Full-screen mobile overlay. Positioned with absolute + explicit
          height instead of fixed: the header's backdrop-filter makes it the
          containing block for fixed descendants, which collapsed the old
          fixed overlay to zero height. */}
      <div
        id="mobilmeny"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-5rem)] overflow-y-auto bg-night/95 backdrop-blur-md xl:hidden"
      >
        <nav aria-label="Mobilmeny" className="wrap flex min-h-full flex-col py-10">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-heading text-3xl text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10 text-sm text-mist">
            <a href={`tel:${company.phoneHref}`} className="block py-1 hover:text-ink">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="block py-1 hover:text-ink">
              {company.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
