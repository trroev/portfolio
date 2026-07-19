import { RiDownload2Line } from "@remixicon/react";
import type { ReactNode } from "react";
import type { ButtonStyleProps } from "~/components/button";
import { ButtonLink } from "~/components/button-link";
import { cn } from "~/lib/cn";

type CtaButtonProps = ButtonStyleProps & {
  href: string;
  download?: boolean;
  className?: string;
  children: ReactNode;
};

export function CtaButton({
  download,
  className,
  children,
  ...props
}: CtaButtonProps) {
  if (download) {
    return (
      <ButtonLink className={cn("gap-2", className)} download {...props}>
        {children}
        <RiDownload2Line aria-hidden="true" size={18} />
      </ButtonLink>
    );
  }
  return (
    <ButtonLink className={className} {...props}>
      {children}
    </ButtonLink>
  );
}
