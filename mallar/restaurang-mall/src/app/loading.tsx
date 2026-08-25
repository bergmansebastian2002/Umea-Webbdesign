/** Visas medan en sida laddar. Diskret - de flesta sidor är statiska och snabba. */
export default function Laddar() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center" role="status">
      <span className="sr-only">Sidan laddar</span>
      <span
        aria-hidden="true"
        className="h-8 w-8 animate-spin rounded-full border-2 border-ram border-t-accent"
      />
    </div>
  );
}
