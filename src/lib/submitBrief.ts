export type BriefPayload = {
  locale: 'ar' | 'en'
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
}

export async function submitBrief(payload: BriefPayload) {
  const endpoint = import.meta.env.VITE_BRIEF_ENDPOINT
  if (!endpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 650))
    return { ok: true as const }
  }
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error('Brief submission failed')
  return { ok: true as const }
}
