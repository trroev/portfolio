import type { Block } from "payload";
import { lockupField } from "~/fields/lockup";

export const CtaBandBlock: Block = {
  fields: [lockupField()],
  interfaceName: "CtaBandBlock",
  slug: "ctaBand",
};
