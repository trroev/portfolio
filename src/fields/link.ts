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

/**
 * The subfields of a link: a label plus a target. A link points either at a
 * Page (so it follows slug changes rather than rotting) or at a file in the
 * Media collection rendered as a download (e.g. a resume). External URLs are
 * still out of scope until a real need appears (issue #23).
 *
 * Returned fresh per call rather than shared from a constant: because
 * `deepMergeWithSourceArrays` aliases array values by reference (it does not
 * clone them), a shared constant would leave every link field in the schema
 * pointing at the same mutable field objects, which Payload sanitizes in place.
 */
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

/**
 * A single link as a named group (a Page or a file download). Pass `overrides`
 * to rename it, mark it required, or add admin config; nested arrays in the
 * override replace the defaults (see `deepMergeWithSourceArrays`).
 */
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

/**
 * A repeatable list of links (zero or more), e.g. the calls-to-action of a
 * lockup. `overrides` tune the array (name, minRows, admin, …).
 */
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
