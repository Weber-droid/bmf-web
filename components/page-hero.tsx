import Image from "next/image";
import type { ReactNode } from "react";

import { Blob, HeroBackdrop } from "@/components/decor/blob";
import { Parallax } from "@/components/motion/parallax";
import { ScrollCue } from "@/components/scroll-cue";
import { Container } from "@/components/section";
import { site } from "@/content/site";
import type { ImageAsset } from "@/content/types";

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: ImageAsset;
  /** Id of the next section, used by the scroll cue */
  nextId: string;
  children?: ReactNode;
};

/** Hero used by the inner marketing pages (Vendors, Riders). */
export function PageHero({ title, subtitle, image, nextId, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-36 lg:pt-40 lg:pb-20">
      <HeroBackdrop />
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="relative z-10">
          <h1 className="text-hero font-extrabold motion-safe:animate-rise">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft motion-safe:animate-rise motion-safe:[animation-delay:120ms] sm:text-2xl sm:leading-snug">
            {subtitle}
          </p>
          {children && (
            <div className="mt-9 motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
              {children}
            </div>
          )}
          <ScrollCue
            label={site.scrollCue}
            target={nextId}
            className="mt-12 hidden motion-safe:animate-rise motion-safe:[animation-delay:360ms] sm:inline-flex"
          />
        </div>

        <Parallax className="relative mx-auto w-full max-w-[30rem]" distance={60}>
          <div className="relative aspect-square">
            <Blob className="absolute inset-0 text-saffron" />
            <Blob shape="b" className="absolute inset-[8%] rotate-12 text-cream/60" />
            <div className="absolute inset-[6%] motion-safe:animate-float-slow motion-safe:will-change-transform">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                sizes="(min-width: 1024px) 440px, 84vw"
                className="h-full w-full object-contain drop-shadow-[0_30px_30px_rgb(20_18_43/0.25)]"
              />
            </div>
          </div>
        </Parallax>
      </Container>
    </section>
  );
}
