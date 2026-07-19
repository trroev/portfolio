import type { GlobalConfig } from "payload";
import { anyone } from "~/access/anyone";
import { authenticated } from "~/access/authenticated";
import { revalidateChrome } from "./hooks/revalidate-layout";

export const Footer: GlobalConfig = {
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
      name: "items",
      type: "array",
    },
    {
      fields: [
        {
          name: "platform",
          options: [
            { label: "GitHub", value: "github" },
            { label: "LinkedIn", value: "linkedin" },
          ],
          required: true,
          type: "select",
        },
        {
          name: "url",
          required: true,
          type: "text",
        },
      ],
      name: "socialLinks",
      type: "array",
    },
  ],
  hooks: {
    afterChange: [revalidateChrome],
  },
  slug: "footer",
};
