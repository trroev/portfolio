import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { twMergeConfig } from "~/lib/tw-merge-config";

const twMerge = extendTailwindMerge(twMergeConfig);

export const cn = (...inputs: Array<ClassValue>): string =>
  twMerge(clsx(inputs));
