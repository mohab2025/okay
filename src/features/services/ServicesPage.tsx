import { Link } from 'react-router-dom'
import { PageHero, PageSection } from '@/components/layout/PageHero'
import { Visual } from '@/components/ui/Visual'
import { services } from '@/data/services'
import { ui } from '@/data/ui'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function ServicesPage() {
  const { locale, t, path } = useLocale()
  const title = locale === 'ar' ? 'خدماتنا' : 'Services'
  const description =
    locale === 'ar'
      ? 'منتجات رقمية، تطبيقات ويب وجوال، أنظمة أعمال، تجارة إلكترونية، وحلول ذكاء اصطناعي. أوكية تبدأ بفهم المشروع.'
      : 'Digital products, web and mobile apps, business systems, e-commerce, and AI. OKIA starts by understanding the project.'
  const crumbs = [
    { href: path('/'), label: t(ui.home) },
    { label: title },
  ]

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path="/services"
        jsonLd={[
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: title, path: localizedPath(locale, '/services') },
          ]),
        ]}
      />
      <PageHero
        eyebrow={locale === 'ar' ? 'ما نبني' : 'What we build'}
        title={locale === 'ar' ? 'خدمات تُختار بعد الفهم، لا قبله.' : 'Services chosen after understanding, not before.'}
        lede={description}
        crumbs={crumbs}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PageSection>
        <div className="space-y-16">
          {services.map((service) => (
            <article key={service.slug} className="grid items-center gap-8 border-t border-line-dark pt-12 md:grid-cols-12">
              <div className="md:col-span-6">
                <h2 className="display-sm">{t(service.title)}</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-ink/75">{t(service.description)}</p>
                <Link className="mt-6 inline-flex border-b border-ink pb-1" to={path(`/services/${service.slug}`)}>
                  {t(ui.explore)}
                </Link>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <Visual variant={service.visual} image={service.image} alt={t(service.title)} />
              </div>
            </article>
          ))}
        </div>
      </PageSection>
    </>
  )
}
