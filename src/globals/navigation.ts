import type { GlobalConfig } from "payload";
import { anyone } from "~/access/anyone";
import { authenticated } from "~/access/authenticated";
import { linkField } from "~/fields/link";
import { navItemsField } from "~/fields/nav-items";
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
    navItemsField({ minRows: 1 }),
    linkField({ label: "Call to action", name: "cta" }),
  ],
  hooks: {
    afterChange: [revalidateChrome],
  },
  slug: "navigation",
};
