import { deepMergeWithSourceArrays, type GroupField } from "payload";
import { linksField } from "./link";

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
