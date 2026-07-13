import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { About } from "~/payload-types";

export const getAbout = cache(async (): Promise<About> => {
  const payload = await getPayload({ config });
  return await payload.findGlobal({ slug: "about" });
});
