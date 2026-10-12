import Image from "next/image";
import { Quote } from "lucide-react";

import { CheckList } from "@/components/check-list";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { vendors } from "@/content/vendors";
import { IMAGE_QUALITY, imageTone } from "@/lib/image";
import { cn } from "@/lib/utils";

export function WhyBmf() {
  const { title, quote, image, listA, listB } = vendors.whyBmf;

  return (
    <Section>
      <Reveal className="mx-auto max-w-5xl text-center">
        <h2 className="text-display font-bold">{title}</h2>
      </Reveal>

      <Reveal as="figure" delay={0.1} className="relative mx-auto mt-10 max-w-4xl text-center">
        <Quote
          aria-hidden
          className="mx-auto size-12 text-jollof"
          fill="currentColor"
          strokeWidth={0}
        />
        <blockquote className="mt-4 font-display text-[clamp(1.4rem,1rem+1.6vw,2.25rem)] leading-snug font-semibold tracking-tight">
          “{quote}”
        </blockquote>
      </Reveal>

      <div className="mt-16 grid items-center gap-10 sm:mt-20 lg:grid-cols-[1fr_0.8fr_1fr] lg:gap-12">
        <div className="rounded-[var(--radius-card)] bg-white p-7 shadow-soft ring-1 ring-line sm:p-9">
          <CheckList items={listA} />
        </div>

        <Reveal className="relative mx-auto w-[88%] max-w-sm sm:w-full">
          <div aria-hidden className="absolute -inset-3 -rotate-3 rounded-[2.25rem] bg-saffron" />
          <div className="relative aspect-[330/399] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src={image.src}
              quality={IMAGE_QUALITY}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 340px, 84vw"
              className={cn("object-cover", imageTone.photo)}
            />
          </div>
        </Reveal>

        <div className="rounded-[var(--radius-card)] bg-indigo p-7 shadow-soft sm:p-9">
          <CheckList items={listB} inverted />
        </div>
      </div>
    </Section>
  );
}
