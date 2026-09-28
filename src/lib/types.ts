export type Locale = 'ar' | 'en'

export type Localized = {
  ar: string
  en: string
}

export type VisualVariant = 'arch' | 'dune' | 'lattice' | 'orbit' | 'skyline' | 'core'

export function preferredLocale(): Locale {
  try {
    return localStorage.getItem('okia-locale') === 'en' ? 'en' : 'ar'
  } catch {
    return 'ar'
  }
}

export function swapLocale(pathname: string, next: Locale) {
  const parts = pathname.split('/')
  if (parts[1] === 'ar' || parts[1] === 'en') parts[1] = next
  else parts.splice(1, 0, next)
  const nextPath = parts.join('/')
  return nextPath.startsWith('/') ? nextPath : `/${nextPath}`
}
