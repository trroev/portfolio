import { getGlobal } from "~/lib/payload";
import type { Home } from "~/payload-types";

export const getHome = (): Promise<Home> => getGlobal({ slug: "home" });
