/** Centered 1280px content column. */
export const wrap = "mx-auto box-border max-w-[1280px] px-16 lte900:px-6";

/** 12-column grid that collapses to one column on small screens (row gap set per use). */
export const grid12 = "grid grid-cols-12 gap-x-8 lte900:grid-cols-1";

/** Put on every direct child of {@link grid12}. */
export const fullOnMobile = "lte900:col-span-full";

/** Uppercase label above section titles (colour and spacing set per use). */
export const eyebrow = "text-[12px] font-semibold tracking-[.18em] uppercase";

/** Section heading sizes of the design system. */
export const displayLg =
  "font-serif text-[60px] leading-[1.04] font-normal tracking-[-.01em] lte900:text-[38px]";
export const displayMd =
  "font-serif text-[44px] leading-[1.1] font-normal tracking-[-.005em] lte900:text-[32px]";

/** Vertical padding of content sections; 64px on small screens. */
export const sectionPadding = "py-32 lte900:py-16";
