import type { GlobalConfig } from "payload";
import { anyone } from "~/access/anyone";
import { authenticated } from "~/access/authenticated";
import { linkField } from "~/fields/link";
import { revalidateChrome } from "./hooks/revalidate-layout";

export const Navigation: GlobalConfig = {
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: "Site chrome",
  },
  fields: [
    {
      fields: [
        {
          name: "label",
          required: true,
          type: "text",
        },
        {
          name: "page",
          relationTo: "pages",
          required: true,
          type: "relationship",
        },
      ],
      minRows: 1,
      name: "items",
      type: "array",
    },
    linkField({ label: "Call to action", name: "cta" }),
  ],
  hooks: {
    afterChange: [revalidateChrome],
  },
  slug: "navigation",
};
