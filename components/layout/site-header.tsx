"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

import { ButtonLink } from "@/components/button";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Container } from "@/components/section";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled
          ? "bg-cream/75 shadow-[0_1px_0_rgb(20_18_43/0.08),0_12px_32px_-20px_rgb(20_18_43/0.35)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between gap-6 sm:h-20">
        <Logo priority className={cn("transition-transform", scrolled && "scale-90")} />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full bg-white/60 p-1.5 ring-1 ring-line backdrop-blur">
            {site.nav.map((item) => {
              const active = item.href === pathname;
              const className = cn(
                "relative block rounded-full px-5 py-2.5 text-[0.95rem] font-semibold transition-colors",
                active ? "bg-ink text-cream" : "text-ink hover:bg-ink/[0.06]",
              );
              return (
                <li key={item.href}>
                  {item.href.startsWith("#") ? (
                    <a href={item.href} className={className}>
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={className}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={site.headerCta.href} size="sm" className="h-11 px-4 sm:px-5">
            <span className="inline-flex items-center gap-2">
              <Download className="hidden size-4 sm:block" aria-hidden strokeWidth={2.5} />
              {site.headerCta.label}
            </span>
          </ButtonLink>
          <MobileNav pathname={pathname} />
        </div>
      </Container>
    </header>
  );
}
