import type { Block } from "payload";

export const ProjectShowcaseBlock: Block = {
  fields: [
    {
      name: "heading",
      type: "text",
    },
    {
      name: "intro",
      type: "textarea",
    },
    {
      admin: {
        description:
          "Show only a featured subset (the first few by order) instead of every project.",
      },
      defaultValue: false,
      name: "featuredOnly",
      type: "checkbox",
    },
    {
      name: "ctaLabel",
      type: "text",
    },
  ],
  interfaceName: "ProjectShowcaseBlock",
  slug: "projectShowcase",
};
