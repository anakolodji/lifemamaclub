import { ButtonLink } from "@/components/club/button-link";
import { EditorialCaption, EditorialPhoto } from "@/components/club/editorial-photo";
import { HomeHeader } from "@/components/club/home/home-header";
import { eyebrow, fullOnMobile, grid12, wrap } from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export function HeroSection() {
  return (
    <Reveal
      as="section"
      id="topo"
      initiallyVisible
      className="relative bg-argila-500 px-0 pt-48 pb-32 text-white lte900:pt-32 lte900:pb-16"
    >
      <HomeHeader />

      <div className={wrap}>
        <div className={cn(grid12, "items-center gap-y-12 lte900:gap-y-10")}>
          <div className={cn("col-[1/span_6] flex flex-col gap-0", fullOnMobile)}>
            <p className={cn(eyebrow, "mb-9 leading-[1.2] text-white")}>
              Life Mama Club · Turma fundadora
            </p>
            <h1 className="max-w-[9.5em] font-serif text-[80px] leading-[.98] font-normal tracking-[-.015em] text-white lte900:text-[44px]">
              Você tem sonhos que merecem espaço.
            </h1>
            <p className="mt-7 font-serif text-[28px] leading-[1.25] font-normal text-white italic lte900:text-[22px]">
              E não precisa caminhar sozinha.
            </p>
            <p className="mt-11 max-w-[30em] text-[22px] leading-[1.5] text-white lte900:text-[19px]">
              Uma comunidade para mães que desejam cultivar conexões valiosas, ampliar perspectivas
              e viver novas experiências enquanto desenvolvem suas diferentes dimensões pessoais e
              profissionais.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 lte900:flex-col">
              <ButtonLink variant="inverse" href="/candidatura" arrow>
                Candidate-se à turma fundadora
              </ButtonLink>
              <a
                href="#club"
                className="group inline-flex min-h-14 items-center gap-2 font-ui text-[16px] leading-none font-semibold text-white no-underline hover:text-white focus-visible:outline-white"
              >
                <span className="border-b border-transparent pb-[3px] transition-[border-color] duration-350 ease-[ease] group-hover:border-current">
                  Descubra o Club
                </span>{" "}
                <span
                  aria-hidden="true"
                  className="border-b border-transparent pb-[3px] transition-[border-color] duration-350 ease-[ease] group-hover:border-current"
                >
                  ↓
                </span>
              </a>
            </div>
            <p className="mt-7 max-w-[34em] text-[14px] leading-[1.5] font-medium text-white">
              Uma comunidade com curadoria de entrada e experiências cuidadosamente pensadas.
            </p>
          </div>
          <EditorialPhoto
            src="/assets/community-roundtable.jpg"
            label="Fotografia editorial: mulheres conversando ao redor de uma mesa elegante, luz natural"
            sizes="(max-width: 900px) 100vw, 608px"
            eager
            className={cn("col-[7/span_6] mt-24 h-[720px]", fullOnMobile)}
          >
            <EditorialCaption>
              Fotografia editorial · mulheres conversando ao redor de uma mesa, luz natural
            </EditorialCaption>
          </EditorialPhoto>
        </div>
        <div aria-hidden="true" className="mt-24 flex items-center gap-4 text-white lte900:hidden">
          <span className="block h-14 w-px bg-white/60" />
          <span className="text-[11px] font-semibold tracking-[.18em] uppercase">
            Role para descobrir
          </span>
        </div>
      </div>
    </Reveal>
  );
}
