import Image from "next/image";

import { LunchSchemeDialog } from "@/components/home/lunch-scheme-dialog";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { home } from "@/content/home";

export function LunchScheme() {
  const { title, body, image, cta, modal } = home.lunchScheme;

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="relative mx-auto w-[86%] max-w-md sm:w-full">
          <div
            aria-hidden
            className="absolute -inset-4 rotate-6 rounded-[2.5rem] bg-saffron sm:-inset-6"
          />
          <div
            aria-hidden
            className="absolute -inset-4 -rotate-3 rounded-[2.5rem] bg-jollof/90 sm:-inset-6"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 420px, 88vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -right-3 -bottom-6 grid size-24 place-items-center rounded-full bg-cream font-display text-4xl shadow-lift motion-safe:animate-float sm:-right-8 sm:size-28"
          >
            🍱
          </span>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col items-start gap-6">
          <h2 className="text-display font-bold">{title}</h2>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{body}</p>
          <LunchSchemeDialog triggerLabel={cta} modal={modal} />
        </Reveal>
      </div>
    </Section>
  );
}
