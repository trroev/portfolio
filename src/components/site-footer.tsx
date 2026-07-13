import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { siteConfig, socialLinks } from "@/config/site";
import { focusRing, iconButton } from "@/lib/styles";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start gap-2">
          <Wordmark />
          <p className="max-w-xs text-muted text-sm">
            Full-stack developer building clean, professional web experiences.
          </p>
          <Link
            className={`mt-1 rounded-sm font-medium text-link text-sm hover:underline ${focusRing}`}
            href="/portfolio"
          >
            View portfolio →
          </Link>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex items-center gap-1">
            <a
              aria-label="Trevor Mathiak on GitHub"
              className={iconButton}
              href={socialLinks.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <RiGithubFill aria-hidden="true" size={20} />
            </a>
            <a
              aria-label="Trevor Mathiak on LinkedIn"
              className={iconButton}
              href={socialLinks.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <RiLinkedinBoxFill aria-hidden="true" size={20} />
            </a>
          </div>
          <p className="text-muted text-xs">
            © {year} {siteConfig.author}
          </p>
        </div>
      </div>
    </footer>
  );
}
