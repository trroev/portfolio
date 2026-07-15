import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { Service } from "~/payload-types";

const SERVICES_FALLBACK: Service = { heading: "", id: "" };

export const getServices = cache(async (): Promise<Service> => {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "services" });
  } catch {
    return SERVICES_FALLBACK;
  }
});
