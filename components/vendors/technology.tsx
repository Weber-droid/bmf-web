import { Zap } from "lucide-react";

import { Counter } from "@/components/motion/counter";
import { ProgressRing } from "@/components/motion/progress-ring";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { vendors } from "@/content/vendors";

export function Technology() {
  const { title, lead, body } = vendors.technology;
  const statText = `${lead.stat.value}${lead.stat.suffix} ${lead.stat.unit}`;

  return (
    <Section tone="cream-2" spacing="none" className="pb-20 sm:pb-28">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-ink text-cream shadow-lift sm:rounded-[2.5rem]">
        <div aria-hidden className="bg-grain pointer-events-none absolute inset-0 opacity-[0.06]" />
        <div
          aria-hidden
          className="glow pointer-events-none absolute -right-24 -bottom-32 -z-10 size-[30rem] [--glow:rgb(43_42_99/1)]"
        />

        <div className="grid items-center gap-12 p-7 sm:p-12 lg:grid-cols-[1.25fr_1fr] lg:p-16">
          <div>
            <h2 className="text-display font-bold">{title}</h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80 sm:text-xl">
              {lead.before}
              <strong className="rounded-md bg-saffron px-1.5 font-bold whitespace-nowrap text-ink">
                {statText}
              </strong>
              {lead.after}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-cream/80">{body}</p>
          </div>

          {/* Big animated stat; the same figure is in the paragraph for screen readers */}
          <div
            aria-hidden
            className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center"
          >
            <ProgressRing className="absolute inset-0 -rotate-90" />
            <div className="flex flex-col items-center text-center">
              <Zap className="mb-2 size-8 text-saffron" fill="currentColor" />
              <div className="font-display text-[clamp(5rem,16vw,8.5rem)] leading-none font-extrabold tracking-tighter">
                <Counter value={lead.stat.value} />
                <span className="text-saffron">{lead.stat.suffix}</span>
              </div>
              <div className="mt-1 font-display text-2xl font-bold tracking-tight text-cream/80 uppercase">
                {lead.stat.unit}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
