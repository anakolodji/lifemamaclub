import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";

type EditorialPhotoProps = {
  src: string;
  /** Describes the photograph; used as the figure label and the image alt text. */
  label: string;
  objectPosition?: CSSProperties["objectPosition"];
  sizes: string;
  eager?: boolean;
  className?: string;
  children?: ReactNode;
};

/**
 * Full-bleed editorial photograph with a dark gradient at the bottom, where the caption sits.
 * Height and grid placement come from `className`; on small screens it is at least 420px tall.
 */
export function EditorialPhoto({
  src,
  label,
  objectPosition = "center center",
  sizes,
  eager = false,
  className,
  children,
}: EditorialPhotoProps) {
  return (
    <figure
      aria-label={label}
      className={cn(
        "relative box-border block overflow-hidden bg-cafe-900 p-0 after:pointer-events-none after:absolute after:inset-[35%_0_0] after:z-1 after:bg-[linear-gradient(to_bottom,transparent,rgba(31,25,21,.72))] after:content-[''] lte900:h-auto lte900:min-h-[420px]",
        className,
      )}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        className="z-0 block object-cover"
        style={{ objectPosition }}
      />
      {children}
    </figure>
  );
}

/** Caption overlaid on an {@link EditorialPhoto}. */
export function EditorialCaption({ children }: { children: ReactNode }) {
  return (
    <figcaption className="absolute inset-x-0 bottom-0 z-2 m-0 max-w-none p-12 text-[12px] leading-[1.5] font-medium tracking-[.14em] text-white uppercase">
      {children}
    </figcaption>
  );
}
