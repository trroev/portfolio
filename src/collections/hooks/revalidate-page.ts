import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";
import { SITEMAP_PATH } from "~/lib/metadata";
import { pageHref } from "~/lib/page-href";
import { isPublished, revalidatePaths } from "~/lib/revalidate";

export const revalidatePage: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context.disableRevalidate) {
    return doc;
  }
  const paths = new Set<string>();
  if (isPublished(doc)) {
    paths.add(pageHref(doc));
  }
  const wasPublicPathRetired =
    isPublished(previousDoc) &&
    (previousDoc.slug !== doc.slug || !isPublished(doc));
  if (wasPublicPathRetired) {
    paths.add(pageHref(previousDoc));
  }
  if (paths.size > 0) {
    paths.add(SITEMAP_PATH);
    payload.logger.info(`Revalidating pages at ${[...paths].join(", ")}`);
    revalidatePaths([...paths]);
  }
  return doc;
};

export const revalidatePageDelete: CollectionAfterDeleteHook = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate && isPublished(doc)) {
    revalidatePaths([pageHref(doc), SITEMAP_PATH]);
  }
};
