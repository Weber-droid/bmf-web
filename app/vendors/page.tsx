import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { RevealGroup } from "@/components/motion/reveal";
import { WordReveal } from "@/components/motion/word-reveal";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { StepCard } from "@/components/step-card";
import { ServicesBento } from "@/components/vendors/services-bento";
import { Technology } from "@/components/vendors/technology";
import { WhyBmf } from "@/components/vendors/why-bmf";
import { vendors } from "@/content/vendors";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Vendors",
  description: vendors.hero.subtitle,
  path: "/vendors",
});

export default function VendorsPage() {
  const { hero, howItWorks, partners } = vendors;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} image={hero.image} nextId="intro" />

      <Section id="intro" spacing="tight" className="scroll-mt-16 pb-20 sm:pb-28">
        <WordReveal
          parts={[{ text: hero.intro }]}
          stagger={0.025}
          className="mx-auto max-w-5xl text-center font-display text-statement font-semibold tracking-tight"
        />
      </Section>

      <ServicesBento />
      <Technology />

      <Section>
        <SectionHeading title={howItWorks.title} size="display" align="center" />
        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-[3.25rem] right-[16%] left-[16%] hidden border-t-[3px] border-dashed border-jollof/50 md:block"
          />
          <RevealGroup
            as="ol"
            stagger={0.15}
            className="relative grid gap-6 md:grid-cols-3 lg:gap-8"
          >
            {howItWorks.steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} variant="icon" />
            ))}
          </RevealGroup>
        </div>
      </Section>

      <div className="bg-cream-2">
        <WhyBmf />
      </div>

      <Section spacing="tight" className="overflow-hidden">
        <SectionHeading title={partners.title} align="center" />
        <LogoMarquee logos={partners.logos} className="mt-10" />
      </Section>

      <ContactSection />
    </>
  );
}
