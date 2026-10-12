"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Total pixels the content drifts while its container scrolls out of view */
  distance?: number;
};

/** Moves its children at a slower rate than the page as the section scrolls past. */
export function Parallax({ children, className, distance = 90 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : distance]);

  return (
    <div ref={ref} className={className}>
      <m.div style={{ y }} className="h-full w-full">
        {children}
      </m.div>
    </div>
  );
}
