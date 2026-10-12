"use client";

import { m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const tags = {
  div: m.div,
  section: m.section,
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  p: m.p,
  span: m.span,
  figure: m.figure,
} as const;

type Tag = keyof typeof tags;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: Tag;
  delay?: number;
  id?: string;
};

const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

export function Reveal({ children, className, as = "div", delay = 0, id }: RevealProps) {
  const Component = tags[as] as typeof m.div;
  return (
    <Component
      id={id}
      data-reveal=""
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: itemVariants.hidden,
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, ease: EASE, delay },
        },
      }}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.12,
  delay = 0,
  id,
}: RevealProps & { stagger?: number }) {
  const Component = tags[as] as typeof m.div;
  return (
    <Component
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, className, as = "div", id }: Omit<RevealProps, "delay">) {
  const Component = tags[as] as typeof m.div;
  return (
    <Component id={id} data-reveal="" className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
