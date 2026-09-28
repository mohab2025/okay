import { useEffect } from 'react'
import { site } from '@/data/site'
import { useLocale } from '@/lib/locale'

type SeoProps = {
  title: string
  description: string
  path?: string
  jsonLd?: unknown[]
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (hreflang) el.hreflang = hreflang
    document.head.appendChild(el)
  }
  el.href = href
}

export function Seo({ title, description, path = '/', jsonLd = [] }: SeoProps) {
  const { locale } = useLocale()
  const serialized = JSON.stringify(jsonLd)

  useEffect(() => {
    const entries = JSON.parse(serialized) as unknown[]
    const localizedPath = path === '/' ? `/${locale}` : `/${locale}${path}`
    const url = `${site.url}${localizedPath}`
    const arPath = path === '/' ? '/ar' : `/ar${path}`
    const enPath = path === '/' ? '/en' : `/en${path}`
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', 'OKIA')
    upsertMeta('property', 'og:locale', locale === 'ar' ? 'ar_SA' : 'en_US')
    upsertMeta('property', 'og:image', `${site.url}/og.svg`)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', `${site.url}/og.svg`)
    upsertLink('canonical', url)
    upsertLink('alternate', `${site.url}${arPath}`, 'ar')
    upsertLink('alternate', `${site.url}${enPath}`, 'en')
    upsertLink('alternate', `${site.url}${arPath}`, 'x-default')

    document.querySelectorAll('script[data-okia-ld]').forEach((node) => node.remove())
    for (const entry of entries) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.okiaLd = 'true'
      script.textContent = JSON.stringify(entry)
      document.head.appendChild(script)
    }
  }, [description, locale, path, serialized, title])

  return null
}
