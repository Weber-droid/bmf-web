import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { cn, isExternal } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap",
    "transition-[transform,box-shadow,background-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-jollof-strong text-white shadow-[0_10px_24px_-10px_rgb(201_58_31/0.7)] hover:shadow-[0_18px_32px_-12px_rgb(201_58_31/0.75)]",
        dark: "bg-ink text-cream shadow-[0_10px_24px_-12px_rgb(20_18_43/0.7)] hover:bg-indigo",
        indigo:
          "bg-indigo text-white shadow-[0_10px_24px_-12px_rgb(43_42_99/0.7)] hover:bg-indigo-2",
        saffron:
          "bg-saffron text-ink shadow-[0_10px_24px_-12px_rgb(255_176_32/0.9)] hover:bg-[#ffbe45]",
        light: "bg-cream text-ink shadow-soft hover:bg-white",
        outline: "border-2 border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-cream",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Variants = VariantProps<typeof buttonVariants>;

type ButtonContentProps = { children: ReactNode; withArrow?: boolean };

function ButtonContent({ children, withArrow }: ButtonContentProps) {
  return (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden
          className="-mr-1 grid size-7 place-items-center rounded-full bg-current/15 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
        >
          <ArrowRight className="size-4" strokeWidth={2.5} />
        </span>
      )}
    </>
  );
}

type ButtonLinkProps = Variants &
  ButtonContentProps &
  Omit<ComponentProps<"a">, "href" | "children"> & { href: string };

/** Link styled as a button. Internal routes use next/link; external and hash links use <a>. */
export function ButtonLink({
  href,
  variant,
  size,
  withArrow,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  const content = <ButtonContent withArrow={withArrow}>{children}</ButtonContent>;

  if (isExternal(href) || href.startsWith("#")) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}

type ButtonProps = Variants & ButtonContentProps & Omit<ComponentProps<"button">, "children">;

export function Button({
  variant,
  size,
  withArrow,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props}>
      <ButtonContent withArrow={withArrow}>{children}</ButtonContent>
    </button>
  );
}
