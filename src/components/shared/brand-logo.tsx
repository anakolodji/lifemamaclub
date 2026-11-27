import Image from "next/image";

import { cn } from "@/lib/cn";

/** Recolours the white logo to the dark "café" ink for light backgrounds. */
export const ON_LIGHT_FILTER =
  "[filter:brightness(0)_saturate(100%)_invert(14%)_sepia(16%)_saturate(1405%)_hue-rotate(342deg)_brightness(92%)_contrast(89%)]";

type BrandLogoProps = {
  onLight?: boolean;
  className?: string;
};

export function BrandLogo({ onLight = false, className }: BrandLogoProps) {
  return (
    <Image
      src="/assets/lifemama-club-logo-white.png"
      alt="Life Mama Club"
      width={1077}
      height={387}
      sizes="180px"
      loading="eager"
      className={cn("block h-auto w-[180px]", onLight && ON_LIGHT_FILTER, className)}
    />
  );
}
