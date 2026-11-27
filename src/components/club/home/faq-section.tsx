import { FaqAccordion } from "@/components/club/home/faq-accordion";
import { eyebrow, fullOnMobile, grid12, sectionPadding, wrap } from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

export function FaqSection() {
  return (
    <Reveal as="section" className={cn("bg-areia-100 px-0 text-cafe-900", sectionPadding)}>
      <div className={wrap}>
        <div className={cn(grid12, "items-start gap-y-12 lte900:gap-y-10")}>
          <div className={cn("col-[1/span_4]", fullOnMobile)}>
            <p className={cn(eyebrow, "mb-6 text-oliva-600")}>Perguntas frequentes</p>
            <h2 className="max-w-[8em] font-serif text-[40px] leading-[1.1] font-normal text-cafe-900 lte900:text-[32px]">
              O que você talvez queira saber.
            </h2>
          </div>
          <FaqAccordion className={cn("col-[6/span_7] flex flex-col", fullOnMobile)} />
        </div>
      </div>
    </Reveal>
  );
}
