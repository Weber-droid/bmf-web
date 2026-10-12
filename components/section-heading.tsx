import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  size?: "display" | "title";
  /** Light text for dark sections */
  inverted?: boolean;
  className?: string;
  id?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  subtitle,
  align = "left",
  as: Heading = "h2",
  size = "title",
  inverted = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow inverted={inverted}>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={cn(
          "font-bold",
          size === "display" ? "text-display" : "text-title",
          align === "center" ? "max-w-4xl" : "max-w-3xl",
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed sm:text-xl",
            inverted ? "text-cream/75" : "text-ink-soft",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

export function Eyebrow({
  children,
  inverted = false,
  className,
}: {
  children: ReactNode;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-[0.14em] uppercase",
        inverted ? "bg-white/10 text-saffron" : "bg-saffron-soft text-ink",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-jollof" />
      {children}
    </span>
  );
}
