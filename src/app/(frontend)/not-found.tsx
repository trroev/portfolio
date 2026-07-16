import type { Metadata } from "next";
import Link from "next/link";
import { primaryButton, secondaryButton } from "~/lib/styles";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 py-16 sm:py-20">
      <p className="font-medium text-signature text-sm uppercase tracking-[0.2em]">
        404
      </p>
      <h1 className="text-balance font-display font-semibold text-4xl sm:text-5xl">
        Page not found
      </h1>
      <p className="text-balance text-lg text-muted">
        The page you're looking for doesn't exist or has moved. Head back to the
        home page, or take a look at my work.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <Link className={primaryButton} href="/">
          Back to home
        </Link>
        <Link className={secondaryButton} href="/portfolio">
          View portfolio
        </Link>
      </div>
    </div>
  );
}
