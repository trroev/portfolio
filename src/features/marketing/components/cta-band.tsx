import Link from "next/link";
import { primaryButton } from "~/lib/styles";

type CtaBandProps = {
  heading?: string | null;
  body?: string | null;
  ctaLabel?: string | null;
};

export function CtaBand({ heading, body, ctaLabel }: CtaBandProps) {
  return (
    <section className="flex flex-col items-center gap-4 rounded-lg border border-border bg-surface px-6 py-10 text-center">
      {heading ? (
        <h2 className="text-balance font-display font-semibold text-2xl">
          {heading}
        </h2>
      ) : null}
      {body ? <p className="max-w-xl text-balance text-muted">{body}</p> : null}
      {ctaLabel ? (
        <Link className={primaryButton} href="/contact">
          {ctaLabel}
        </Link>
      ) : null}
    </section>
  );
}
