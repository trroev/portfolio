import Link from "next/link";
import { primaryButton, secondaryButton } from "~/lib/styles";

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <p className="font-medium text-muted text-sm uppercase tracking-[0.2em]">
        trroev development
      </p>
      <h1 className="text-balance font-display font-semibold text-4xl sm:text-display">
        I'm Trevor Mathiak
        <span className="text-signature">.</span>
      </h1>
      <p className="max-w-xl text-balance text-lg text-muted">
        A full-stack developer building clean, professional web experiences. The
        new site is on its way.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <Link className={primaryButton} href="/contact">
          Get in touch
        </Link>
        <Link className={secondaryButton} href="/portfolio">
          View portfolio →
        </Link>
      </div>
    </section>
  );
}
