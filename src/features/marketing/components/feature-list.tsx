type FeatureListItem = {
  title: string;
  description: string;
};

type FeatureListProps = {
  heading?: string | null;
  items?: ReadonlyArray<FeatureListItem> | null;
};

export function FeatureList({ heading, items }: FeatureListProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-6">
      {heading ? (
        <h2 className="font-display font-semibold text-2xl sm:text-3xl">
          {heading}
        </h2>
      ) : null}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-6"
            key={item.title}
          >
            <h3 className="font-display font-semibold text-lg">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
