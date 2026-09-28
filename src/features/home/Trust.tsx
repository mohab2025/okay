import { Container } from '@/components/ui/Container'
import { trustPrinciples } from '@/data/home'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'

export function Trust() {
  const { locale, t } = useLocale()
  return (
    <section data-header="light" className="bg-ivory py-24 text-ink md:py-32">
      <Container>
        <p className="eyebrow">{formatNumber(12, locale)}</p>
        <h2 className="display mt-5">{locale === 'ar' ? 'لماذا أوكية؟' : 'Why OKIA?'}</h2>
        <ul className="mt-12">
          {trustPrinciples.map((item, index) => (
            <li key={item.title.en} className="grid gap-3 border-t border-line-dark py-6 md:grid-cols-12 md:items-baseline">
              <span className="text-sand md:col-span-1">{formatNumber(index + 1, locale)}</span>
              <h3 className="text-2xl md:col-span-4">{t(item.title)}</h3>
              <p className="text-ink/70 leading-relaxed md:col-span-7">{t(item.text)}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
