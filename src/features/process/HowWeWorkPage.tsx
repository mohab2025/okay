import { PageHero, PageSection } from '@/components/layout/PageHero'
import { Button } from '@/components/ui/Button'
import { discoverySteps } from '@/data/process'
import { ui } from '@/data/ui'
import { ProcessTimeline } from '@/features/process/ProcessTimeline'
import { TechnologyBand } from '@/features/technology/TechnologyBand'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function HowWeWorkPage() {
  const { locale, t, path } = useLocale()
  const title = locale === 'ar' ? 'كيف نعمل' : 'How we work'
  const description =
    locale === 'ar'
      ? 'نستمع، نفهم، نحلل، ثم نصمم ونبني ونختبر ونطلق ونحسّن. الذكاء الاصطناعي يساند الفريق ولا يستبدله.'
      : 'We listen, understand, and analyze before we design, build, test, launch, and improve. AI supports the team and does not replace it.'

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path="/how-we-work"
        jsonLd={[
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: title, path: localizedPath(locale, '/how-we-work') },
          ]),
        ]}
      />
      <PageHero
        eyebrow={locale === 'ar' ? 'المنهج' : 'Method'}
        title={locale === 'ar' ? 'نسمع قبل أن نبني.' : 'We listen before we build.'}
        lede={description}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { label: title },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PageSection>
        <ol className="space-y-10">
          {discoverySteps.map((step, index) => (
            <li key={step.id} className="grid gap-4 border-t border-line-dark pt-8 md:grid-cols-12">
              <p className="text-sand md:col-span-2">{formatNumber(index + 1, locale)}</p>
              <h2 className="text-3xl md:col-span-3">{t(step.title)}</h2>
              <div className="md:col-span-6">
                <p className="leading-relaxed text-ink/75">{t(step.text)}</p>
                <p className="eyebrow mt-4">{t(step.indicator)}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-16">
          <Button href={path('/contact?intent=discovery')} tone="light" magnetic>
            {locale === 'ar' ? 'ابدأ جلسة اكتشاف' : 'Start a discovery session'}
          </Button>
        </div>
      </PageSection>
      <ProcessTimeline />
      <TechnologyBand />
    </>
  )
}
