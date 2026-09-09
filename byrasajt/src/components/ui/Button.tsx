import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "gold" | "outline";
  children: ReactNode;
  className?: string;
};

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-7 " +
  "py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

const VARIANTS: Record<NonNullable<Props["variant"]>, string> = {
  // Dark text on gold - white on gold would fail WCAG contrast.
  gold:
    "bg-gradient-to-r from-gold to-gold-2 text-night shadow-lift " +
    "hover:brightness-110 hover:-translate-y-0.5",
  outline:
    "border border-line text-ink hover:border-gold-2 hover:text-gold-2",
};

/** Shared button. External links get target=_blank automatically. */
export default function Button({ href, variant = "gold", children, className = "" }: Props) {
  const external = href.startsWith("http");
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
