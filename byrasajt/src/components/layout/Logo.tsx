/**
 * Inline SVG brand mark + wordmark.
 *
 * The mark is a birch leaf (björklöv) drawn in line style, tilted 45° with
 * midrib and veins, framed in a rounded square with a gold gradient stroke.
 * The leaf geometry is the designed logo-2-bjorklov.svg rotated and scaled
 * into a 48×48 viewBox as static paths, so the same shape can be reused in
 * renderers without SVG transform support (og-image, apple-icon).
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
          x="2" y="2" width="44" height="44" rx="10"
          fill="none" stroke="url(#logo-gold)" strokeWidth="2.5"
        />
        {/* Birch leaf: outline, midrib and two vein pairs */}
        <g fill="none" stroke="url(#logo-gold)" strokeLinecap="round">
          <path
            d="M14.8 14.8 C24 12.7 35.3 24 33.2 33.2 C24 35.3 12.7 24 14.8 14.8 Z"
            strokeWidth="2"
          />
          <path d="M15.5 15.5 L33.2 33.2" strokeWidth="1.2" />
          <path d="M21.2 21.2 L21.5 15.2" strokeWidth="1" />
          <path d="M21.2 21.2 L15.2 21.5" strokeWidth="1" />
          <path d="M24.7 24.7 L25.4 18.3" strokeWidth="1" />
          <path d="M24.7 24.7 L18.3 25.4" strokeWidth="1" />
        </g>
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
