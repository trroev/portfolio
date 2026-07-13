export const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-signature focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const primaryButton = `inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary-hover ${focusRing}`;

export const secondaryButton = `inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 font-medium text-foreground text-sm transition-colors hover:bg-surface ${focusRing}`;

export const iconButton = `inline-flex size-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-foreground ${focusRing}`;
