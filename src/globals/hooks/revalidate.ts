import type { GlobalAfterChangeHook } from "payload";
import { isPublished, revalidatePaths } from "../../lib/revalidate";

export function revalidateGlobalPath(path: string): GlobalAfterChangeHook {
  return ({ doc, previousDoc, req: { payload, context } }) => {
    if (
      !context.disableRevalidate &&
      (isPublished(doc) || isPublished(previousDoc))
    ) {
      payload.logger.info(`Revalidating global page at ${path}`);
      revalidatePaths([path]);
    }
    return doc;
  };
}
