import { seoPlugin } from "@payloadcms/plugin-seo";
import type {
  GenerateDescription,
  GenerateTitle,
  GenerateURL,
} from "@payloadcms/plugin-seo/types";
import {
  derivePageDescription,
  derivePageTitle,
  derivePageUrl,
} from "~/lib/page-seo";
import type { Page } from "~/payload-types";

const generateTitle: GenerateTitle<Page> = ({ doc }) => derivePageTitle(doc);

const generateDescription: GenerateDescription<Page> = ({ doc }) =>
  derivePageDescription(doc);

const generateURL: GenerateURL<Page> = ({ doc }) => derivePageUrl(doc);

export const seo = seoPlugin({
  collections: ["pages"],
  generateDescription,
  generateTitle,
  generateURL,
  tabbedUI: true,
  uploadsCollection: "media",
});
