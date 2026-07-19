import { RichText } from "~/components/rich-text";
import type { StoryBlock } from "~/payload-types";

type StoryProps = {
  data: StoryBlock["content"];
};

export function Story({ data }: StoryProps) {
  return <RichText className="max-w-2xl" data={data} />;
}
