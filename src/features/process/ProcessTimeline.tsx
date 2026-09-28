import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { deliveryStages } from '@/data/process'
import { formatNumber } from '@/lib/format'
import { cn } from '@/lib/cn'
import { useLocale } from '@/lib/locale'

export function ProcessTimeline() {
  const { locale, t } = useLocale()
  const [open, setOpen] = useState(deliveryStages[0]?.id ?? '')

  return (
    <section id="process" data-header="light" className="bg-ivory py-24 text-ink md:py-32">
      <Container>
        <p className="eyebrow">{formatNumber(11, locale)} — {locale === 'ar' ? 'رحلة المشروع' : 'The project journey'}</p>
        <h2 className="display mt-5 max-w-3xl">
          {locale === 'ar' ? 'سبع مراحل يمكن فتحها.' : 'Seven stages you can open.'}
        </h2>
        <p className="lede mt-6 max-w-2xl text-ink/70">
          {locale === 'ar'
            ? 'من الاكتشاف إلى النمو. كل مرحلة تخبرك بما يحدث، لا بما نعد به.'
            : 'From discovery to growth. Each stage tells you what happens, not what we promise.'}
        </p>
        <div className="mt-12 grid gap-3 lg:grid-cols-7">
          {deliveryStages.map((stage, index) => {
            const selected = open === stage.id
            return (
              <button
                key={stage.id}
                type="button"
                aria-expanded={selected}
                onClick={() => setOpen(stage.id)}
                className={cn(
                  'border px-3 py-4 text-start',
                  selected ? 'border-pine bg-pine text-ivory' : 'border-line-dark',
                )}
              >
                <span className={cn('text-xs', selected ? 'text-sand' : 'text-sand')}>{formatNumber(index + 1, locale)}</span>
                <span className="mt-3 block text-sm">{t(stage.title)}</span>
              </button>
            )
          })}
        </div>
        {deliveryStages.map((stage) =>
          stage.id === open ? (
            <div key={stage.id} className="mt-8 grid gap-8 border-t border-line-dark pt-8 md:grid-cols-12">
              <h3 className="display-sm md:col-span-4">{t(stage.title)}</h3>
              <div className="md:col-span-7">
                <p className="leading-relaxed text-ink/75">{t(stage.text)}</p>
                <ul className="mt-6 space-y-3">
                  {stage.points[locale].map((point) => (
                    <li key={point} className="border-s border-sand ps-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null,
        )}
      </Container>
    </section>
  )
}
