import type { Metadata } from "next";

import { site } from "@/content/site";
import { ogAlt, ogSize } from "@/lib/og-image-meta";

type PageMetaInput = {
  /** Page name, rendered as "{title} – BringMe-Food". Omit for the home page. */
  title?: string;
  description: string;
  path: string;
};

/**
 * Builds per-page metadata with matching Open Graph and Twitter card tags.
 * Images are listed explicitly: a page-level `openGraph` object replaces the
 * parent's, so child routes would otherwise lose the root social image.
 */
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
