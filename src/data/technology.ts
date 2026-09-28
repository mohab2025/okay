import type { Localized } from '@/lib/types'

export const technologies: { id: string; title: Localized; items: string[] }[] = [
  { id: 'frontend', title: { ar: 'الواجهات', en: 'Frontend' }, items: ['React', 'TypeScript', 'Vite'] },
  { id: 'backend', title: { ar: 'الخوادم', en: 'Backend' }, items: ['Node.js', 'Python'] },
  { id: 'mobile', title: { ar: 'الجوال', en: 'Mobile' }, items: ['Flutter', 'React Native'] },
  { id: 'ai', title: { ar: 'الذكاء', en: 'AI' }, items: ['OpenAI APIs', 'LLM systems', 'Vector databases'] },
  { id: 'cloud', title: { ar: 'السحابة', en: 'Cloud' }, items: ['AWS', 'Azure'] },
  { id: 'data', title: { ar: 'البيانات', en: 'Database' }, items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { id: 'devops', title: { ar: 'التشغيل', en: 'DevOps' }, items: ['Docker'] },
  { id: 'security', title: { ar: 'الحماية', en: 'Security' }, items: ['OAuth', 'RBAC', 'Encryption'] },
]
