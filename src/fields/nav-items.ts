import { type ArrayField, deepMergeWithSourceArrays } from "payload";

export function navItemsField(overrides: Partial<ArrayField> = {}): ArrayField {
  return deepMergeWithSourceArrays<ArrayField>(
    {
      fields: [
        {
          name: "label",
          required: true,
          type: "text",
        },
        {
          name: "page",
          relationTo: "pages",
          required: true,
          type: "relationship",
        },
      ],
      name: "items",
      type: "array",
    },
    overrides
  );
}
