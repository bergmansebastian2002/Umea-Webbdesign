type Props = {
  kicker?: string;
  title: string;
  intro?: string;
  centered?: boolean;
  /** Render as the page's h1 - use on subpage top sections. */
  asH1?: boolean;
  id?: string;
};

/** Consistent heading block for every section. */
export default function SectionHeading({
  kicker,
  title,
  intro,
  centered = false,
  asH1 = false,
  id,
}: Props) {
  const Tag = asH1 ? "h1" : "h2";
  return (
    <header className={`reveal mb-12 max-w-2xl md:mb-16 ${centered ? "mx-auto text-center" : ""}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <Tag id={id} className="mt-4 text-[length:var(--text-title)] leading-[1.12]">
        {title}
      </Tag>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">{intro}</p>
      )}
    </header>
  );
}
