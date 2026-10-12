import type { Metadata } from "next";

import { site } from "@/content/site";
import { ogAlt, ogSize } from "@/lib/og-image-meta";

type PageMetaInput = {
  title?: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const fullTitle = title ? `${title} – ${site.name}` : site.name;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: path,
      title: fullTitle,
      description,
      // page-level openGraph replaces the root one, so the image has to be repeated
      images: [{ url: "/opengraph-image", ...ogSize, alt: ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: "/twitter-image", ...ogSize, alt: ogAlt }],
    },
  };
}
