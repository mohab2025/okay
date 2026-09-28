import type { Localized, VisualVariant } from '@/lib/types'

export type StoryBeat = {
  id: string
  title: Localized
  text: Localized
}

export type Project = {
  slug: string
  title: Localized
  sector: Localized
  summary: Localized
  problem: Localized
  approach: Localized
  solution: Localized
  technologies: string[]
  outcome: Localized
  visual: VisualVariant
  image?: string
  story: StoryBeat[]
}

const beats = (
  entries: [string, Localized, Localized][],
): StoryBeat[] => entries.map(([id, title, text]) => ({ id, title, text }))

export const projects: Project[] = [
  {
    slug: 'logistics-platform',
    title: { ar: 'منصة تشغيل لوجستي', en: 'Logistics platform' },
    sector: { ar: 'الخدمات اللوجستية', en: 'Logistics' },
    summary: {
      ar: 'نسخة عرض لمنصة تجمع الطلب، التجهيز، والتحديث الميداني في منتج واحد.',
      en: 'A demo of a platform that brings orders, preparation, and field updates into one product.',
    },
    problem: {
      ar: 'المتابعة موزعة بين المكالمات والجداول، فيضيع وضع الشحنة بين الفريق والعميل.',
      en: 'Follow-up is split between calls and spreadsheets, so the shipment’s state is lost between the team and the customer.',
    },
    approach: {
      ar: 'الاستماع أولاً لمن يعمل في التوزيع والمستودع، قبل رسم أي شاشة.',
      en: 'Listen first to dispatch and the warehouse, before any screen is drawn.',
    },
    solution: {
      ar: 'منتج ويب للتشغيل، مع تجربة جوال للتحديث من الطريق، على البيانات نفسها.',
      en: 'A web product for operations, with a mobile experience for updates from the road, on the same data.',
    },
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    outcome: {
      ar: 'الأثر يُقاس بعد التشغيل. في هذه النسخة: [النتيجة]. العميل: [اسم العميل].',
      en: 'Impact is measured after the system is in use. In this demo: [RESULT]. Client: [CLIENT NAME].',
    },
    visual: 'lattice',
    story: beats([
      ['problem', { ar: 'المشكلة', en: 'Problem' }, { ar: 'لا توجد صورة واحدة لحالة الطلب. كل طرف يحدّث أداة مختلفة.', en: 'There is no single picture of an order. Each party updates a different tool.' }],
      ['insight', { ar: 'الرؤية', en: 'Insight' }, { ar: 'المشكلة ليست نقص شاشة تتبع، بل غياب اتفاق على حالات العمل.', en: 'The gap is not a missing tracking screen. It is the lack of an agreed set of states.' }],
      ['strategy', { ar: 'الاستراتيجية', en: 'Strategy' }, { ar: 'نثبت الحالات التي يفهمها المستودع والسائق والعميل، ثم نبني حولها.', en: 'Fix the states the warehouse, driver, and customer all understand, then build around them.' }],
      ['ux', { ar: 'التجربة', en: 'UX' }, { ar: 'الويب لإدارة اليوم، والجوال لتحديث قصير لا يحتاج مكتباً.', en: 'Web for running the day, mobile for a short update that does not need a desk.' }],
      ['architecture', { ar: 'المعمارية', en: 'Architecture' }, { ar: 'خدمة واحدة للحالة، وواجهتان. التكامل مع الأنظمة الحالية يُحسم قبل البناء الواسع.', en: 'One service for state, two interfaces. Integration with current systems is settled before a wide build.' }],
      ['development', { ar: 'التطوير', en: 'Development' }, { ar: 'البناء على مراحل ظاهرة: الحالات، ثم التوزيع، ثم إشعار العميل.', en: 'Build in visible stages: states, then dispatch, then the customer notice.' }],
      ['ai', { ar: 'الذكاء', en: 'AI' }, { ar: 'وكيل يساند تلخيص الاستثناءات اليومية. المشرف يراجع قبل أي إجراء.', en: 'An agent helps summarize the day’s exceptions. A supervisor reviews before any action.' }],
      ['launch', { ar: 'الإطلاق', en: 'Launch' }, { ar: 'خروج على نطاق تشغيل محدود، مع تسليم واضح للفريق.', en: 'A release on a limited operation, with a clear handover to the team.' }],
      ['outcome', { ar: 'الأثر', en: 'Outcome' }, { ar: '[النتيجة] تُستبدل بمؤشر متفق عليه، مثل زمن الدورة أو المتابعة اليدوية، بعد التشغيل الفعلي.', en: '[RESULT] is replaced by an agreed indicator, such as cycle time or manual follow-up, after real operation.' }],
    ]),
  },
  {
    slug: 'saudi-ecommerce',
    title: { ar: 'منصة تجارة سعودية', en: 'Saudi e-commerce platform' },
    sector: { ar: 'التجارة الإلكترونية', en: 'E-commerce' },
    summary: {
      ar: 'نسخة عرض لمتجر يُبنى حول رحلة الشراء والتشغيل معاً.',
      en: 'A demo of a store built around the buying journey and operations together.',
    },
    problem: {
      ar: 'الواجهة سريعة الشكل، لكن الطلب يتوقف بين الدفع والمخزون والتسليم.',
      en: 'The interface looks quick, but the order stalls between payment, stock, and delivery.',
    },
    approach: {
      ar: 'نفهم سلسلة الطلب بالعربية كما يستخدمها العميل والفريق، ثم نصمم الطرفين.',
      en: 'We understand the order chain in Arabic as the customer and the team use it, then design both sides.',
    },
    solution: {
      ar: 'تجربة شراء على الويب والجوال، ولوحة تشغيل للطلب والمخزون.',
      en: 'A buying experience on web and mobile, and an operations console for orders and stock.',
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Payments'],
    outcome: {
      ar: 'لا نعرض أرقاماً متخيلة. الأثر هنا: [النتيجة].',
      en: 'We do not show invented figures. The impact here is [RESULT].',
    },
    visual: 'dune',
    story: beats([
      ['problem', { ar: 'المشكلة', en: 'Problem' }, { ar: 'العميل يكمل الدفع بينما الفريق يعرف متأخراً أن الصنف غير جاهز.', en: 'The customer pays while the team learns too late that the item is not ready.' }],
      ['insight', { ar: 'الرؤية', en: 'Insight' }, { ar: 'سرعة الصفحة لا تعالج انقطاع الحالة بين المتجر والمستودع.', en: 'A fast page does not repair the broken state between the store and the warehouse.' }],
      ['strategy', { ar: 'الاستراتيجية', en: 'Strategy' }, { ar: 'النسخة الأولى تغلق مسار منتج واضح ودفع وتسليم، وتؤجل التوسع التجميلي.', en: 'The first version closes one clear product path, payment, and delivery, and postpones cosmetic expansion.' }],
      ['ux', { ar: 'التجربة', en: 'UX' }, { ar: 'عربية أولاً في الشراء، مع مسار جوال لا يخفي التكلفة أو زمن الوصول.', en: 'Arabic first in checkout, with a mobile path that does not hide cost or arrival time.' }],
      ['architecture', { ar: 'المعمارية', en: 'Architecture' }, { ar: 'الطلب مصدر الحقيقة. الدفع والشحن يتكاملان معه ولا ينشئان حالة موازية.', en: 'The order is the source of truth. Payment and shipping integrate with it and do not create a parallel state.' }],
      ['development', { ar: 'التطوير', en: 'Development' }, { ar: 'نبني الكتالوج، السلة، ثم التشغيل الداخلي قبل أي حملة.', en: 'We build the catalog, the cart, then internal operations before any campaign.' }],
      ['ai', { ar: 'الذكاء', en: 'AI' }, { ar: 'اقتراح منتجات أو تلخيص أسئلة متكرر يمكن إضافته لاحقاً تحت مراجعة الفريق.', en: 'Product suggestion or repeated-question summaries can be added later, under team review.' }],
      ['launch', { ar: 'الإطلاق', en: 'Launch' }, { ar: 'إطلاق على مجموعة منتجات محدودة لقياس مسار الطلب الحقيقي.', en: 'Launch on a limited catalog to measure the real order path.' }],
      ['outcome', { ar: 'الأثر', en: 'Outcome' }, { ar: '[النتيجة] — مثل اكتمال الطلب دون تدخل يدوي — تُسجل بعد الموسم الأول.', en: '[RESULT] — such as orders completed without manual repair — is recorded after the first season.' }],
    ]),
  },
  {
    slug: 'ai-business-assistant',
    title: { ar: 'مساعد أعمال بالذكاء الاصطناعي', en: 'AI business assistant' },
    sector: { ar: 'الذكاء الاصطناعي', en: 'AI' },
    summary: {
      ar: 'نسخة عرض لمساعد داخلي يلخّص المعرفة ويجيب ضمن حدود يراجعها الإنسان.',
      en: 'A demo of an internal assistant that summarizes knowledge and answers within limits a person reviews.',
    },
    problem: {
      ar: 'الإجابات موزعة في الملفات والمحادثات، فيعيد الفريق الشرح كل مرة.',
      en: 'Answers live in files and chats, so the team explains the same thing again.',
    },
    approach: {
      ar: 'نحدد الأسئلة المتكررة ومصادر المعرفة المسموحة قبل اختيار أي نموذج.',
      en: 'We define the repeated questions and the permitted sources before choosing a model.',
    },
    solution: {
      ar: 'مساعد يجيب من مصادر محددة، ويعرض المرجع، ويحوّل ما لا يعرفه إلى شخص.',
      en: 'An assistant that answers from defined sources, shows the reference, and hands uncertainty to a person.',
    },
    technologies: ['Python', 'LLM systems', 'Vector databases', 'React'],
    outcome: {
      ar: 'لا ندّعي نسب توفير. المؤشر المتفق عليه يوضع مكان [النتيجة] بعد الاستخدام.',
      en: 'We do not claim a savings percentage. The agreed indicator replaces [RESULT] after use.',
    },
    visual: 'orbit',
    story: beats([
      ['problem', { ar: 'المشكلة', en: 'Problem' }, { ar: 'المعرفة موجودة، لكن الوصول إليها أبطأ من إعادة السؤال لزميل.', en: 'The knowledge exists, but reaching it is slower than asking a colleague again.' }],
      ['insight', { ar: 'الرؤية', en: 'Insight' }, { ar: 'المساعد يفشل إذا أُطلق على كل الملفات بلا حدود مراجعة.', en: 'An assistant fails if it is pointed at every file with no review boundary.' }],
      ['strategy', { ar: 'الاستراتيجية', en: 'Strategy' }, { ar: 'نبدأ بمجال واحد: سياسات، أو تشغيل، أو منتج. التوسع لاحقاً.', en: 'Start with one domain: policy, operations, or product. Expansion comes later.' }],
      ['ux', { ar: 'التجربة', en: 'UX' }, { ar: 'سؤال بالعربية، جواب قصير، ومصدر يمكن فتحه. ما دون ثقة كافية يذهب لإنسان.', en: 'A question in Arabic, a short answer, and a source that can be opened. Low confidence goes to a person.' }],
      ['architecture', { ar: 'المعمارية', en: 'Architecture' }, { ar: 'فصل بين المصادر، الاسترجاع، والنموذج. الصلاحيات تمنع ما لا يجوز أن يُقرأ.', en: 'Sources, retrieval, and the model stay separate. Permissions block what should not be read.' }],
      ['development', { ar: 'التطوير', en: 'Development' }, { ar: 'نبني على مجموعة مصادر يوافق عليها الفريق، لا على رفع عشوائي.', en: 'We build on a source set the team approves, not on a random upload.' }],
      ['ai', { ar: 'الذكاء', en: 'AI' }, { ar: 'النموذج يقترح. الموظف يعتمد الإجابة قبل أن تخرج عن الفريق إن لزم.', en: 'The model proposes. A person accepts the answer before it leaves the team when that matters.' }],
      ['launch', { ar: 'الإطلاق', en: 'Launch' }, { ar: 'إطلاق داخلي لمجموعة صغيرة، مع قناة لتصحيح الإجابات الخاطئة.', en: 'An internal release to a small group, with a channel to correct wrong answers.' }],
      ['outcome', { ar: 'الأثر', en: 'Outcome' }, { ar: '[النتيجة] قد تكون زمن الوصول إلى جواب موثوق. لا نكتب رقماً قبل القياس.', en: '[RESULT] might be time-to-a-trusted-answer. We do not write a number before it is measured.' }],
    ]),
  },
  {
    slug: 'enterprise-erp',
    title: { ar: 'نظام تشغيل مؤسسي', en: 'Enterprise ERP' },
    sector: { ar: 'أنظمة الأعمال', en: 'Business systems' },
    summary: {
      ar: 'نسخة عرض لنظام داخلي يبدأ بالعملية الأكثر إيلاماً لا بكل الوحدات.',
      en: 'A demo of an internal system that starts with the process that hurts, not with every module.',
    },
    problem: {
      ar: 'البيانات المالية والتشغيلية تتقاطع في ملفات لا يملك أحد صورتها الكاملة.',
      en: 'Financial and operational data meet in files that nobody can see whole.',
    },
    approach: {
      ar: 'نستمع إلى من يغلق العمل آخر اليوم، ونرسم الاستثناءات قبل الشاشات.',
      en: 'We listen to the people who close the day, and map the exceptions before the screens.',
    },
    solution: {
      ar: 'وحدات أولى للموافقات والحالات والتقارير، مع صلاحيات واضحة وخطة لما يليها.',
      en: 'First modules for approvals, states, and reporting, with clear permissions and a plan for what follows.',
    },
    technologies: ['React', 'PostgreSQL', 'Node.js', 'RBAC'],
    outcome: {
      ar: 'العميل في هذه النسخة [اسم العميل]، والأثر [النتيجة] بعد أن يعمل النظام فعلياً.',
      en: 'The client in this demo is [CLIENT NAME], and the impact is [RESULT] once the system is actually running.',
    },
    visual: 'arch',
    story: beats([
      ['problem', { ar: 'المشكلة', en: 'Problem' }, { ar: 'كل إدارة ترى جزءاً من العملية، والاعتماد يتم خارج النظام.', en: 'Each department sees a slice of the process, and approval happens outside the system.' }],
      ['insight', { ar: 'الرؤية', en: 'Insight' }, { ar: 'استبدال كل شيء دفعة واحدة يؤخر الفهم. العملية الأثقل هي البداية الصحيحة.', en: 'Replacing everything at once delays understanding. The heaviest process is the right start.' }],
      ['strategy', { ar: 'الاستراتيجية', en: 'Strategy' }, { ar: 'نحدد وحدة أولى، ومصادر البيانات التي تبقى، والتكامل الذي لا يمكن تأجيله.', en: 'We name a first module, the data sources that stay, and the integration that cannot wait.' }],
      ['ux', { ar: 'التجربة', en: 'UX' }, { ar: 'شاشات بالعربية لمستخدم يومي، لا لوحة مزدحمة بكل الحقول.', en: 'Arabic screens for a daily user, not a board crowded with every field.' }],
      ['architecture', { ar: 'المعمارية', en: 'Architecture' }, { ar: 'صلاحيات حسب الدور، وسجل للحالات، وواجهة تكامل بدل النسخ اليدوي.', en: 'Role-based access, a record of states, and an integration edge instead of manual copying.' }],
      ['development', { ar: 'التطوير', en: 'Development' }, { ar: 'التسليم على مراحل يمكن للإدارة تجربتها قبل الوحدة التالية.', en: 'Delivery in stages management can try before the next module.' }],
      ['ai', { ar: 'الذكاء', en: 'AI' }, { ar: 'تلخيص الفروقات أو تأخير الاعتماد يُقترح للمدير، ولا يُعتمد آلياً.', en: 'Summaries of gaps or delayed approvals are proposed to a manager, and never approved automatically.' }],
      ['launch', { ar: 'الإطلاق', en: 'Launch' }, { ar: 'تشغيل مع الفريق الفعلي، وتدريب على المسار لا على كل زر.', en: 'Go-live with the real team, and training on the path rather than on every button.' }],
      ['outcome', { ar: 'الأثر', en: 'Outcome' }, { ar: '[النتيجة] تُستبدل بما اتُفق على مراقبته: زمن الاعتماد، أو الأخطاء المتكررة، أو العمل خارج النظام.', en: '[RESULT] is replaced by what was agreed to watch: approval time, repeated errors, or work happening outside the system.' }],
    ]),
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
