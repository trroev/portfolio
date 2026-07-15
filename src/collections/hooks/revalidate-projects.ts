import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from "payload";
import { isPublished, revalidatePaths } from "../../lib/revalidate";

const PROJECT_PATHS = [
  "/portfolio",
  "/",
] as const satisfies ReadonlyArray<string>;

export const revalidateProjects: CollectionAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (
    !context.disableRevalidate &&
    (isPublished(doc) || isPublished(previousDoc))
  ) {
    payload.logger.info("Revalidating portfolio and home after project change");
    revalidatePaths(PROJECT_PATHS);
  }
  return doc;
};

export const revalidateProjectsDelete: CollectionAfterDeleteHook = ({
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    revalidatePaths(PROJECT_PATHS);
  }
};
