import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { Home } from "~/payload-types";

const HOME_FALLBACK: Home = { hero: { heading: "" }, id: "" };

export const getHome = cache(async (): Promise<Home> => {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "home" });
  } catch {
    return HOME_FALLBACK;
  }
});
