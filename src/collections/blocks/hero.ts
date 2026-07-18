import type { Block } from "payload";
import { lockupField } from "~/fields/lockup";

export const HeroBlock: Block = {
  fields: [lockupField()],
  interfaceName: "HeroBlock",
  slug: "hero",
};
