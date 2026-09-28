import type { Locale } from '@/lib/types'

const arabicDigits = '٠١٢٣٤٥٦٧٨٩'

export function formatNumber(value: number, locale: Locale, pad = 2) {
  const text = String(Math.max(0, value)).padStart(pad, '0')
  if (locale === 'en') return text
  return text.replace(/\d/g, (digit) => arabicDigits[Number(digit)] ?? digit)
}
