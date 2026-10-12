import Image from "next/image";

import { RevealItem } from "@/components/motion/reveal";
import type { Step } from "@/content/types";
import { cn } from "@/lib/utils";

type StepCardProps = {
  step: Step;
  index: number;
  /** `illustration` shows a large picture; `icon` a small badge-sized image */
  variant?: "illustration" | "icon";
  className?: string;
};

const accents = ["bg-saffron text-ink", "bg-jollof-strong text-white", "bg-indigo text-white"];

export function StepCard({ step, index, variant = "illustration", className }: StepCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <RevealItem
      as="li"
      className={cn(
        "group relative flex flex-col rounded-[var(--radius-card)] bg-white p-6 shadow-soft ring-1 ring-line",
        "transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift sm:p-7",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className={cn(
            "relative z-10 grid size-12 place-items-center rounded-2xl font-display text-lg font-bold shadow-soft",
            accents[index % accents.length],
          )}
        >
          <span className="sr-only">Step </span>
          {number}
        </span>
        {variant === "icon" && (
          <span className="grid size-16 place-items-center rounded-2xl bg-cream transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
            <Image
              src={step.image.src}
              alt={step.image.alt}
              width={step.image.width}
              height={step.image.height}
              className="h-9 w-auto"
            />
          </span>
        )}
      </div>

      {variant === "illustration" && (
        <div className="relative mt-6 flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl bg-cream">
          <div
            aria-hidden
            className="glow absolute inset-x-8 bottom-6 h-1/2 [--glow:rgb(255_226_168/0.9)]"
          />
          <Image
            src={step.image.src}
            alt={step.image.alt}
            width={step.image.width}
            height={step.image.height}
            sizes="(min-width: 1024px) 240px, (min-width: 640px) 30vw, 70vw"
            className="relative h-[78%] w-auto object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        </div>
      )}

      <h3 className="mt-6 text-2xl font-bold sm:text-[1.65rem]">
        {step.title}
        {step.description && (
          <span className="mt-1 block font-sans text-base font-medium tracking-normal text-ink-soft">
            {step.description}
          </span>
        )}
      </h3>
    </RevealItem>
  );
}
