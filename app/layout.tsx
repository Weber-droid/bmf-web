import type { Metadata, Viewport } from "next";

import "./globals.css";
import { OrganizationJsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MotionProvider } from "@/components/motion/motion-provider";
import { site } from "@/content/site";
import { bodyFont, displayFont } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  ...pageMetadata({ description: site.description, path: "/" }),
};

export const viewport: Viewport = {
  themeColor: "#fff7ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GH" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <noscript>
          {/* Without JS, scroll-reveal content must still be visible */}
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;translate:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-ink px-5 py-3 font-semibold text-cream shadow-lift transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
        </MotionProvider>
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
