"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

const TESTIMONIALS = [
  "“Foi um espaço para desacelerar, conversar sem pressa e lembrar que não precisamos atravessar todas as fases sozinhas.”",
  "“Saí com novas referências, ideias possíveis e a sensação boa de ter encontrado mulheres com quem eu realmente queria continuar a conversa.”",
  "“A experiência abriu espaço para uma descoberta que eu vinha adiando — e fez isso de um jeito leve, bonito e muito humano.”",
];

const SWIPE_THRESHOLD_PX = 48;

const arrowButtonClass =
  "grid h-[52px] w-[52px] cursor-pointer place-items-center rounded-full border border-white/70 bg-transparent text-[21px] text-white hover:bg-white hover:text-argila-500";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const pointerStart = useRef<number | null>(null);

  function show(index: number) {
    setActive((index + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(active - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      show(active + 1);
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < SWIPE_THRESHOLD_PX) return;
    show(active + (distance < 0 ? 1 : -1));
  }

  return (
    <Reveal
      as="section"
      id="depoimentos"
      initiallyVisible
      aria-labelledby="testimonials-title"
      className="bg-argila-500 px-0 py-32 text-white"
    >
      <div className="mx-auto box-border w-full max-w-[1280px] px-16 tablet:px-10 lte900:px-6">
        <div className="mb-18 grid grid-cols-12 items-end gap-8 lte900:mb-12 lte900:grid-cols-1 lte900:gap-7">
          <div className="col-[1/span_7] lte900:col-span-full lte900:w-full lte900:max-w-full lte900:text-left">
            <p className="mb-[22px] text-[12px] font-semibold tracking-[.18em] uppercase">
              Vozes da comunidade
            </p>
            <h2
              id="testimonials-title"
              className="max-w-[10em] font-serif text-[54px] leading-[1.06] font-normal tracking-[-.01em] lte900:max-w-full lte900:text-[clamp(30px,9vw,40px)] lte900:leading-[1.12]"
            >
              O que fica depois de cada encontro.
            </h2>
          </div>
        </div>
        <div
          role="region"
          aria-roledescription="carrossel"
          aria-labelledby="testimonials-title"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={(event) => {
            pointerStart.current = event.clientX;
          }}
          onPointerUp={onPointerUp}
          className="touch-pan-y border-y border-white/32 px-0 pt-16 pb-10 outline-none focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white focus-visible:outline-solid"
        >
          <div aria-live="polite">
            {TESTIMONIALS.map((quote, index) => {
              const shown = index === active;
              return (
                <article
                  key={quote}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${TESTIMONIALS.length}`}
                  aria-hidden={!shown}
                  hidden={!shown}
                  className={cn(
                    shown
                      ? "grid animate-testimonial-in grid-cols-12 gap-8 lte900:grid-cols-1 lte900:gap-6"
                      : "hidden",
                  )}
                >
                  <blockquote className="col-[1/span_9] mx-10 my-[1em] font-serif text-[46px] leading-[1.22] font-normal tracking-[-.01em] lte900:col-span-full lte900:m-0 lte900:w-full lte900:max-w-full lte900:min-w-0 lte900:text-[clamp(28px,8vw,33px)]">
                    {quote}
                  </blockquote>
                  <p className="col-[10/span_3] flex flex-col gap-[7px] self-end text-[13px] leading-[1.5] lte900:col-span-full lte900:w-full lte900:max-w-full lte900:min-w-0 lte900:wrap-anywhere">
                    Participante do Life Mama Experience Wellness Edition
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-14 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            <div className="flex gap-2.5">
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => show(active - 1)}
                className={arrowButtonClass}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => show(active + 1)}
                className={arrowButtonClass}
              >
                →
              </button>
            </div>
            <div
              role="group"
              aria-label="Escolher depoimento"
              className="flex items-center gap-2.5"
            >
              {TESTIMONIALS.map((quote, index) => (
                <button
                  key={quote}
                  type="button"
                  aria-label={`Mostrar depoimento ${index + 1}`}
                  aria-current={index === active}
                  onClick={() => show(index)}
                  className={cn(
                    "h-2 cursor-pointer rounded-full border-0 p-0",
                    index === active ? "w-7 bg-white" : "w-2 bg-white/42",
                  )}
                />
              ))}
            </div>
            <p
              aria-hidden="true"
              className="justify-self-end text-[12px] font-semibold tracking-[.12em]"
            >
              <span>{String(active + 1).padStart(2, "0")}</span> /{" "}
              {String(TESTIMONIALS.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
