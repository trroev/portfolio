"use client";

import { useEffect } from "react";
import { Button } from "~/components/button";
import { ButtonLink } from "~/components/button-link";
import { PageIntro } from "~/components/page-intro";

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
            <Button onClick={reset} type="button">
              Try again
            </Button>
            <ButtonLink href="/" variant="secondary">
              Back to home
            </ButtonLink>
          </>
        }
        eyebrow="Error"
        heading="Something went wrong"
        lead="Sorry about that — an unexpected error kept this page from loading. Try again, or head back to the home page."
      />
    </div>
  );
}
