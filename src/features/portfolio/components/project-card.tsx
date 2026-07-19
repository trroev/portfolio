import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";
import Image from "next/image";
import { resolveMedia } from "~/lib/resolve-media";
import type { Project, Technology } from "~/payload-types";

type ProjectCardProps = {
  project: Project;
};

const projectLink =
  "focus-ring inline-flex items-center gap-1.5 rounded-sm font-medium text-accent text-sm transition-colors hover:underline";

const CATEGORY_ORDER: Record<Technology["category"], number> = {
  data: 2,
  design: 5,
  framework: 1,
  infra: 4,
  language: 0,
  tooling: 3,
};

function resolveTech(tech: Project["tech"]): Array<Technology> {
  const docs = (tech ?? []).filter(
    (item): item is Technology => typeof item === "object" && item !== null
  );
  return docs.toSorted(
    (a, b) => CATEGORY_ORDER[a.category] - CATEGORY_ORDER[b.category]
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const screenshot = resolveMedia(project.screenshot);
  const tech = resolveTech(project.tech);

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-accent">
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
        <p className="text-sm text-text-muted leading-relaxed">
          {project.description}
        </p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              className="rounded-full border border-border px-2.5 py-0.5 text-text-muted text-xs"
              key={item.id}
            >
              {item.name}
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
