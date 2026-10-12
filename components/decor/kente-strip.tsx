import { cn } from "@/lib/utils";

export function KenteStrip({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("h-3 sm:h-4", className)}
      style={{
        backgroundImage: [
          "repeating-linear-gradient(90deg, var(--saffron) 0 28px, var(--leaf) 28px 36px, var(--jollof) 36px 64px, var(--ink) 64px 70px, var(--saffron) 70px 84px, var(--indigo) 84px 96px)",
        ].join(","),
      }}
    />
  );
}
