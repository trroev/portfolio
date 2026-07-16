import type { GlobalConfig } from "payload";
import { authenticated } from "~/access/authenticated";
import { authenticatedOrPublished } from "~/access/authenticated-or-published";
import { titledItems } from "./fields";
import { revalidateGlobalPath } from "./hooks/revalidate";

export const Home: GlobalConfig = {
  access: {
    read: authenticatedOrPublished,
    readVersions: authenticated,
    update: authenticated,
  },
  admin: {
    group: "Page content",
  },
  fields: [
    {
      fields: [
        {
          defaultValue: "trroev development",
          name: "eyebrow",
          type: "text",
        },
        {
          defaultValue: "I'm Trevor Mathiak",
          name: "heading",
          required: true,
          type: "text",
        },
        {
          defaultValue:
            "A full-stack developer building clean, professional web experiences — from marketing sites to CMS-backed applications.",
          name: "subheading",
          type: "textarea",
        },
        {
          defaultValue: "Get in touch",
          name: "primaryCtaLabel",
          type: "text",
        },
        {
          defaultValue: "View portfolio",
          name: "secondaryCtaLabel",
          type: "text",
        },
      ],
      label: "Hero",
      name: "hero",
      type: "group",
    },
    {
      fields: [
        {
          defaultValue: "What I bring",
          name: "heading",
          type: "text",
        },
        {
          defaultValue:
            "I design and build the whole stack, so the details line up — from the data model to the last pixel.",
          name: "intro",
          type: "textarea",
        },
        titledItems({
          defaultValue: [
            {
              description:
                "Fast, accessible, responsive interfaces built with React and modern tooling.",
              title: "Front to back",
            },
            {
              description:
                "APIs, databases, and content models that hold up as a project grows.",
              title: "Solid foundations",
            },
            {
              description:
                "Clean, maintainable code and a professional finish on every detail.",
              title: "Built to last",
            },
          ],
          name: "points",
        }),
      ],
      label: "Value proposition",
      name: "valueProp",
      type: "group",
    },
    {
      fields: [
        {
          defaultValue: "Selected work",
          name: "heading",
          type: "text",
        },
        {
          defaultValue:
            "A few projects I've designed and built. See the full set on the portfolio.",
          name: "intro",
          type: "textarea",
        },
        {
          defaultValue: "View portfolio",
          name: "ctaLabel",
          type: "text",
        },
      ],
      label: "Featured work",
      name: "featuredWork",
      type: "group",
    },
  ],
  hooks: {
    afterChange: [revalidateGlobalPath("/")],
  },
  slug: "home",
  versions: {
    drafts: true,
  },
};
