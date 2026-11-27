"use client";

import { useState } from "react";

import { EditorialPhoto } from "@/components/club/editorial-photo";
import { cn } from "@/lib/cn";

const categories = [
  {
    number: "01",
    title: "Wellness",
    text: "Movimento, pausas, autocuidado e práticas que convidam você a se reconectar consigo mesma.",
    caption: "Fotografia · mulheres praticando yoga, luz da manhã",
    label: "Fotografia: mulheres praticando yoga em um espaço com luz natural",
    photo: "/assets/wellness-movement.jpg",
    position: "center center",
  },
  {
    number: "02",
    title: "Esportes",
    text: "A oportunidade de experimentar modalidades, descobrir novas habilidades e movimentar o corpo em boa companhia.",
    caption: "Fotografia · atividade esportiva em grupo, ao ar livre",
    label: "Fotografia: mulheres em atividade esportiva ao ar livre",
    photo: "/assets/sport-tennis.jpg",
    position: "52% center",
  },
  {
    number: "03",
    title: "Hobbies & Criatividade",
    text: "Aquarela, cerâmica, culinária e experiências que despertam interesses e abrem espaço para novas descobertas.",
    caption: "Fotografia · oficina de cerâmica, mãos no barro",
    label: "Fotografia: oficina de cerâmica com mulheres trabalhando o barro",
    photo: "/assets/creative-ceramics.jpg",
    position: "center center",
  },
  {
    number: "04",
    title: "Carreira & Negócios",
    text: "Conversas, conhecimentos e conexões que ampliam perspectivas profissionais e podem dar origem a colaborações.",
    caption: "Fotografia · conversa sobre projetos, mesa de madeira",
    label: "Fotografia: mulheres em conversa sobre carreira e projetos",
    photo: "/assets/career-creative-projects.jpg",
    position: "center center",
  },
  {
    number: "05",
    title: "Cultura",
    text: "Arte, livros, encontros e conversas que enriquecem o repertório e ampliam a maneira de olhar o mundo.",
    caption: "Fotografia · visita a um espaço cultural",
    label: "Fotografia: mulheres em um ambiente cultural",
    photo: "/assets/culture-museum.jpg",
    position: "center center",
  },
];

export function ExperienceCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <div className="mt-20 grid grid-cols-[5fr_7fr] items-start gap-x-16 gap-y-12 lte900:grid-cols-1">
      <div role="tablist" aria-label="Categorias de experiências" className="flex flex-col">
        {categories.map((category, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={category.number}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex w-full cursor-pointer items-baseline gap-5 border-0 border-t border-cafe-900/15 bg-transparent px-0 py-[22px] text-left font-serif text-[26px] leading-[1.2] font-normal transition-[color] duration-350 ease-lmc last:border-b",
                selected ? "text-argila-500" : "text-cafe-600 hover:text-cafe-900",
              )}
            >
              <span className="min-w-[3em] text-[14px] tracking-[.08em] text-oliva-600">
                {category.number}
              </span>
              <span>{category.title}</span>
            </button>
          );
        })}
      </div>
      <div>
        <EditorialPhoto
          key={active.number}
          src={active.photo}
          label={active.label}
          objectPosition={active.position}
          sizes="(max-width: 900px) 100vw, 668px"
          className="h-[640px]"
        >
          <figcaption className="absolute inset-x-0 bottom-0 z-2 m-0 flex max-w-none flex-col gap-3.5 p-12 text-white">
            <span className="font-serif text-[14px] font-normal tracking-[.08em] text-white/78">
              {active.number} / {active.title}
            </span>
            <p className="text-[20px] leading-[1.5] text-white">{active.text}</p>
            <span className="mt-3 max-w-[26em] text-[12px] leading-[1.5] font-medium tracking-[.14em] text-white/78 uppercase">
              {active.caption}
            </span>
          </figcaption>
        </EditorialPhoto>
      </div>
    </div>
  );
}
