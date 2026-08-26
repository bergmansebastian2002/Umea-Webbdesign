/**
 * Inline SVG brand mark + wordmark.
 *
 * The mark combines the two dots of the "Å" in Umeå with a birch-trunk /
 * pixel idea: two small squares above a rising shape, framed in a rounded
 * square with a gold gradient border.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        role="img"
        aria-label={compact ? "Umeå Webbdesign" : undefined}
        aria-hidden={compact ? undefined : true}
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-gold" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#c9a227" />
            <stop offset="1" stopColor="#e8c86a" />
          </linearGradient>
        </defs>
        {/* Rounded frame with gradient stroke */}
        <rect
          x="2" y="2" width="44" height="44" rx="12"
          fill="none" stroke="url(#logo-gold)" strokeWidth="2.5"
        />
        {/* The two Å-dots */}
        <rect x="15" y="11" width="6" height="6" rx="1.5" fill="url(#logo-gold)" />
        <rect x="27" y="11" width="6" height="6" rx="1.5" fill="url(#logo-gold)" />
        {/* Rising birch-trunk shape */}
        <path
          d="M15 37 L15 29 Q15 23 20 23 L28 23 Q33 23 33 28 L33 37 L27 37 L27 30 Q27 29 26 29 L22 29 Q21 29 21 30 L21 37 Z"
          fill="url(#logo-gold)"
        />
      </svg>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-lg tracking-tight text-ink">
            UMEÅ
          </span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.28em] text-mist">
            Webbdesign
          </span>
        </span>
      )}
    </span>
  );
}
