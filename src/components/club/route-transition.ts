/**
 * Props for the `<ViewTransition>` wrapping each club page: on navigation the page being left fades
 * out while the new one fades in (see the `lmc-route-*` keyframes in `club.css`).
 */
export const ROUTE_TRANSITION = {
  enter: "lmc-route-in",
  exit: "lmc-route-out",
  default: "none",
} as const;
