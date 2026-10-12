"use client";

import Link from "next/link";
import { useState, type MouseEvent } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { m } from "framer-motion";

import { AppStoreButtons } from "@/components/app-store-buttons";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  // Hash links: close the sheet first so the scroll lock is released, then scroll.
  const onHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      const target = document.querySelector(href);
      if (!target) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", href);
    }, 320);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="grid size-11 place-items-center rounded-full bg-ink text-cream transition hover:bg-indigo md:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" aria-hidden />
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <div
          aria-hidden
          className="glow pointer-events-none absolute -top-24 -right-24 size-72 [--glow:rgb(232_70_43/0.35)]"
        />
        <div className="relative flex flex-1 flex-col px-6 pt-20 pb-8">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation</SheetDescription>

          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {site.nav.map((item, i) => {
                const active = item.href === pathname;
                return (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, x: 32 }}
                    animate={open ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-white/10"
                  >
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={(event) => onHashClick(event, item.href)}
                        className={cn(
                          "group flex items-center justify-between py-5 font-display text-4xl font-bold tracking-tight transition-colors",
                          active ? "text-saffron" : "text-cream hover:text-saffron",
                        )}
                      >
                        {item.label}
                        <ArrowRight
                          className="size-6 -translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
                          aria-hidden
                        />
                      </Link>
                    </SheetClose>
                  </m.li>
                );
              })}
            </ul>
          </nav>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={open ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-auto pt-12"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.14em] text-saffron uppercase">
              {site.headerCta.label}
            </p>
            <AppStoreButtons size="md" />
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-8 block text-sm text-cream/70 hover:text-cream"
            >
              {site.contact.email}
            </a>
          </m.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
