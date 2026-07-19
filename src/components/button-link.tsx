import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { type ButtonStyleProps, buttonStyles } from "~/components/button";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & ButtonStyleProps;

export function ButtonLink({ variant, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonStyles({ className, variant })} {...props} />;
}
