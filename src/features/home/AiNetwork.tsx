import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { agents } from '@/data/agents'
import { formatNumber } from '@/lib/format'
import { cn } from '@/lib/cn'
import { useLocale } from '@/lib/locale'

export function AiNetwork() {
  const { locale, dir, t } = useLocale()
  const [activeId, setActiveId] = useState(agents[0]?.id ?? '')
  const [live, setLive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const active = agents.find((agent) => agent.id === activeId) ?? agents[0]

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setLive(true)
      },
      { threshold: 0.35 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const nodes = agents.map((agent, index) => {
    const angle = (index / agents.length) * Math.PI * 2 - Math.PI / 2
    const radius = 36
    return {
      ...agent,
      x: 50 + Math.cos(angle) * radius * (dir === 'rtl' ? -1 : 1),
      y: 50 + Math.sin(angle) * radius * 0.86,
    }
  })

  return (
    <section id="ai" data-header="dark" className="bg-[#081612] py-24 text-ivory md:py-32">
      <Container>
        <SectionIntro
          index={formatNumber(6, locale)}
          eyebrow={locale === 'ar' ? 'الذكاء الاصطناعي' : 'Artificial intelligence'}
          tone="dark"
          title={
            <>
              {locale === 'ar' ? 'الذكاء الاصطناعي لا يستبدل فريقنا.' : "AI doesn't replace our team."}
              <span className="mt-2 block text-ivory/75">
                {locale === 'ar' ? 'يجعل فريقنا أقوى.' : 'It amplifies it.'}
              </span>
            </>
          }
          lede={
            locale === 'ar'
              ? 'الوكلاء يعملون تحت إشراف بشري عبر البحث والتحليل والبناء والاختبار والتوثيق والتشغيل. لا ندّعي تطويراً مستقلاً بلا مراجعة.'
              : 'Agents work under human supervision across research, analysis, building, testing, documentation, and operations. We do not claim autonomous development without review.'
          }
        />
        <div ref={ref} className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <div className={cn('network relative mx-auto hidden aspect-square w-full max-w-[560px] md:block lg:col-span-7', live && 'is-live')}>
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {nodes.map((node) => (
                <line
                  key={node.id}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  className="flow-line"
                  stroke="#C8A96B"
                  strokeOpacity="0.55"
                  strokeWidth="0.25"
                />
              ))}
              <circle cx="50" cy="50" r="8" fill="#123C32" stroke="#F5F4EF" strokeWidth="0.35" />
            </svg>
            <div className="absolute top-1/2 left-1/2 w-28 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[0.65rem] tracking-[0.14em] text-sand">OKIA AI CORE</p>
              <p className="mt-1 text-[0.7rem] text-ivory/70">{locale === 'ar' ? 'بإشراف بشري' : 'Human-led'}</p>
            </div>
            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                className="absolute -translate-x-1/2 -translate-y-1/2 px-2 py-1 text-xs"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                aria-pressed={node.id === activeId}
                onMouseEnter={() => setActiveId(node.id)}
                onFocus={() => setActiveId(node.id)}
                onClick={() => setActiveId(node.id)}
              >
                <span className={cn('block border px-2 py-1', node.id === activeId ? 'border-sand text-ivory' : 'border-line text-ivory/70')}>
                  {t(node.short)}
                </span>
              </button>
            ))}
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow">{active ? t(active.short) : ''}</p>
            <h3 className="mt-3 text-3xl">{active ? t(active.title) : ''}</h3>
            <p className="mt-4 min-h-24 leading-relaxed text-ivory/75">{active ? t(active.text) : ''}</p>
            <p className="mt-8 border-t border-line pt-4 text-sm text-sand">
              {locale === 'ar' ? 'وكلاء الذكاء الاصطناعي يعملون تحت إشراف بشري.' : 'AI agents work under human supervision.'}
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-3 md:hidden">
          {agents.map((agent) => (
            <button
              key={agent.id}
              type="button"
              className="border border-line px-4 py-3 text-start"
              aria-pressed={agent.id === activeId}
              onClick={() => setActiveId(agent.id)}
            >
              {t(agent.title)}
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}
