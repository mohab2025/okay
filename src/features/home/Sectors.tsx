import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { sectors } from '@/data/home'
import { ui } from '@/data/ui'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'

export function Sectors() {
  const { locale, t, dir } = useLocale()
  const scroller = useRef<HTMLDivElement>(null)

  const scroll = (direction: 1 | -1) => {
    const node = scroller.current
    if (!node) return
    const card = node.querySelector<HTMLElement>('[data-card]')
    const delta = (card?.offsetWidth ?? 320) + 16
    const rtl = dir === 'rtl' ? -1 : 1
    node.scrollBy({ left: delta * direction * rtl, behavior: 'smooth' })
  }

  return (
    <section data-header="light" className="bg-paper py-20 text-ink md:py-28">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{locale === 'ar' ? 'من نبني لهم' : 'Who we build for'}</p>
            <h2 className="display-sm mt-4 max-w-xl">
              {locale === 'ar' ? 'قطاعات مختلفة. الطريقة نفسها: الفهم أولاً.' : 'Different sectors. The same method: understand first.'}
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button type="button" className="min-h-11 min-w-11 border border-ink/20" onClick={() => scroll(-1)} aria-label={t(ui.previous)}>
              {dir === 'rtl' ? '→' : '←'}
            </button>
            <button type="button" className="min-h-11 min-w-11 border border-ink/20" onClick={() => scroll(1)} aria-label={t(ui.next)}>
              {dir === 'rtl' ? '←' : '→'}
            </button>
          </div>
        </div>
      </Container>
      <div
        ref={scroller}
        className="scroller mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-4 md:px-10 lg:px-16"
        tabIndex={0}
        aria-label={t(ui.sectorsHint)}
        data-lenis-prevent-touch
      >
        {sectors.map((sector, index) => (
          <article
            key={sector.title.en}
            data-card
            className="min-w-[78vw] snap-start border border-line-dark bg-ivory p-6 sm:min-w-[46vw] lg:min-w-[28vw]"
          >
            <p className="text-sm text-sand">{formatNumber(index + 1, locale)}</p>
            <h3 className="mt-6 text-2xl">{t(sector.title)}</h3>
            <p className="mt-4 text-ink/70 leading-relaxed">{t(sector.text)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
