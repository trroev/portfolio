import type { ComponentPropsWithoutRef } from "react";
import { tv, type VariantProps } from "~/lib/tv";

export const buttonStyles = tv({
  base: "focus-ring inline-flex items-center justify-center rounded-md transition-colors",
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      icon: "size-9 text-muted hover:bg-surface hover:text-foreground",
      primary:
        "bg-primary px-5 py-2.5 font-medium text-primary-foreground text-sm hover:bg-primary-hover",
      secondary:
        "border border-border px-5 py-2.5 font-medium text-foreground text-sm hover:bg-surface",
    },
  },
});

export type ButtonStyleProps = VariantProps<typeof buttonStyles>;

type ButtonProps = ComponentPropsWithoutRef<"button"> & ButtonStyleProps;

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={buttonStyles({ className, variant })} {...props} />;
}
