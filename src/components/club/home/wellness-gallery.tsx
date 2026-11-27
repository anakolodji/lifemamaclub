"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";

import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

const PHOTOS = [
  "008",
  "022",
  "044",
  "048",
  "055",
  "1122",
  "1287",
  "1382",
  "1386",
  "1394",
  "1470",
  "150",
  "1568",
  "1650",
  "1658",
  "190",
  "311",
  "411",
  "702",
  "815",
].map((id) => `/assets/EAFoto_LifeMama_Experience_WellnessEdition_31.10.2026_${id}_AR.jpg`);

const VISIBLE_COUNT = 3;
const AUTOPLAY_INTERVAL_MS = 4000;
const SWIPE_THRESHOLD_PX = 48;
const ORDER = ["order-0", "order-1", "order-2"];

const pad = (value: number) => String(value).padStart(2, "0");
const wrapIndex = (index: number) => (index + PHOTOS.length) % PHOTOS.length;

const arrowButtonClass =
  "grid h-12 w-12 flex-[0_0_48px] cursor-pointer place-items-center rounded-full border border-white/70 bg-transparent text-[20px] text-white hover:bg-white hover:text-cafe-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lte600:h-[42px] lte600:w-[42px] lte600:basis-[42px]";

export function WellnessGallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Bumped on manual navigation so the autoplay countdown starts over.
  const [autoplayCycle, setAutoplayCycle] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const images = useRef<Array<HTMLImageElement | null>>([]);

  const visible = Array.from({ length: VISIBLE_COUNT }, (_, offset) => wrapIndex(active + offset));

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setActive((index) => wrapIndex(index + 1)),
      AUTOPLAY_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused, autoplayCycle]);

  // Every visible photo replays its entrance animation each time the carousel moves.
  useLayoutEffect(() => {
    for (let offset = 0; offset < VISIBLE_COUNT; offset += 1) {
      for (const animation of images.current[wrapIndex(active + offset)]?.getAnimations() ?? []) {
        animation.cancel();
        animation.play();
      }
    }
  }, [active]);

  function move(step: number) {
    setActive((index) => wrapIndex(index + step));
    setAutoplayCycle((cycle) => cycle + 1);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < SWIPE_THRESHOLD_PX) return;
    move(distance < 0 ? 1 : -1);
  }

  return (
    <Reveal
      as="section"
      id="experiencias-passadas"
      initiallyVisible
      aria-labelledby="past-title"
      className="bg-cafe-900 px-0 py-36 text-white"
    >
      <div className="mx-auto box-border w-full max-w-[1280px] px-16 tablet:px-10 lte900:px-6">
        <div className="mb-18 grid grid-cols-12 items-end gap-8 lte900:mb-12 lte900:grid-cols-1 lte900:gap-7">
          <div className="col-[1/span_6] lte900:col-span-full lte900:w-full lte900:max-w-full lte900:text-left">
            <p className="mb-[22px] text-[12px] font-semibold tracking-[.18em] uppercase">
              Life Mama Experience Wellness Edition 1
            </p>
            <h2
              id="past-title"
              className="max-w-[10em] font-serif text-[54px] leading-[1.06] font-normal tracking-[-.01em] lte900:max-w-full lte900:text-[clamp(30px,9vw,40px)] lte900:leading-[1.12]"
            >
              Encontros que deixam histórias para contar.
            </h2>
          </div>
        </div>
        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Fotos do Life Mama Experience Wellness Edition 1"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white focus-visible:outline-solid"
        >
          <div
            onPointerDown={(event) => {
              pointerStart.current = event.clientX;
            }}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              pointerStart.current = null;
            }}
            className="grid touch-pan-y grid-cols-3 gap-4 lte900:gap-2.5 lte600:gap-1.5"
          >
            {PHOTOS.map((src, index) => {
              const offset = visible.indexOf(index);
              const shown = offset !== -1;
              return (
                <figure
                  key={src}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${PHOTOS.length}`}
                  hidden={!shown}
                  className={cn(
                    "relative m-0 h-[clamp(220px,24vw,300px)] min-w-0 place-items-center overflow-hidden bg-white/7 lte600:h-40",
                    shown ? cn("grid", ORDER[offset]) : "hidden",
                  )}
                >
                  <Image
                    ref={(element) => {
                      images.current[index] = element;
                    }}
                    src={src}
                    alt={`Registro ${index + 1} do Life Mama Experience Wellness Edition 1`}
                    fill
                    sizes="(max-width: 900px) 33vw, 400px"
                    loading={index === 0 ? "eager" : "lazy"}
                    draggable={false}
                    className="block animate-photo-in object-contain object-center"
                  />
                </figure>
              );
            })}
          </div>
          <div className="mt-6 flex items-center justify-between lte600:mt-4">
            <div className="flex gap-2.5">
              <button
                type="button"
                aria-label="Foto anterior"
                onClick={() => move(-1)}
                className={arrowButtonClass}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Próxima foto"
                onClick={() => move(1)}
                className={arrowButtonClass}
              >
                →
              </button>
              <button
                type="button"
                aria-label={
                  paused ? "Retomar reprodução automática" : "Pausar reprodução automática"
                }
                aria-pressed={paused}
                onClick={() => setPaused((value) => !value)}
                className={arrowButtonClass}
              >
                {paused ? "▶" : "Ⅱ"}
              </button>
            </div>
            <p aria-live="off" className="text-[12px] font-semibold tracking-[.1em]">
              <span>
                {pad(active + 1)}–{pad(wrapIndex(active + 2) + 1)}
              </span>{" "}
              / {pad(PHOTOS.length)}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
