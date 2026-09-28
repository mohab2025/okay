import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Visual } from '@/components/ui/Visual'
import { projects } from '@/data/projects'
import { ui } from '@/data/ui'
import { formatNumber } from '@/lib/format'
import { useLocale } from '@/lib/locale'

export function WorkBand() {
  const { locale, t, path } = useLocale()
  return (
    <section id="work" data-header="dark" className="bg-night py-24 text-ivory md:py-32">
      <Container>
        <p className="eyebrow">
          {formatNumber(9, locale)} — {t(ui.work)}
        </p>
        <h2 className="display mt-5 max-w-3xl">
          {locale === 'ar' ? 'قصص عرض، حتى تصل المشاريع الحقيقية.' : 'Demo stories, until the real projects arrive.'}
        </h2>
        <p className="lede mt-6 max-w-2xl text-ivory/70">
          {locale === 'ar'
            ? 'لا نعرض عملاء أو أرقاماً غير حقيقية. كل عمل هنا موسوم بوضوح كنسخة عرض.'
            : 'We do not show clients or numbers that are not real. Every piece here is clearly marked as a demo.'}
        </p>
        <div className="mt-12">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <article className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-12">
                <div className="md:col-span-5">
                  <Visual variant={project.visual} image={project.image} alt="" ratio="portrait" />
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="eyebrow">
                    {t(ui.demo)} · {t(project.sector)}
                  </p>
                  <h3 className="display-sm mt-4">{t(project.title)}</h3>
                  <p className="mt-4 text-ivory/75">{t(project.summary)}</p>
                  <p className="mt-4 text-sm text-ivory/55">
                    {locale === 'ar' ? 'المشكلة' : 'Problem'}: {t(project.problem)}
                  </p>
                  <Link className="mt-6 inline-flex border-b border-ivory/40 pb-1" to={path(`/work/${project.slug}`)}>
                    {t(ui.view)}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
