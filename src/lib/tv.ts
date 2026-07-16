import { createTV } from "tailwind-variants";
import { twMergeConfig } from "~/lib/tw-merge-config";

export const tv = createTV({ twMerge: true, twMergeConfig });

export type { VariantProps } from "tailwind-variants";
