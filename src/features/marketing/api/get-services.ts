import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { Service } from "~/payload-types";

export const getServices = cache(async (): Promise<Service> => {
  const payload = await getPayload({ config });
  return await payload.findGlobal({ slug: "services" });
});
