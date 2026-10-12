import { Bike, Heart, UtensilsCrossed } from "lucide-react";

import { WordReveal, type WordRevealPart } from "@/components/motion/word-reveal";
import { Section } from "@/components/section";
import { home } from "@/content/home";

const highlightStyles = {
  saffron: {
    className: "rounded-full bg-saffron px-[0.4em] py-[0.05em] text-ink -rotate-1",
    icon: (
      <Heart
        className="mr-[0.2em] inline size-[0.8em] align-[-0.08em]"
        aria-hidden
        fill="currentColor"
      />
    ),
  },
  jollof: {
    className: "rounded-full bg-jollof-strong px-[0.4em] py-[0.05em] text-white rotate-1",
    icon: <Bike className="mr-[0.2em] inline size-[0.8em] align-[-0.08em]" aria-hidden />,
  },
  indigo: {
    className: "rounded-full bg-indigo px-[0.4em] py-[0.05em] text-white -rotate-1",
    icon: (
      <UtensilsCrossed className="mr-[0.2em] inline size-[0.8em] align-[-0.08em]" aria-hidden />
    ),
  },
} as const;

export function Community({ id }: { id: string }) {
  const parts: WordRevealPart[] = home.community.parts.map((part) =>
    part.highlight
      ? { text: part.text, unit: true, ...highlightStyles[part.highlight] }
      : { text: part.text },
  );

  return (
    <Section id={id} className="scroll-mt-16">
      <WordReveal
        parts={parts}
        className="mx-auto max-w-6xl text-center font-display text-statement leading-[1.35] font-semibold tracking-tight sm:leading-[1.3]"
      />
    </Section>
  );
}
