import { ChevronDown } from "lucide-react";
import { Fragment } from "react";

import { HeroBackdrop } from "@/components/decor/blob";
import { TableOfContents } from "@/components/legal/table-of-contents";
import { Container } from "@/components/section";
import type { LegalBlock, LegalDocument, LegalInline } from "@/content/legal/types";

function Inline({ content }: { content: LegalInline[] }) {
  return (
    <>
      {content.map((part, i) =>
        typeof part === "string" ? (
          <Fragment key={i}>{part}</Fragment>
        ) : (
          <strong key={i}>{part.strong}</strong>
        ),
      )}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={block.id} className="scroll-mt-28">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 id={block.id} className="scroll-mt-28">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p>
          <Inline content={block.content} />
        </p>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List>
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline content={item} />
            </li>
          ))}
        </List>
      );
    }
  }
}

export function LegalPage({ document }: { document: LegalDocument }) {
  const toc = document.blocks
    .filter((b): b is Extract<LegalBlock, { type: "h2" }> => b.type === "h2")
    .map(({ id, text }) => ({ id, text }));

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <HeroBackdrop />
        <Container>
          <h1 className="text-display font-extrabold motion-safe:animate-rise">{document.title}</h1>
        </Container>
      </section>

      <Container className="pb-8">
        <div className="grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-16">
          <aside className="lg:order-none">
            <details className="group rounded-3xl bg-white p-5 shadow-soft ring-1 ring-line lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                Contents
                <ChevronDown className="size-5 transition group-open:rotate-180" aria-hidden />
              </summary>
              <TableOfContents items={toc} className="mt-4" />
            </details>
            <div className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line lg:block">
              <p className="font-display text-lg font-bold">Contents</p>
              <TableOfContents items={toc} className="mt-4" />
            </div>
          </aside>

          <article className="prose prose-lg max-w-[72ch] rounded-[var(--radius-card)] bg-white p-6 shadow-soft ring-1 ring-line sm:p-10 lg:p-14 prose-headings:font-display prose-headings:tracking-tight prose-headings:text-ink prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-bold first:prose-h2:mt-0 prose-h3:text-xl prose-p:text-ink-soft prose-strong:text-ink prose-li:text-ink-soft prose-li:marker:text-jollof">
            {document.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>
        </div>
      </Container>
    </>
  );
}
