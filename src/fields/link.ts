import {
  type ArrayField,
  deepMergeWithSourceArrays,
  type Field,
  type GroupField,
} from "payload";

/**
 * The subfields of a link: a label plus a relationship to a Page, so links
 * follow slug changes rather than rotting. Internal pages only — external
 * URLs are out of scope until a real need appears (issue #23).
 *
 * Returned fresh per call rather than shared from a constant: because
 * `deepMergeWithSourceArrays` aliases array values by reference (it does not
 * clone them), a shared constant would leave every link field in the schema
 * pointing at the same mutable field objects, which Payload sanitizes in place.
 */
function linkFields(): Array<Field> {
  return [
    {
      name: "label",
      type: "text",
    },
    {
      name: "page",
      relationTo: "pages",
      type: "relationship",
    },
  ];
}

/**
 * A single Page link as a named group. Pass `overrides` to rename it, mark it
 * required, or add admin config; nested arrays in the override replace the
 * defaults (see `deepMergeWithSourceArrays`).
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
 * A repeatable list of Page links (zero or more), e.g. the calls-to-action of
 * a lockup. `overrides` tune the array (name, minRows, admin, …).
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
