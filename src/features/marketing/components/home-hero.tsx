import Link from "next/link";
import { primaryButton, secondaryButton } from "~/lib/styles";

type HomeHeroProps = {
  eyebrow?: string | null;
  heading: string;
  subheading?: string | null;
  primaryCtaLabel?: string | null;
  secondaryCtaLabel?: string | null;
};

export function HomeHero({
  eyebrow,
  heading,
  subheading,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HomeHeroProps) {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center sm:py-28">
      {eyebrow ? (
        <p className="font-medium text-muted text-sm uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance font-display font-semibold text-4xl sm:text-display">
        {heading}
        <span className="text-signature">.</span>
      </h1>
      {subheading ? (
        <p className="max-w-xl text-balance text-lg text-muted">{subheading}</p>
      ) : null}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        {primaryCtaLabel ? (
          <Link className={primaryButton} href="/contact">
            {primaryCtaLabel}
          </Link>
        ) : null}
        {secondaryCtaLabel ? (
          <Link className={secondaryButton} href="/portfolio">
            {secondaryCtaLabel} →
          </Link>
        ) : null}
      </div>
    </section>
  );
}
