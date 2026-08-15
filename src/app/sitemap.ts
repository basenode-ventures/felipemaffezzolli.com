import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const routes = ["", "/sobre", "/projetos", "/contato"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}
