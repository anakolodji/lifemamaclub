"use client";

import type { ComponentProps } from "react";

/** A link whose destination is not defined yet: renders as `href="#"` but does not navigate. */
export function PlaceholderLink(props: Omit<ComponentProps<"a">, "href" | "onClick">) {
  return <a href="#" onClick={(event) => event.preventDefault()} {...props} />;
}
