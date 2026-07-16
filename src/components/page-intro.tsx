import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow?: string | null;
  heading: string;
  lead?: string | null;
  actions?: ReactNode;
};

export function PageIntro({ eyebrow, heading, lead, actions }: PageIntroProps) {
  return (
    <header className="flex flex-col gap-4">
      {eyebrow ? (
        <p className="font-medium text-signature text-sm uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-balance font-display font-semibold text-4xl sm:text-5xl">
        {heading}
      </h1>
      {lead ? (
        <p className="max-w-2xl text-balance text-lg text-muted">{lead}</p>
      ) : null}
      {actions ? (
        <div className="mt-2 flex flex-wrap items-center gap-3">{actions}</div>
      ) : null}
    </header>
  );
}
