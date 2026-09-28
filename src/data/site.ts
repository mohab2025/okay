import type { Locale } from '@/lib/types'

// Replace phone, email, and social URLs with OKIA's real channels before launch.
export const site = {
  url: (import.meta.env.VITE_SITE_URL || 'https://okia.sa').replace(/\/$/, ''),
  email: 'hello@okia.sa',
  phone: '+966110000000',
  phoneDisplay: '+966 11 000 0000',
  whatsapp: '966110000000',
  address: {
    ar: 'الرياض، المملكة العربية السعودية',
    en: 'Riyadh, Saudi Arabia',
  },
  socials: [
    { id: 'linkedin', label: 'LinkedIn', href: '' },
    { id: 'x', label: 'X', href: '' },
    { id: 'instagram', label: 'Instagram', href: '' },
  ],
}

export function whatsappLink(locale: Locale) {
  const text =
    locale === 'ar' ? 'مرحباً أوكية، أود الحديث عن مشروع.' : 'Hello OKIA, I would like to discuss a project.'
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}
