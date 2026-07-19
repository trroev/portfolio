import type { CollectionConfig } from "payload";
import { anyone } from "~/access/anyone";
import { authenticated } from "~/access/authenticated";

export const Media: CollectionConfig = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: "alt",
      required: true,
      type: "text",
    },
  ],
  slug: "media",
  upload: true,
};
