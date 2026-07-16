"use client";

import Link from "next/link";
import { useEffect } from "react";
import { primaryButton, secondaryButton } from "~/lib/styles";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 py-16 sm:py-20">
      <p className="font-medium text-signature text-sm uppercase tracking-[0.2em]">
        Error
      </p>
      <h1 className="text-balance font-display font-semibold text-4xl sm:text-5xl">
        Something went wrong
      </h1>
      <p className="text-balance text-lg text-muted">
        Sorry about that — an unexpected error kept this page from loading. Try
        again, or head back to the home page.
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button className={primaryButton} onClick={reset} type="button">
          Try again
        </button>
        <Link className={secondaryButton} href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}
