import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
export default function robots(): MetadataRoute.Robots {
 return {rules:{userAgent:"*",allow:"/",disallow:["/ar/sign-in","/en/sign-in"]},sitemap:siteConfig.url+"/sitemap.xml",host:siteConfig.url};
}
