import type { MetadataRoute } from "next";
import { siteRoutes } from "@/content/navigation";
import { siteConfig } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
 const paths=["",...siteRoutes.filter(route=>route.id!=="signIn").map(route=>route.href)];
 return paths.flatMap(path=>siteConfig.locales.map(locale=>({
  url:siteConfig.url+"/"+locale+path,
  alternates:{languages:{ar:siteConfig.url+"/ar"+path,en:siteConfig.url+"/en"+path}},
 })));
}
