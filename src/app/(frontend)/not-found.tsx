import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "~/components/page-intro";
import { primaryButton, secondaryButton } from "~/lib/styles";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-20">
      <PageIntro
        actions={
          <>
            <Link className={primaryButton} href="/">
              Back to home
            </Link>
            <Link className={secondaryButton} href="/portfolio">
              View portfolio
            </Link>
          </>
        }
        eyebrow="404"
        heading="Page not found"
        lead="The page you're looking for doesn't exist or has moved. Head back to the home page, or take a look at my work."
      />
    </div>
  );
}
