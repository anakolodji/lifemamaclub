"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    question: "O Life Mama Club é exclusivo para empreendedoras?",
    answer:
      "Não. A comunidade é voltada a mães com diferentes trajetórias profissionais e interesses, incluindo empreendedoras, profissionais e líderes. O que importa é a identificação com o propósito e a disposição de participar e contribuir.",
  },
  {
    question: "Preciso participar de todos os encontros?",
    answer:
      "Não. As integrantes poderão organizar sua participação conforme sua disponibilidade. Recomendamos a presença nos encontros para aproveitar melhor a experiência de comunidade.",
  },
  {
    question: "As experiências presenciais estão incluídas?",
    answer:
      "Não. As experiências presenciais terão ingressos vendidos separadamente. As integrantes terão prioridade de inscrição e condições especiais conforme cada edição.",
  },
  {
    question: "Como acontecem os encontros online?",
    answer:
      "Estão previstos dois encontros por mês: um com especialista e outro de trocas mediadas entre as participantes.",
  },
  {
    question: "A assinatura inclui o aplicativo Life Mama?",
    answer: "Sim. O acesso ao aplicativo Life Mama faz parte da assinatura do Club.",
  },
  {
    question: "Como funciona a candidatura?",
    answer:
      "Você preencherá um formulário para contar sobre seus interesses e objetivos. Nossa equipe avaliará a afinidade com a proposta e a disponibilidade de vagas antes de realizar os convites.",
  },
  {
    question: "Qual o valor da assinatura?",
    answer:
      "As informações sobre valores e condições de adesão serão apresentadas às candidatas convidadas para a turma fundadora.",
  },
];

/** One answer open at a time; the first starts open. */
export function FaqAccordion({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={className}>
      {QUESTIONS.map(({ question, answer }, index) => {
        const open = index === openIndex;
        return (
          <div key={question}>
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full cursor-pointer items-baseline justify-between gap-6 border-0 border-t border-cafe-900/15 bg-transparent px-0 py-[26px] text-left font-serif text-[22px] leading-[1.3] font-normal text-cafe-900"
              >
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="w-[1em] flex-none text-center font-ui text-[22px] leading-none text-cafe-600"
                >
                  {open ? "−" : "+"}
                </span>
              </button>
            </h3>
            {open && (
              <p className="max-w-[36em] pt-0 pr-24 pb-7 pl-0 text-[16px] leading-[1.65] text-cafe-900 lte900:pr-0">
                {answer}
              </p>
            )}
          </div>
        );
      })}
      <div className="border-t border-cafe-900/15" />
    </div>
  );
}
