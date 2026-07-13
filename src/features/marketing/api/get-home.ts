import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { Home } from "~/payload-types";

export const getHome = cache(async (): Promise<Home> => {
  const payload = await getPayload({ config });
  return await payload.findGlobal({ slug: "home" });
});
