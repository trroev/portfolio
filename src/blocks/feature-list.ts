import type { Block } from "payload";
import { titledItems } from "~/fields/titled-items";

export const FeatureListBlock: Block = {
  fields: [
    {
      name: "heading",
      type: "text",
    },
    {
      name: "intro",
      type: "textarea",
    },
    titledItems(),
  ],
  interfaceName: "FeatureListBlock",
  slug: "featureList",
};
