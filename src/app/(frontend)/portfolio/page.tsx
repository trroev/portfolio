import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { getProjects } from "~/features/portfolio/api/get-projects";
import { ProjectGrid } from "~/features/portfolio/components/project-grid";
import { primaryButton, secondaryButton } from "~/lib/styles";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <header className="flex flex-col gap-4">
        <p className="font-medium text-signature text-sm uppercase tracking-[0.2em]">
          Portfolio
        </p>
        <h1 className="text-balance font-display font-semibold text-4xl sm:text-5xl">
          Selected work
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted">
          A curated set of projects I've designed and built. Each links out to a
          live site or its source — take a look, then grab my resume.
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <a className={primaryButton} download href={siteConfig.resumePath}>
            Download resume
          </a>
          <Link className={secondaryButton} href="/contact">
            Get in touch
          </Link>
        </div>
      </header>

      <section className="mt-12">
        <ProjectGrid projects={projects} />
      </section>

      <section className="mt-16 flex flex-col items-center gap-4 rounded-lg border border-border bg-surface px-6 py-10 text-center">
        <h2 className="text-balance font-display font-semibold text-2xl">
          Looking for a developer?
        </h2>
        <p className="max-w-xl text-balance text-muted">
          I'm open to new opportunities. Reach out and I'll get back to you.
        </p>
        <Link className={primaryButton} href="/contact">
          Get in touch
        </Link>
      </section>
    </div>
  );
}
