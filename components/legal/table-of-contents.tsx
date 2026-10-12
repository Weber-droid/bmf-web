"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TocItem = { id: string; text: string };

/** Contents list that highlights the section currently being read. */
export function TableOfContents({ items, className }: { items: TocItem[]; className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -65% 0px" },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents" className={className}>
      <ol className="flex flex-col gap-1 text-sm">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "block rounded-xl px-3 py-2 leading-snug transition-colors",
                  isActive
                    ? "bg-saffron-soft font-semibold text-ink"
                    : "text-ink-soft hover:bg-cream hover:text-ink",
                )}
              >
                {toSentenceCase(item.text)}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** Headings are ALL CAPS in the source; sentence-case them for the compact list. */
function toSentenceCase(text: string) {
  return text
    .toLowerCase()
    .replace(/[a-z]/, (c) => c.toUpperCase())
    .replace(/bringme-food/g, "BringMe-Food");
}
