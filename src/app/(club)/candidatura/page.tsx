import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";

import { ApplicationForm } from "@/components/club/application-form";
import { ROUTE_TRANSITION } from "@/components/club/route-transition";
import { fullOnMobile, grid12, wrap } from "@/components/club/styles";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Candidatura — Life Mama Club",
};

const navLinkClass =
  "border-b border-transparent px-0 py-1.5 text-[14px] font-medium tracking-[.02em] text-cafe-900 no-underline transition-[border-color] duration-350 ease-[ease] hover:border-cafe-900/50 hover:text-cafe-900 tablet:text-[13px]";
const backLinkSpanClass =
  "border-b border-transparent pb-[3px] transition-[border-color] duration-350 ease-[ease] group-hover:border-current";
const noteClass = "text-[13px] leading-[1.5] font-medium text-cafe-600";

export default function ApplicationPage() {
  return (
    <ViewTransition {...ROUTE_TRANSITION}>
      <div className="min-h-screen bg-areia-100 font-sans text-cafe-900">
        <header className="sticky top-0 z-50 border-b border-cafe-900/15 bg-areia-100/94 backdrop-blur-[14px]">
          <div className="mx-auto box-border flex h-[88px] max-w-[1280px] items-center justify-between gap-8 px-16 lte900:h-[76px] lte900:gap-2.5 lte900:px-4">
            <Link
              href="/"
              aria-label="Life Mama Club — voltar ao início"
              className="inline-flex items-baseline gap-5 text-cafe-900 no-underline"
            >
              <BrandLogo onLight className="lte900:w-[112px]" />
            </Link>
            <nav
              aria-label="Principal"
              className="flex items-center gap-9 tablet:gap-5 lte900:hidden"
            >
              <Link href="/#club" className={navLinkClass}>
                O Club
              </Link>
              <Link href="/#experiencia" className={navLinkClass}>
                A experiência
              </Link>
              <Link href="/#incluido" className={navLinkClass}>
                O que está incluído
              </Link>
            </nav>
            <Link
              href="/"
              className="group inline-flex min-h-11 items-center gap-2 text-[14px] leading-none font-semibold text-cafe-900 no-underline hover:text-cafe-900"
            >
              <span aria-hidden="true" className={backLinkSpanClass}>
                ←
              </span>{" "}
              <span className={backLinkSpanClass}>Voltar ao site</span>
            </Link>
          </div>
        </header>

        <Reveal as="main" initiallyVisible className="px-0 pt-28 pb-32 lte900:py-16">
          <div className={wrap}>
            <div className={cn(grid12, "items-start gap-y-12 lte900:gap-y-8")}>
              <aside
                className={cn("sticky top-12 col-[1/span_4] flex flex-col gap-0", fullOnMobile)}
              >
                <p className="mb-6 text-[12px] font-semibold tracking-[.18em] text-argila-500 uppercase">
                  Candidatura · Turma fundadora
                </p>
                <h1 className="max-w-[8em] font-serif text-[56px] leading-[1.04] font-normal tracking-[-.01em] text-cafe-900 lte900:text-[38px]">
                  Queremos conhecer você.
                </h1>
                <p className="mt-8 max-w-[24em] text-[18px] leading-[1.6] text-cafe-900">
                  Conte um pouco sobre quem você é, seus interesses e o que a trouxe até o Life Mama
                  Club.
                </p>
                <div className="mt-12 flex max-w-[24em] flex-col gap-3 border-t border-cafe-900/15 pt-6">
                  <p className={noteClass}>
                    A candidatura é gratuita, não gera cobrança e não garante admissão.
                  </p>
                  <p className={noteClass}>
                    As candidaturas são avaliadas individualmente. Informações sobre valores e
                    condições serão apresentadas às candidatas convidadas.
                  </p>
                </div>
              </aside>

              <ApplicationForm
                className={cn("col-[6/span_7] flex flex-col gap-10", fullOnMobile)}
              />
            </div>
          </div>
        </Reveal>

        <Reveal as="footer" className="bg-barro-700 px-0 py-10 text-white">
          <div className={cn(wrap, "flex flex-wrap items-center justify-between gap-x-8 gap-y-4")}>
            <p className="text-[13px] leading-[1.5] font-medium text-white">
              Life Mama. Tecnologia do cuidado para rotinas mais leves.
            </p>
          </div>
        </Reveal>
      </div>
    </ViewTransition>
  );
}
