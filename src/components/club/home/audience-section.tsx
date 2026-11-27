import { EditorialCaption, EditorialPhoto } from "@/components/club/editorial-photo";
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

export function AudienceSection() {
  return (
    <Reveal as="section" className={cn("bg-areia-100 px-0 text-cafe-900", sectionPadding)}>
      <div className={wrap}>
        <div className={cn(grid12, "items-start gap-y-12 lte900:gap-y-10")}>
          <div className={cn("col-[1/span_6] flex flex-col gap-0 pt-6", fullOnMobile)}>
            <p className={cn(eyebrow, "mb-6 text-oliva-600")}>Para quem é</p>
            <h2 className={cn(displayMd, "max-w-[12em] text-cafe-900")}>
              Para mulheres que sabem que ainda há muito por viver.
            </h2>
            <div className="mt-10 flex max-w-[32em] flex-col gap-5 text-[17px] leading-[1.65] text-cafe-900">
              <p>
                O Life Mama Club é para mães empreendedoras, profissionais e líderes que desejam
                ampliar seu repertório, fortalecer relações e continuar desenvolvendo seus projetos
                e interesses.
              </p>
              <p>
                Para mulheres que reconhecem o valor de uma conversa, da troca de experiências e da
                construção de vínculos.
              </p>
              <p>
                Que querem encontrar tempo e companhia para cuidar de si, experimentar algo novo,
                compartilhar caminhos e descobrir outras possibilidades.
              </p>
              <p>
                Você não precisa estar em um momento específico da carreira ou ter todas as
                respostas.
              </p>
              <p>
                Precisa apenas estar disposta a participar, contribuir e construir relações com
                intenção.
              </p>
            </div>
            <blockquote className="m-0 mt-14 max-w-[20em] border-y border-cafe-900/15 px-0 py-8 font-serif text-[30px] leading-[1.3] font-normal text-cafe-900 lte900:text-[26px]">
              O que nos aproxima não é termos trajetórias iguais. É o desejo de continuar crescendo.
            </blockquote>
          </div>
          <EditorialPhoto
            src="/assets/culture-contemplation.jpg"
            label="Fotografia: mulher em momento de leitura e contemplação, em um ambiente cultural"
            objectPosition="70% center"
            sizes="(max-width: 900px) 100vw, 504px"
            className={cn("col-[8/span_5] h-[820px]", fullOnMobile)}
          >
            <EditorialCaption>Fotografia · leitura, movimento, contemplação</EditorialCaption>
          </EditorialPhoto>
        </div>
      </div>
    </Reveal>
  );
}
