import type { CollectionAfterChangeHook } from "payload";
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
    payload.logger.info(`Revalidating pages at ${[...paths].join(", ")}`);
    revalidatePaths([...paths]);
  }
  return doc;
};
