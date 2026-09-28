import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site, whatsappLink } from '@/data/site'
import { useLocale } from '@/lib/locale'

export function Closing() {
  const { locale, path } = useLocale()
  return (
    <section data-header="dark" className="bg-night py-28 text-ivory md:py-40">
      <Container>
        <p className="eyebrow">{locale === 'ar' ? 'البداية' : 'Begin'}</p>
        <h2 className="display mt-6 max-w-4xl">
          {locale === 'ar' ? 'جاهز تحكي لنا فكرتك؟' : 'Ready to tell us about your idea?'}
        </h2>
        <p className="lede mt-6 max-w-xl text-ivory/70">
          {locale === 'ar'
            ? 'نبدأ بفهم المشروع. البرمجة تأتي بعد ذلك.'
            : 'We start by understanding the project. The code comes after that.'}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={path('/contact')} magnetic>
            {locale === 'ar' ? 'ابدأ الحديث مع أوكية' : 'Start a conversation with OKIA'}
          </Button>
          <Button href={whatsappLink(locale)} variant="secondary">
            {locale === 'ar' ? 'واتساب' : 'WhatsApp'}
          </Button>
          <Button href={`mailto:${site.email}`} variant="secondary">
            {site.email}
          </Button>
        </div>
      </Container>
    </section>
  )
}
