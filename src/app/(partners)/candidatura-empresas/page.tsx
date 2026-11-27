import type { Metadata, Viewport } from "next";
import Link from "next/link";

import { PartnerApplication } from "@/components/partners/partner-application";
import { PartnerHeader, partnerNavLinkClass } from "@/components/partners/partner-header";

export const metadata: Metadata = {
  title: "Candidatura para marcas parceiras — Life Mama Club",
  description: "Candidatura para marcas parceiras do Life Mama Club.",
};

export const viewport: Viewport = {
  themeColor: "#F4EFE8",
};

export default function PartnerApplicationPage() {
  return (
    <>
      <a
        href="#formulario"
        className="fixed top-2.5 left-2.5 z-200 -translate-y-[160%] bg-white px-3.5 py-2.5 text-cafe-900 focus:translate-none"
      >
        Ir para o formulário
      </a>
      <PartnerHeader
        nav={
          <>
            <Link href="/" prefetch={false} className={partnerNavLinkClass}>
              O Club
            </Link>
            <Link href="/parcerias" aria-current="page" className={partnerNavLinkClass}>
              Parcerias
            </Link>
          </>
        }
        action={{
          href: "/parcerias",
          label: (
            <>
              <span aria-hidden="true">←</span> Voltar às parcerias
            </>
          ),
        }}
      />
      <main id="conteudo">
        <PartnerApplication />
      </main>
    </>
  );
}
