import { ExperienceCategories } from "@/components/club/home/experience-categories";
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

export function ExperiencesSection() {
  return (
    <Reveal
      as="section"
      id="experiencia"
      className={cn("bg-areia-100 px-0 text-cafe-900", sectionPadding)}
    >
      <div className={wrap}>
        <div className={cn(grid12, "items-start gap-y-8 lte900:gap-y-10")}>
          <div className={cn("col-[1/span_7]", fullOnMobile)}>
            <p className={cn(eyebrow, "mb-6 text-oliva-600")}>Experiências</p>
            <h2 className={cn(displayMd, "max-w-[14em] text-cafe-900")}>
              Novas experiências. Diferentes formas de se encontrar.
            </h2>
          </div>
          <div
            className={cn(
              "col-[8/span_5] flex flex-col gap-5 pt-[52px] text-[17px] leading-[1.65] text-cafe-900",
              fullOnMobile,
            )}
          >
            <p>Nem todo encontro precisa ter o mesmo formato para criar uma conexão verdadeira.</p>
            <p>
              Nossa programação reúne diferentes dimensões da vida, abrindo espaço para aprender,
              experimentar, compartilhar e descobrir.
            </p>
          </div>
        </div>

        <ExperienceCategories />

        <div className={cn(grid12, "mt-24 items-start gap-y-6 lte900:gap-y-10")}>
          <p
            className={cn(
              "col-[1/span_6] max-w-[16em] font-serif text-[28px] leading-[1.3] font-normal text-cafe-900",
              fullOnMobile,
            )}
          >
            A proposta inicial é realizar uma experiência presencial a cada dois meses.
          </p>
          <div
            className={cn(
              "col-[8/span_5] flex flex-col gap-3.5 pt-2 text-[15px] leading-[1.6] text-cafe-600",
              fullOnMobile,
            )}
          >
            <p>Cada edição terá programação, local, vagas e investimento próprios.</p>
            <p>
              As integrantes do Club têm acesso prioritário e antecipado às inscrições, com valor
              especial na compra dos ingressos de cada experiência presencial.
            </p>
            <p>Os ingressos presenciais são adquiridos separadamente da assinatura.</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
