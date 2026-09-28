import { site } from '@/data/site'
import type { Locale, Localized } from '@/lib/types'

export function organizationSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    name: 'OKIA',
    alternateName: 'أوكية',
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    image: `${site.url}/og.svg`,
    email: site.email,
    telephone: site.phone,
    description,
    knowsLanguage: ['ar', 'en'],
    areaServed: { '@type': 'Country', name: 'Saudi Arabia' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Riyadh',
      addressCountry: 'SA',
    },
  }
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${site.url}${path}`,
    areaServed: 'SA',
    provider: { '@type': 'Organization', name: 'OKIA', url: site.url },
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  }
}

export function localizedPath(locale: Locale, path: string) {
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

export function pick(copy: Localized, locale: Locale) {
  return copy[locale]
}
