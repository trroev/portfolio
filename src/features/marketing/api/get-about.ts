import { getGlobal } from "~/lib/payload";
import type { About } from "~/payload-types";

export const getAbout = (): Promise<About> => getGlobal({ slug: "about" });
