import { RiDownload2Line } from "@remixicon/react";
import { type ButtonStyleProps, buttonStyles } from "~/components/button";
import { cn } from "~/lib/cn";
import { type Cta, ctaHref } from "~/lib/cta";

type CtaLinkProps = ButtonStyleProps & {
  cta: Cta;
  className?: string;
};

export function CtaLink({ cta, variant, className }: CtaLinkProps) {
  const isDownload = cta.kind === "download";

  return (
    <a
      className={buttonStyles({
        className: cn(isDownload && "gap-2", className),
        variant,
      })}
      download={isDownload || undefined}
      href={ctaHref(cta)}
    >
      {cta.label}
      {isDownload ? <RiDownload2Line aria-hidden="true" size={18} /> : null}
    </a>
  );
}
