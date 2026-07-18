import type { Block } from "payload";
import { lockupField } from "~/fields/lockup";

export const PageIntroBlock: Block = {
  fields: [lockupField()],
  interfaceName: "PageIntroBlock",
  slug: "pageIntro",
};
