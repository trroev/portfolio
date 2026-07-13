import config from "@payload-config";
import { getPayload } from "payload";
import type { Project } from "~/payload-types";

type GetProjectsOptions = {
  limit?: number;
};

export async function getProjects({
  limit = 24,
}: GetProjectsOptions = {}): Promise<Array<Project>> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    depth: 1,
    limit,
    sort: "order",
    where: {
      _status: {
        equals: "published",
      },
    },
  });
  return docs;
}
