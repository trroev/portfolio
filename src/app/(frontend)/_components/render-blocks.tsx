import Image from "next/image";
import { match } from "ts-pattern";
import { CtaBand } from "~/components/cta-band";
import { CtaButton } from "~/components/cta-button";
import { PageIntro } from "~/components/page-intro";
import { RichText } from "~/components/rich-text";
import { ContactForm } from "~/features/contact/components/contact-form";
import { FeatureList } from "~/features/marketing/components/feature-list";
import { HomeHero } from "~/features/marketing/components/home-hero";
import { Story } from "~/features/marketing/components/story";
import { ProjectShowcase } from "~/features/portfolio/components/project-showcase";
import { type ResolvedCta, resolveCta } from "~/lib/page-href";
import { resolveMedia } from "~/lib/resolve-media";
import type { HeroBlock, Page, StoryBlock } from "~/payload-types";

type Block = NonNullable<Page["layout"]>[number];
type Lockup = HeroBlock["lockup"];

function resolveCtas(ctas: Lockup["ctas"]): Array<ResolvedCta> {
  return (ctas ?? []).flatMap((cta) => {
    const resolved = resolveCta(cta);
    return resolved ? [resolved] : [];
  });
}

function StoryBlockView({ block }: { block: StoryBlock }) {
  const portrait = resolveMedia(block.portrait);

  return (
    <section className="flex flex-col gap-8 sm:flex-row sm:items-start">
      {portrait?.url ? (
        <div className="relative aspect-4/5 w-full max-w-xs shrink-0 overflow-hidden rounded-lg border border-border bg-surface">
          <Image
            alt={portrait.alt}
            className="object-cover"
            fill
            sizes="(min-width: 640px) 20rem, 100vw"
            src={portrait.url}
          />
        </div>
      ) : null}
      <Story data={block.content} />
    </section>
  );
}

function PageIntroBlockView({ lockup }: { lockup: Lockup }) {
  const ctas = resolveCtas(lockup.ctas);

  return (
    <>
      <PageIntro
        actions={
          ctas.length > 0
            ? ctas.map((cta) => (
                <CtaButton
                  download={cta.download}
                  href={cta.href}
                  key={cta.href}
                >
                  {cta.label}
                </CtaButton>
              ))
            : undefined
        }
        eyebrow={lockup.eyebrow}
        heading={lockup.heading}
        lead={lockup.subheading}
      />
      {lockup.body ? (
        <RichText className="mt-6 max-w-2xl" data={lockup.body} />
      ) : null}
    </>
  );
}

function renderBlock(block: Block) {
  return match(block)
    .with({ blockType: "hero" }, ({ lockup }) => (
      <HomeHero
        body={lockup.body}
        ctas={resolveCtas(lockup.ctas)}
        eyebrow={lockup.eyebrow}
        heading={lockup.heading}
        subheading={lockup.subheading}
      />
    ))
    .with({ blockType: "pageIntro" }, ({ lockup }) => (
      <PageIntroBlockView lockup={lockup} />
    ))
    .with({ blockType: "featureList" }, (b) => (
      <FeatureList heading={b.heading} intro={b.intro} items={b.items} />
    ))
    .with({ blockType: "projectShowcase" }, (b) => (
      <ProjectShowcase
        ctaLabel={b.ctaLabel}
        featuredOnly={b.featuredOnly}
        heading={b.heading}
        intro={b.intro}
      />
    ))
    .with({ blockType: "story" }, (b) => <StoryBlockView block={b} />)
    .with({ blockType: "ctaBand" }, ({ lockup }) => (
      <CtaBand
        body={lockup.body}
        ctas={resolveCtas(lockup.ctas)}
        eyebrow={lockup.eyebrow}
        heading={lockup.heading}
        subheading={lockup.subheading}
      />
    ))
    .with({ blockType: "contactForm" }, () => (
      <div className="mx-auto w-full max-w-2xl">
        <ContactForm />
      </div>
    ))
    .exhaustive();
}

type RenderBlocksProps = {
  blocks: Page["layout"];
};

export function RenderBlocks({ blocks }: RenderBlocksProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:gap-20 sm:py-20">
      {blocks.map((block, index) => (
        <div key={block.id ?? `${block.blockType}-${index}`}>
          {renderBlock(block)}
        </div>
      ))}
    </div>
  );
}
