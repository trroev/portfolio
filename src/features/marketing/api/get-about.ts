import config from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";
import type { About } from "~/payload-types";

const ABOUT_FALLBACK: About = { heading: "", id: "" };

export const getAbout = cache(async (): Promise<About> => {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "about" });
  } catch {
    return ABOUT_FALLBACK;
  }
});
