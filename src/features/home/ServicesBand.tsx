import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { Visual } from '@/components/ui/Visual'
import { services } from '@/data/services'
import { ui } from '@/data/ui'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'

export function ServicesBand() {
  const { locale, t, path } = useLocale()
  return (
    <section id="services" data-header="light" className="bg-ivory py-24 text-ink md:py-32">
      <Container>
        <SectionIntro
          index={formatNumber(7, locale)}
          eyebrow={t(ui.services)}
          title={locale === 'ar' ? 'نبني ما يحتاجه العمل، لا ما يسهل بيعه.' : 'We build what the business needs, not what is easy to sell.'}
          lede={
            locale === 'ar'
              ? 'منتج، ويب، جوال، أنظمة، تجارة، وذكاء اصطناعي. التقنية تأتي بعد الفهم.'
              : 'Product, web, mobile, systems, commerce, and AI. Technology comes after understanding.'
          }
        />
        <div className="mt-14">
          {services.map((service, index) => (
            <Reveal key={service.slug}>
              <article className="grid items-center gap-8 border-t border-line-dark py-10 md:grid-cols-12 md:py-14">
                <p className="text-sand md:col-span-1">{formatNumber(index + 1, locale)}</p>
                <div className="md:col-span-6">
                  <h3 className="display-sm">{t(service.title)}</h3>
                  <p className="mt-4 max-w-xl text-ink/75 leading-relaxed">{t(service.summary)}</p>
                  <Link className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-1" to={path(`/services/${service.slug}`)}>
                    {t(ui.explore)}
                    <span aria-hidden="true" className="text-sand">
                      ↗
                    </span>
                  </Link>
                </div>
                <div className="md:col-span-5">
                  <Visual variant={service.visual} image={service.image} alt={t(service.title)} />
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.technologies.map((item) => (
                      <li key={item} className="border border-line-dark px-2 py-1 text-xs tracking-wide text-ink/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
