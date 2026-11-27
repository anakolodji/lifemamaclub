import { fullOnMobile, grid12, wrap } from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export function ManifestoSection() {
  return (
    <Reveal as="section" id="club" className="bg-barro-700 px-0 py-40 text-white lte900:py-16">
      <div className={wrap}>
        <div className={cn(grid12, "items-start gap-y-18 lte900:gap-y-10")}>
          <h2
            className={cn(
              "col-[1/span_9] max-w-[15em] font-serif text-[60px] leading-[1.04] font-normal tracking-[-.01em] text-white lte900:text-[38px]",
              fullOnMobile,
            )}
          >
            Um espaço para a mulher que você é. E para quem ainda deseja se tornar.
          </h2>
          <div
            className={cn(
              "col-[5/span_7] flex max-w-[34em] flex-col gap-7 text-[19px] leading-[1.7] text-white",
              fullOnMobile,
            )}
          >
            <p>
              Entre os filhos, o trabalho, os compromissos e os tantos papéis que fazem parte da
              vida, alguns interesses acabam esperando por uma oportunidade.
            </p>
            <p>
              Uma conversa que inspira uma nova direção. Uma amizade que nasce de um encontro. Uma
              experiência que desperta uma habilidade. Uma conexão que abre caminhos para um
              projeto.
            </p>
            <p>
              O Life Mama Club nasce para criar essas oportunidades com intenção, cuidado e
              continuidade.
            </p>
            <p>
              Aqui, a maternidade faz parte da conversa. Mas seus projetos, suas ambições, suas
              descobertas e seus desejos também.
            </p>
          </div>
          <blockquote
            className={cn(
              "col-[1/span_10] m-0 mt-6 max-w-[22em] border-y border-white/30 px-0 py-10 font-serif text-[36px] leading-[1.25] font-normal text-white lte900:text-[26px]",
              fullOnMobile,
            )}
          >
            Porque uma vida plena não acontece em uma única dimensão.
          </blockquote>
        </div>
      </div>
    </Reveal>
  );
}
