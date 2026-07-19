"use client";

import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";

type ThemeIconProps = {
  isMounted: boolean;
  isDark: boolean;
};

function ThemeIcon({ isMounted, isDark }: ThemeIconProps) {
  if (!isMounted) {
    return <span className="size-5" />;
  }
  return isDark ? (
    <RiSunLine aria-hidden="true" size={20} />
  ) : (
    <RiMoonLine aria-hidden="true" size={20} />
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  function handleToggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  function resolveLabel() {
    if (!isMounted) {
      return "Toggle theme";
    }
    return isDark ? "Switch to light theme" : "Switch to dark theme";
  }

  const label = resolveLabel();

  return (
    <Button
      aria-label={label}
      onClick={handleToggleTheme}
      type="button"
      variant="icon"
    >
      <ThemeIcon isDark={isDark} isMounted={isMounted} />
    </Button>
  );
}
