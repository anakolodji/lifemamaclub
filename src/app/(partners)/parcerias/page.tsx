import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";

import { PartnerFaq } from "@/components/partners/partner-faq";
import { PartnerFooter } from "@/components/partners/partner-footer";
import { PartnerHeader, partnerNavLinkClass } from "@/components/partners/partner-header";
import {
  buttonClass,
  container,
  display,
  eyebrow,
  prose,
  pullQuote,
  section,
  sectionSplit,
  sectionTitle,
  smallNote,
  splitBody,
  splitHeading,
} from "@/components/partners/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Parcerias & Colaborações — Life Mama Club",
  description: "Parcerias e colaborações com o Life Mama Club.",
};

export const viewport: Viewport = {
  themeColor: "#A64F3B",
};

const benefits = [
  {
    title: "Proximidade",
    text: "Oportunidades de apresentar sua proposta em um ambiente de encontros e interesses compartilhados.",
  },
  {
    title: "Experiência",
    text: "Possibilidades de transformar produtos, serviços e conceitos em vivências que podem ser experimentadas e compartilhadas.",
  },
  {
    title: "Relacionamento",
    text: "Conexões construídas por meio de experiências que favorecem a identificação e o diálogo.",
  },
  {
    title: "Cocriação",
    text: "Liberdade para desenvolver iniciativas originais, conectando os objetivos da marca aos interesses da comunidade.",
  },
];

const possibilities = [
  {
    title: "Patrocínio de experiências",
    text: "Associe sua marca a encontros e experiências do Life Mama Club nas áreas de wellness, esporte, criatividade, cultura, desenvolvimento e lifestyle. Formatos de presença e contrapartidas são definidos em conjunto.",
  },
  {
    title: "Ativações de marca",
    text: "Crie experiências que permitam apresentar e experimentar seus produtos ou serviços de forma sensorial, próxima e contextualizada.",
  },
  {
    title: "Marcas anfitriãs",
    text: "Abra as portas da sua empresa para receber uma experiência do Club. Hotéis, restaurantes, estúdios, espaços culturais, clínicas e boutiques podem se transformar em cenários de encontros.",
  },
  {
    title: "Experiências cocriadas",
    text: "Vamos construir algo que ainda não existe? Uma aula especial, oficina criativa, encontro com especialista ou vivência desenvolvida a partir do universo da sua marca.",
  },
  {
    title: "Produtos e descobertas",
    text: "Apresente produtos, lançamentos e serviços por meio de seleções especiais, gifting e experiências de experimentação que façam sentido para a comunidade.",
  },
  {
    title: "Benefícios para integrantes",
    text: "Crie oportunidades de relacionamento por meio de condições especiais, experiências exclusivas, serviços e benefícios para as integrantes.",
  },
  {
    title: "Parcerias de temporada",
    text: "Para empresas que desejam presença contínua, podemos conectar diferentes experiências, conteúdos e iniciativas ao longo de uma temporada.",
  },
  {
    title: "Projetos especiais",
    text: "Estamos abertas a projetos de educação, cultura, inovação, desenvolvimento feminino e impacto social quando existe afinidade de propósito e possibilidade de construção conjunta.",
  },
];

const universes = [
  "Bem-estar & Autocuidado",
  "Esporte & Movimento",
  "Moda, Beleza & Lifestyle",
  "Arte, Cultura & Criatividade",
  "Gastronomia & Hospitalidade",
  "Educação & Desenvolvimento",
  "Carreira, Negócios & Tecnologia",
  "Viagens & Novas Experiências",
];

const processSteps = [
  {
    title: "Apresente sua marca",
    text: "Preencha uma breve candidatura contando sobre sua empresa, suas ideias e o que gostaria de construir conosco.",
  },
  {
    title: "Curadoria e afinidade",
    text: "Nossa equipe avaliará a proposta, considerando o alinhamento com o Life Mama Club e as oportunidades de colaboração.",
  },
  {
    title: "Construção conjunta",
    text: "Quando identificarmos uma oportunidade, entraremos em contato para conversar sobre objetivos, possibilidades, formatos e condições.",
  },
  {
    title: "Experiência compartilhada",
    text: "Com a parceria formalizada, seguimos para o planejamento e a realização da iniciativa, respeitando cada marca e a comunidade.",
  },
];

