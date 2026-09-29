import Link from "next/link";

import Logotyp from "@/components/Logotyp";
import { foretag } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-tavla text-tavla-text">
      <div className="mx-auto max-w-5xl px-5 pt-14 pb-10 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-2xl">
              <Logotyp botten="mork" />
            </p>
            <address className="mt-5 space-y-1 text-tavla-dampad not-italic">
              <p>
                {foretag.gata}, {foretag.postnummer} {foretag.ort}
              </p>
              <p>
                <a
                  href={foretag.telefonLank}
                  className="inline-flex min-h-11 items-center font-semibold text-tavla-text hover:underline"
                >
                  {foretag.telefon}
                </a>
              </p>
            </address>
          </div>

          <a
            href={foretag.facebook}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center gap-2.5 self-start rounded-full border border-tavla-linje px-5 font-medium transition-colors hover:border-rosa-neon hover:text-rosa-neon"
            aria-label="Din Frisör på Facebook (öppnas i ny flik)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
              <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
            </svg>
            Följ oss på Facebook
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-tavla-linje pt-6 text-sm text-tavla-dampad sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {foretag.namn}, {foretag.ort}
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href="/integritetspolicy" className="inline-flex min-h-11 items-center hover:text-tavla-text hover:underline">
              Integritetspolicy
            </Link>
            <span>
              Hemsida av{" "}
              <a
                href="https://umea-webbdesign.vercel.app"
                target="_blank"
                rel="noopener"
                className="hover:text-tavla-text hover:underline"
              >
                Umeå Webbdesign
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
