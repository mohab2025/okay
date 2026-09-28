import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { roles } from '@/data/team'
import { formatNumber } from '@/lib/format'
import { cn } from '@/lib/cn'
import { useLocale } from '@/lib/locale'

export function Specialists() {
  const { locale, dir, t } = useLocale()
  const [activeId, setActiveId] = useState(roles[0]?.id ?? '')
  const active = roles.find((role) => role.id === activeId) ?? roles[0]

  return (
    <section id="specialists" data-header="dark" className="bg-night py-24 text-ivory md:py-32">
      <Container>
        <SectionIntro
          index={formatNumber(5, locale)}
          eyebrow={locale === 'ar' ? 'المتخصصون' : 'Specialists'}
          tone="dark"
          title={
            <>
              {locale === 'ar' ? 'فكرتك لا تحتاج مبرمجاً واحداً.' : 'Your idea does not need a single developer.'}
              <span className="mt-2 block text-ivory/70">
                {locale === 'ar' ? 'تحتاج الفريق الصحيح.' : 'It needs the right team.'}
              </span>
            </>
          }
          lede={
            locale === 'ar'
              ? 'كل دور يظهر حين يحتاجه المشروع. مرّر على التخصص لترى ما يضيفه.'
              : 'Each role appears when the project needs it. Choose a discipline to see what it contributes.'
          }
        />
        <div className="relative mx-auto mt-16 hidden aspect-square max-w-[760px] md:block">
          <div className="absolute top-1/2 left-1/2 w-[42%] -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="eyebrow">{locale === 'ar' ? 'الفريق الصحيح' : 'The right team'}</p>
            <h3 className="mt-3 text-2xl">{active ? t(active.title) : ''}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ivory/70">{active ? t(active.text) : ''}</p>
          </div>
          {roles.map((role, index) => {
            const angle = (index / roles.length) * Math.PI * 2 - Math.PI / 2
            const radius = 38
            const x = 50 + Math.cos(angle) * radius * (dir === 'rtl' ? -1 : 1)
            const y = 50 + Math.sin(angle) * radius * 0.92
            const selected = role.id === activeId
            return (
              <button
                key={role.id}
                type="button"
                className="absolute w-28 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-pressed={selected}
                onMouseEnter={() => setActiveId(role.id)}
                onFocus={() => setActiveId(role.id)}
                onClick={() => setActiveId(role.id)}
              >
                <span
                  className={cn(
                    'mx-auto block h-2.5 w-2.5 rounded-full',
                    selected ? 'bg-sand' : 'bg-ivory/50',
                  )}
                />
                <span className={cn('mt-2 block text-xs', selected ? 'text-ivory' : 'text-ivory/55')}>{t(role.short)}</span>
              </button>
            )
          })}
        </div>
        <div className="mt-12 md:hidden">
          {roles.map((role) => {
            const selected = role.id === activeId
            return (
              <div key={role.id} className="border-t border-line">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-start"
                  aria-expanded={selected}
                  onClick={() => setActiveId(selected ? '' : role.id)}
                >
                  <span>{t(role.title)}</span>
                  <span className="text-sand" aria-hidden="true">
                    {selected ? '–' : '+'}
                  </span>
                </button>
                {selected ? <p className="pb-4 text-ivory/70">{t(role.text)}</p> : null}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
