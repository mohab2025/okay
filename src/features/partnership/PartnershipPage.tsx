import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { partnership } from '@/data/partnership'
import { ui } from '@/data/ui'
import { PartnershipPanels } from '@/features/partnership/PartnershipPanels'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function PartnershipPage() {
  const { locale, t, path } = useLocale()
  const title = locale === 'ar' ? 'الشراكة' : 'Partnership'
  const description = t(partnership.intro)

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path="/partnership"
        jsonLd={[
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: title, path: localizedPath(locale, '/partnership') },
          ]),
        ]}
      />
      <PageHero
        eyebrow={t(partnership.eyebrow)}
        title={t(partnership.title)}
        lede={description}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { label: title },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PartnershipPanels detailed showIntro={false} />
      <section data-header="light" className="bg-ivory py-20 text-ink md:py-28">
        <Container>
          <h2 className="display-sm max-w-3xl">{t(partnership.notThis.title)}</h2>
          <ul className="mt-10 max-w-3xl space-y-4">
            {partnership.notThis.items.map((item) => (
              <li key={item.en} className="border-t border-line-dark pt-4 text-lg">
                {t(item)}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Button href={path('/contact?intent=partner')} tone="light" magnetic>
              {locale === 'ar' ? 'ناقش مشروعك معنا' : 'Discuss your project with us'}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
