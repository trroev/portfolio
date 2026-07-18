import { type ArrayField, deepMergeWithSourceArrays } from "payload";

type TitledItem = {
  title: string;
  description: string;
};

type TitledItemsOptions = {
  defaultValue?: ReadonlyArray<TitledItem>;
  overrides?: Partial<ArrayField>;
};

/**
 * A repeatable list of title + description items — the shape behind value
 * props, values, how-I-work, capabilities, and approach sections. `overrides`
 * merge over the defaults (nested arrays replace).
 */
export function titledItems({
  defaultValue = [],
  overrides = {},
}: TitledItemsOptions = {}): ArrayField {
  return deepMergeWithSourceArrays<ArrayField>(
    {
      defaultValue: [...defaultValue],
      fields: [
        {
          name: "title",
          required: true,
          type: "text",
        },
        {
          name: "description",
          required: true,
          type: "textarea",
        },
      ],
      name: "items",
      type: "array",
    },
    overrides
  );
}
