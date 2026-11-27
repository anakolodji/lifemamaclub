"use client";

import { createElement, useEffect, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/cn";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Start revealed (plays the entrance animation on mount instead of on scroll). */
  initiallyVisible?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Plays the `animate-reveal` entrance animation the first time the element scrolls into view.
 * Content stays fully visible until then, so nothing depends on JavaScript to be readable.
 */
export function Reveal<T extends ElementType = "div">({
  as,
  initiallyVisible = false,
  className,
  ...props
}: RevealProps<T>) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(initiallyVisible);

  useEffect(() => {
    if (visible || !element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [element, visible]);

  return createElement(as ?? "div", {
    ...props,
    ref: setElement,
    className: cn(className, visible && "animate-reveal"),
  });
}
