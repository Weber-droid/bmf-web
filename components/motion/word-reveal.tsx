"use client";

import { useInView } from "framer-motion";
import { Fragment, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type WordRevealPart = {
  text: string;
  className?: string;
  /** Keep the part together as one unit (e.g. a highlighted pill) instead of word by word */
  unit?: boolean;
  icon?: ReactNode;
};

type WordRevealProps = {
  parts: WordRevealPart[];
  className?: string;
  as?: "p" | "h2" | "blockquote";
  stagger?: number;
};

/**
 * Reveals a sentence word by word on scroll. A single in-view observer flips a
 * data attribute and CSS transitions do the rest, so long sentences stay cheap.
 * Screen readers get the plain sentence once; the animated words are hidden.
 */
export function WordReveal({ parts, className, as = "p", stagger = 0.035 }: WordRevealProps) {
  const Tag = as;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const plain = parts.map((p) => p.text).join("");

  let index = 0;
  const word = (content: ReactNode, key: string, extra?: string) => (
    <span
      key={key}
      data-reveal=""
      className={cn(
        "inline-block translate-y-[0.4em] opacity-0 transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "group-data-[shown=true]/words:translate-y-0 group-data-[shown=true]/words:opacity-100",
        extra,
      )}
      style={{ transitionDelay: `${(index++ * stagger).toFixed(3)}s` }}
    >
      {content}
    </span>
  );

  return (
    <Tag className={className}>
      <span className="sr-only">{plain}</span>
      <span ref={ref} aria-hidden data-shown={inView} className="group/words block">
        {parts.map((part, i) => {
          if (part.unit) {
            return word(
              <>
                {part.icon}
                {part.text}
              </>,
              `${i}`,
              cn("max-w-full", part.className),
            );
          }
          return part.text
            .split(/(\s+)/)
            .map((token, j) =>
              /^\s+$/.test(token) ? (
                <Fragment key={`${i}-${j}`}> </Fragment>
              ) : token ? (
                word(token, `${i}-${j}`, part.className)
              ) : null,
            );
        })}
      </span>
    </Tag>
  );
}
