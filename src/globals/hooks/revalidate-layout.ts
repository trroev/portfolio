import type { GlobalAfterChangeHook } from "payload";
import { revalidateLayout } from "~/lib/revalidate";

export const revalidateChrome: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info("Revalidating site chrome (layout)");
    revalidateLayout();
  }
  return doc;
};
