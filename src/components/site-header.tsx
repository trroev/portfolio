"use client";

import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import { ButtonLink } from "~/components/button-link";
import { ThemeToggle } from "~/components/theme-toggle";
import { Wordmark } from "~/components/wordmark";
import { cn } from "~/lib/cn";

export type NavLink = {
  title: string;
  href: string;
};

export type NavCta = {
  label: string;
  href: string;
};

function isActive({ pathname, href }: { pathname: string; href: string }) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

type NavLinkProps = {
  item: NavLink;
  isCurrent: boolean;
  variant: "desktop" | "mobile";
};

function NavItemLink({ item, isCurrent, variant }: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <Link
        aria-current={isCurrent ? "page" : undefined}
        className={cn(
          "focus-ring block rounded-md px-3 py-2.5 font-medium text-base transition-colors",
          isCurrent
            ? "bg-surface text-text-primary"
            : "text-text-muted hover:bg-surface hover:text-text-primary"
        )}
        href={item.href}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <Link
      aria-current={isCurrent ? "page" : undefined}
      className={cn(
        "focus-ring relative rounded-sm px-3 py-2 font-medium text-sm transition-colors",
        isCurrent
          ? "text-text-primary"
          : "text-text-muted hover:text-text-primary"
      )}
      href={item.href}
    >
      {item.title}
      {isCurrent ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-3 -bottom-px h-0.5 rounded bg-accent"
        />
      ) : null}
    </Link>
  );
}

type SiteHeaderProps = {
  items: ReadonlyArray<NavLink>;
  cta: NavCta | null;
};

export function SiteHeader({ items, cta }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the menu on every route change — pathname is the trigger, not a value the effect reads.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  function handleToggleMenu() {
    setIsMenuOpen((value) => !value);
  }

  return (
    <header className="sticky top-0 z-50 border-border border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <NavItemLink
              isCurrent={isActive({ href: item.href, pathname })}
              item={item}
              key={item.href}
              variant="desktop"
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {cta ? (
            <ButtonLink className="hidden md:inline-flex" href={cta.href}>
              {cta.label}
            </ButtonLink>
          ) : null}
          <Button
            aria-controls="mobile-nav"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
            onClick={handleToggleMenu}
            type="button"
            variant="icon"
          >
            {isMenuOpen ? (
              <RiCloseLine aria-hidden="true" size={22} />
            ) : (
              <RiMenuLine aria-hidden="true" size={22} />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav
          aria-label="Mobile"
          className="border-border border-t bg-background px-6 py-4 md:hidden"
          id="mobile-nav"
        >
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <NavItemLink
                  isCurrent={isActive({ href: item.href, pathname })}
                  item={item}
                  variant="mobile"
                />
              </li>
            ))}
          </ul>
          {cta ? (
            <ButtonLink className="mt-4 w-full" href={cta.href}>
              {cta.label}
            </ButtonLink>
          ) : null}
        </nav>
      ) : null}
    </header>
  );
}
