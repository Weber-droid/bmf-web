import Image from "next/image";

import { ButtonLink } from "@/components/button";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { home } from "@/content/home";
import type { Teaser } from "@/content/types";
import { cn } from "@/lib/utils";

const looks = {
  riders: {
    card: "bg-jollof-strong text-white",
    body: "text-white",
    button: "light" as const,
    glow: "[--glow:rgb(255_176_32/0.55)]",
    emoji: "🛵",
  },
  vendors: {
    card: "bg-indigo text-white",
    body: "text-white/85",
    button: "saffron" as const,
    glow: "[--glow:rgb(232_70_43/0.5)]",
    emoji: "🏪",
  },
};

export function Teasers() {
  return (
    <Section tone="cream-2" spacing="none" className="pb-20 sm:pb-28">
      <RevealGroup stagger={0.15} className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <TeaserCard teaser={home.riders} look={looks.riders} />
        <TeaserCard teaser={home.vendors} look={looks.vendors} className="lg:mt-16" />
      </RevealGroup>
    </Section>
  );
}

function TeaserCard({
  teaser,
  look,
  className,
}: {
  teaser: Teaser;
  look: (typeof looks)[keyof typeof looks];
  className?: string;
}) {
  return (
    <RevealItem
      className={cn(
        "group relative isolate grid overflow-hidden rounded-[2rem] shadow-lift sm:grid-cols-[1fr_1.05fr] sm:rounded-[2.5rem]",
        look.card,
        className,
      )}
    >
      <div
        aria-hidden
        className={cn("glow absolute -right-24 -bottom-24 -z-10 size-96", look.glow)}
      />

      <div className="relative m-3 aspect-[4/3] overflow-hidden rounded-[1.6rem] sm:m-4 sm:aspect-auto sm:min-h-[26rem] sm:rounded-[2rem]">
        <Image
          src={teaser.image.src}
          alt={teaser.image.alt}
          fill
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 92vw"
          className="object-cover object-[50%_25%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <span
          aria-hidden
          className="absolute top-4 left-4 grid size-14 place-items-center rounded-2xl bg-cream text-3xl shadow-soft transition-transform duration-500 group-hover:-rotate-12"
        >
          {look.emoji}
        </span>
      </div>

      <div className="flex flex-col justify-end gap-5 p-7 pt-3 sm:p-9 sm:pl-5">
        <h2 className="font-display text-[clamp(1.9rem,1.3rem+1.6vw,2.6rem)] leading-[1.05] font-bold">
          {teaser.title}
        </h2>
        <p className={cn("text-lg leading-relaxed", look.body)}>{teaser.body}</p>
        <ButtonLink href={teaser.cta.href} variant={look.button} withArrow className="mt-2 w-fit">
          {teaser.cta.label}
        </ButtonLink>
      </div>
    </RevealItem>
  );
}
