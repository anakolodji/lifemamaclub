import { ButtonLink } from "@/components/club/button-link";
import {
  displayLg,
  eyebrow,
  fullOnMobile,
  grid12,
  sectionPadding,
  wrap,
} from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

const steps = [
  {
    number: "01 /",
    title: "Candidate-se",
    text: "Conte sobre seu momento de vida, seus interesses e o que busca na comunidade.",
  },
  {
    number: "02 /",
    title: "Conheça o processo",
    text: "Nossa equipe analisará sua candidatura considerando a afinidade com a proposta e a composição da turma. Poderá haver um convite para uma breve conversa.",
  },
  {
    number: "03 /",
    title: "Receba seu convite",
    text: "Havendo alinhamento e vagas disponíveis, você receberá as informações sobre assinatura e condições de adesão.",
  },
  {
    number: "04 /",
    title: "Faça parte",
    text: "Após sua confirmação, você poderá começar a participar da comunidade e acessar os benefícios da sua assinatura.",
  },
];

export function ApplicationSection() {
  return (
    <Reveal
      as="section"
      id="candidatura"
      className={cn("bg-argila-500 px-0 text-white", sectionPadding)}
    >
      <div className={wrap}>
        <div className={cn(grid12, "items-start gap-y-8 lte900:gap-y-10")}>
          <div className={cn("col-[1/span_7]", fullOnMobile)}>
            <p className={cn(eyebrow, "mb-6 text-white")}>Entrada por candidatura</p>
            <h2 className={cn(displayLg, "max-w-[10em] text-white")}>
              Pertencer começa com uma conexão.
            </h2>
          </div>
          <div
            className={cn(
              "col-[8/span_5] flex flex-col gap-5 pt-[52px] text-[19px] leading-[1.6] text-white",
              fullOnMobile,
            )}
          >
            <p>O Life Mama Club é uma comunidade com curadoria de entrada.</p>
            <p>
              Queremos reunir mulheres que se identifiquem com o propósito do Club, valorizem
              relações genuínas e desejem contribuir para uma experiência coletiva significativa.
            </p>
          </div>
        </div>

        <ol className="m-0 mt-24 grid list-none grid-cols-4 gap-x-8 gap-y-10 p-0 lte900:grid-cols-1">
          {steps.map((step) => (
            <li
              key={step.title}
              className="grid content-start gap-3.5 border-t border-white/30 pt-6"
            >
              <span className="font-serif text-[14px] font-normal tracking-[.08em] text-white/78">
                {step.number}
              </span>
              <h3 className="font-serif text-[26px] leading-[1.2] font-normal text-white">
                {step.title}
              </h3>
              <p className="text-[16px] leading-[1.65] text-white">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20 flex flex-wrap items-center gap-x-12 gap-y-6 lte900:flex-col">
          <ButtonLink variant="inverse" href="/candidatura" arrow>
            Quero me candidatar
          </ButtonLink>
          <p className="text-[14px] leading-[1.5] font-medium text-white">
            A candidatura é gratuita, não gera cobrança e não garante admissão.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
