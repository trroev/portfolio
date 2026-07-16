import type { Metadata } from "next";
import { ButtonLink } from "~/components/button-link";
import { CtaBand } from "~/components/cta-band";
import { PageIntro } from "~/components/page-intro";
import { siteConfig } from "~/config/site";
import { getProjects } from "~/features/portfolio/api/get-projects";
import { ProjectGrid } from "~/features/portfolio/components/project-grid";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <PageIntro
        actions={
          <>
            <ButtonLink download href={siteConfig.resumePath}>
              Download resume
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </>
        }
        eyebrow="Portfolio"
        heading="Selected work"
        lead="A curated set of projects I've designed and built. Each links out to a live site or its source — take a look, then grab my resume."
      />

      <section className="mt-12">
        <ProjectGrid projects={projects} />
      </section>

      <div className="mt-16">
        <CtaBand
          body="I'm open to new opportunities. Reach out and I'll get back to you."
          ctaLabel="Get in touch"
          heading="Looking for a developer?"
        />
      </div>
    </div>
  );
}
