import { cn } from "@/lib/utils";

type MarqueeStripProps = {
  items: readonly string[];
  className?: string;
};

export function MarqueeStrip({ items, className }: MarqueeStripProps) {
  const run = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {[...items, ...items].map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center">
          <span
            className={cn(
              "px-6 font-display text-4xl font-extrabold tracking-tight whitespace-nowrap sm:px-8 sm:text-6xl",
              i % 2 === 1 && "text-outline",
            )}
          >
            {item}
          </span>
          <span className="text-3xl text-saffron sm:text-5xl">✺</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn(
        "relative -mx-6 -rotate-2 overflow-hidden border-y-4 border-ink bg-jollof-strong py-5 text-white sm:py-7",
        className,
      )}
    >
      <p className="sr-only">{items.join(" • ")}</p>
      <div
        aria-hidden
        className="flex w-max animate-marquee [--marquee-duration:28s] hover:[animation-play-state:paused]"
      >
        {run(true)}
        {run(true)}
      </div>
    </div>
  );
}
