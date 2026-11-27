import { ButtonLink } from "@/components/club/button-link";
import { EditorialCaption, EditorialPhoto } from "@/components/club/editorial-photo";
import { eyebrow, fullOnMobile, grid12, wrap } from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export function FoundingClassSection() {
  return (
    <Reveal as="section" className="bg-barro-700 px-0 py-40 text-white lte900:py-16">
      <div className={wrap}>
        <div className={cn(grid12, "items-center gap-y-12 lte900:gap-y-10")}>
          <EditorialPhoto
            src="/assets/community-hands.jpg"
            label="Fotografia marcante: pequeno grupo de mulheres reunidas, expressões espontâneas"
            sizes="(max-width: 900px) 100vw, 712px"
            className={cn("col-[1/span_7] h-[680px]", fullOnMobile)}
          >
            <EditorialCaption>Fotografia · mulheres reunidas, encontro verdadeiro</EditorialCaption>
          </EditorialPhoto>
          <div className={cn("col-[8/span_5] flex flex-col gap-0", fullOnMobile)}>
            <p className={cn(eyebrow, "mb-6 text-white")}>Turma fundadora</p>
            <h2 className="font-serif text-[56px] leading-[1.04] font-normal tracking-[-.01em] text-white lte900:text-[38px]">
              Algumas histórias começam com um encontro.
            </h2>
            <p className="mt-7 font-serif text-[26px] leading-[1.3] font-normal text-white italic lte900:text-[22px]">
              Estamos formando a turma fundadora do Life Mama Club.
            </p>
            <div className="mt-9 flex flex-col gap-5 text-[17px] leading-[1.65] text-white">
              <p>
                Um convite para fazer parte da construção de uma comunidade que acredita na potência
                das conexões, no valor das experiências e na possibilidade de continuar expandindo a
                própria vida.
              </p>
              <p>
                Para estar perto de mulheres que inspiram, trocar conhecimentos, viver novas
                descobertas e criar relações que façam sentido para você.
              </p>
            </div>
            <div className="mt-11">
              <ButtonLink variant="inverse" href="/candidatura" arrow>
                Candidate-se à turma fundadora
              </ButtonLink>
            </div>
            <p className="mt-6 max-w-[34em] text-[14px] leading-[1.5] font-medium text-white">
              As candidaturas serão avaliadas individualmente. Informações sobre valores e condições
              serão apresentadas às candidatas convidadas.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
