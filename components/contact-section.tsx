import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { AccraMap } from "@/components/decor/accra-map";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Container } from "@/components/section";
import { site } from "@/content/site";

export function ContactSection() {
  const { heading, body, email, location } = site.contact;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-indigo text-white shadow-lift sm:rounded-[2.5rem]">
          <div
            aria-hidden
            className="bg-grain pointer-events-none absolute inset-0 opacity-[0.07]"
          />
          <div
            aria-hidden
            className="glow pointer-events-none absolute -top-32 -left-24 size-96 [--glow:rgb(232_70_43/0.55)]"
          />

          <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:p-16">
            <div className="flex flex-col justify-center">
              <h2 id="contact-heading" className="text-display font-bold">
                {heading}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/80">{body}</p>

              <RevealGroup as="ul" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <RevealItem as="li">
                  <a
                    href={`mailto:${email}`}
                    className="group flex h-full items-center gap-4 rounded-3xl bg-white/[0.08] p-5 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.14]"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-saffron text-ink">
                      <Mail className="size-6" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold tracking-[0.14em] text-saffron uppercase">
                        Email
                      </span>
                      <span className="block font-semibold [overflow-wrap:anywhere]">{email}</span>
                    </span>
                    <ArrowUpRight
                      className="ml-auto hidden size-5 shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:block"
                      aria-hidden
                    />
                  </a>
                </RevealItem>
                <RevealItem as="li">
                  <div className="flex h-full items-center gap-4 rounded-3xl bg-white/[0.08] p-5 ring-1 ring-white/10">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-jollof text-white">
                      <MapPin className="size-6" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs font-bold tracking-[0.14em] text-saffron uppercase">
                        Location
                      </span>
                      <span className="block font-semibold">{location}</span>
                    </span>
                  </div>
                </RevealItem>
              </RevealGroup>
            </div>

            <AccraMap className="mx-auto w-full max-w-lg" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
