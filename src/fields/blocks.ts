import {
  type Block,
  type BlocksField,
  deepMergeWithSourceArrays,
} from "payload";
import { ContactFormBlock } from "~/blocks/contact-form";
import { CtaBandBlock } from "~/blocks/cta-band";
import { FeatureListBlock } from "~/blocks/feature-list";
import { HeroBlock } from "~/blocks/hero";
import { PageIntroBlock } from "~/blocks/page-intro";
import { ProjectShowcaseBlock } from "~/blocks/project-showcase";
import { StoryBlock } from "~/blocks/story";

const BLOCKS: ReadonlyArray<Block> = [
  ContactFormBlock,
  CtaBandBlock,
  FeatureListBlock,
  HeroBlock,
  PageIntroBlock,
  ProjectShowcaseBlock,
  StoryBlock,
] as const

/**
 * The block-based page layout field — the full set of blocks a Page is
 * composed from. `overrides` tune the field (name, admin, …); the block list
 * is replaced wholesale if overridden (see `deepMergeWithSourceArrays`).
 */
export function blocksField(overrides: Partial<BlocksField> = {}): BlocksField {
  return deepMergeWithSourceArrays<BlocksField>(
    {
      blocks: BLOCKS,
      name: "layout",
      type: "blocks",
    },
    overrides
  );
}
