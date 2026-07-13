import type { ArrayField } from "payload";

type TitledItem = {
  title: string;
  description: string;
};

type TitledItemsOptions = {
  name: string;
  defaultValue: ReadonlyArray<TitledItem>;
};

export function titledItems({
  name,
  defaultValue,
}: TitledItemsOptions): ArrayField {
  return {
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
    name,
    type: "array",
  };
}
