import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollEngine } from '@/lib/scroll'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (reduced) return
    let cancelled = false
    let removeTicker: (() => void) | undefined
    void (async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)
      const lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        allowNestedScroll: true,
        anchors: true,
      })
      scrollEngine.lenis = lenis
      lenis.on('scroll', ScrollTrigger.update)
      const tick = (time: number) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      removeTicker = () => {
        gsap.ticker.remove(tick)
        lenis.destroy()
        scrollEngine.lenis = null
      }
      void document.fonts?.ready.then(() => ScrollTrigger.refresh())
    })()
    return () => {
      cancelled = true
      removeTicker?.()
    }
  }, [reduced])

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const target = document.getElementById(id)
      if (!target) return
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      if (scrollEngine.lenis) scrollEngine.lenis.scrollTo(top)
      else window.scrollTo(0, top)
      return
    }
    if (scrollEngine.lenis) scrollEngine.lenis.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
    const refresh = window.setTimeout(() => {
      void import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => ScrollTrigger.refresh())
    }, 80)
    return () => window.clearTimeout(refresh)
  }, [hash, pathname])

  return children
}
