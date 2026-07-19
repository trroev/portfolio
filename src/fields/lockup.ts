import { deepMergeWithSourceArrays, type GroupField } from "payload";
import { linksField } from "./link";

/**
 * A content lockup: the common "eyebrow / heading / subheading / body / CTAs"
 * cluster that headers, heroes, and CTA bands are all built from. Only the
 * heading is required; everything else is optional so one shape serves every
 * block. `overrides` merge over the defaults (nested arrays replace).
 */
export function lockupField(overrides: Partial<GroupField> = {}): GroupField {
  return deepMergeWithSourceArrays<GroupField>(
    {
      fields: [
        {
          name: "eyebrow",
          type: "text",
        },
        {
          name: "heading",
          required: true,
          type: "text",
        },
        {
          name: "subheading",
          type: "textarea",
        },
        {
          name: "body",
          type: "richText",
        },
        linksField({ name: "ctas" }),
      ],
      name: "lockup",
      type: "group",
    },
    overrides
  );
}
