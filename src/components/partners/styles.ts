import { cn } from "@/lib/cn";

/** Centered content column without a width cap (combine with a `max-w-*`). */
export const containerBase = "mx-auto w-full px-16 lte1080:px-10 lte820:px-6";

/** Centered 1280px content column. */
export const container = `${containerBase} max-w-[1280px]`;

export const eyebrow = "m-0 mb-[22px] text-[12px] font-bold tracking-[.18em] uppercase";

export const display =
  "m-0 font-serif text-[clamp(48px,5.2vw,78px)] leading-[.98] font-normal tracking-[-.025em] lte430:text-[47px]";

export const sectionTitle =
  "m-0 font-serif text-[clamp(38px,4vw,58px)] leading-[1.04] font-normal tracking-[-.015em] lte430:text-[39px]";

export const prose = "flex flex-col gap-[18px] text-[18px] [&_p]:m-0";

export const smallNote = "text-[13px] leading-[1.55] text-cafe-600";

/** Serif quote separated by a rule; set the top margin per use. */
export const pullQuote =
  "mx-0 mb-0 border-t border-current pt-7 font-serif text-[28px] leading-[1.35]";

/** Section with 128px vertical padding (88px on small screens). */
export const section = "py-32 lte820:py-22";

export const sectionSplit = "grid grid-cols-12 items-start gap-8 lte820:grid-cols-1";
export const splitHeading = "col-[1/span_5] lte820:col-1";
export const splitBody = "col-[7/span_6] lte820:col-1 lte820:mt-2.5";

const buttonBase =
  "inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-3 rounded-full border px-[25px] py-0 text-[14px] font-bold no-underline hover:-translate-y-0.5 disabled:translate-none disabled:cursor-wait disabled:opacity-65";

const buttonVariants = {
  clay: "border-transparent bg-argila-500 text-white hover:bg-argila-700",
  light: "border-transparent bg-white text-argila-700",
  outline: "border-current bg-transparent text-inherit",
  olive: "border-transparent bg-oliva-600 text-white",
} as const;

export function buttonClass(variant: keyof typeof buttonVariants = "clay", className?: string) {
  return cn(buttonBase, buttonVariants[variant], className);
}
