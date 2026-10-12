"use client";

import { m } from "framer-motion";

/** Decorative ring that draws itself to `progress` (0–1) when scrolled into view. */
export function ProgressRing({
  progress = 0.75,
  className,
}: {
  progress?: number;
  className?: string;
}) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={className}>
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="rgb(255 247 236 / 0.08)"
        strokeWidth="14"
      />
      <m.circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="var(--saffron)"
        strokeWidth="14"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: progress }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
