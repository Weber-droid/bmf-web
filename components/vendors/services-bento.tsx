import Image from "next/image";

import { FeatureCard } from "@/components/feature-card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { vendors } from "@/content/vendors";
import type { ImageAsset } from "@/content/types";
import { IMAGE_QUALITY, imageTone } from "@/lib/image";
import { cn } from "@/lib/utils";

const tones = ["saffron", "white", "indigo", "jollof"] as const;

export function ServicesBento() {
  const { title, images, items } = vendors.services;
  const [marketing, orders, delivery, support] = items;

  return (
    <Section tone="cream-2" className="rounded-t-[2.5rem] sm:rounded-t-[4rem]">
      <SectionHeading title={title} size="display" align="center" />

      <RevealGroup
        as="ul"
        stagger={0.1}
        className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
      >
        <ImageTile image={images[0]} />
        <FeatureCard feature={marketing} tone={tones[0]} />
        <FeatureCard feature={orders} tone={tones[1]} />
        <FeatureCard feature={delivery} tone={tones[2]} />
        <FeatureCard feature={support} tone={tones[3]} />
        <ImageTile image={images[1]} />
      </RevealGroup>
    </Section>
  );
}

function ImageTile({ image }: { image: ImageAsset }) {
  return (
    <RevealItem
      as="li"
      className="group relative min-h-72 overflow-hidden rounded-[var(--radius-card)] shadow-soft sm:min-h-80"
    >
      <Image
        src={image.src}
        quality={IMAGE_QUALITY}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 92vw"
        className={cn(
          "object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105",
          imageTone.photo,
        )}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
    </RevealItem>
  );
}
