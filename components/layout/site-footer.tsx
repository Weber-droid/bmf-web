import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { AppStoreButtons } from "@/components/app-store-buttons";
import { CurrentYear } from "@/components/layout/current-year";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/section";
import { site } from "@/content/site";

export function SiteFooter() {
  const { footer, contact } = site;
  const year = new Date().getFullYear();
  const [copyrightBefore, copyrightAfter = ""] = footer.copyright.split("{year}");

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0 opacity-[0.05]" />
      <div
        aria-hidden
        className="glow pointer-events-none absolute -right-40 -bottom-56 size-[34rem] [--glow:rgb(43_42_99/0.85)]"
      />

      <Container className="relative pt-16 pb-10 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Logo onDark className="w-fit" />
            <p className="max-w-xs text-cream/70">{site.description}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold tracking-[0.14em] text-saffron uppercase">
              {site.name}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block font-medium text-cream/80 transition hover:translate-x-1 hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold tracking-[0.14em] text-saffron uppercase">
              {contact.heading}
            </h2>
            <ul className="mt-5 flex flex-col gap-4 text-cream/80">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-3 transition hover:text-cream"
                >
                  <Mail className="size-5 shrink-0 text-saffron" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <MapPin className="size-5 shrink-0 text-saffron" aria-hidden />
                {contact.location}
              </li>
            </ul>
          </div>

          <div id="get-the-app" className="scroll-mt-28">
            <h2 className="text-xs font-bold tracking-[0.14em] text-saffron uppercase">
              {site.headerCta.label}
            </h2>
            <AppStoreButtons size="md" className="mt-5" />
          </div>
        </div>

        <div
          aria-hidden
          className="mt-16 font-display text-[clamp(3rem,11.5vw,10.5rem)] leading-none font-extrabold tracking-tighter whitespace-nowrap text-cream/[0.06] select-none"
        >
          {site.name}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-cream/10 pt-8 text-sm text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {copyrightBefore}
            <CurrentYear initial={year} />
            {copyrightAfter}
          </p>
          <p>
            {footer.credit.prefix}{" "}
            <a
              href={footer.credit.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cream underline-offset-4 hover:underline"
            >
              {footer.credit.label}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
