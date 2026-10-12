import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";
import { IMAGE_QUALITY } from "@/lib/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onDark?: boolean;
  priority?: boolean;
};

export function Logo({ className, onDark = false, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn(
        "inline-flex shrink-0 items-center rounded-2xl transition-transform duration-300 hover:scale-[1.03]",
        onDark && "bg-cream p-2",
        className,
      )}
    >
      <Image
        src={site.logo.src}
        quality={IMAGE_QUALITY}
        alt={site.logo.alt}
        width={site.logo.width}
        height={site.logo.height}
        priority={priority}
        sizes="64px"
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
