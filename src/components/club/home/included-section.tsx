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

const benefits = [
  {
    number: "01.",
    title: "Dois encontros online por mês",
    paragraphs: [
      "Um encontro com especialista, dedicado a temas de desenvolvimento pessoal, profissional e bem-estar.",
      "Um encontro de trocas entre integrantes, com mediação, para compartilhar experiências, desafios e oportunidades de colaboração.",
    ],
  },
  {
    number: "02.",
    title: "Uma comunidade com conexões intencionais",
    paragraphs: [
      "Entrada por candidatura, apresentações facilitadas e um espaço de interação entre mulheres com diferentes experiências, interesses e trajetórias.",
    ],
  },
  {
    number: "03.",
    title: "Aplicativo Life Mama incluído",
    paragraphs: [
      "A tecnologia do cuidado para apoiar sua organização, seu autocuidado e sua rotina entre os encontros.",
    ],
  },
  {
    number: "04.",
    title: "Acesso prioritário às experiências presenciais",
    paragraphs: [
      "Antecedência nas inscrições e valores especiais para integrantes, de acordo com cada edição.",
    ],
  },
];

const benefitTextClass = "max-w-[30em] text-[16px] leading-[1.65] text-cafe-900";

export function IncludedSection() {
  return (
    <Reveal
      as="section"
      id="incluido"
      className={cn("bg-white px-0 text-cafe-900", sectionPadding)}
    >
      <div className={wrap}>
        <div className={cn(grid12, "items-start gap-y-6 lte900:gap-y-10")}>
          <div className={cn("col-[1/span_7]", fullOnMobile)}>
            <p className={cn(eyebrow, "mb-6 text-argila-500")}>O que a assinatura inclui</p>
            <h2 className={cn(displayMd, "max-w-[13em] text-cafe-900")}>
              Sua comunidade. Seu espaço de crescimento.
            </h2>
          </div>
          <p
            className={cn(
              "col-[8/span_5] pt-[52px] text-[22px] leading-[1.5] text-cafe-900 lte900:text-[19px]",
              fullOnMobile,
            )}
          >
            Uma experiência contínua que combina encontros, conexões e tecnologia.
          </p>
        </div>

        <div className="mt-20 flex flex-col">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="grid grid-cols-[4em_minmax(0,22em)_minmax(0,1fr)] items-start gap-x-12 border-t border-cafe-900/15 px-0 py-10 last:border-b lte900:grid-cols-1 lte900:gap-y-3"
            >
              <span className="pt-2.5 font-serif text-[14px] font-normal tracking-[.08em] text-oliva-600">
                {benefit.number}
              </span>
              <h3 className="font-serif text-[30px] leading-[1.2] font-normal text-cafe-900">
                {benefit.title}
              </h3>
              {benefit.paragraphs.length > 1 ? (
                <div className={cn("flex flex-col gap-3.5", benefitTextClass)}>
                  {benefit.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className={benefitTextClass}>{benefit.paragraphs[0]}</p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-[40em] font-serif text-[16px] leading-[1.6] font-normal text-cafe-600 italic">
          Os ingressos para as experiências presenciais não estão incluídos na mensalidade e são
          adquiridos separadamente.
        </p>
      </div>
    </Reveal>
  );
}
