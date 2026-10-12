import Image from "next/image";

import { RevealItem } from "@/components/motion/reveal";
import type { Step } from "@/content/types";
import { cn } from "@/lib/utils";

const tones = [
  { card: "bg-saffron", panel: "bg-cream/50" },
  { card: "bg-white ring-1 ring-line", panel: "bg-cream" },
  { card: "bg-indigo text-white", panel: "bg-white/90" },
];

export function BenefitCard({ benefit, index }: { benefit: Step; index: number }) {
  const tone = tones[index % tones.length];
  return (
    <RevealItem
      as="li"
      className={cn(
        "group flex flex-col gap-6 rounded-[var(--radius-card)] p-4 pb-7 shadow-soft sm:p-5 sm:pb-8",
        "transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-lift",
        tone.card,
      )}
    >
      <div className={cn("overflow-hidden rounded-[1.4rem]", tone.panel)}>
        <Image
          src={benefit.image.src}
          alt={benefit.image.alt}
          width={benefit.image.width}
          height={benefit.image.height}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 30vw, 88vw"
          className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
      </div>
      <h3 className="px-3 text-2xl leading-tight font-bold sm:text-[1.7rem]">{benefit.title}</h3>
    </RevealItem>
  );
}
