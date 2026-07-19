import type { Block } from "payload";

export const StoryBlock: Block = {
  fields: [
    {
      name: "content",
      required: true,
      type: "richText",
    },
    {
      name: "portrait",
      relationTo: "media",
      type: "upload",
    },
  ],
  interfaceName: "StoryBlock",
  slug: "story",
};
