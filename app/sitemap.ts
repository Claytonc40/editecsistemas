import { cases } from "@/data/cases";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://editecsistema.com.br";

  // Páginas estáticas
  const staticPages = [
    "",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Páginas de casos de sucesso
  const casePages = cases.map((case_) => ({
    url: `${baseUrl}/cases/${case_.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...casePages];
} 