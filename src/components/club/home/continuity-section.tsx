import { EditorialCaption, EditorialPhoto } from "@/components/club/editorial-photo";
import { displayMd, eyebrow, fullOnMobile, grid12, wrap } from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export function ContinuitySection() {
  return (
    <Reveal as="section" className="bg-areia-100 px-0 pt-0 pb-32 text-cafe-900 lte900:py-16">
      <div className={wrap}>
        <div className="border-t border-cafe-900/15 pt-32">
          <div className={cn(grid12, "items-center gap-y-12 lte900:gap-y-10")}>
            <EditorialPhoto
              src="/assets/creative-floral-workshop.jpg"
              label="Fotografia: mulheres conversando em um ambiente acolhedor, materiais naturais"
              sizes="(max-width: 900px) 100vw, 608px"
              className={cn("col-[1/span_6] h-[600px]", fullOnMobile)}
            >
              <EditorialCaption>
                Fotografia · mulheres conversando em ambiente acolhedor
              </EditorialCaption>
            </EditorialPhoto>
            <div className={cn("col-[8/span_5] flex flex-col gap-0", fullOnMobile)}>
              <p className={cn(eyebrow, "mb-6 text-oliva-600")}>Continuidade</p>
              <h2 className={cn(displayMd, "max-w-[11em] text-cafe-900")}>
                Mais do que encontros. Relações que continuam.
              </h2>
              <div className="mt-10 flex max-w-[30em] flex-col gap-5 text-[17px] leading-[1.65] text-cafe-900">
                <p>
                  Uma experiência pode ser o começo de uma amizade, uma parceria ou uma nova maneira
                  de enxergar a própria vida.
                </p>
                <p>
                  Por isso, o Life Mama Club foi pensado para criar continuidade entre os encontros,
                  conectando mulheres por interesses, objetivos e afinidades.
                </p>
                <p>
                  A comunidade é um espaço para compartilhar conhecimentos, trocar experiências,
                  apoiar projetos e cultivar relações que se desenvolvem com o tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
