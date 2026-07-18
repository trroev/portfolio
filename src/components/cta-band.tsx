import { ButtonLink } from "~/components/button-link";
import { RichText } from "~/components/rich-text";
import type { CtaBandBlock } from "~/payload-types";

type Lockup = CtaBandBlock["lockup"];
type ResolvedCta = {
  label: string;
  href: string;
};

type CtaBandProps = {
  eyebrow?: string | null;
  heading: string;
  subheading?: string | null;
  body?: Lockup["body"];
  ctas: ReadonlyArray<ResolvedCta>;
};

export function CtaBand({
  eyebrow,
  heading,
  subheading,
  body,
  ctas,
}: CtaBandProps) {
  return (
    <section className="flex flex-col items-center gap-4 rounded-lg border border-border bg-surface px-6 py-10 text-center">
      {eyebrow ? (
        <p className="font-medium text-accent text-sm uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display font-semibold text-2xl">
        {heading}
      </h2>
      {subheading ? (
        <p className="max-w-xl text-balance text-text-muted">{subheading}</p>
      ) : null}
      {body ? <RichText className="max-w-xl text-center" data={body} /> : null}
      {ctas.length > 0 ? (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {ctas.map((cta) => (
            <ButtonLink href={cta.href} key={cta.href}>
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      ) : null}
    </section>
  );
}
