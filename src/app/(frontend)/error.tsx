"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PageIntro } from "~/components/page-intro";
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
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <PageIntro
        actions={
          <>
            <button className={primaryButton} onClick={reset} type="button">
              Try again
            </button>
            <Link className={secondaryButton} href="/">
              Back to home
            </Link>
          </>
        }
        eyebrow="Error"
        heading="Something went wrong"
        lead="Sorry about that — an unexpected error kept this page from loading. Try again, or head back to the home page."
      />
    </div>
  );
}
