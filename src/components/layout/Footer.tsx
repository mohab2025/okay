import { Link } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { companyLinks, resourceLinks } from '@/data/navigation'
import { services } from '@/data/services'
import { site, whatsappLink } from '@/data/site'
import { ui } from '@/data/ui'
import { useLocale } from '@/lib/locale'

export function Footer() {
  const { locale, t, path } = useLocale()
  const year = new Date().getFullYear()
  const socials = site.socials.filter((item) => item.href)

  return (
    <footer data-header="dark" className="bg-night text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="display-sm mt-8 max-w-md">{t(ui.footerLine)}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="eyebrow">{t(ui.services)}</p>
              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link className="text-ivory/75 hover:text-ivory" to={path(`/services/${service.slug}`)}>
                      {t(service.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">{t(ui.company)}</p>
              <ul className="mt-5 space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link className="text-ivory/75 hover:text-ivory" to={path(item.href)}>
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-8">{t(ui.resources)}</p>
              <ul className="mt-5 space-y-3">
                {resourceLinks.map((item) => (
                  <li key={item.href}>
                    <Link className="text-ivory/75 hover:text-ivory" to={path(item.href)}>
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">{t(ui.contact)}</p>
              <ul className="mt-5 space-y-3 text-ivory/75">
                <li>
                  <a className="hover:text-ivory" href={whatsappLink(locale)} target="_blank" rel="noreferrer">
                    {t(ui.whatsapp)}
                  </a>
                </li>
                <li>
                  <a className="hover:text-ivory" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </li>
                <li>
                  <a className="hover:text-ivory" href={`tel:${site.phone}`}>
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>{t(site.address)}</li>
                {socials.map((item) => (
                  <li key={item.id}>
                    <a className="hover:text-ivory" href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {locale === 'ar' ? 'أوكية' : 'OKIA'}. {t(ui.copyright)}
          </p>
          <div className="flex gap-5">
            <Link to={path('/privacy')}>{locale === 'ar' ? 'الخصوصية' : 'Privacy'}</Link>
            <Link to={path('/terms')}>{locale === 'ar' ? 'الشروط' : 'Terms'}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
