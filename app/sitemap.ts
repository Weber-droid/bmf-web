import type { MetadataRoute } from "next";

import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/vendors", priority: 0.8 },
    { path: "/riders", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-conditions", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
