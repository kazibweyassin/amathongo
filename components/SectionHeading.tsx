export function SectionHeading({
  eyebrow,
  title,
  intro,
  as = "h2",
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h2" | "h3";
  id?: string;
}) {
  const Heading = as;
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">{eyebrow}</p>
      ) : null}
      <Heading id={id} className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">
        {title}
      </Heading>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-bark">{intro}</p> : null}
    </div>
  );
}
