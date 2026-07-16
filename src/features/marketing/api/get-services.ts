import { getGlobal } from "~/lib/payload";
import type { Service } from "~/payload-types";

export const getServices = (): Promise<Service> =>
  getGlobal({ slug: "services" });
