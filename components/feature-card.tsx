import { Icon } from "@/components/icon";
import { RevealItem } from "@/components/motion/reveal";
import type { Feature } from "@/content/types";
import { cn } from "@/lib/utils";

const tones = {
  white: {
    card: "bg-white ring-1 ring-line",
    icon: "bg-saffron text-ink",
    body: "text-ink-soft",
  },
  saffron: {
    card: "bg-saffron",
    icon: "bg-ink text-saffron",
    body: "text-ink/80",
  },
  indigo: {
    card: "bg-indigo text-white",
    icon: "bg-saffron text-ink",
    body: "text-white/80",
  },
  jollof: {
    card: "bg-jollof-strong text-white",
    icon: "bg-white text-jollof-strong",
    body: "text-white",
  },
} as const;

type FeatureCardProps = {
  feature: Feature;
  tone?: keyof typeof tones;
  className?: string;
};

export function FeatureCard({ feature, tone = "white", className }: FeatureCardProps) {
  const t = tones[tone];
  return (
    <RevealItem
      as="li"
      className={cn(
        "group flex flex-col gap-5 rounded-[var(--radius-card)] p-7 shadow-soft sm:p-8",
        "transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift",
        t.card,
        className,
      )}
    >
      <span
        className={cn(
          "grid size-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
          t.icon,
        )}
      >
        <Icon name={feature.icon} className="size-7" strokeWidth={2} />
      </span>
      <h3 className="text-2xl font-bold">{feature.title}</h3>
      <p className={cn("leading-relaxed", t.body)}>{feature.body}</p>
    </RevealItem>
  );
}
