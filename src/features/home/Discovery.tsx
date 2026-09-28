import { Container } from '@/components/ui/Container'
import { CountUp } from '@/components/ui/CountUp'
import { Reveal } from '@/components/ui/Reveal'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { discoverySteps } from '@/data/process'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'

export function Discovery() {
  const { locale, t } = useLocale()
  return (
    <section id="discovery" data-header="light" className="bg-ivory py-24 text-ink md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionIntro
            index={formatNumber(4, locale)}
            eyebrow={locale === 'ar' ? 'من الاستماع إلى التحسين' : 'From listening to improvement'}
            title={locale === 'ar' ? 'تسعة مراحل. كل واحدة لها سبب.' : 'Nine stages. Each one has a reason.'}
            lede={
              locale === 'ar'
                ? 'لا نقفز من المكالمة إلى الكود. الطريق أطول لأنه أوضح.'
                : 'We do not jump from the call to the code. The path is longer because it is clearer.'
            }
          />
          <p className="text-sand">
            <span className="display">
              <CountUp value={discoverySteps.length} locale={locale} />
            </span>
          </p>
        </div>
        <ol className="mt-16">
          {discoverySteps.map((step, index) => (
            <li key={step.id}>
              <Reveal>
                <article className="grid gap-4 border-t border-line-dark py-8 md:grid-cols-12 md:items-baseline md:gap-8">
                  <p className="text-sand md:col-span-2">{formatNumber(index + 1, locale)}</p>
                  <h3 className="display-sm md:col-span-3">{t(step.title)}</h3>
                  <p className="text-ink/75 leading-relaxed md:col-span-5">{t(step.text)}</p>
                  <p className="eyebrow md:col-span-2 md:text-end">{t(step.indicator)}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
