import Link from "next/link";

import { container } from "@/components/partners/styles";
import { cn } from "@/lib/cn";

const navClass = "flex flex-col items-start gap-[9px]";
const linkClass = "text-[14px] no-underline";

export function PartnerFooter() {
  return (
    <footer className="bg-cafe-900 pt-[78px] pb-[38px] text-white">
      <div className={container}>
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-12 lte820:grid-cols-1 lte820:gap-[34px]">
          <div className="[&>p]:m-0 [&>p]:mt-2.5">
            <p>Conexões que ampliam a vida.</p>
            <p>Uma iniciativa Life Mama.</p>
          </div>
          <nav aria-label="Club" className={navClass}>
            <Link href="/" prefetch={false} className={linkClass}>
              Conheça o Club
            </Link>
            <Link href="/candidatura-empresas" className={linkClass}>
              Seja uma marca parceira
            </Link>
          </nav>
          <nav aria-label="Links" className={navClass}>
            <p className="m-0 mb-2 text-[11px] font-bold tracking-[.14em] uppercase opacity-70">
              Links
            </p>
            <a href="https://lifemama.app/" target="_blank" rel="noopener" className={linkClass}>
              Life Mama App
            </a>
            <a
              href="https://lifemama.app/pt-br/privacy-policy.html"
              target="_blank"
              rel="noopener"
              className={linkClass}
            >
              Política de Privacidade
            </a>
          </nav>
        </div>
        <div
          className={cn(
            "mt-[68px] flex justify-between gap-6 border-t border-white/25 pt-6 text-[12px] lte820:flex-col",
          )}
        >
          <span>Life Mama. Tecnologia do cuidado para rotinas mais leves.</span>
          <span>© Life Mama · Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
