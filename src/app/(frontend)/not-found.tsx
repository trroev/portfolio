import type { Metadata } from "next";
import { ButtonLink } from "~/components/button-link";
import { PageIntro } from "~/components/page-intro";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <PageIntro
        actions={
          <>
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              View portfolio
            </ButtonLink>
          </>
        }
        eyebrow="404"
        heading="Page not found"
        lead="The page you're looking for doesn't exist or has moved. Head back to the home page, or take a look at my work."
      />
    </div>
  );
}
