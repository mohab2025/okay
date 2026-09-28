import { useEffect, useRef } from 'react'
import { useLocale } from '@/lib/locale'

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)
  const { dir } = useLocale()

  useEffect(() => {
    const element = bar.current
    if (!element) return
    let frame = 0
    const update = () => {
      frame = 0
      const height = document.documentElement.scrollHeight - window.innerHeight
      const progress = height > 0 ? window.scrollY / height : 0
      element.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px bg-ivory/10">
      <div
        ref={bar}
        className="h-full origin-left bg-sand"
        style={{ transformOrigin: dir === 'rtl' ? 'right center' : 'left center', transform: 'scaleX(0)' }}
      />
    </div>
  )
}
