import type { Metadata } from "next";
import { CtaBand } from "~/components/cta-band";
import { PageIntro } from "~/components/page-intro";
import { siteConfig } from "~/config/site";
import { getServices } from "~/features/marketing/api/get-services";
import { FeatureList } from "~/features/marketing/components/feature-list";
import { pageMetadata } from "~/lib/metadata";

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
