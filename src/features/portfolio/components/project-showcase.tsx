import { ButtonLink } from "~/components/button-link";
import { getProjects } from "~/features/portfolio/api/get-projects";
import { ProjectGrid } from "./project-grid";

const FEATURED_LIMIT = 3;

type ProjectShowcaseProps = {
  heading?: string | null;
  intro?: string | null;
  featuredOnly?: boolean | null;
  ctaLabel?: string | null;
};

export async function ProjectShowcase({
  heading,
  intro,
  featuredOnly,
  ctaLabel,
}: ProjectShowcaseProps) {
  const projects = await getProjects(
    featuredOnly ? { limit: FEATURED_LIMIT } : undefined
  );

  return (
    <section className="flex flex-col gap-6">
      {heading || intro || ctaLabel ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            {heading ? (
              <h2 className="font-display font-semibold text-2xl sm:text-3xl">
                {heading}
              </h2>
            ) : null}
            {intro ? (
              <p className="max-w-2xl text-text-muted">{intro}</p>
            ) : null}
          </div>
          {ctaLabel ? (
            <ButtonLink href="/portfolio" variant="secondary">
              {ctaLabel} →
            </ButtonLink>
          ) : null}
        </div>
      ) : null}
      <ProjectGrid projects={projects} />
    </section>
  );
}
