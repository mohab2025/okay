import { HomeStory } from "@/components/home/story/HomeStory";
import { AutomationSection } from "@/components/home/automation/AutomationSection";
import { EngineeringSection } from "@/components/home/engineering/EngineeringSection";
import { IntegrationsSection } from "@/components/home/integrations/IntegrationsSection";
import { DeploymentSection } from "@/components/home/enterprise/DeploymentSection";
import { GovernanceSection } from "@/components/home/enterprise/GovernanceSection";
import { OversightSection } from "@/components/home/enterprise/OversightSection";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AgentsSection } from "@/components/home/agents/AgentsSection";
import { IndustriesSection } from "@/components/home/industries/IndustriesSection";
import { SolutionsSection } from "@/components/home/solutions/SolutionsSection";
import { PageTransition } from "@/components/motion/PageTransition";
import { Section } from "@/components/primitives";
import {
  accountNavigation,
  primaryNavigation,
  siteRoutes,
} from "@/content/navigation";
import { routing } from "@/i18n/routing";
import { IdeaDiscovery } from "@/components/discovery/IdeaDiscovery";
import { Journey } from "@/components/home/narrative/Journey";
import { PartnershipSection, StoryFAQ, GrowthSection } from "@/components/home/narrative/StorySections";
import { narrativeContent } from "@/content/narrative";
import { pageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ path?: string }>;
};

export function generateStaticParams() {
  return siteRoutes.map((route) => ({
    slug: route.href.slice(1),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const route = findRoute(slug);

  if (!hasLocale(routing.locales, locale) || !route) {
    return {};
  }

  const title = await routeTitle(locale, route.id);

  const descriptions = locale === "ar" ? {
    product:"اكتشف كيف يحوّل الوكلاء الطلبات إلى إجراءات مع مراجعة بشرية وضوابط واضحة.",
    solutions:"مسارات عمل بالذكاء الاصطناعي للهندسة والعمليات والمبيعات والمالية ومعالجة المستندات.",
    agents:"وكلاء متخصصون في البرمجة والبحث والبيانات والعمليات، مصممون حول عملك.",
    "how-it-works":"من استكشاف الفكرة إلى مراجعة متخصص، ثم النموذج الأولي والبناء والإطلاق والنمو.",
    technology:"استكشف بيئة تطوير الوكلاء والتكاملات وخيارات النشر وضوابط الأمان.",
    industries:"أمثلة توضيحية لأتمتة مسارات العمل في التجارة واللوجستيات والخدمات والقطاعات الأخرى.",
    company:narrativeContent.ar.partnership.intro,
    resources:"إجابات عن تطوير المنتجات وتكامل الوكلاء ومساري التنفيذ والشراكة.",
    "get-started":narrativeContent.ar.discovery.intro,
    "sign-in":"تسجيل الدخول إلى حساب أوكي.",
  } : {
    product:"Explore how agents turn requests into actions with human oversight and clear controls.",
    solutions:"AI workflows for engineering, operations, sales, finance, and document processing.",
    agents:"Specialized software, research, data, and operations agents built around your business.",
    "how-it-works":"From idea discovery and specialist review to prototyping, building, launch, and growth.",
    technology:"Explore the developer console, integrations, deployment options, and security controls.",
    industries:"Representative automation workflows across commerce, logistics, services, and more.",
    company:narrativeContent.en.partnership.intro,
    resources:"Answers about product development, agent integration, project delivery, and partnership.",
    "get-started":narrativeContent.en.discovery.intro,
    "sign-in":"Sign in to your Okay account.",
  };
  return {...pageMetadata(locale, title+" | Okay", descriptions[slug as keyof typeof descriptions], "/"+slug), ...(route.id==="signIn"?{robots:{index:false,follow:false}}:{})};
}

export default async function RoutePage({ params, searchParams }: PageProps) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const route = findRoute(slug);
  if (!route) {
    notFound();
  }

  setRequestLocale(locale);

  const title = route.id === "agents" || route.id === "solutions" || route.id === "industries" || route.id === "getStarted"
    ? null
    : await routeTitle(locale, route.id);

  return (
    <PageTransition>
      {route.id === "agents" ? <AgentsSection locale={locale} heading="h1" /> : null}
      {route.id === "solutions" ? <SolutionsSection locale={locale} heading="h1" /> : null}
      {route.id === "industries" ? <IndustriesSection locale={locale} heading="h1" /> : null}
      {route.id === "getStarted" ? <IdeaDiscovery locale={locale} initialPath={(await searchParams).path} /> : null}
      {title ? <Section heading="h1" title={title} /> : null}
      {route.id === "product" ? <><AutomationSection locale={locale} /><OversightSection locale={locale} /></> : null}
      {route.id === "howItWorks" ? <><Journey locale={locale}/><HomeStory locale={locale} /></> : null}
      {route.id === "company" ? <><PartnershipSection locale={locale}/><GrowthSection locale={locale}/></> : null}
      {route.id === "resources" ? <StoryFAQ locale={locale}/> : null}
      {route.id === "technology" ? <><EngineeringSection locale={locale} /><IntegrationsSection locale={locale} /><DeploymentSection locale={locale} /><GovernanceSection locale={locale} /></> : null}
    </PageTransition>
  );
}

function findRoute(slug: string) {
  return siteRoutes.find((route) => route.href === `/${slug}`);
}

async function routeTitle(locale: string, id: (typeof siteRoutes)[number]["id"]) {
  const isAccount = accountNavigation.some((item) => item.id === id);
  const t = await getTranslations({
    locale,
    namespace: isAccount ? "actions" : "nav",
  });

  if (isAccount) {
    const accountId = id as (typeof accountNavigation)[number]["id"];
    return t(accountId);
  }

  const navId = id as (typeof primaryNavigation)[number]["id"];
  return t(navId);
}
