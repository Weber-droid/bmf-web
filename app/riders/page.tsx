import type { Metadata } from "next";
import Image from "next/image";

import { CheckList } from "@/components/check-list";
import { ContactSection } from "@/components/contact-section";
import { Reveal, RevealGroup } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { BenefitCard } from "@/components/riders/benefit-card";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { riders } from "@/content/riders";
import { pageMetadata } from "@/lib/metadata";
import { IMAGE_QUALITY, imageTone } from "@/lib/image";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Riders",
  description: riders.hero.subtitle,
  path: "/riders",
});

export default function RidersPage() {
  const { hero, benefits, requirements } = riders;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} nextId="why-join" />

      <Section
        id="why-join"
        tone="cream-2"
        className="scroll-mt-16 rounded-t-[2.5rem] sm:rounded-t-[4rem]"
      >
        <SectionHeading title={benefits.title} size="display" align="center" />
        <RevealGroup as="ul" stagger={0.15} className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {benefits.items.map((benefit, i) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={i} />
          ))}
        </RevealGroup>
      </Section>

      <Section>
        <div className="grid items-center lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="relative mx-auto w-[86%] max-w-md sm:w-full lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-jollof sm:-inset-6"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
              <Image
                src={requirements.image.src}
                quality={IMAGE_QUALITY}
                alt={requirements.image.alt}
                fill
                sizes="(min-width: 1024px) 440px, 88vw"
                className={cn("object-cover object-top", imageTone.photo)}
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.15}
            className="relative z-10 -mt-16 rounded-[var(--radius-card)] bg-white p-7 shadow-lift ring-1 ring-line sm:mx-8 sm:p-10 lg:mt-0 lg:-ml-16"
          >
            <h2 className="text-title font-bold">{requirements.title}</h2>
            <CheckList items={requirements.items} size="lg" className="mt-8" />
          </Reveal>
        </div>
      </Section>

      <ContactSection />
    </>
  );
}
