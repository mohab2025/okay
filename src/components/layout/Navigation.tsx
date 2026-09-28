import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '@/components/brand/Logo'
import { mainNav } from '@/data/navigation'
import { ui } from '@/data/ui'
import { useLockBody } from '@/hooks/useLockBody'
import { useHeaderTheme } from '@/hooks/useHeaderTheme'
import { cn } from '@/lib/cn'
import { useLocale } from '@/lib/locale'
import { swapLocale } from '@/lib/types'

function isActive(pathname: string, href: string, localePath: string) {
  if (href === '/') return pathname === localePath
  if (href === '/services') return pathname === localePath
  return pathname === localePath || pathname.startsWith(`${localePath}/`)
}

export function Navigation() {
  const { locale, t, path } = useLocale()
  const location = useLocation()
  const { theme, compact } = useHeaderTheme()
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  useLockBody(open)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const light = theme === 'light' && !open
  const other = locale === 'ar' ? 'en' : 'ar'
  const languageHref = `${swapLocale(location.pathname, other)}${location.search}${location.hash}`

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-[background,height,color] duration-300',
          compact || open ? 'bg-night/80 backdrop-blur-md' : 'bg-transparent',
          light && compact ? 'bg-ivory/85 text-ink' : 'text-ivory',
          light && !compact ? 'text-ink' : '',
        )}
      >
        <div className={cn('mx-auto flex max-w-[1440px] items-center gap-4 px-5 md:px-10 lg:px-16', compact ? 'h-16' : 'h-20')}>
          <Link to={path('/')} className="shrink-0" aria-label="OKIA">
            <Logo tone={light && !open ? 'light' : 'dark'} />
          </Link>
          <nav className="ms-auto hidden items-center gap-5 xl:flex" aria-label={t(ui.menu)}>
            {mainNav.map((item) => {
              const href = path(item.href)
              const active = isActive(location.pathname, item.href, href)
              return (
                <Link
                  key={item.href}
                  to={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn('text-[0.92rem] transition-opacity hover:opacity-100', active ? 'opacity-100' : 'opacity-70')}
                >
                  {t(item.label)}
                </Link>
              )
            })}
          </nav>
          <div className="ms-auto flex items-center gap-3 xl:ms-6">
            <Link
              to={languageHref}
              hrefLang={other}
              lang={other}
              className="text-sm opacity-80 hover:opacity-100"
              aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              {locale === 'ar' ? 'EN' : 'عربي'}
            </Link>
            <Link
              to={path('/contact')}
              className={cn(
                'hidden min-h-11 items-center px-4 text-sm xl:inline-flex',
                light && !open ? 'bg-pine text-ivory' : 'bg-ivory text-ink',
              )}
            >
              {t(ui.cta)}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex min-h-11 items-center px-1 text-sm xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              {t(ui.menu)}
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div id="mobile-menu" className="fixed inset-0 z-50 flex flex-col bg-night text-ivory">
          <div className="flex h-20 items-center justify-between px-5">
            <Logo />
            <button ref={closeRef} type="button" className="min-h-11 px-2" onClick={() => setOpen(false)}>
              {t(ui.close)}
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-6 pb-10" aria-label={t(ui.menu)}>
            {mainNav.map((item) => (
              <Link key={item.href} to={path(item.href)} className="display-sm py-1" onClick={() => setOpen(false)}>
                {t(item.label)}
              </Link>
            ))}
            <div className="mt-8 flex items-center gap-6">
              <Link to={languageHref} hrefLang={other} lang={other} className="text-sand">
                {locale === 'ar' ? 'English' : 'العربية'}
              </Link>
              <Link to={path('/contact')} className="bg-ivory px-5 py-3 text-ink" onClick={() => setOpen(false)}>
                {t(ui.cta)}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  )
}
