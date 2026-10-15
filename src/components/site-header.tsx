import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import { CtaLink } from "~/components/cta-link";
import { ThemeToggle } from "~/components/theme-toggle";
import { Wordmark } from "~/components/wordmark";
import { pageHref } from "~/config/pages";
import type { NavItem } from "~/config/site-chrome";
import type { Cta } from "~/lib/cta";
import { tv } from "~/lib/tv";

function isActive({
  currentPath,
  href,
}: {
  currentPath: string;
  href: string;
}): boolean {
  return href === "/" ? currentPath === "/" : currentPath.startsWith(href);
}

type NavItemLinkProps = {
  item: NavItem;
  currentPath: string;
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
};

const navLinkStyles = tv({
  base: "focus-ring font-medium transition-colors",
  compoundVariants: [
    {
      className: "text-text-muted hover:text-text-primary",
      isCurrent: false,
      variant: "desktop",
    },
    {
      className: "text-text-muted hover:bg-surface hover:text-text-primary",
      isCurrent: false,
      variant: "mobile",
    },
    {
      className: "bg-surface",
      isCurrent: true,
      variant: "mobile",
    },
  ],
  variants: {
    isCurrent: {
      false: "",
      true: "text-text-primary",
    },
    variant: {
      desktop: "relative rounded-sm px-3 py-2 text-sm",
      mobile: "block rounded-md px-3 py-2.5 text-base",
    },
  },
});

function NavItemLink({
  item,
  currentPath,
  variant,
  onNavigate,
}: NavItemLinkProps) {
  const href = pageHref(item.page);
  const isCurrent = isActive({ currentPath, href });

  return (
    <a
      aria-current={isCurrent ? "page" : undefined}
      className={navLinkStyles({ isCurrent, variant })}
      href={href}
      onClick={onNavigate}
    >
      {item.label}
      {variant === "desktop" && isCurrent ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-3 -bottom-px h-0.5 rounded bg-accent"
        />
      ) : null}
    </a>
  );
}

type SiteHeaderProps = {
  navItems: ReadonlyArray<NavItem>;
  navCta: Cta | null;
  currentPath: string;
};

export function SiteHeader({ navItems, navCta, currentPath }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

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

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavItemLink
              currentPath={currentPath}
              item={item}
              key={item.page}
              variant="desktop"
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {navCta ? (
            <CtaLink className="hidden md:inline-flex" cta={navCta} />
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
          className="border-t border-border bg-background px-6 py-4 md:hidden"
          id="mobile-nav"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.page}>
                <NavItemLink
                  currentPath={currentPath}
                  item={item}
                  onNavigate={handleCloseMenu}
                  variant="mobile"
                />
              </li>
            ))}
          </ul>
          {navCta ? <CtaLink className="mt-4 w-full" cta={navCta} /> : null}
        </nav>
      ) : null}
    </header>
  );
}
