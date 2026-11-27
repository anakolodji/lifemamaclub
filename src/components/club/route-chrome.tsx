"use client";

import { usePathname, useRouter } from "next/navigation";
import { ViewTransition, useEffect, useRef, useState } from "react";

const PROGRESS_DURATION_MS = 430;
const FOCUS_DELAY_MS = 440;
const LEGACY_HASH_ROUTE = /^#\/(candidatura|confirmacao)\/?$/;

/**
 * Navigation chrome shared by the club pages: the thin progress bar shown on every route change,
 * moving focus to the new page's heading, and redirecting the old `#/candidatura`-style links.
 */
export function RouteChrome() {
  const pathname = usePathname();
  const router = useRouter();
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const [moving, setMoving] = useState(false);
  const focusedPathname = useRef(pathname);

  // Start the progress bar in the same render as the navigation, so it is part of the transition.
  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setMoving(true);
  }

  useEffect(() => {
    if (!moving) return;
    const timer = window.setTimeout(() => setMoving(false), PROGRESS_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [moving, pathname]);

  useEffect(() => {
    if (pathname === focusedPathname.current) {
      // Initial load: links from the old single-page router used `/#/candidatura`.
      const legacy = LEGACY_HASH_ROUTE.exec(window.location.hash);
      if (pathname === "/" && legacy) router.replace(`/${legacy[1]}`);
      return;
    }
    focusedPathname.current = pathname;
    if (window.location.hash) return;

    const timer = window.setTimeout(() => {
      const heading = Array.from(document.querySelectorAll<HTMLElement>("h1")).find((element) =>
        element.checkVisibility(),
      );
      if (!heading) return;
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }, FOCUS_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname, router]);

  return (
    <ViewTransition name="lmc-route-progress" default="none" update="lmc-progress">
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-20 h-[3px] w-full origin-left bg-pessego-300 [transition:scale_.38s_var(--ease-lmc),opacity_.2s_ease] motion-reduce:hidden ${
          moving ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />
    </ViewTransition>
  );
}
