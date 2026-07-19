import config from "@payload-config";
import {
  type DataFromGlobalSlug,
  type GlobalSlug,
  getPayload,
  type Payload,
} from "payload";
import { cache } from "react";

export const getPayloadClient = cache(
  (): Promise<Payload> => getPayload({ config })
);

const findGlobal = cache(
  async <TSlug extends GlobalSlug>(
    slug: TSlug
  ): Promise<DataFromGlobalSlug<TSlug>> => {
    try {
      const payload = await getPayloadClient();
      return await payload.findGlobal({ slug });
    } catch (error) {
      console.error(`Failed to load the "${slug}" global from the CMS:`, error);
      throw error;
    }
  }
);

type GetGlobalOptions<TSlug extends GlobalSlug> = {
  slug: TSlug;
};

export const getGlobal = <TSlug extends GlobalSlug>({
  slug,
}: GetGlobalOptions<TSlug>): Promise<DataFromGlobalSlug<TSlug>> =>
  findGlobal(slug);
