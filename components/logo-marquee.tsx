import Image from "next/image";

import type { ImageAsset } from "@/content/types";
import { IMAGE_QUALITY } from "@/lib/image";
import { cn } from "@/lib/utils";

type LogoMarqueeProps = {
  logos: readonly ImageAsset[];
  className?: string;
};

export function LogoMarquee({ logos, className }: LogoMarqueeProps) {
  const set = [...logos, ...logos];

  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-6 pr-6 sm:gap-8 sm:pr-8"
    >
      {set.map((logo, i) => (
        <li
          key={`${logo.src}-${i}`}
          className="grid h-28 w-52 shrink-0 place-items-center rounded-3xl bg-white px-8 shadow-soft ring-1 ring-line sm:h-32 sm:w-64"
        >
          <Image
            src={logo.src}
            quality={IMAGE_QUALITY}
            alt={hidden || i >= logos.length ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            sizes="200px"
            className="max-h-14 w-auto object-contain mix-blend-multiply brightness-[0.67] contrast-[2.93] grayscale transition duration-500 hover:scale-105 hover:brightness-[0.625] hover:contrast-[4]"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={cn("mask-fade-x relative overflow-hidden py-4", className)}>
      <div className="flex w-max animate-marquee [--marquee-duration:36s] hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
