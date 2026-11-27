import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";

import { ROUTE_TRANSITION } from "@/components/club/route-transition";
import { fullOnMobile, grid12, wrap } from "@/components/club/styles";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Candidatura recebida — Life Mama Club",
};

const backLinkSpanClass =
  "border-b border-transparent pb-[3px] transition-[border-color] duration-350 ease-[ease] group-hover:border-current";

export default function ConfirmationPage() {
  return (
    <ViewTransition {...ROUTE_TRANSITION}>
      <div className="flex min-h-screen flex-col bg-barro-700 font-sans text-white">
        <header>
          <div className="mx-auto box-border flex h-[88px] max-w-[1280px] items-center justify-between gap-8 px-16 lte900:h-[76px] lte900:gap-2.5 lte900:px-4">
            <Link
              href="/"
              aria-label="Life Mama Club — voltar ao início"
              className="inline-flex items-baseline gap-5 text-white no-underline focus-visible:outline-white"
            >
              <BrandLogo className="lte900:w-[112px]" />
            </Link>
          </div>
        </header>

        <Reveal
          as="main"
          initiallyVisible
          className="flex flex-1 items-center px-0 pt-24 pb-32 lte900:pt-24 lte900:pb-16"
        >
          <div className={cn(wrap, "w-full")}>
            <div className={cn(grid12, "items-end gap-y-12 lte900:gap-y-8")}>
              <div className={cn("col-[1/span_7] flex flex-col gap-0", fullOnMobile)}>
                <p className="mb-7 text-[12px] font-semibold tracking-[.18em] text-white uppercase">
                  Candidatura · Turma fundadora
                </p>
                <h1 className="max-w-[10em] font-serif text-[60px] leading-[1.04] font-normal tracking-[-.01em] text-white focus-visible:outline-white lte900:text-[38px]">
                  Sua candidatura foi recebida.
                </h1>
                <div className="mt-10 flex max-w-[30em] flex-col gap-5 text-[19px] leading-[1.6] text-white">
                  <p>Obrigada por compartilhar um pouco da sua história.</p>
                  <p>
                    Nossa equipe analisará as informações e entrará em contato por e-mail caso haja
                    os próximos passos.
                  </p>
                </div>
                <div className="mt-12">
                  <Link
                    href="/"
                    className="group inline-flex min-h-12 items-center gap-2 text-[16px] leading-none font-semibold text-white no-underline hover:text-white focus-visible:outline-white"
                  >
                    <span aria-hidden="true" className={backLinkSpanClass}>
                      ←
                    </span>{" "}
                    <span className={backLinkSpanClass}>Voltar ao site</span>
                  </Link>
                </div>
              </div>
              <blockquote
                className={cn(
                  "col-[9/span_4] m-0 border-y border-white/30 px-0 py-8 font-serif text-[28px] leading-[1.3] font-normal text-white",
                  fullOnMobile,
                )}
              >
                O início de uma conexão pode abrir muitas possibilidades.
              </blockquote>
            </div>
          </div>
        </Reveal>
      </div>
    </ViewTransition>
  );
}
