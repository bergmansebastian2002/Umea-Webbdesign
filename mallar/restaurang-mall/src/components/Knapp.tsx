import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "fylld" | "kontur" | "ljus";

const bas =
  "inline-flex items-center justify-center gap-2 rounded-mall px-7 py-3.5 " +
  "text-sm font-medium tracking-wide transition-all duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-3";

const varianter: Record<Variant, string> = {
  fylld:
    "bg-accent text-accent-text hover:brightness-110 hover:-translate-y-0.5 " +
    "shadow-knapp",
  kontur:
    "border border-ram text-text hover:border-accent hover:text-accent",
  ljus:
    "border border-white/35 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/70",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Sätts automatiskt för länkar till andra webbplatser. */
  extern?: boolean;
  className?: string;
  ariaLabel?: string;
  /** Spårningsetikett för analys: "boka" eller "ring". */
  spar?: "boka" | "ring";
};

/** Knapp som renderas som länk. Använd `variant` för att byta utseende. */
export default function Knapp({
  href,
  children,
  variant = "fylld",
  extern,
  className = "",
  ariaLabel,
  spar,
}: Props) {
  const klasser = `${bas} ${varianter[variant]} ${className}`;
  const arExtern = extern ?? /^https?:\/\//.test(href);

  if (arExtern) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={klasser}
        aria-label={ariaLabel}
        data-spar={spar}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={klasser} aria-label={ariaLabel} data-spar={spar}>
      {children}
    </Link>
  );
}
