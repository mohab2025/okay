import type { Localized } from '@/lib/types'

export const discoverySteps: {
  id: string
  title: Localized
  text: Localized
  indicator: Localized
}[] = [
  {
    id: 'listen',
    title: { ar: 'استماع', en: 'Listen' },
    text: {
      ar: 'نجلس مع أصحاب المشروع قبل أي افتراض عن الشكل أو التقنية.',
      en: 'We sit with the people who own the work before assuming a shape or a stack.',
    },
    indicator: { ar: 'جلسة', en: 'Session' },
  },
  {
    id: 'understand',
    title: { ar: 'فهم', en: 'Understand' },
    text: {
      ar: 'ندرس المستخدم، العملية، الهدف، والقيد الذي لا يظهر في أول مكالمة.',
      en: 'We study the user, the process, the goal, and the constraint that never appears on the first call.',
    },
    indicator: { ar: 'سياق', en: 'Context' },
  },
  {
    id: 'analyze',
    title: { ar: 'تحليل', en: 'Analyze' },
    text: {
      ar: 'نفصل المشكلة الحقيقية عن الحل الذي خطر أولاً.',
      en: 'We separate the real problem from the solution that came to mind first.',
    },
    indicator: { ar: 'تشخيص', en: 'Diagnosis' },
  },
  {
    id: 'strategize',
    title: { ar: 'استراتيجية', en: 'Strategize' },
    text: {
      ar: 'نحدد ما يُبنى الآن، وما يُؤجَّل، وما الذي يُعتبر نجاحاً.',
      en: 'We decide what is built now, what waits, and what will count as success.',
    },
    indicator: { ar: 'نطاق', en: 'Scope' },
  },
  {
    id: 'design',
    title: { ar: 'تصميم', en: 'Design' },
    text: {
      ar: 'نصمم الرحلة والواجهة حول الاستخدام الفعلي، بالعربية والإنجليزية حين يلزم.',
      en: 'We design the journey and the interface around real use, in Arabic and English when needed.',
    },
    indicator: { ar: 'تجربة', en: 'Experience' },
  },
  {
    id: 'build',
    title: { ar: 'بناء', en: 'Build' },
    text: {
      ar: 'يحوّل الفريق القرار إلى منتج يعمل: ويب، جوال، أو نظام.',
      en: 'The team turns the decision into a working product: web, mobile, or system.',
    },
    indicator: { ar: 'هندسة', en: 'Engineering' },
  },
  {
    id: 'test',
    title: { ar: 'اختبار', en: 'Test' },
    text: {
      ar: 'نتحقق من الجودة والمسارات الحرجة قبل أن يراها المستخدم.',
      en: 'We check quality and the critical paths before a user has to.',
    },
    indicator: { ar: 'جودة', en: 'Quality' },
  },
  {
    id: 'launch',
    title: { ar: 'إطلاق', en: 'Launch' },
    text: {
      ar: 'نخرج المنتج بوضوح: تشغيل، تسليم، ومعرفة ما يحدث بعده.',
      en: 'We launch with clarity: operations, handover, and a view of what happens next.',
    },
    indicator: { ar: 'خروج', en: 'Release' },
  },
  {
    id: 'improve',
    title: { ar: 'تطوير', en: 'Improve' },
    text: {
      ar: 'بعد الإطلاق نراقب الاستخدام ونحسّن ما يثبت أنه مهم.',
      en: 'After launch we watch real use and improve what proves important.',
    },
    indicator: { ar: 'أثر', en: 'Impact' },
  },
]

export const deliveryStages: {
  id: string
  title: Localized
  text: Localized
  points: { ar: string[]; en: string[] }
}[] = [
  {
    id: 'discover',
    title: { ar: 'اكتشاف', en: 'Discover' },
    text: {
      ar: 'نفهم الفكرة، العمل، والمستخدمين قبل أن نثبت النطاق.',
      en: 'We understand the idea, the business, and the users before scope is fixed.',
    },
    points: {
      ar: ['جلسات مع أصحاب القرار والمستخدمين', 'خريطة للوضع الحالي', 'أسئلة مفتوحة تُغلق قبل التصميم'],
      en: ['Sessions with decision makers and users', 'A map of the current state', 'Open questions closed before design'],
    },
  },
  {
    id: 'define',
    title: { ar: 'تحديد', en: 'Define' },
    text: {
      ar: 'نحوّل الفهم إلى نطاق، أولويات، ومعايير نجاح يمكن الرجوع إليها.',
      en: 'We turn understanding into scope, priorities, and success criteria you can return to.',
    },
    points: {
      ar: ['نطاق المرحلة الأولى', 'ما لن يُبنى الآن', 'مؤشرات يُتفق عليها'],
      en: ['Scope of the first release', 'What will not be built yet', 'Agreed indicators'],
    },
  },
  {
    id: 'design',
    title: { ar: 'تصميم', en: 'Design' },
    text: {
      ar: 'تجربة وواجهة يمكن تجربتهما قبل الالتزام الكامل بالبناء.',
      en: 'An experience and interface that can be tried before the full build is committed.',
    },
    points: {
      ar: ['رحلات الاستخدام', 'واجهة عربية أو ثنائية', 'مراجعة مع الفريق قبل التطوير'],
      en: ['User journeys', 'Arabic or bilingual interface', 'Review with your team before engineering'],
    },
  },
  {
    id: 'engineer',
    title: { ar: 'هندسة', en: 'Engineer' },
    text: {
      ar: 'بناء المنتج على أساس واضح: واجهات، منطق، بيانات، وتكاملات.',
      en: 'Building the product on a clear base: interfaces, logic, data, and integrations.',
    },
    points: {
      ar: ['معمارية مناسبة للحجم', 'تنفيذ مرئي على مراحل', 'تكاملات تُختبر مبكراً'],
      en: ['Architecture suited to the size', 'Visible implementation in stages', 'Integrations tested early'],
    },
  },
  {
    id: 'test',
    title: { ar: 'اختبار', en: 'Test' },
    text: {
      ar: 'مراجعة الجودة والمسارات التي لا يجوز أن تفشل يوم الإطلاق.',
      en: 'Quality review of the paths that cannot fail on launch day.',
    },
    points: {
      ar: ['سيناريوهات الاستخدام الأساسية', 'مراجعة بمساندة وكيل جودة', 'إصلاح قبل التسليم'],
      en: ['Core usage scenarios', 'Review supported by a QA agent', 'Fixes before handover'],
    },
  },
  {
    id: 'launch',
    title: { ar: 'إطلاق', en: 'Launch' },
    text: {
      ar: 'خروج هادئ: بيئة، صلاحيات، وتسليم يعرف الفريق كيف يكمله.',
      en: 'A calm release: environment, access, and a handover your team can continue.',
    },
    points: {
      ar: ['خطة إطلاق', 'تسليم واضح', 'قناة لما بعد اليوم الأول'],
      en: ['A launch plan', 'A clear handover', 'A channel for the day after'],
    },
  },
  {
    id: 'grow',
    title: { ar: 'نمو', en: 'Grow' },
    text: {
      ar: 'نقرأ الاستخدام ونرتب التحسين التالي بدل أن نختفي بعد التسليم.',
      en: 'We read real use and sequence the next improvement instead of disappearing after delivery.',
    },
    points: {
      ar: ['ملاحظات ما بعد الإطلاق', 'تحسينات مرتبة', 'قرار باستمرار الشراكة أو الدعم'],
      en: ['Post-launch notes', 'Sequenced improvements', 'A decision on continued partnership or support'],
    },
  },
]
