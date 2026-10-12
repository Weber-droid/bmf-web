import { cn } from "@/lib/utils";

const shapes = {
  a: "M421 291c-27 85-118 140-205 128S47 345 30 260 64 79 147 45s194-17 248 50 53 111 26 196Z",
  b: "M398 116c43 61 37 160-12 222s-142 87-219 64S35 315 31 233 77 69 152 39s203 16 246 77Z",
} as const;

type BlobProps = {
  className?: string;
  shape?: keyof typeof shapes;
};

/** Organic background shape. Colour it with `text-*` utilities. */
export function Blob({ className, shape = "a" }: BlobProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 450 450"
      className={cn("pointer-events-none", className)}
      fill="currentColor"
    >
      <path d={shapes[shape]} />
    </svg>
  );
}

/** Soft gradient glows + grain used behind hero sections. */
export function HeroBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="glow absolute -top-40 -right-40 size-[44rem] [--glow:rgb(255_176_32/0.42)]" />
      <div className="glow absolute top-1/3 -left-48 size-[36rem] [--glow:rgb(232_70_43/0.16)]" />
      <div className="glow absolute bottom-0 left-1/3 size-[32rem] [--glow:rgb(43_42_99/0.1)]" />
      <div className="bg-grain absolute inset-0 opacity-[0.05]" />
    </div>
  );
}
