import { Check } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type CheckListProps = {
  items: readonly string[];
  className?: string;
  /** Light text for dark backgrounds */
  inverted?: boolean;
  size?: "md" | "lg";
};

export function CheckList({ items, className, inverted = false, size = "md" }: CheckListProps) {
  return (
    <RevealGroup as="ul" stagger={0.09} className={cn("flex flex-col gap-4", className)}>
      {items.map((item) => (
        <RevealItem as="li" key={item} className="flex items-start gap-4">
          <span
            aria-hidden
            className={cn(
              "mt-0.5 grid shrink-0 place-items-center rounded-full",
              size === "lg" ? "size-9" : "size-7",
              inverted ? "bg-saffron text-ink" : "bg-leaf text-white",
            )}
          >
            <Check className={size === "lg" ? "size-5" : "size-4"} strokeWidth={3} />
          </span>
          <span
            className={cn(
              "leading-relaxed",
              size === "lg" ? "text-lg font-semibold sm:text-xl" : "text-base sm:text-[1.05rem]",
              inverted ? "text-cream/90" : "text-ink",
            )}
          >
            {item}
          </span>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
