import Image from "next/image";
import { Fragment } from "react";

import { AppStoreButtons } from "@/components/app-store-buttons";
import { HeroBackdrop } from "@/components/decor/blob";
import { Parallax } from "@/components/motion/parallax";
import { ScrollCue } from "@/components/scroll-cue";
import { Container } from "@/components/section";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { splitHighlight } from "@/lib/text";
import { IMAGE_QUALITY, imageTone } from "@/lib/image";
import { cn } from "@/lib/utils";

const badgePositions = [
  "top-[6%] left-[2%] [animation-delay:-1s]",
  "top-[18%] right-[0%] [animation-delay:-3s]",
  "bottom-[12%] left-[8%] [animation-delay:-5s]",
];

export function HomeHero({ nextId }: { nextId: string }) {
  const { title, highlight, subtitle, image, badges } = home.hero;
  const t = splitHighlight(title, highlight);

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 lg:min-h-[min(100svh,60rem)] lg:pt-40 lg:pb-24">
      <HeroBackdrop />

      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        <div className="relative z-10">
          <h1 className="text-hero font-extrabold motion-safe:animate-rise">
            {t.before.split(site.name).map((chunk, i) => (
              <Fragment key={i}>
                {i > 0 && <span className="whitespace-nowrap">{site.name}</span>}
                {chunk}
              </Fragment>
            ))}
            <span className="relative inline-block whitespace-nowrap text-jollof-strong">
              {t.match}
              <svg
                aria-hidden
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-[0.12em] left-0 h-[0.22em] w-full text-saffron"
              >
                <path
                  d="M3 14C60 5 150 2 297 9"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            {t.after}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft motion-safe:animate-rise motion-safe:[animation-delay:120ms] sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-9 motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
            <AppStoreButtons />
          </div>
          <ScrollCue
            label={site.scrollCue}
            target={nextId}
            className="mt-12 hidden motion-safe:animate-rise motion-safe:[animation-delay:400ms] sm:inline-flex"
          />
        </div>

        <Parallax className="relative mx-auto w-full max-w-[34rem]" distance={70}>
          <div className="relative aspect-square">
            <div
              aria-hidden
              className="absolute inset-[6%] rounded-full bg-saffron shadow-[inset_0_-30px_60px_rgb(232_70_43/0.25)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 rounded-full border-2 border-dashed border-jollof/40 motion-safe:animate-[spin_60s_linear_infinite] motion-safe:will-change-transform"
            />
            <div aria-hidden className="glow absolute inset-[18%] [--glow:rgb(255_247_236/0.5)]" />

            <div className="absolute inset-[4%] flex items-center justify-center motion-safe:animate-float-slow motion-safe:will-change-transform">
              <Image
                src={image.src}
                quality={IMAGE_QUALITY}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                sizes="(min-width: 1024px) 480px, 88vw"
                className={cn(
                  "h-auto w-full drop-shadow-[0_40px_40px_rgb(20_18_43/0.35)]",
                  imageTone.photo,
                )}
              />
            </div>

            {badges.map((badge, i) => (
              <div
                key={badge.label}
                aria-hidden
                className={`absolute flex items-center gap-2 rounded-full bg-white/95 py-2 pr-4 pl-2 shadow-lift ring-1 ring-line backdrop-blur motion-safe:animate-float ${badgePositions[i % badgePositions.length]}`}
              >
                <span className="grid size-9 place-items-center rounded-full bg-cream text-xl sm:size-11 sm:text-2xl">
                  {badge.emoji}
                </span>
                <span className="font-display text-sm font-bold sm:text-base">{badge.label}</span>
              </div>
            ))}
          </div>
        </Parallax>
      </Container>
    </section>
  );
}
