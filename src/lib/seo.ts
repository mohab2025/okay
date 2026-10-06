import type { Metadata } from "next";
import type { Locale } from "@/i18n/routing";
import { siteConfig } from "@/content/site";
import { narrativeContent } from "@/content/narrative";

export function pageMetadata(locale: Locale, title: string, description: string, path = ""): Metadata {
 const url = siteConfig.url + "/" + locale + path;
 return {
  metadataBase: new URL(siteConfig.url), title, description,
  alternates: { canonical: url, languages: {
   ar: siteConfig.url + "/ar" + path,
   en: siteConfig.url + "/en" + path,
   "x-default": siteConfig.url + "/ar" + path,
  }},
  openGraph: { type: "website", siteName: siteConfig.name, title, description, url,
   locale: locale === "ar" ? "ar_SA" : "en_US",
   alternateLocale: locale === "ar" ? "en_US" : "ar_SA",
   images: [{url: "/social-preview.png",width:1200,height:630,alt:"Okay — From idea to intelligent product"}],
  },
  twitter: {card:"summary_large_image",title,description,images:["/social-preview.png"]},
 };
}

export function homeStructuredData(locale: Locale) {
 const t = narrativeContent[locale];
 return {
  "@context":"https://schema.org",
  "@graph":[
   {"@type":"Organization","@id":siteConfig.url+"/#organization",name:siteConfig.name,url:siteConfig.url,description:t.description},
   {"@type":"WebSite","@id":siteConfig.url+"/#website",name:siteConfig.name,url:siteConfig.url,inLanguage:["ar","en"],publisher:{"@id":siteConfig.url+"/#organization"}},
   {"@type":"WebPage","@id":siteConfig.url+"/"+locale+"#page",url:siteConfig.url+"/"+locale,name:t.metaTitle,description:t.description,inLanguage:locale,isPartOf:{"@id":siteConfig.url+"/#website"}},
   {"@type":"Service",name:locale==="ar"?"تطوير المنتجات ووكلاء الذكاء الاصطناعي":"Product development and AI agent integration",description:t.description,provider:{"@id":siteConfig.url+"/#organization"},url:siteConfig.url+"/"+locale+"/solutions"},
   {"@type":"FAQPage",inLanguage:locale,mainEntity:t.faq.items.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))},
  ],
 };
}
