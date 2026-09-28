import { Link } from 'react-router-dom'
import { PageHero, PageSection } from '@/components/layout/PageHero'
import { Visual } from '@/components/ui/Visual'
import { projects } from '@/data/projects'
import { ui } from '@/data/ui'
import { useLocale } from '@/lib/locale'
import { breadcrumbSchema, localizedPath } from '@/lib/schema'
import { Seo } from '@/lib/seo'

export default function WorkPage() {
  const { locale, t, path } = useLocale()
  const title = locale === 'ar' ? 'أعمالنا' : 'Work'
  const description =
    locale === 'ar'
      ? 'نماذج عرض لطريقة أوكية في فهم المشكلة ثم بناء المنتج. ليست عملاء حقيقيين وليست نتائج مقاسة.'
      : 'Demo studies of how OKIA understands a problem before building. These are not real clients and not measured results.'

  return (
    <>
      <Seo
        title={`${title} — OKIA`}
        description={description}
        path="/work"
        jsonLd={[
          breadcrumbSchema([
            { name: t(ui.home), path: localizedPath(locale, '/') },
            { name: title, path: localizedPath(locale, '/work') },
          ]),
        ]}
      />
      <PageHero
        eyebrow={t(ui.demo)}
        title={locale === 'ar' ? 'أعمال توضيحية، لا ادعاءات.' : 'Illustrative work, not claims.'}
        lede={description}
        crumbs={[
          { href: path('/'), label: t(ui.home) },
          { label: title },
        ]}
        breadcrumbLabel={locale === 'ar' ? 'مسار الصفحات' : 'Breadcrumb'}
      />
      <PageSection>
        <div className="space-y-20">
          {projects.map((project) => (
            <article key={project.slug} className="grid gap-10 border-t border-line-dark pt-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <Visual variant={project.visual} image={project.image} alt="" ratio="portrait" />
              </div>
              <div className="lg:col-span-7">
                <p className="eyebrow">
                  {t(ui.demo)} · {t(ui.client)} · {t(project.sector)}
                </p>
                <h2 className="display-sm mt-4">{t(project.title)}</h2>
                <dl className="mt-8 space-y-4">
                  {(
                    [
                      [locale === 'ar' ? 'المشكلة' : 'Problem', project.problem],
                      [locale === 'ar' ? 'المنهج' : 'Approach', project.approach],
                      [locale === 'ar' ? 'الحل' : 'Solution', project.solution],
                      [locale === 'ar' ? 'الأثر' : 'Outcome', project.outcome],
                    ] as const
                  ).map(([label, copy]) => (
                    <div key={label}>
                      <dt className="text-sm text-sand">{label}</dt>
                      <dd className="mt-1 text-ink/80">{t(copy)}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((item) => (
                    <li key={item} className="border border-line-dark px-2 py-1 text-xs">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link className="mt-8 inline-flex border-b border-ink pb-1" to={path(`/work/${project.slug}`)}>
                  {t(ui.view)}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
    </>
  )
}
