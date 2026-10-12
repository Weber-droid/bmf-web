import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { LegalPage } from "@/components/legal/legal-page";
import { termsConditions } from "@/content/legal/terms-conditions";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: termsConditions.title,
  description: "The terms and conditions for using BringMe-Food’s services.",
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <>
      <LegalPage document={termsConditions} />
      <ContactSection />
    </>
  );
}
