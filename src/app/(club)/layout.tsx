import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Serif } from "next/font/google";

import { RouteChrome } from "@/components/club/route-chrome";

import "./club.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
  fallback: [],
  adjustFontFallback: false,
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
  fallback: [],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Life Mama Club — Conexões, Desenvolvimento e Experiências",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#76412F",
};

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${notoSerif.variable}`}>
      <body>
        <RouteChrome />
        {children}
      </body>
    </html>
  );
}
