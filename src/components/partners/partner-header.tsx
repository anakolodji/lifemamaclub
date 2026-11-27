import Link from "next/link";
import type { ReactNode } from "react";

import { BrandLogo } from "@/components/shared/brand-logo";
import { buttonClass, container } from "@/components/partners/styles";
import { cn } from "@/lib/cn";

type PartnerHeaderProps = {
  /** Dark header over the terracotta hero; otherwise the light, translucent one. */
  dark?: boolean;
  nav: ReactNode;
  action: { href: string; label: ReactNode };
};

export const partnerNavLinkClass =
  "border-b border-transparent text-[13px] font-semibold no-underline hover:border-current aria-[current=page]:border-current lte1080:text-[12px]";

export function PartnerHeader({ dark = false, nav, action }: PartnerHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-100 border-b backdrop-blur-[16px]",
        dark
          ? "border-white/18 bg-[rgba(72,39,30,.94)] text-white"
          : "border-cafe-900/12 bg-areia-100/94",
      )}
    >
      <div
        className={cn(
          container,
          "flex min-h-[88px] items-center justify-between gap-8 lte820:min-h-[78px] lte820:gap-4",
        )}
      >
        <Link
          href="/"
          prefetch={false}
          aria-label="Life Mama Club — início"
          className="inline-flex items-baseline gap-[18px] text-inherit no-underline lte430:gap-3"
        >
          <BrandLogo onLight={!dark} className="lte820:w-[155px] lte430:w-[150px]" />
        </Link>
        <nav
          aria-label="Navegação principal"
          className="flex items-center gap-7 lte1080:gap-[18px] lte820:hidden"
        >
          {nav}
        </nav>
        <Link
          href={action.href}
          className={buttonClass(
            "outline",
            "lte820:min-h-[46px] lte820:px-[18px] lte430:px-[15px] lte430:text-[12px]",
          )}
        >
          {action.label}
        </Link>
      </div>
    </header>
  );
}
