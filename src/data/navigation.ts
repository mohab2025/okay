import type { Localized } from '@/lib/types'

export const mainNav: { href: string; label: Localized }[] = [
  { href: '/', label: { ar: 'الرئيسية', en: 'Home' } },
  { href: '/services', label: { ar: 'خدماتنا', en: 'Services' } },
  { href: '/how-we-work', label: { ar: 'كيف نعمل', en: 'How we work' } },
  { href: '/services/ai', label: { ar: 'حلول AI', en: 'AI' } },
  { href: '/work', label: { ar: 'أعمالنا', en: 'Work' } },
  { href: '/partnership', label: { ar: 'الشراكة', en: 'Partnership' } },
  { href: '/about', label: { ar: 'من نحن', en: 'About' } },
  { href: '/contact', label: { ar: 'تواصل معنا', en: 'Contact' } },
]

export const companyLinks: { href: string; label: Localized }[] = [
  { href: '/about', label: { ar: 'من نحن', en: 'About' } },
  { href: '/how-we-work', label: { ar: 'كيف نعمل', en: 'How we work' } },
  { href: '/partnership', label: { ar: 'الشراكة', en: 'Partnership' } },
  { href: '/work', label: { ar: 'أعمالنا', en: 'Work' } },
  { href: '/contact', label: { ar: 'تواصل معنا', en: 'Contact' } },
]

export const resourceLinks: { href: string; label: Localized }[] = [
  { href: '/how-we-work', label: { ar: 'المنهج', en: 'Method' } },
  { href: '/services/ai', label: { ar: 'حلول الذكاء الاصطناعي', en: 'AI solutions' } },
  { href: '/privacy', label: { ar: 'سياسة الخصوصية', en: 'Privacy policy' } },
  { href: '/terms', label: { ar: 'الشروط', en: 'Terms' } },
]
