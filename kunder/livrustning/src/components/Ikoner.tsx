/**
 * Egna ikoner i en och samma stil: 24-rutnät, 1.75 streck, rundade ändar.
 * Hjärtslaget är loggans EKG-slag i miniatyr.
 */
type P = { className?: string };

const bas = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function Pil({ className = "" }: P) {
  return (
    <svg {...bas} className={`pil ${className}`}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Telefon({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="M5 4h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16 16 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z" />
    </svg>
  );
}

export function Kuvert({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Slag({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="M2 13h5l1.5-3 2.5 8 3-14 2.5 9H22" />
    </svg>
  );
}

export function Plats({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function Flamma({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="M12 21a6 6 0 0 0 6-6c0-3.5-2.5-5.5-3.5-8.5-.9 1.8-2 2.8-3.3 3.3C11 7.5 10 5 8 3c.4 3-2 5.6-2 9.8A6.2 6.2 0 0 0 12 21Z" />
      <path d="M12 21a2.5 2.5 0 0 1-2.5-2.5c0-1.6 1.4-2.4 2.5-4 1.1 1.6 2.5 2.4 2.5 4A2.5 2.5 0 0 1 12 21Z" />
    </svg>
  );
}

export function Klocka({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Grupp({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9.5" r="2.4" />
      <path d="M16 14.2a4.5 4.5 0 0 1 5 4.8" />
    </svg>
  );
}

export function Kalender({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function Intyg({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="M6 3h9l4 4v14H6Z" />
      <path d="M14 3v5h5M9 12h6M9 16h4" />
    </svg>
  );
}

export function Meny({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Kryss({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Nedat({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function Facebook({ className = "" }: P) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4a20 20 0 0 0-2.2-.1c-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21Z" />
    </svg>
  );
}

export function Instagram({ className = "" }: P) {
  return (
    <svg {...bas} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
