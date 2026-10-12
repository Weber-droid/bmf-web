import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const tones = {
  cream: "bg-cream text-ink",
  "cream-2": "bg-cream-2 text-ink",
  ink: "bg-ink text-cream",
  indigo: "bg-indigo text-white",
  none: "",
} as const;

type SectionProps = Omit<ComponentProps<"section">, "children"> & {
  children: ReactNode;
  tone?: keyof typeof tones;
  /** Vertical rhythm. `none` lets the content control its own spacing. */
  spacing?: "default" | "tight" | "none";
  containerClassName?: string;
};

export function Section({
  children,
  tone = "none",
  spacing = "default",
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        tones[tone],
        spacing === "default" && "py-20 sm:py-28 lg:py-32",
        spacing === "tight" && "py-14 sm:py-20",
        className,
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>
  );
}
