import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { formatNumber } from '@/lib/format'
import { cn } from '@/lib/cn'
import { useLocale } from '@/lib/locale'

type Device = 'desktop' | 'tablet' | 'mobile'

function ProductSurface({ device }: { device: Device }) {
  const { locale } = useLocale()
  const items =
    locale === 'ar'
      ? ['استلام', 'تجهيز', 'في الطريق', 'تسليم']
      : ['Received', 'Preparing', 'On the way', 'Delivered']
  return (
    <div className={cn('relative h-full overflow-hidden bg-[#10241f] text-ivory', device === 'mobile' ? 'p-3' : 'p-4')}>
      <div className="device-glow" />
      <div className="relative flex items-center justify-between text-[10px] tracking-wide text-ivory/60">
        <span>{locale === 'ar' ? 'منتج تجريبي' : 'Demo product'}</span>
        <span>{device}</span>
      </div>
      <div className={cn('relative mt-3 grid gap-3', device === 'desktop' ? 'grid-cols-[0.7fr_1.3fr]' : 'grid-cols-1')}>
        {device !== 'mobile' ? (
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={item} className={cn('px-2 py-2 text-xs', index === 2 ? 'bg-sand text-ink' : 'bg-white/5')}>
                {item}
              </div>
            ))}
          </div>
        ) : null}
        <div className="space-y-2">
          <div className="h-16 bg-pine/80" />
          <div className="h-2 w-2/3 bg-ivory/30" />
          <div className="h-2 w-1/2 bg-ivory/15" />
          {device === 'mobile'
            ? items.map((item) => (
                <div key={item} className="border border-white/10 px-2 py-2 text-xs">
                  {item}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  )
}

function Frame({ device }: { device: Device }) {
  const { locale } = useLocale()
  const label = {
    desktop: locale === 'ar' ? 'سطح المكتب' : 'Desktop',
    tablet: locale === 'ar' ? 'جهاز لوحي' : 'Tablet',
    mobile: locale === 'ar' ? 'الجوال' : 'Mobile',
  }[device]
  const width = device === 'desktop' ? 'w-full' : device === 'tablet' ? 'mx-auto w-[78%]' : 'mx-auto w-[46%]'
  return (
    <figure className="device-frame">
      <div className={cn('border border-ivory/20 bg-night p-2', width)}>
        <div className={cn(device === 'desktop' ? 'h-64' : device === 'tablet' ? 'h-72' : 'h-80')}>
          <ProductSurface device={device} />
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-ivory/60">{label}</figcaption>
    </figure>
  )
}

export function Devices() {
  const { locale } = useLocale()
  const [device, setDevice] = useState<Device>('mobile')
  const options: Device[] = ['desktop', 'tablet', 'mobile']
  const labels = {
    desktop: locale === 'ar' ? 'سطح المكتب' : 'Desktop',
    tablet: locale === 'ar' ? 'لوحي' : 'Tablet',
    mobile: locale === 'ar' ? 'الجوال' : 'Mobile',
  }

  return (
    <section data-header="dark" className="bg-night py-24 text-ivory md:py-32">
      <Container>
        <p className="eyebrow">{formatNumber(8, locale)} — {locale === 'ar' ? 'المنتج' : 'Product'}</p>
        <h2 className="display mt-5 max-w-3xl">
          {locale === 'ar' ? 'منتج واحد.' : 'One product.'}
          <span className="block text-ivory/70">{locale === 'ar' ? 'تجربة متكاملة.' : 'One connected experience.'}</span>
        </h2>
        <p className="lede mt-6 max-w-xl text-ivory/70">
          {locale === 'ar'
            ? 'الفكرة نفسها تتحرك بين المكتب والجوال. لا نبني ثلاث منتجات متباعدة.'
            : 'The same idea moves between desk and phone. We do not build three disconnected products.'}
        </p>
        <div className="mt-8 flex gap-2 md:hidden" role="tablist" aria-label={locale === 'ar' ? 'الأجهزة' : 'Devices'}>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={device === option}
              className={cn('min-h-11 flex-1 border px-2 text-sm', device === option ? 'border-sand text-ivory' : 'border-line text-ivory/60')}
              onClick={() => setDevice(option)}
            >
              {labels[option]}
            </button>
          ))}
        </div>
        <div className="mt-6 md:hidden">
          <Frame device={device} />
        </div>
        <div className="mt-14 hidden items-end gap-6 md:grid md:grid-cols-3">
          <Frame device="desktop" />
          <Frame device="tablet" />
          <Frame device="mobile" />
        </div>
      </Container>
    </section>
  )
}
