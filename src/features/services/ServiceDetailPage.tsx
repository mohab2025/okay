import { Link, useParams } from 'react-router-dom'
import { PageHero, PageSection } from '@/components/layout/PageHero'
import { Button } from '@/components/ui/Button'
import { Visual } from '@/components/ui/Visual'
import { getService, services } from '@/data/services'
import { ui } from '@/data/ui'
import NotFoundPage from '@/features/system/NotFoundPage'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath, serviceSchema } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function ServiceDetailPage() {
  const { slug = '' } = useParams()
  const service = getService(slug)
  const { locale, t, path } = useLocale()
  if (!service) return <NotFoundPage />

  const title = t(service.title)
  const description = t(service.seo)
  const servicePath = `/services/${service.slug}`

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path={servicePath}
        jsonLd={[
          serviceSchema(title, description, localizedPath(locale, servicePath)),
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: t(ui.services), path: localizedPath(locale, '/services') },
            { name: title, path: localizedPath(locale, servicePath) },
          ]),
        ]}
      />
      <PageHero
        eyebrow={t(ui.services)}
        title={title}
        lede={t(service.summary)}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { href: path('/services'), label: t(ui.services) },
          { label: title },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PageSection>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xl leading-relaxed">{t(service.description)}</p>
            <p className="mt-6 leading-relaxed text-ink/75">{t(service.approach)}</p>
            <h2 className="mt-12 text-2xl">{locale === 'ar' ? 'ما يشمله العمل' : 'What the work includes'}</h2>
            <ul className="mt-6 space-y-3">
              {service.includes[locale].map((item) => (
                <li key={item} className="border-s border-sand ps-4">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex flex-wrap gap-2">
              {service.technologies.map((item) => (
                <li key={item} className="border border-line-dark px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href={path('/contact')} tone="light" magnetic>
                {locale === 'ar' ? 'احكي لنا عن فكرتك' : 'Tell us about your idea'}
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Visual variant={service.visual} image={service.image} alt={title} ratio="portrait" />
          </div>
        </div>
        <div className="mt-20 border-t border-line-dark pt-8">
          <p className="eyebrow">{locale === 'ar' ? 'خدمات أخرى' : 'Other services'}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((item) => item.slug !== service.slug)
              .slice(0, 3)
              .map((item) => (
                <li key={item.slug}>
                  <Link className="block border border-line-dark px-4 py-5 hover:border-pine" to={path(`/services/${item.slug}`)}>
                    {t(item.title)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </PageSection>
    </>
  )
}
