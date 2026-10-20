import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useSyncExternalStore } from "react";
import { Button } from "~/components/button";
import { readTheme, setTheme, subscribeToTheme } from "~/lib/theme";

function getServerSnapshot(): null {
  return null;
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    readTheme,
    getServerSnapshot,
  );

  if (theme === null) {
    return (
      <Button aria-label="Toggle theme" type="button" variant="icon">
        <span className="size-5" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  function handleToggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <Button
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={handleToggleTheme}
      type="button"
      variant="icon"
    >
      {isDark ? (
        <RiSunLine aria-hidden="true" size={20} />
      ) : (
        <RiMoonLine aria-hidden="true" size={20} />
      )}
    </Button>
  );
}
