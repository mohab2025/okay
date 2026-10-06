import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Landing } from "@/components/home/landing/Landing";
import { PageTransition } from "@/components/motion/PageTransition";
import { narrativeContent } from "@/content/narrative";
import { pageMetadata, homeStructuredData } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { routing } from "@/i18n/routing";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const content = narrativeContent[locale];
  return pageMetadata(locale, content.metaTitle, content.description);
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <PageTransition>
      <StructuredData data={homeStructuredData(locale)} />
      <Landing locale={locale} />
    </PageTransition>
  );
}
