import {
  type ArrayField,
  deepMergeWithSourceArrays,
  type Field,
  type GroupField,
  type UploadFieldSingleValidation,
} from "payload";

const validateDownloadFile: UploadFieldSingleValidation = (
  value,
  { siblingData }
) =>
  (siblingData as { type?: string } | undefined)?.type === "download" && !value
    ? "Add a file to download."
    : true;

function linkFields(): Array<Field> {
  return [
    {
      admin: {
        layout: "horizontal",
      },
      defaultValue: "page",
      name: "type",
      options: [
        { label: "Page", value: "page" },
        { label: "File download", value: "download" },
      ],
      type: "radio",
    },
    {
      name: "label",
      type: "text",
    },
    {
      admin: {
        condition: (_, siblingData) => siblingData?.type !== "download",
      },
      name: "page",
      relationTo: "pages",
      type: "relationship",
    },
    {
      admin: {
        condition: (_, siblingData) => siblingData?.type === "download",
        description: "A file in the Media collection, offered as a download.",
      },
      name: "file",
      relationTo: "media",
      type: "upload",
      validate: validateDownloadFile,
    },
  ];
}

export function linkField(overrides: Partial<GroupField> = {}): GroupField {
  return deepMergeWithSourceArrays<GroupField>(
    {
      fields: linkFields(),
      name: "link",
      type: "group",
    },
    overrides
  );
}

export function linksField(overrides: Partial<ArrayField> = {}): ArrayField {
  return deepMergeWithSourceArrays<ArrayField>(
    {
      fields: linkFields(),
      name: "links",
      type: "array",
    },
    overrides
  );
}
