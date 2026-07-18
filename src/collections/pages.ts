import type { CollectionConfig } from "payload";
import { authenticated } from "~/access/authenticated";
import { authenticatedOrPublished } from "~/access/authenticated-or-published";
import { blocksField } from "~/fields/blocks";
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
    blocksField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
  },
  slug: "pages",
  versions: {
    drafts: true,
  },
};
