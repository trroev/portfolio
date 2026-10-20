export const TECHNOLOGY_CATEGORIES = [
  "language",
  "framework",
  "data",
  "tooling",
  "infra",
  "design",
] as const;

type Categorised = {
  category: (typeof TECHNOLOGY_CATEGORIES)[number];
};

export function compareByCategory(a: Categorised, b: Categorised): number {
  return (
    TECHNOLOGY_CATEGORIES.indexOf(a.category) -
    TECHNOLOGY_CATEGORIES.indexOf(b.category)
  );
}
