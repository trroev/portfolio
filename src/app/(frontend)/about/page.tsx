import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "~/config/site";
import { getAbout } from "~/features/marketing/api/get-about";
import { FeatureList } from "~/features/marketing/components/feature-list";
import { PageIntro } from "~/features/marketing/components/page-intro";
import { Story } from "~/features/marketing/components/story";
import { pageMetadata } from "~/lib/metadata";
import type { About, Media } from "~/payload-types";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAbout();
  return pageMetadata({
    description: about.lead ?? siteConfig.description,
    path: "/about",
    title: "About",
  });
}

function resolvePortrait(portrait: About["portrait"]): Media | null {
  return typeof portrait === "object" ? portrait : null;
}

export default async function AboutPage() {
  const about = await getAbout();
  const portrait = resolvePortrait(about.portrait);

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
      <PageIntro
        eyebrow={about.eyebrow}
        heading={about.heading}
        lead={about.lead}
      />

      <div className="mt-12 flex flex-col gap-20">
        <section className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {portrait?.url ? (
            <div className="relative aspect-[4/5] w-full max-w-xs shrink-0 overflow-hidden rounded-lg border border-border bg-surface">
              <Image
                alt={portrait.alt}
                className="object-cover"
                fill
                sizes="(min-width: 640px) 20rem, 100vw"
                src={portrait.url}
              />
            </div>
          ) : null}
          {about.story ? <Story data={about.story} /> : null}
        </section>

        <FeatureList
          heading={about.values?.heading}
          items={about.values?.items}
        />
        <FeatureList
          heading={about.howIWork?.heading}
          items={about.howIWork?.items}
        />
      </div>
    </div>
  );
}
