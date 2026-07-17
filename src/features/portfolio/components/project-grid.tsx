import type { Project } from "~/payload-types";
import { ProjectCard } from "./project-card";

type ProjectGridProps = {
  projects: Array<Project>;
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-text-muted">
        A curated selection of my work is on its way.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
