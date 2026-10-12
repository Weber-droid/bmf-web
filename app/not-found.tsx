import type { Metadata } from "next";

import { AppStoreButtons } from "@/components/app-store-buttons";
import { ButtonLink } from "@/components/button";
import { HeroBackdrop } from "@/components/decor/blob";
import { Container } from "@/components/section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: `${site.notFound.code} – ${site.name}` },
  robots: { index: false },
};

export default function NotFound() {
  const { code, title, body, cta } = site.notFound;

  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden pt-28 pb-20">
      <HeroBackdrop />
      <Container className="flex flex-col items-center text-center">
        <div aria-hidden className="relative">
          <span className="block font-display text-[clamp(8rem,30vw,18rem)] leading-none font-extrabold tracking-tighter text-indigo">
            {code.slice(0, 1)}
            <span className="relative inline-block text-saffron motion-safe:animate-float">
              {code.slice(1, 2)}
              <span className="absolute inset-0 grid place-items-center text-[0.32em]">🍽️</span>
            </span>
            {code.slice(2)}
          </span>
        </div>
        <h1 className="mt-4 text-title font-bold motion-safe:animate-rise">{title}</h1>
        <p className="mt-4 max-w-md text-lg text-ink-soft">{body}</p>
        <ButtonLink href={cta.href} size="lg" withArrow className="mt-9">
          {cta.label}
        </ButtonLink>
        <AppStoreButtons size="md" className="mt-10 justify-center" />
      </Container>
    </section>
  );
}
