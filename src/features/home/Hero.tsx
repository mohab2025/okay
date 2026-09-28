import { lazy, Suspense, useEffect, useRef, useState, type CSSProperties } from 'react'
import { Button } from '@/components/ui/Button'
import { CanvasGuard } from '@/components/3d/CanvasGuard'
import { CoreFallback } from '@/components/3d/CoreFallback'
import { Container } from '@/components/ui/Container'
import { ui } from '@/data/ui'
import { journey } from '@/data/home'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { backgroundAt, heroMotion } from '@/lib/heroMotion'
import { useLocale } from '@/lib/locale'
import { resolve3DQuality } from '@/lib/performance'

const DigitalCoreCanvas = lazy(() => import('@/components/3d/DigitalCoreCanvas'))

const lines = {
  ar: [
    { text: 'نسمع فكرتك.', sx: '18px', sy: '28px' },
    { text: 'نفهم مشروعك.', sx: '42px', sy: '64px' },
    { text: 'ونبنيه معك.', sx: '70px', sy: '108px' },
  ],
  en: [
    { text: 'We listen.', sx: '16px', sy: '24px' },
    { text: 'We understand.', sx: '40px', sy: '58px' },
    { text: 'We build.', sx: '68px', sy: '96px' },
  ],
}

export function Hero() {
  const { locale, t, path } = useLocale()
  const reduced = usePrefersReducedMotion()
  const rootRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLParagraphElement>(null)
  const noteRef = useRef<HTMLParagraphElement>(null)
  const liveRef = useRef<HTMLParagraphElement>(null)
  const [quality, setQuality] = useState<'pending' | 'off' | 'lite' | 'full'>('pending')

  useEffect(() => {
    setQuality(resolve3DQuality())
  }, [])

  useEffect(() => {
    const root = rootRef.current
    const sticky = stickyRef.current
    if (!root || !sticky || reduced) return
    let cancelled = false
    let revert: (() => void) | undefined
    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: root,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            const progress = self.progress
            heroMotion.progress = progress
            sticky.style.setProperty('--p', progress.toFixed(4))
            const index = Math.min(journey.length - 1, Math.floor(progress * journey.length))
            const stage = journey[index]
            if (!stage) return
            if (wordRef.current && wordRef.current.dataset.index !== String(index)) {
              wordRef.current.dataset.index = String(index)
              wordRef.current.textContent = stage[locale]
            }
            if (noteRef.current) noteRef.current.textContent = stage.note[locale]
            if (liveRef.current) liveRef.current.textContent = `${stage[locale]}. ${stage.note[locale]}`
            if (bgRef.current) bgRef.current.style.backgroundColor = backgroundAt(progress)
          },
        })
      }, root)
      revert = () => ctx.revert()
    })()
    return () => {
      cancelled = true
      revert?.()
      heroMotion.progress = 0
    }
  }, [locale, reduced])

  return (
    <section
      ref={rootRef}
      data-header="dark"
      className={reduced ? 'relative h-svh bg-night text-ivory' : 'relative h-[230svh] bg-night text-ivory md:h-[320svh]'}
    >
      <div ref={stickyRef} className="hero-sticky sticky top-0 h-svh overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 bg-night" />
        <div className="core-stage">
          <CanvasGuard fallback={<CoreFallback />}>
            {quality === 'lite' || quality === 'full' ? (
              <Suspense fallback={<CoreFallback />}>
                <DigitalCoreCanvas quality={quality} />
              </Suspense>
            ) : (
              <CoreFallback />
            )}
          </CanvasGuard>
        </div>
        <div className="hero-scrim absolute inset-0" />
        <div className="grain" />
        <p ref={wordRef} className="stage-word" data-index="0">
          {journey[0]?.[locale]}
        </p>
        <div className="relative z-10 flex h-full flex-col justify-end pb-16 md:pb-20">
          <Container>
            <p className="eyebrow">{locale === 'ar' ? 'أوكية · الرياض' : 'OKIA · Riyadh'}</p>
            <h1 className="hero-title mt-6 max-w-4xl">
              {lines[locale].map((line) => (
                <span
                  key={line.text}
                  className="hero-line"
                  style={{ '--sx': line.sx, '--sy': line.sy } as CSSProperties}
                >
                  {line.text}
                </span>
              ))}
            </h1>
            <p className="lede mt-8 max-w-xl text-ivory/78">
              {locale === 'ar'
                ? 'أوكية شريكك التقني لبناء المنتجات الرقمية، الأنظمة، التطبيقات، وحلول الذكاء الاصطناعي.'
                : 'OKIA is your technology partner for building digital products, software systems, mobile apps and AI-powered solutions.'}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={path('/contact')} magnetic tone="dark">
                {locale === 'ar' ? 'احكي لنا عن فكرتك' : 'Tell us about your idea'}
              </Button>
              <Button href={path('/how-we-work')} variant="secondary" tone="dark">
                {locale === 'ar' ? 'شاهد كيف نعمل' : 'See how we work'}
              </Button>
            </div>
            <p ref={noteRef} className="mt-8 text-sm text-ivory/60">
              {journey[0]?.note[locale]}
            </p>
          </Container>
        </div>
        <p className="scroll-hint pointer-events-none absolute inset-x-0 bottom-6 text-center text-xs tracking-wide text-ivory/55">
          {t(ui.scroll)}
        </p>
        <p ref={liveRef} className="sr-only" aria-live="polite">
          {journey[0]?.[locale]}
        </p>
      </div>
    </section>
  )
}
