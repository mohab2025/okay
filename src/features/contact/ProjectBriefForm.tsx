import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { site, whatsappLink } from '@/data/site'
import { ui } from '@/data/ui'
import type { Locale, Localized } from '@/lib/types'
import { submitBrief, type BriefPayload } from '@/lib/submitBrief'
import { cn } from '@/lib/cn'
import { useLocale } from '@/lib/locale'

type Choice = { value: string; label: Localized }

const platforms: Choice[] = [
  { value: 'web', label: { ar: 'ويب', en: 'Web' } },
  { value: 'mobile', label: { ar: 'جوال', en: 'Mobile' } },
  { value: 'both', label: { ar: 'الاثنان', en: 'Both' } },
  { value: 'unsure', label: { ar: 'لست متأكداً', en: 'Not sure' } },
]
const designs: Choice[] = [
  { value: 'yes', label: { ar: 'نعم', en: 'Yes' } },
  { value: 'partial', label: { ar: 'جزئياً', en: 'Partly' } },
  { value: 'no', label: { ar: 'لا', en: 'No' } },
]
const aiNeeds: Choice[] = [
  { value: 'yes', label: { ar: 'نعم', en: 'Yes' } },
  { value: 'maybe', label: { ar: 'ربما', en: 'Maybe' } },
  { value: 'no', label: { ar: 'لا', en: 'No' } },
]
const stages: Choice[] = [
  { value: 'idea', label: { ar: 'فكرة', en: 'Idea' } },
  { value: 'validated', label: { ar: 'مشكلة مختبرة', en: 'Validated problem' } },
  { value: 'existing', label: { ar: 'نظام قائم', en: 'Existing system' } },
  { value: 'redesign', label: { ar: 'إعادة تصميم', en: 'Redesign' } },
  { value: 'scaling', label: { ar: 'توسع', en: 'Scaling' } },
]
const timelines: Choice[] = [
  { value: 'exploring', label: { ar: 'ما زلت أستكشف', en: 'Still exploring' } },
  { value: '1-3', label: { ar: '١–٣ أشهر', en: '1–3 months' } },
  { value: '3-6', label: { ar: '٣–٦ أشهر', en: '3–6 months' } },
  { value: '6+', label: { ar: 'أكثر من ٦ أشهر', en: '6+ months' } },
]
const budgets: Choice[] = [
  { value: 'undecided', label: { ar: 'غير محدد بعد', en: 'Not defined yet' } },
  { value: 'under-50', label: { ar: 'أقل من ٥٠ ألف ر.س', en: 'Under 50k SAR' } },
  { value: '50-150', label: { ar: '٥٠–١٥٠ ألف ر.س', en: '50–150k SAR' } },
  { value: '150-400', label: { ar: '١٥٠–٤٠٠ ألف ر.س', en: '150–400k SAR' } },
  { value: '400+', label: { ar: 'أكثر من ٤٠٠ ألف ر.س', en: '400k+ SAR' } },
  { value: 'discuss', label: { ar: 'أفضل النقاش', en: 'Prefer to discuss' } },
]
const engagements: Choice[] = [
  { value: 'build', label: { ar: 'بناء', en: 'Build' } },
  { value: 'partner', label: { ar: 'شراكة', en: 'Partner' } },
  { value: 'unsure', label: { ar: 'لست متأكداً', en: 'Not sure' } },
]

type BriefState = {
  build: string
  problem: string
  users: string
  platform: string
  designs: string
  ai: string
  stage: string
  timeline: string
  budget: string
  engagement: string
  name: string
  email: string
  phone: string
  organization: string
  website: string
}

const empty: BriefState = {
  build: '',
  problem: '',
  users: '',
  platform: '',
  designs: '',
  ai: '',
  stage: '',
  timeline: '',
  budget: '',
  engagement: '',
  name: '',
  email: '',
  phone: '',
  organization: '',
  website: '',
}

const prompts: Localized[] = [
  { ar: 'ماذا تحاول أن تبني؟', en: 'What are you trying to build?' },
  { ar: 'ما المشكلة التي تحلّها؟', en: 'What problem are you solving?' },
  { ar: 'من هم المستخدمون؟', en: 'Who are your users?' },
  { ar: 'الشكل، والتصميم، والذكاء.', en: 'Shape, design, and intelligence.' },
  { ar: 'أين أنت الآن، ومتى تريد الحركة؟', en: 'Where are you now, and when do you want to move?' },
  { ar: 'الميزانية التقريبية، ونموذج العمل.', en: 'Approximate budget, and the way you want to work.' },
  { ar: 'كيف نعود إليك؟', en: 'How should we reach you?' },
]

