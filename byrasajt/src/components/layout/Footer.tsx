import Link from "next/link";

import { company, navLinks } from "@/data/site";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Webbyrå i Umeå som designar och bygger snabba, moderna hemsidor
              för företag i hela Sverige.
            </p>
          </div>

          <nav aria-label="Sidfotsmeny">
            <p className="kicker">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-mist hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="kicker">Kontakt</p>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed">
              <a href={`mailto:${company.email}`} className="block text-mist hover:text-ink">
                {company.email}
              </a>
              <a href={`tel:${company.phoneHref}`} className="block text-mist hover:text-ink">
                {company.phone}
              </a>
              <span className="block text-mist">
                {company.city}, {company.country}
              </span>
              <span className="block text-mist">{company.responseTime}</span>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {company.name}. {company.orgDetails}
          </p>
          <nav aria-label="Juridiska länkar" className="flex gap-6">
            <Link href="/integritetspolicy" className="hover:text-ink">
              Integritetspolicy
            </Link>
            <Link href="/din-data" className="hover:text-ink">
              Datahantering och GDPR
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
