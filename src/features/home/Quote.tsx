import { Container } from '@/components/ui/Container'
import { useLocale } from '@/lib/locale'

export function Quote() {
  const { locale } = useLocale()
  return (
    <section data-header="dark" className="bg-pine py-24 text-ivory md:py-36">
      <Container>
        <p className="display max-w-4xl">{locale === 'ar' ? 'نسمع قبل أن نبني.' : 'We listen before we build.'}</p>
        <p className="mt-6 max-w-xl text-xl text-ivory/75">
          {locale === 'ar' ? 'نفهم قبل أن نقرر.' : 'Understand first. Build better.'}
        </p>
      </Container>
    </section>
  )
}
