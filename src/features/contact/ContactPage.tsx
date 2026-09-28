import { PageHero, PageSection } from '@/components/layout/PageHero'
import { ProjectBriefForm } from '@/features/contact/ProjectBriefForm'
import { site, whatsappLink } from '@/data/site'
import { ui } from '@/data/ui'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function ContactPage() {
  const { locale, t, path } = useLocale()
  const title = locale === 'ar' ? 'احكِ لنا عن مشروعك.' : 'Tell us about your project.'
  const description =
    locale === 'ar'
      ? 'جلسة قصيرة لفهم ما تريد بناءه قبل أن نتواصل. أوكية تراجع الفكرة ثم تعود إليك.'
      : 'A short session to understand what you want to build before we reply. OKIA reviews the idea, then comes back to you.'

  return (
    <>
      <Seo
        title={locale === 'ar' ? 'تواصل معنا — OKIA' : 'Contact — OKIA'}
        description={description}
        path="/contact"
        jsonLd={[
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: locale === 'ar' ? 'تواصل' : 'Contact', path: localizedPath(locale, '/contact') },
          ]),
        ]}
      />
      <PageHero
        eyebrow={locale === 'ar' ? 'جلسة اكتشاف' : 'Discovery'}
        title={title}
        lede={description}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { label: locale === 'ar' ? 'تواصل' : 'Contact' },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PageSection>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProjectBriefForm />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow">{t(ui.contact)}</p>
            <ul className="mt-6 space-y-4 text-lg">
              <li>
                <a href={whatsappLink(locale)} target="_blank" rel="noreferrer">
                  {t(ui.whatsapp)}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
              </li>
              <li>{t(site.address)}</li>
            </ul>
          </aside>
        </div>
      </PageSection>
    </>
  )
}
