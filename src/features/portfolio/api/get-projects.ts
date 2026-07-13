import config from "@payload-config";
import { getPayload } from "payload";
import type { Project } from "~/payload-types";

export async function getProjects(): Promise<Array<Project>> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "projects",
    depth: 1,
    limit: 24,
    sort: "order",
    where: {
      _status: {
        equals: "published",
      },
    },
  });
  return docs;
}
