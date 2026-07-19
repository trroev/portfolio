import type { CollectionConfig, TextFieldSingleValidation } from "payload";
import { authenticated } from "~/access/authenticated";
import { authenticatedOrPublished } from "~/access/authenticated-or-published";
import {
  revalidateProjects,
  revalidateProjectsDelete,
} from "./hooks/revalidate-projects";

const URL_FORMAT_ERROR = "Enter a full URL starting with http:// or https://";

function isHttpUrl(value: unknown): boolean {
  return (
    typeof value === "string" &&
    (value.startsWith("http://") || value.startsWith("https://"))
  );
}

function hasRepoUrl(siblingData: unknown): boolean {
  return (
    typeof siblingData === "object" &&
    siblingData !== null &&
    "repoUrl" in siblingData &&
    Boolean(siblingData.repoUrl)
  );
}

const validateRepoUrl: TextFieldSingleValidation = (value) =>
  value && !isHttpUrl(value) ? URL_FORMAT_ERROR : true;

const validateLiveUrl: TextFieldSingleValidation = (value, { siblingData }) => {
  if (!(value || hasRepoUrl(siblingData))) {
    return "Add at least one link — a live URL or a repo URL.";
  }
  return value && !isHttpUrl(value) ? URL_FORMAT_ERROR : true;
};

export const Projects: CollectionConfig = {
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    readVersions: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["title", "order", "_status"],
    useAsTitle: "title",
  },
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
    {
      hasMany: true,
      name: "tech",
      relationTo: "technologies",
      required: true,
      type: "relationship",
    },
    {
      admin: {
        description: "Public URL of the live project.",
      },
      name: "liveUrl",
      type: "text",
      validate: validateLiveUrl,
    },
    {
      admin: {
        description: "Source repository URL.",
      },
      name: "repoUrl",
      type: "text",
      validate: validateRepoUrl,
    },
    {
      name: "screenshot",
      relationTo: "media",
      required: true,
      type: "upload",
    },
    {
      admin: {
        description: "Lower numbers appear first.",
        position: "sidebar",
      },
      defaultValue: 0,
      name: "order",
      type: "number",
    },
  ],
  hooks: {
    afterChange: [revalidateProjects],
    afterDelete: [revalidateProjectsDelete],
  },
  slug: "projects",
  versions: {
    drafts: true,
  },
};
