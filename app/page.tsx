import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { Community } from "@/components/home/community";
import { Discover } from "@/components/home/discover";
import { HomeHero } from "@/components/home/hero";
import { LunchScheme } from "@/components/home/lunch-scheme";
import { StatementBanner } from "@/components/home/statement-banner";
import { Teasers } from "@/components/home/teasers";
import { MarqueeStrip } from "@/components/marquee-strip";
import { home } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  description: home.hero.subtitle,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero nextId="community" />
      <div className="relative z-10 overflow-x-clip py-4">
        <MarqueeStrip items={home.marquee} />
      </div>
      <Community id="community" />
      <Discover />
      <Teasers />
      <StatementBanner />
      <LunchScheme />
      <ContactSection />
    </>
  );
}
