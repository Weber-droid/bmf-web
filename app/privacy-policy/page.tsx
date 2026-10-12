import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { LegalPage } from "@/components/legal/legal-page";
import { privacyPolicy } from "@/content/legal/privacy-policy";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: privacyPolicy.title,
  description:
    "How BringMe-Food Ltd collects, uses and discloses personal information in connection with the Services.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPage document={privacyPolicy} />
      <ContactSection />
    </>
  );
}
