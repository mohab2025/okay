import { PageHero, PageSection } from '@/components/layout/PageHero'
import { privacySections, termsSections } from '@/data/legal'
import { ui } from '@/data/ui'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath } from '@/lib/schema'
import { Seo } from '@/lib/seo'

function Legal({
  kind,
}: {
  kind: 'privacy' | 'terms'
}) {
  const { locale, t, path } = useLocale()
  const sections = kind === 'privacy' ? privacySections : termsSections
  const title = kind === 'privacy' ? (locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy policy') : locale === 'ar' ? 'الشروط' : 'Terms'
  const pathName = kind === 'privacy' ? '/privacy' : '/terms'
  const description = t(sections[0]?.text ?? { ar: title, en: title })

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path={pathName}
        jsonLd={[
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: title, path: localizedPath(locale, pathName) },
          ]),
        ]}
      />
      <PageHero
        eyebrow="OKIA"
        title={title}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { label: title },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PageSection>
        <div className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <article key={section.title.en}>
              <h2 className="text-2xl">{t(section.title)}</h2>
              <p className="mt-3 leading-relaxed text-ink/75">{t(section.text)}</p>
            </article>
          ))}
        </div>
      </PageSection>
    </>
  )
}

export function PrivacyPage() {
  return <Legal kind="privacy" />
}

export function TermsPage() {
  return <Legal kind="terms" />
}
