"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    question: "Minha empresa precisa ser voltada exclusivamente para mães?",
    answer:
      "Não. O Life Mama Club reúne mulheres com interesses que vão muito além da maternidade. Buscamos empresas que se conectem com esses diferentes universos e possam contribuir com experiências relevantes.",
  },
  {
    question: "É possível apoiar apenas uma experiência?",
    answer:
      "Sim. As parcerias podem acontecer em uma edição específica ou fazer parte de projetos de maior duração.",
  },
  {
    question: "Posso oferecer meu espaço para receber o Club?",
    answer:
      "Sim. Estamos abertas a conhecer espaços que possam receber encontros, oficinas, experiências e atividades da comunidade.",
  },
  {
    question: "Toda parceria exige investimento financeiro?",
    answer:
      "Não necessariamente. Podemos avaliar patrocínio, fornecimento de produtos e serviços, cessão de espaços e cocriação. As condições são definidas conforme cada projeto.",
  },
  {
    question: "Minha marca pode propor uma experiência própria?",
    answer:
      "Sim. Gostamos de conhecer novas ideias e formatos que tragam valor para a comunidade e tenham afinidade com a proposta do Club.",
  },
  {
    question: "Como são definidas as contrapartidas?",
    answer:
      "As entregas e condições comerciais são desenvolvidas individualmente, considerando objetivos, escopo, formato da parceria e recursos envolvidos.",
  },
  {
    question: "O envio da candidatura garante uma parceria?",
    answer:
      "Não. Todas as propostas passam por curadoria, e a realização depende de alinhamento, disponibilidade e viabilidade.",
  },
];

/** Questions as native disclosure widgets; opening one closes the others. */
export function PartnerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {QUESTIONS.map(({ question, answer }, index) => (
        <details
          key={question}
          open={openIndex === index}
          onToggle={(event) => {
            if (event.currentTarget.open) setOpenIndex(index);
            else if (openIndex === index) setOpenIndex(null);
          }}
          className="group border-b border-cafe-900/16"
        >
          <summary className="flex min-h-[82px] cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-bold after:flex-[0_0_auto] after:font-serif after:text-[28px] after:font-normal after:content-['+'] group-open:after:content-['−'] [&::-webkit-details-marker]:hidden">
            {question}
          </summary>
          <p className="mx-0 mt-[-2px] mb-7 max-w-[730px] text-cafe-600">{answer}</p>
        </details>
      ))}
    </>
  );
}
