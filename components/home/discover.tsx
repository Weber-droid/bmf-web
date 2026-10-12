import Image from "next/image";

import { Blob } from "@/components/decor/blob";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Eyebrow, SectionHeading } from "@/components/section-heading";
import { StepCard } from "@/components/step-card";
import { home } from "@/content/home";

export function Discover() {
  const { title, subtitle, image, stepsLabel, steps } = home.discover;

  return (
    <Section tone="cream-2" className="overflow-hidden rounded-t-[2.5rem] sm:rounded-t-[4rem]">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading title={title} subtitle={subtitle} size="display" />

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-xl">
          <Blob className="absolute inset-0 -z-0 m-auto w-[95%] text-saffron/50" shape="b" />
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1024px) 560px, 92vw"
            className="relative h-auto w-full drop-shadow-[0_30px_40px_rgb(43_42_99/0.25)]"
          />
        </Reveal>
      </div>

      <div className="mt-20 sm:mt-28">
        <Reveal className="flex justify-center">
          <Eyebrow>{stepsLabel}</Eyebrow>
        </Reveal>

        <div className="relative mt-10">
          {/* Dashed line joining the step cards (visible in the gaps between them) */}
          <div
            aria-hidden
            className="absolute top-[3.25rem] right-[16%] left-[16%] hidden border-t-[3px] border-dashed border-jollof/60 md:block"
          />
          <div
            aria-hidden
            className="absolute top-8 bottom-8 left-[2.25rem] w-0.5 border-l-[3px] border-dashed border-jollof/60 md:hidden"
          />

          <RevealGroup
            as="ol"
            stagger={0.15}
            className="relative grid gap-6 md:grid-cols-3 lg:gap-8"
          >
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </RevealGroup>
        </div>
      </div>
    </Section>
  );
}
