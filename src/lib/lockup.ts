import type { Cta } from "~/lib/cta";

export type Lockup = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  ctas?: ReadonlyArray<Cta>;
};
