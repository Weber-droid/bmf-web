import { cn } from "@/lib/utils";

type ScrollCueProps = {
  label: string;
  target: string;
  className?: string;
};

export function ScrollCue({ label, target, className }: ScrollCueProps) {
  return (
    <a
      href={`#${target}`}
      className={cn(
        "group inline-flex items-center gap-3 text-sm font-semibold text-ink-soft transition hover:text-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className="relative flex h-10 w-6 justify-center rounded-full border-2 border-current pt-2"
      >
        <span className="h-2 w-1 animate-scroll-dot rounded-full bg-jollof" />
      </span>
      <span>{label}</span>
    </a>
  );
}
