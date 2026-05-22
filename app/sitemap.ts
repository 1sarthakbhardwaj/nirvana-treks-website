import type { MetadataRoute } from "next";

const SITE_URL = "https://nirvanatreks.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/tours", "/about", "/refer", "/contact"];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
