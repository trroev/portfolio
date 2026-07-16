import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";
import Image from "next/image";
import type { Media, Project } from "~/payload-types";

type ProjectCardProps = {
  project: Project;
};

function resolveScreenshot(screenshot: Project["screenshot"]): Media | null {
  return typeof screenshot === "object" ? screenshot : null;
}

const projectLink =
  "focus-ring inline-flex items-center gap-1.5 rounded-sm font-medium text-link text-sm transition-colors hover:underline";

export function ProjectCard({ project }: ProjectCardProps) {
  const screenshot = resolveScreenshot(project.screenshot);

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-signature">
      <div className="relative aspect-video w-full overflow-hidden bg-background">
        {screenshot?.url ? (
          <Image
            alt={screenshot.alt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 476px, (min-width: 640px) 50vw, 100vw"
            src={screenshot.url}
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display font-semibold text-xl">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed">
          {project.description}
        </p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              className="rounded-full border border-border px-2.5 py-0.5 text-muted text-xs"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl ? (
            <a
              className={projectLink}
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Live site
              <RiExternalLinkLine aria-hidden="true" size={16} />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              className={projectLink}
              href={project.repoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Code
              <RiGithubFill aria-hidden="true" size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
