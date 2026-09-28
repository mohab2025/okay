import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { partnership } from '@/data/partnership'
import { useLocale } from '@/lib/locale'

export function PartnershipPanels({ detailed = false, showIntro = true }: { detailed?: boolean; showIntro?: boolean }) {
  const { locale, t, path } = useLocale()
  return (
    <section id="partnership" data-header="dark" className="bg-night text-ivory">
      {showIntro ? (
        <Container className="pt-24 pb-12 md:pt-32">
          <p className="eyebrow">{t(partnership.eyebrow)}</p>
          <h2 className="display mt-5 max-w-4xl">{t(partnership.title)}</h2>
          <p className="lede mt-6 max-w-2xl text-ivory/75">{t(partnership.intro)}</p>
          <p className="mt-10 text-2xl">{t(partnership.question)}</p>
        </Container>
      ) : (
        <Container className="pt-4 pb-10">
          <p className="text-2xl">{t(partnership.question)}</p>
        </Container>
      )}
      <div className="grid md:grid-cols-2">
        <article className="bg-ivory px-6 py-14 text-ink md:px-12 md:py-20">
          <p className="eyebrow">{t(partnership.build.kicker)}</p>
          <h3 className="display-sm mt-4">{t(partnership.build.title)}</h3>
          <p className="mt-6 max-w-md leading-relaxed text-ink/75">{t(partnership.build.text)}</p>
          {detailed ? (
            <ul className="mt-8 space-y-3">
              {partnership.build.points[locale].map((point) => (
                <li key={point} className="border-t border-line-dark pt-3">
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
        <article className="bg-pine px-6 py-14 text-ivory md:px-12 md:py-20">
          <p className="eyebrow">{t(partnership.partner.kicker)}</p>
          <h3 className="display-sm mt-4">{t(partnership.partner.title)}</h3>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/80">{t(partnership.partner.text)}</p>
          {detailed ? (
            <ul className="mt-8 space-y-3">
              {partnership.partner.points[locale].map((point) => (
                <li key={point} className="border-t border-white/15 pt-3">
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-10">
            <Button href={path('/contact?intent=partner')} tone="dark" magnetic>
              {locale === 'ar' ? 'ناقش نموذج الشراكة' : 'Discuss the partnership model'}
            </Button>
          </div>
        </article>
      </div>
    </section>
  )
}
