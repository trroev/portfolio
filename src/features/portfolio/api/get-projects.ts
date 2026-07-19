import { cache } from "react";
import { getPayloadClient } from "~/lib/payload";
import type { Project } from "~/payload-types";

type GetProjectsOptions = {
  limit?: number;
};

const findProjects = cache(async (limit: number): Promise<Array<Project>> => {
  try {
    const payload = await getPayloadClient();
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
  } catch (error) {
    console.error("Failed to load projects from the CMS:", error);
    throw error;
  }
});

export const getProjects = ({
  limit = 24,
}: GetProjectsOptions = {}): Promise<Array<Project>> => findProjects(limit);
