import { RichText } from "~/components/rich-text";
import type { About } from "~/payload-types";

type StoryProps = {
  data: NonNullable<About["story"]>;
};

export function Story({ data }: StoryProps) {
  return <RichText className="max-w-2xl" data={data} />;
}
