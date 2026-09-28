import { useEffect, useRef, useState } from 'react'
import { formatNumber } from '@/lib/format'
import type { Locale } from '@/lib/types'

export function CountUp({ value, locale, pad = 2 }: { value: number; locale: Locale; pad?: number }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrent(value)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 900)
          setCurrent(Math.round(value * (1 - (1 - progress) ** 3)))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(current, locale, pad)}
    </span>
  )
}
