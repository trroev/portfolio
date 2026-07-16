import type { CollectionConfig } from "payload";
import { authenticated } from "~/access/authenticated";

export const Admins: CollectionConfig = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "name",
      required: true,
      type: "text",
    },
  ],
  slug: "admins",
};
