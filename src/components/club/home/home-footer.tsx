import Link from "next/link";

import { PlaceholderLink } from "@/components/club/placeholder-link";
import { eyebrow, fullOnMobile, grid12, wrap } from "@/components/club/styles";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/cn";

const footerLinkClass =
  "text-[14px] leading-[1.7] font-medium text-white no-underline hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-white";
const footerHeadingClass = cn(eyebrow, "mb-2 text-white/78");

export function HomeFooter() {
  return (
    <Reveal as="footer" className="bg-barro-700 px-0 pt-24 pb-12 text-white">
      <div className={wrap}>
        <div className={cn(grid12, "items-start gap-y-14 lte900:gap-y-10")}>
          <div className={cn("col-[1/span_5] flex flex-col gap-7", fullOnMobile)}>
            <div className="flex flex-col gap-2">
              <p className="text-[15px] leading-[1.6] text-white">
                Conexões. Desenvolvimento. Experiências.
              </p>
            </div>
          </div>
          <nav
            aria-label="Rodapé — seções"
            className={cn("col-[7/span_3] flex flex-col gap-2", fullOnMobile)}
          >
            <p className={footerHeadingClass}>Navegação</p>
            <a href="#club" className={footerLinkClass}>
              O Club
            </a>
            <a href="#experiencia" className={footerLinkClass}>
              Experiências
            </a>
            <a href="#incluido" className={footerLinkClass}>
              Benefícios
            </a>
            <Link href="/candidatura" className={footerLinkClass}>
              Candidatura
            </Link>
          </nav>
          <nav
            aria-label="Rodapé — links"
            className={cn("col-[10/span_3] flex flex-col gap-2", fullOnMobile)}
          >
            <p className={footerHeadingClass}>Links</p>
            <PlaceholderLink className={footerLinkClass}>Life Mama App</PlaceholderLink>
            <PlaceholderLink className={footerLinkClass}>Instagram</PlaceholderLink>
            <PlaceholderLink className={footerLinkClass}>Política de Privacidade</PlaceholderLink>
            <PlaceholderLink className={footerLinkClass}>Termos de Uso</PlaceholderLink>
          </nav>
        </div>
        <div className="mt-20 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4 border-t border-white/30 pt-7">
          <p className="font-serif text-[18px] leading-[1.4] font-normal text-white">
            Life Mama. Tecnologia do cuidado para rotinas mais leves.
          </p>
          <p className="text-[13px] leading-[1.5] font-medium text-white">
            © Life Mama · Todos os direitos reservados
          </p>
        </div>
      </div>
    </Reveal>
  );
}
