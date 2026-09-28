import { Container } from '@/components/ui/Container'
import { technologies } from '@/data/technology'
import { useLocale } from '@/lib/locale'

export function TechnologyBand({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const { t, locale } = useLocale()
  const dark = tone === 'dark'
  return (
    <section data-header={dark ? 'dark' : 'light'} className={dark ? 'bg-night py-24 text-ivory md:py-32' : 'bg-ivory py-24 text-ink md:py-32'}>
      <Container>
        <h2 className="display max-w-4xl">
          {locale === 'ar' ? 'نبني بتقنيات اليوم... لنظل جاهزين للغد.' : 'We build with today’s tools, so we stay ready for tomorrow.'}
        </h2>
        <p className={`lede mt-6 max-w-2xl ${dark ? 'text-ivory/70' : 'text-ink/70'}`}>
          {locale === 'ar'
            ? 'أسماء قليلة، مختارة حسب المشروع. لا جدار شعارات.'
            : 'A short list, chosen for the project. Not a wall of logos.'}
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((group) => (
            <div key={group.id} className={dark ? 'border-t border-line pt-4' : 'border-t border-line-dark pt-4'}>
              <h3 className="text-lg">{t(group.title)}</h3>
              <ul className={`mt-4 space-y-2 text-sm ${dark ? 'text-ivory/65' : 'text-ink/65'}`}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
