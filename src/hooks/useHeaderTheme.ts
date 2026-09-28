import { useEffect, useState } from 'react'

export function useHeaderTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setCompact(window.scrollY > 12)
      const nodes = document.querySelectorAll<HTMLElement>('[data-header]')
      let next: 'dark' | 'light' = 'dark'
      for (const node of nodes) {
        const rect = node.getBoundingClientRect()
        if (rect.top <= 72 && rect.bottom > 72) {
          next = node.dataset.header === 'light' ? 'light' : 'dark'
          break
        }
      }
      setTheme(next)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return { theme, compact }
}
