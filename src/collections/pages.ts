import type { CollectionConfig } from "payload";
import { authenticated } from "~/access/authenticated";
import { authenticatedOrPublished } from "~/access/authenticated-or-published";
import { ContactFormBlock } from "~/blocks/contact-form";
import { CtaBandBlock } from "~/blocks/cta-band";
import { FeatureListBlock } from "~/blocks/feature-list";
import { HeroBlock } from "~/blocks/hero";
import { PageIntroBlock } from "~/blocks/page-intro";
import { ProjectShowcaseBlock } from "~/blocks/project-showcase";
import { StoryBlock } from "~/blocks/story";
import { revalidatePage } from "./hooks/revalidate-page";

export const Pages: CollectionConfig = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    readVersions: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["title", "slug", "_status"],
    group: "Content",
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      required: true,
      type: "text",
    },
    {
      admin: {
        description:
          'URL path for the page. The home page uses the "home" slug and renders at /.',
        position: "sidebar",
      },
      index: true,
      name: "slug",
      required: true,
      type: "text",
      unique: true,
    },
    {
      blocks: [
        HeroBlock,
        PageIntroBlock,
        FeatureListBlock,
        ProjectShowcaseBlock,
        StoryBlock,
        CtaBandBlock,
        ContactFormBlock,
      ],
      name: "layout",
      type: "blocks",
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
  slug: "pages",
  versions: {
    drafts: true,
  },
};
