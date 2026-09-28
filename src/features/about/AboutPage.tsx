import { PageHero, PageSection } from '@/components/layout/PageHero'
import { Button } from '@/components/ui/Button'
import { aboutChapters, audiences } from '@/data/about'
import { roles } from '@/data/team'
import { ui } from '@/data/ui'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath, organizationSchema } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function AboutPage() {
  const { locale, t, path } = useLocale()
  const title = locale === 'ar' ? 'من نحن' : 'About'
  const description =
    locale === 'ar'
      ? 'أوكية شركة تقنية في الرياض. نستمع أولاً، ثم نجمع المتخصصين ونبني المنتج. الذكاء الاصطناعي يساند الفريق تحت إشراف بشري.'
      : 'OKIA is a technology company in Riyadh. We listen first, gather specialists, and build the product. AI supports the team under human supervision.'

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path="/about"
        jsonLd={[
          organizationSchema(description),
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: title, path: localizedPath(locale, '/about') },
          ]),
        ]}
      />
      <PageHero
        eyebrow={locale === 'ar' ? 'أوكية · الرياض' : 'OKIA · Riyadh'}
        title={locale === 'ar' ? 'تقنية تفهم عملك.' : 'Technology that understands your business.'}
        lede={description}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { label: title },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PageSection>
        <div className="space-y-12">
          {aboutChapters.map((chapter) => (
            <article key={chapter.title.en} className="max-w-3xl border-t border-line-dark pt-8">
              <h2 className="text-3xl">{t(chapter.title)}</h2>
              <p className="mt-4 leading-relaxed text-ink/75">{t(chapter.text)}</p>
            </article>
          ))}
        </div>
        <h2 className="mt-20 text-2xl">{locale === 'ar' ? 'من نعمل معهم' : 'Who we work with'}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {audiences.map((item) => (
            <li key={item.en} className="border border-line-dark px-4 py-4">
              {t(item)}
            </li>
          ))}
        </ul>
        <h2 className="mt-20 text-2xl">{locale === 'ar' ? 'أدوار الفريق' : 'Team roles'}</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          {locale === 'ar'
            ? 'هذه تخصصات، لا أسماء أشخاص. لا نعرض فريقاً متخيلاً.'
            : 'These are disciplines, not invented people. We do not present a fictional staff.'}
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {roles.map((role) => (
            <li key={role.id} className="border-t border-line-dark pt-4">
              <h3 className="text-xl">{t(role.title)}</h3>
              <p className="mt-2 text-ink/70">{t(role.text)}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Button href={path('/contact')} tone="light">
            {t(ui.cta)}
          </Button>
        </div>
      </PageSection>
    </>
  )
}
