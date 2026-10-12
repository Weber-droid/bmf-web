"use client";

import Image from "next/image";

import { Button } from "@/components/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ImageAsset } from "@/content/types";
import { IMAGE_QUALITY, imageTone } from "@/lib/image";
import { cn } from "@/lib/utils";

type LunchSchemeDialogProps = {
  triggerLabel: string;
  modal: { image: ImageAsset; title: string; paragraphs: readonly string[] };
};

export function LunchSchemeDialog({ triggerLabel, modal }: LunchSchemeDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="dark" size="lg" withArrow>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="grid md:grid-cols-[0.85fr_1fr]">
        <div className="relative h-56 sm:h-72 md:h-auto md:min-h-[32rem]">
          <Image
            src={modal.image.src}
            quality={IMAGE_QUALITY}
            alt={modal.image.alt}
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className={cn("object-cover", imageTone.photo)}
          />
        </div>
        <div className="flex flex-col gap-5 p-7 sm:p-10">
          <DialogTitle className="pr-10 text-3xl leading-tight sm:text-4xl">
            {modal.title}
          </DialogTitle>
          {modal.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
