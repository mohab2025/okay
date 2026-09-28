import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import type { Locale, Localized } from '@/lib/types'

type LocaleContextValue = {
  locale: Locale
  dir: 'rtl' | 'ltr'
  t: (copy: Localized) => string
  path: (to?: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    try {
      localStorage.setItem('okia-locale', locale)
    } catch {
      /* storage may be blocked */
    }
  }, [dir, locale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir,
      t: (copy) => copy[locale],
      path: (to = '/') => {
        if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) return to
        const hashIndex = to.indexOf('#')
        const hash = hashIndex >= 0 ? to.slice(hashIndex) : ''
        const pathname = hashIndex >= 0 ? to.slice(0, hashIndex) : to
        const clean = pathname.startsWith('/') ? pathname : `/${pathname}`
        const base = clean === '/' ? `/${locale}` : `/${locale}${clean}`
        return `${base}${hash}`
      },
    }),
    [dir, locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const value = useContext(LocaleContext)
  if (!value) throw new Error('useLocale must be used within LocaleProvider')
  return value
}
