import { ButtonLink } from "~/components/button-link";
import { RichText } from "~/components/rich-text";
import type { HeroBlock } from "~/payload-types";

type Lockup = HeroBlock["lockup"];
type ResolvedCta = {
  label: string;
  href: string;
};

type HomeHeroProps = {
  eyebrow?: string | null;
  heading: string;
  subheading?: string | null;
  body?: Lockup["body"];
  ctas: ReadonlyArray<ResolvedCta>;
};

export function HomeHero({
  eyebrow,
  heading,
  subheading,
  body,
  ctas,
}: HomeHeroProps) {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
      {eyebrow ? (
        <p className="font-medium text-sm text-text-muted uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance font-display font-semibold text-4xl sm:text-display">
        {heading}
        <span className="text-accent">.</span>
      </h1>
      {subheading ? (
        <p className="max-w-xl text-balance text-lg text-text-muted">
          {subheading}
        </p>
      ) : null}
      {body ? <RichText className="max-w-xl text-center" data={body} /> : null}
      {ctas.length > 0 ? (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {ctas.map((cta, index) =>
            index === 0 ? (
              <ButtonLink href={cta.href} key={cta.href}>
                {cta.label}
              </ButtonLink>
            ) : (
              <ButtonLink href={cta.href} key={cta.href} variant="secondary">
                {cta.label} →
              </ButtonLink>
            )
          )}
        </div>
      ) : null}
    </section>
  );
}
