import { KenteStrip } from "@/components/decor/kente-strip";
import { WordReveal } from "@/components/motion/word-reveal";
import { Container } from "@/components/section";
import { home } from "@/content/home";
import { splitHighlight } from "@/lib/text";

export function StatementBanner() {
  const { text, highlight } = home.statement;
  const t = splitHighlight(text, highlight);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-cream sm:py-36">
      <KenteStrip className="absolute inset-x-0 top-0" />
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0 opacity-[0.06]" />
      <div
        aria-hidden
        className="glow pointer-events-none absolute top-1/2 left-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 [--glow:rgb(61_59_133/0.9)]"
      />
      <Container className="relative">
        <WordReveal
          as="p"
          parts={[
            { text: t.before },
            { text: t.match, className: "text-saffron" },
            { text: t.after },
          ]}
          className="mx-auto max-w-6xl text-center font-display text-display font-bold tracking-tight"
        />
      </Container>
      <KenteStrip className="absolute inset-x-0 bottom-0 rotate-180" />
    </section>
  );
}
