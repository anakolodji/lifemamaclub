"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import type { MouseEvent } from "react";

import { ButtonLink } from "@/components/club/button-link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { cn } from "@/lib/cn";

const MOBILE_MAX_WIDTH = 900;

const navLinkClass = cn(
  "border-b border-transparent px-0 py-1.5 text-[14px] leading-none font-medium tracking-[.02em] text-white no-underline transition-[border-color] duration-350 ease-[ease] hover:border-white/70 hover:text-white focus-visible:outline-white tablet:text-[13px]",
  // Inside the open mobile menu.
  "lte900:flex lte900:min-h-12 lte900:items-center lte900:border-white/16 lte900:px-1 lte900:py-2.5 lte900:text-[15px] lte900:leading-[1.4] lte900:last:border-b-0 lte900:focus-visible:outline-offset-[-2px] lte900:focus-visible:outline-pessego-300",
);

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function useScrolledPastTop() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 24,
    () => false,
  );
}

export function HomeHeader() {
  const scrolled = useScrolledPastTop();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // The page stays mounted (hidden) after navigating away; come back with the menu closed.
  useLayoutEffect(() => () => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnOutsidePointer(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    }
    function closeOnDesktop() {
      if (window.innerWidth > MOBILE_MAX_WIDTH) setMenuOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  function closeMenuOnLinkClick(event: MouseEvent<HTMLElement>) {
    if ((event.target as Element).closest("a")) setMenuOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 [transition:background-color_.35s_ease,box-shadow_.35s_ease,backdrop-filter_.35s_ease]",
        scrolled &&
          "bg-[rgba(71,41,31,.92)] shadow-[0_1px_0_rgba(255,255,255,.14)] backdrop-blur-[14px]",
      )}
    >
      <div className="mx-auto box-border flex h-[104px] max-w-[1280px] items-center justify-between gap-8 px-16 lte900:h-[76px] lte900:gap-2.5 lte900:px-4">
        <a
          href="#topo"
          aria-label="Life Mama Club — início"
          className="inline-flex items-baseline gap-5 text-white no-underline focus-visible:outline-white"
        >
          <BrandLogo className="lte900:w-[112px]" />
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          aria-controls="lmc-primary-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          onClick={() => setMenuOpen((open) => !open)}
          className="hidden focus-visible:outline-pessego-300 lte900:grid lte900:h-11 lte900:w-11 lte900:flex-[0_0_44px] lte900:cursor-pointer lte900:place-items-center lte900:rounded-full lte900:border lte900:border-white/55 lte900:bg-transparent lte900:p-0 lte900:text-[20px] lte900:text-white"
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav
          id="lmc-primary-nav"
          aria-label="Principal"
          onClick={closeMenuOnLinkClick}
          className={cn(
            "flex items-center gap-9 tablet:gap-5",
            menuOpen
              ? "lte900:fixed lte900:top-[76px] lte900:right-3 lte900:left-3 lte900:z-1001 lte900:max-h-[calc(100dvh-92px)] lte900:flex-col lte900:items-stretch lte900:gap-0 lte900:overflow-y-auto lte900:overscroll-contain lte900:rounded-[4px] lte900:border lte900:border-white/18 lte900:bg-cafe-900 lte900:px-4 lte900:py-2 lte900:shadow-[0_12px_32px_rgba(0,0,0,.24)]"
              : "lte900:hidden",
          )}
        >
          <a href="#club" className={navLinkClass}>
            O Club
          </a>
          <a href="#incluido" className={navLinkClass}>
            O que está incluído
          </a>
          <a href="#experiencia" className={navLinkClass}>
            A experiência
          </a>
          <a href="#experiencias-passadas" className={navLinkClass}>
            Galeria
          </a>
          {/* Different root layout: a full page load, so there is nothing useful to prefetch. */}
          <Link href="/parcerias" prefetch={false} className={navLinkClass}>
            Empresas
          </Link>
          <Link href="/candidatura" className={navLinkClass}>
            Candidatura
          </Link>
        </nav>
        <ButtonLink
          variant="ghost"
          href="/candidatura"
          className="lte900:min-h-[42px] lte900:px-3 lte900:py-2.5 lte900:text-[12px] lte900:leading-[1.3] lte900:whitespace-nowrap"
        >
          Faça parte
        </ButtonLink>
      </div>
    </header>
  );
}
