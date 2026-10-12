import Image from "next/image";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type AppStoreButtonsProps = {
  className?: string;
  size?: "md" | "lg";
};

export function AppStoreButtons({ className, size = "lg" }: AppStoreButtonsProps) {
  const { appStore, googlePlay } = site.apps;
  const height = size === "lg" ? 54 : 44;
  const width = Math.round(height * 3.375);

  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {[appStore, googlePlay].map((store) => (
        <li key={store.href}>
          <a
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-[0.6rem] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lift"
          >
            <Image
              src={store.badge}
              alt={store.label}
              width={width}
              height={height}
              unoptimized
              className={cn("w-auto", size === "lg" ? "h-11 min-[400px]:h-[54px]" : "h-11")}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
