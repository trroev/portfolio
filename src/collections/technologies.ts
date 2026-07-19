import type { CollectionConfig } from "payload";
import { anyone } from "~/access/anyone";
import { authenticated } from "~/access/authenticated";

export const Technologies: CollectionConfig = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "category"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      required: true,
      type: "text",
      unique: true,
    },
    {
      admin: {
        description: "Groups and orders the tech pills on project cards.",
        position: "sidebar",
      },
      name: "category",
      options: [
        { label: "Language", value: "language" },
        { label: "Framework", value: "framework" },
        { label: "Data", value: "data" },
        { label: "Tooling", value: "tooling" },
        { label: "Infrastructure", value: "infra" },
        { label: "Design", value: "design" },
      ],
      required: true,
      type: "select",
    },
  ],
  slug: "technologies",
};
