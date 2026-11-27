import {
  displayMd,
  eyebrow,
  fullOnMobile,
  grid12,
  sectionPadding,
  wrap,
} from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

const pillars = [
  {
    number: "01 /",
    title: "Conectar",
    text: "Construir vínculos genuínos com mulheres que compartilham interesses, experiências e diferentes perspectivas.",
    column: "col-[1/span_4]",
  },
  {
    number: "02 /",
    title: "Desenvolver",
    text: "Ampliar conhecimentos, fortalecer projetos e abrir espaço para o crescimento pessoal e profissional.",
    column: "col-[5/span_4]",
  },
  {
    number: "03 /",
    title: "Experimentar",
    text: "Descobrir novos interesses, viver experiências e explorar outras possibilidades para a sua vida.",
    column: "col-[9/span_4]",
  },
];

export function ConnectionsSection() {
  return (
    <Reveal as="section" className={cn("bg-oliva-600 px-0 text-white", sectionPadding)}>
      <div className={cn(wrap, "flex flex-col items-center gap-0")}>
        <p className={cn(eyebrow, "mb-7 text-white")}>O que nos conecta</p>
        <h2 className={cn(displayMd, "max-w-[14em] text-center text-white")}>
          Conexões que ampliam a vida.
        </h2>
        <p className="mt-9 max-w-[34em] text-center text-[20px] leading-[1.6] text-white lte900:text-[19px]">
          Acreditamos no poder dos encontros que nos aproximam de novas perspectivas, despertam
          interesses e criam possibilidades que talvez não encontraríamos sozinhas.
        </p>
        <div className={cn(grid12, "mt-24 w-full items-start gap-y-10")}>
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={cn(
                "grid content-start gap-4 border-t border-white/30 pt-7",
                pillar.column,
                fullOnMobile,
              )}
            >
              <span className="font-serif text-[14px] font-normal tracking-[.08em] text-white/72">
                {pillar.number}
              </span>
              <h3 className="font-serif text-[30px] leading-[1.2] font-normal text-white">
                {pillar.title}
              </h3>
              <p className="max-w-[24em] text-[16px] leading-[1.65] text-white">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
