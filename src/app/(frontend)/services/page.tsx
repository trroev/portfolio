import type { Metadata } from "next";
import { siteConfig } from "~/config/site";
import { getServices } from "~/features/marketing/api/get-services";
import { CtaBand } from "~/features/marketing/components/cta-band";
import { FeatureList } from "~/features/marketing/components/feature-list";
import { PageIntro } from "~/features/marketing/components/page-intro";
import { pageMetadata } from "~/lib/metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const services = await getServices();
  return pageMetadata({
    description: services.intro ?? siteConfig.description,
    path: "/services",
    title: "Services",
  });
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <PageIntro
        eyebrow={services.eyebrow}
        heading={services.heading}
        lead={services.intro}
      />

      <div className="mt-12 flex flex-col gap-20">
        <FeatureList
          heading={services.capabilities?.heading}
          items={services.capabilities?.items}
        />
        <FeatureList
          heading={services.approach?.heading}
          items={services.approach?.items}
        />
        <CtaBand
          body={services.cta?.body}
          ctaLabel={services.cta?.ctaLabel}
          heading={services.cta?.heading}
        />
      </div>
    </div>
  );
}
