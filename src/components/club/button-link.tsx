import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const base =
  "group box-border inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border py-0 font-ui text-[16px] leading-none font-bold tracking-[.01em] no-underline transition-[background-color,color,border-color] duration-350 ease-lmc hover:-translate-y-0.5 active:translate-y-0 active:scale-[.985]";

const variants = {
  primary:
    "min-h-14 px-9 border-argila-500 bg-argila-500 text-white hover:border-argila-600 hover:bg-argila-600 hover:text-white",
  inverse:
    "min-h-14 px-9 border-white bg-white text-argila-500 hover:border-areia-100 hover:bg-areia-100 hover:text-argila-600 focus-visible:outline-white",
  ghost:
    "min-h-12 border-white bg-transparent px-7 text-white hover:bg-white hover:text-argila-500 focus-visible:outline-white",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant: keyof typeof variants;
  /** Adds the "→" that slides on hover. */
  arrow?: boolean;
};

export function ButtonLink({
  variant,
  arrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
      {arrow && <ButtonArrow />}
    </Link>
  );
}

export function buttonClassName(variant: keyof typeof variants, className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonArrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block transition-transform duration-350 ease-lmc group-hover:translate-x-1"
    >
      →
    </span>
  );
}