function ChoiceList({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: Choice[]
  value: string
  onChange: (value: string) => void
}) {
  const { t } = useLocale()
  return (
    <div role="radiogroup" aria-label={name} className="mt-6">
      {options.map((option) => {
        const selected = value === option.value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={cn('flex w-full items-center gap-3 border-b border-ink/15 py-4 text-start text-xl', selected ? 'text-pine' : 'text-ink/70')}
            onClick={() => onChange(option.value)}
          >
            <span aria-hidden="true" className="text-sand">
              {selected ? '●' : '○'}
            </span>
            {t(option.label)}
          </button>
        )
      })}
    </div>
  )
}

export function ProjectBriefForm() {
  const { locale, t } = useLocale()
  const [params] = useSearchParams()
  const intent = params.get('intent')
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)
  const [brief, setBrief] = useState<BriefState>(() => ({
    ...empty,
    engagement: intent === 'partner' ? 'partner' : intent === 'build' ? 'build' : '',
  }))

  const total = prompts.length
  const note = intent === 'partner' ? t(ui.form.partnerNote) : intent === 'discovery' ? t(ui.form.discoveryNote) : ''

  const update = (patch: Partial<BriefState>) => setBrief((current) => ({ ...current, ...patch }))

  const invalid = useMemo(() => {
    if (step === 0) return brief.build.trim().length < 4
    if (step === 1) return brief.problem.trim().length < 4
    if (step === 2) return brief.users.trim().length < 2
    if (step === 3) return !brief.platform || !brief.designs || !brief.ai
    if (step === 4) return !brief.stage || !brief.timeline
    if (step === 5) return !brief.budget || !brief.engagement
    if (step === 6) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim())
      const phoneOk = brief.phone.replace(/\D/g, '').length >= 8
      return brief.name.trim().length < 2 || !emailOk || !phoneOk
    }
    return false
  }, [brief, step])

  const fieldError = () => {
    if (step === 6) {
      if (brief.name.trim().length < 2) return t(ui.form.required)
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim())) return t(ui.form.email)
      if (brief.phone.replace(/\D/g, '').length < 8) return t(ui.form.phone)
    }
    return t(ui.form.required)
  }

  const submit = async () => {
    if (invalid) {
      setError(fieldError())
      return
    }
    if (brief.website) {
      setDone(true)
      return
    }
    setSending(true)
    setError('')
    const payload: BriefPayload = {
      locale: locale as Locale,
      build: brief.build,
      problem: brief.problem,
      users: brief.users,
      platform: brief.platform,
      designs: brief.designs,
      ai: brief.ai,
      stage: brief.stage,
      timeline: brief.timeline,
      budget: brief.budget,
      engagement: brief.engagement,
      name: brief.name,
      email: brief.email,
      phone: brief.phone,
      organization: brief.organization,
    }
    try {
      await submitBrief(payload)
      setDone(true)
    } catch {
      setError(t(ui.form.submitError))
    } finally {
      setSending(false)
    }
  }

  const next = () => {
    if (invalid) {
      setError(fieldError())
      return
    }
    setError('')
    if (step === total - 1) {
      void submit()
      return
    }
    setStep((value) => value + 1)
  }

  if (done) {
    return (
      <div>
        <h2 className="display">{t(ui.form.successTitle)}</h2>
        <p className="lede mt-6 max-w-xl text-ink/75">{t(ui.form.successText)}</p>
        <ul className="mt-10 space-y-3 text-lg">
          <li>
            <a href={whatsappLink(locale)} target="_blank" rel="noreferrer">
              {t(ui.whatsapp)}
            </a>
          </li>
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </li>
          <li>{t(site.address)}</li>
        </ul>
      </div>
    )
  }

  return (
    <form
      className="relative"
      noValidate
      onSubmit={(event) => {
        event.preventDefault()
        next()
      }}
    >
      <p className="eyebrow">
        {t(ui.form.progress)} {step + 1} {t(ui.form.of)} {total}
      </p>
      <div className="mt-3 h-px bg-ink/10">
        <div className="h-px bg-pine" style={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>
      {note ? <p className="mt-6 text-sm text-pine">{note}</p> : null}
      <div className="step-in mt-8" key={step}>
        <h2 className="text-3xl md:text-4xl">{t(prompts[step] ?? prompts[0])}</h2>
        {step <= 2 ? (
          <textarea
            className="mt-8 min-h-36 w-full resize-y border-b border-ink/20 bg-transparent py-3 text-2xl outline-none"
            value={step === 0 ? brief.build : step === 1 ? brief.problem : brief.users}
            maxLength={2000}
            onChange={(event) =>
              update(step === 0 ? { build: event.target.value } : step === 1 ? { problem: event.target.value } : { users: event.target.value })
            }
          />
        ) : null}
        {step === 3 ? (
          <div className="mt-6 space-y-8">
            <div>
              <p className="eyebrow">{locale === 'ar' ? 'ويب، جوال، أم الاثنان؟' : 'Web, mobile, or both?'}</p>
              <ChoiceList name="platform" options={platforms} value={brief.platform} onChange={(platform) => update({ platform })} />
            </div>
            <div>
              <p className="eyebrow">{locale === 'ar' ? 'هل يوجد تصميم؟' : 'Do you already have designs?'}</p>
              <ChoiceList name="designs" options={designs} value={brief.designs} onChange={(value) => update({ designs: value })} />
            </div>
            <div>
              <p className="eyebrow">{locale === 'ar' ? 'هل تحتاج ذكاء اصطناعياً؟' : 'Do you need AI?'}</p>
              <ChoiceList name="ai" options={aiNeeds} value={brief.ai} onChange={(ai) => update({ ai })} />
            </div>
          </div>
        ) : null}
        {step === 4 ? (
          <div className="mt-6 space-y-8">
            <div>
              <p className="eyebrow">{locale === 'ar' ? 'المرحلة الحالية' : 'Current stage'}</p>
              <ChoiceList name="stage" options={stages} value={brief.stage} onChange={(stage) => update({ stage })} />
            </div>
            <div>
              <p className="eyebrow">{locale === 'ar' ? 'الزمن المتوقع' : 'Expected timeline'}</p>
              <ChoiceList name="timeline" options={timelines} value={brief.timeline} onChange={(timeline) => update({ timeline })} />
            </div>
          </div>
        ) : null}
        {step === 5 ? (
          <div className="mt-6 space-y-8">
            <div>
              <p className="eyebrow">{locale === 'ar' ? 'نطاق الميزانية التقريبي' : 'Estimated budget range'}</p>
              <ChoiceList name="budget" options={budgets} value={brief.budget} onChange={(budget) => update({ budget })} />
            </div>
            <div>
              <p className="eyebrow">{locale === 'ar' ? 'نموذج التعاون' : 'Engagement model'}</p>
              <ChoiceList name="engagement" options={engagements} value={brief.engagement} onChange={(engagement) => update({ engagement })} />
            </div>
          </div>
        ) : null}
        {step === 6 ? (
          <div className="mt-8 grid gap-6">
            {(
              [
                ['name', ui.form.name, brief.name, 'text', 'name'],
                ['email', ui.form.emailLabel, brief.email, 'email', 'email'],
                ['phone', ui.form.phoneLabel, brief.phone, 'tel', 'tel'],
                ['organization', ui.form.organization, brief.organization, 'text', 'organization'],
              ] as const
            ).map(([key, label, value, type, autoComplete]) => (
              <label key={key} className="block">
                <span className="eyebrow">
                  {t(label)}
                  {key === 'organization' ? ` · ${t(ui.form.optional)}` : ''}
                </span>
                <input
                  className="mt-3 w-full border-b border-ink/20 bg-transparent py-3 text-xl outline-none"
                  type={type}
                  autoComplete={autoComplete}
                  value={value}
                  required={key !== 'organization'}
                  onChange={(event) => update({ [key]: event.target.value })}
                />
              </label>
            ))}
          </div>
        ) : null}
      </div>
      {error ? (
        <p className="mt-4 text-sm text-[#8c2f2f]" role="alert">
          {error}
        </p>
      ) : null}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          {t(ui.form.honeypot)}
          <input tabIndex={-1} autoComplete="off" value={brief.website} onChange={(event) => update({ website: event.target.value })} />
        </label>
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        {step > 0 ? (
          <button type="button" className="min-h-11 border border-ink/20 px-5" onClick={() => { setError(''); setStep((value) => value - 1) }}>
            {t(ui.back)}
          </button>
        ) : null}
        <button type="submit" className="min-h-11 bg-pine px-5 text-ivory sm:ms-auto disabled:opacity-60" disabled={sending}>
          {sending ? t(ui.form.sending) : step === total - 1 ? t(ui.form.final) : t(ui.continue)}
        </button>
      </div>
    </form>
  )
}
