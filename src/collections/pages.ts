import { type CollectionConfig, slugField } from "payload";
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
    slugField(),
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
