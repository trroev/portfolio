import {
  type RemixiconComponentType,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import Link from "next/link";
import { ButtonLink } from "~/components/button-link";
import type { NavLink } from "~/components/site-header";
import { Wordmark } from "~/components/wordmark";
import { siteConfig } from "~/config/site";

type SocialPlatform = "github" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

const socialIcons: Record<SocialPlatform, RemixiconComponentType> = {
  github: RiGithubFill,
  linkedin: RiLinkedinBoxFill,
};

const socialLabels: Record<SocialPlatform, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
};

type SiteFooterProps = {
  items: ReadonlyArray<NavLink>;
  socialLinks: ReadonlyArray<SocialLink>;
};

export function SiteFooter({ items, socialLinks }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-start gap-2">
          <Wordmark />
          <p className="max-w-xs text-sm text-text-muted">
            Full-stack developer building clean, professional web experiences.
          </p>
          {items.length > 0 ? (
            <nav aria-label="Footer" className="mt-2">
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="focus-ring rounded-sm font-medium text-accent text-sm hover:underline"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          {socialLinks.length > 0 ? (
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <ButtonLink
                    aria-label={`Trevor Mathiak on ${socialLabels[social.platform]}`}
                    href={social.url}
                    key={social.platform}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="icon"
                  >
                    <Icon aria-hidden="true" size={20} />
                  </ButtonLink>
                );
              })}
            </div>
          ) : null}
          <p className="text-text-muted text-xs">
            © {year} {siteConfig.author}
          </p>
        </div>
      </div>
    </footer>
  );
}