const stepNumber = (index: number) => `${String(index + 1).padStart(2, "0")} /`;

const cardNumberClass = "block font-serif text-[14px] tracking-[.08em]";
const cardTitleClass = "m-0 mb-3.5 font-serif leading-[1.15] font-normal";
const cardTextClass = "m-0 text-[15px] leading-[1.65]";

export default function PartnershipsPage() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed top-2.5 left-2.5 z-200 -translate-y-[160%] bg-white px-3.5 py-2.5 text-cafe-900 focus:translate-none"
      >
        Ir para o conteúdo
      </a>

      <PartnerHeader
        dark
        nav={
          <>
            <Link href="/" prefetch={false} className={partnerNavLinkClass}>
              O Club
            </Link>
            <a href="#por-que" className={partnerNavLinkClass}>
              Por que colaborar
            </a>
            <a href="#possibilidades" className={partnerNavLinkClass}>
              Possibilidades
            </a>
            <a href="#como-funciona" className={partnerNavLinkClass}>
              Como funciona
            </a>
          </>
        }
        action={{
          href: "/candidatura-empresas",
          label: (
            <>
              Candidatar marca <span aria-hidden="true">→</span>
            </>
          ),
        }}
      />

      <main id="conteudo">
        <section className="min-h-[calc(100vh-88px)] bg-argila-500 text-white lte820:min-h-auto">
          <div
            className={cn(
              container,
              "grid min-h-[calc(100vh-88px)] grid-cols-12 items-center gap-8 py-18 lte820:min-h-auto lte820:grid-cols-1 lte820:gap-[46px] lte820:pt-[70px] lte820:pb-18",
            )}
          >
            <Reveal className="col-[1/span_6] lte820:col-1">
              <p className={cn(eyebrow, "text-white")}>
                Para marcas que acreditam no poder das conexões
              </p>
              <h1 className={display}>Marcas que fazem parte da experiência.</h1>
              <p className="m-0 mt-7 max-w-[27em] font-serif text-[clamp(19px,2vw,24px)] leading-[1.5] font-normal">
                <em>
                  Algumas conexões vão além do encontro. Elas criam histórias, despertam descobertas
                  e permanecem.
                </em>
              </p>
              <p className="m-0 mt-6 max-w-[39em] text-[17px]">
                O Life Mama Club conecta mulheres, experiências e marcas que acreditam no valor das
                relações humanas. Convidamos empresas a participar desse universo por meio de
                ativações, encontros, experiências cocriadas e iniciativas que aproximam marcas de
                pessoas de maneira genuína e significativa.
              </p>
              <p className="m-0 mt-6 max-w-[39em] text-[17px]">
                Mais do que apresentar produtos ou serviços, queremos criar oportunidades para que
                sua marca seja conhecida, experimentada e lembrada pelo que proporciona.
              </p>
              <div className="mt-[42px] flex flex-wrap items-center gap-x-8 gap-y-[22px]">
                <Link href="/candidatura-empresas" className={buttonClass("light")}>
                  Quero ser uma marca parceira <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="#possibilidades"
                  className="inline-flex items-center gap-2 font-bold no-underline [&>span]:border-b [&>span]:border-current"
                >
                  <span>Conheça as possibilidades</span> <span aria-hidden="true">↓</span>
                </a>
              </div>
            </Reveal>
            <Reveal
              as="figure"
              className="relative col-[8/span_5] h-[min(680px,72vh)] overflow-hidden bg-oliva-600 lte820:col-1 lte820:h-[520px] lte430:h-[420px]"
            >
              <Image
                src="/assets/community-roundtable.jpg"
                alt="Mulheres reunidas em uma conversa ao redor de uma mesa"
                fill
                sizes="(max-width: 820px) 100vw, 40vw"
                loading="eager"
                className="block object-cover"
              />
            </Reveal>
          </div>
        </section>

        <section id="essencia" className={section}>
          <div className={cn(container, sectionSplit)}>
            <Reveal className={splitHeading}>
              <p className={cn(eyebrow, "text-argila-500")}>Nossa essência</p>
              <h2 className={sectionTitle}>
                Uma comunidade de mulheres. Um universo de possibilidades.
              </h2>
            </Reveal>
            <Reveal className={cn(splitBody, prose)}>
              <p>
                O Life Mama Club é uma comunidade privada para mães que desejam cultivar conexões
                valiosas, desenvolver projetos, ampliar perspectivas e experimentar diferentes
                dimensões da vida.
              </p>
              <p>Reunimos mulheres com diferentes trajetórias, interesses, talentos e ambições.</p>
              <p>
                Mulheres que empreendem, lideram, criam, trabalham, aprendem, se movimentam e seguem
                descobrindo novas formas de viver.
              </p>
              <p>A maternidade é o elo que as aproxima, mas não limita suas identidades.</p>
              <p>
                E é justamente nessa diversidade de interesses que surgem oportunidades para marcas
                que desejam construir relações mais próximas e relevantes.
              </p>
              <p className={cn(pullQuote, "mt-0")}>
                <strong>
                  Acreditamos que uma marca pode fazer parte da vida das pessoas antes mesmo de
                  fazer parte de suas escolhas.
                </strong>
              </p>
            </Reveal>
          </div>
        </section>

        <section id="por-que" className={cn(section, "bg-argila-500 text-white")}>
          <div className={container}>
            <div className={sectionSplit}>
              <Reveal className={splitHeading}>
                <p className={cn(eyebrow, "text-white")}>Por que estar conosco</p>
                <h2 className={sectionTitle}>Presença com significado. Conexões com intenção.</h2>
              </Reveal>
              <Reveal className={cn(splitBody, prose)}>
                <p>
                  Vivemos cercadas por mensagens, ofertas e estímulos. Mas aquilo que realmente nos
                  marca costuma nascer de uma experiência.
                </p>
                <p>
                  Um lugar que descobrimos. Um produto que experimentamos. Uma conversa que
                  transforma nossa percepção. Um encontro que desperta novas possibilidades.
                </p>
                <p>
                  No Life Mama Club, buscamos criar oportunidades para que marcas participem desses
                  momentos de maneira natural, relevante e cuidadosamente pensada.
                </p>
              </Reveal>
            </div>
            <Reveal
              aria-label="Benefícios para marcas"
              className="mt-18 grid grid-cols-4 gap-px bg-white/28 lte1080:grid-cols-2 lte820:mt-12 lte820:grid-cols-1"
            >
              {benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="min-h-[270px] bg-argila-500 p-[34px] lte820:min-h-auto"
                >
                  <span className={cn(cardNumberClass, "mb-[42px]")}>{stepNumber(index)}</span>
                  <h3 className={cn(cardTitleClass, "text-[27px]")}>{benefit.title}</h3>
                  <p className={cardTextClass}>{benefit.text}</p>
                </article>
              ))}
            </Reveal>
            <Reveal as="p" className={cn(pullQuote, "mt-[34px]")}>
              <strong>
                Porque a presença de uma marca ganha outro significado quando ela contribui para a
                experiência.
              </strong>
            </Reveal>
          </div>
        </section>

        <section id="possibilidades" className={section}>
          <div className={container}>
            <div className={sectionSplit}>
              <Reveal className={splitHeading}>
                <p className={cn(eyebrow, "text-argila-500")}>Possibilidades de parceria</p>
                <h2 className={sectionTitle}>
                  Há muitas formas de construir algo especial juntas.
                </h2>
              </Reveal>
              <Reveal className={cn(splitBody, prose)}>
                <p>Cada marca tem sua essência. Cada experiência, seu propósito.</p>
                <p>
                  Por isso, acreditamos em parcerias flexíveis, criativas e construídas a partir de
                  interesses compartilhados.
                </p>
              </Reveal>
            </div>
            <Reveal className="mt-18 grid grid-cols-2 gap-px border border-cafe-900/16 bg-cafe-900/16 lte820:mt-12 lte820:grid-cols-1">
              {possibilities.map((possibility, index) => (
                <article
                  key={possibility.title}
                  className="min-h-[340px] bg-areia-100 p-[42px] lte820:min-h-auto lte820:px-[26px] lte820:py-8"
                >
                  <span className={cn(cardNumberClass, "mb-14 text-argila-500 lte820:mb-[34px]")}>
                    {stepNumber(index)}
                  </span>
                  <h3 className={cn(cardTitleClass, "text-[31px]")}>{possibility.title}</h3>
                  <p className={cardTextClass}>{possibility.text}</p>
                </article>
              ))}
            </Reveal>
            <Reveal className="mt-[54px] flex flex-wrap items-center gap-x-10 gap-y-6">
              <Link href="/candidatura-empresas" className={buttonClass()}>
                Quero apresentar uma proposta <span aria-hidden="true">→</span>
              </Link>
              <p className={smallNote}>
                Cada colaboração é avaliada individualmente. Formatos, investimentos, entregas e
                contrapartidas são definidos conforme os objetivos e as características de cada
                parceria.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="universos" className={cn(section, "bg-oliva-600 text-white")}>
          <div className={container}>
            <div className={sectionSplit}>
              <Reveal className={splitHeading}>
                <p className={cn(eyebrow, "text-white")}>Universos que se conectam</p>
                <h2 className={sectionTitle}>
                  A vida não acontece em uma única dimensão. Nossas parcerias também não.
                </h2>
              </Reveal>
              <Reveal className={cn(splitBody, prose)}>
                <p>
                  Buscamos marcas que possam contribuir com os diferentes interesses que fazem parte
                  da vida das mulheres.
                </p>
                <p>
                  Não é necessário que sua empresa tenha a maternidade como foco. O que valorizamos
                  é a conexão entre os valores da marca, aquilo que ela oferece e as possibilidades
                  que podemos proporcionar à comunidade.
                </p>
              </Reveal>
            </div>
            <Reveal
              as="ul"
              className="m-0 mt-[70px] grid list-none grid-cols-4 gap-0 border-t border-white/34 p-0 lte1080:grid-cols-2 lte820:mt-12 lte820:grid-cols-1"
            >
              {universes.map((universe) => (
                <li
                  key={universe}
                  className="min-h-[145px] border-b border-white/34 py-7 pr-5 pl-0 font-serif text-[24px] leading-[1.2]"
                >
                  {universe}
                </li>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="curadoria" className={cn(section, "bg-white")}>
          <div className={cn(container, sectionSplit)}>
            <Reveal
              as="figure"
              className="relative col-[1/span_6] h-[650px] overflow-hidden bg-oliva-600 lte820:col-1 lte820:h-[480px] lte430:h-[420px]"
            >
              <Image
                src="/assets/creative-florist.jpg"
                alt="Mulher preparando flores em uma oficina criativa"
                fill
                sizes="(max-width: 820px) 100vw, 50vw"
                className="block object-cover"
              />
            </Reveal>
            <Reveal className="col-[8/span_5] self-center lte820:col-1">
              <p className={cn(eyebrow, "text-argila-500")}>Nossa curadoria</p>
              <h2 className={sectionTitle}>
                Marcas que compartilham mais do que um espaço. Compartilham valores.
              </h2>
              <div className={cn(prose, "mt-[34px]")}>
                <p>Acreditamos que as melhores parcerias acontecem quando existe afinidade.</p>
                <p>
                  Por isso, cada proposta passa por uma curadoria que considera a essência da marca,
                  a relevância de sua contribuição e a qualidade da experiência que podemos
                  construir.
                </p>
                <p>
                  Valorizamos empresas que respeitam as pessoas, cuidam daquilo que oferecem e
                  compreendem que relações significativas são construídas com atenção e
                  consistência.
                </p>
                <p>
                  Há espaço para marcas consolidadas, negócios independentes e novas iniciativas. O
                  tamanho da empresa não define o valor de sua contribuição.
                </p>
              </div>
              <p className={cn(pullQuote, "mt-[34px]")}>
                <strong>Mais importante do que estar presente é fazer sentido estar ali.</strong>
              </p>
            </Reveal>
          </div>
        </section>

        <section id="como-funciona" className={section}>
          <div className={container}>
            <div className={sectionSplit}>
              <Reveal className={splitHeading}>
                <p className={cn(eyebrow, "text-argila-500")}>Como funciona</p>
                <h2 className={sectionTitle}>Toda parceria começa com uma conversa.</h2>
              </Reveal>
              <Reveal className={cn(splitBody, prose)}>
                <p>
                  Um processo simples para conhecermos sua marca, identificarmos afinidades e
                  construirmos uma possibilidade em conjunto.
                </p>
              </Reveal>
            </div>
            <Reveal className="mt-18 grid grid-cols-4 gap-8 lte1080:grid-cols-2 lte820:mt-12 lte820:grid-cols-1">
              {processSteps.map((step, index) => (
                <article key={step.title} className="border-t border-cafe-900/25 pt-7">
                  <span className={cn(cardNumberClass, "mb-9 text-argila-500")}>
                    {stepNumber(index)}
                  </span>
                  <h3 className={cn(cardTitleClass, "text-[27px]")}>{step.title}</h3>
                  <p className={cardTextClass}>{step.text}</p>
                </article>
              ))}
            </Reveal>
            <Reveal as="p" className={smallNote}>
              A candidatura é gratuita e não representa compromisso comercial ou garantia de
              aprovação.
            </Reveal>
          </div>
        </section>

        <section id="convite" className={cn(section, "bg-argila-500 text-center text-white")}>
          <Reveal className={container}>
            <p className={cn(eyebrow, "text-white")}>Convite final</p>
            <h2 className={cn(sectionTitle, "mx-auto max-w-[13em]")}>
              Sua marca tem algo especial para compartilhar?
            </h2>
            <div className={cn(prose, "mx-auto mt-[34px] mb-0 max-w-[700px]")}>
              <p>
                Talvez seja um espaço que merece ser descoberto. Um produto que pode fazer parte de
                novos hábitos. Uma experiência que desperta interesses.
              </p>
              <p>Ou uma ideia que ainda não encontrou o encontro certo para acontecer.</p>
              <p>
                <strong>
                  Queremos conhecer sua marca e descobrir o que podemos construir juntas.
                </strong>
              </p>
              <p>
                Porque as melhores conexões não são apenas aquelas que aproximam pessoas e marcas.
                São aquelas que criam novas possibilidades para todos que fazem parte.
              </p>
            </div>
            <Link href="/candidatura-empresas" className={buttonClass("light", "mt-[42px]")}>
              Quero ser uma marca parceira <span aria-hidden="true">→</span>
            </Link>
            <p className={smallNote}>
              Apresente sua proposta para a curadoria de parcerias do Life Mama Club.
            </p>
          </Reveal>
        </section>

        <section id="faq" className={cn(section, "bg-white")}>
          <div className={container}>
            <Reveal className="text-center">
              <p className={cn(eyebrow, "text-argila-500")}>Perguntas frequentes</p>
              <h2 className={cn(sectionTitle, "mx-auto max-w-[13em]")}>
                O que sua marca talvez queira saber.
              </h2>
            </Reveal>
            <Reveal className="mx-auto mt-16 mb-0 max-w-[900px] border-t border-cafe-900/16">
              <PartnerFaq />
            </Reveal>
          </div>
        </section>
      </main>

      <PartnerFooter />
    </>
  );
}
