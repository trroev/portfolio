import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { getHome } from "~/features/marketing/api/get-home";
import { FeatureList } from "~/features/marketing/components/feature-list";
import { HomeHero } from "~/features/marketing/components/home-hero";
import { getProjects } from "~/features/portfolio/api/get-projects";
import { ProjectGrid } from "~/features/portfolio/components/project-grid";
import { pageMetadata } from "~/lib/metadata";
import { secondaryButton } from "~/lib/styles";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const home = await getHome();
  return pageMetadata({
    description: home.hero.subheading ?? siteConfig.description,
    path: "/",
  });
}

export default async function HomePage() {
  const [home, projects] = await Promise.all([
    getHome(),
    getProjects({ limit: 3 }),
  ]);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-20">
      <HomeHero
        eyebrow={home.hero.eyebrow}
        heading={home.hero.heading}
        primaryCtaLabel={home.hero.primaryCtaLabel}
        secondaryCtaLabel={home.hero.secondaryCtaLabel}
        subheading={home.hero.subheading}
      />

      <div className="flex flex-col gap-20">
        {home.valueProp ? (
          <div className="flex flex-col gap-6">
            {home.valueProp.heading ? (
              <h2 className="text-balance font-display font-semibold text-3xl">
                {home.valueProp.heading}
              </h2>
            ) : null}
            {home.valueProp.intro ? (
              <p className="max-w-2xl text-balance text-lg text-muted">
                {home.valueProp.intro}
              </p>
            ) : null}
            <FeatureList items={home.valueProp.points} />
          </div>
        ) : null}

        <section className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              {home.featuredWork?.heading ? (
                <h2 className="font-display font-semibold text-3xl">
                  {home.featuredWork.heading}
                </h2>
              ) : null}
              {home.featuredWork?.intro ? (
                <p className="max-w-2xl text-muted">
                  {home.featuredWork.intro}
                </p>
              ) : null}
            </div>
            <Link className={secondaryButton} href="/portfolio">
              {home.featuredWork?.ctaLabel ?? "View portfolio"} →
            </Link>
          </div>
          <ProjectGrid projects={projects} />
        </section>
      </div>
    </div>
  );
}
