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
  if (isPublished(doc)) {
    const path = pageHref(doc);
    payload.logger.info(`Revalidating page at ${path}`);
    revalidatePaths([path]);
  }
  if (isPublished(previousDoc) && previousDoc.slug !== doc.slug) {
    revalidatePaths([pageHref(previousDoc)]);
  }
  return doc;
};
