import type { Locale } from "@/i18n/routing";

export const buildStageIds = [
  "current",
  "map",
  "repetitive",
  "connect",
  "build",
  "test",
  "deploy",
  "monitor",
] as const;

export type BuildStageId = (typeof buildStageIds)[number];
export type WorkflowMode = "manual" | "autonomous";
export type StageFocus = WorkflowMode | "both";

export type BuildStage = {
  id: BuildStageId;
  label: string;
  summary: string;
  focus: StageFocus;
};

export type FlowStep = {
  id: string;
  label: string;
  detail: string;
};

export type AutomationContent = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  processLabel: string;
  exampleLabel: string;
  requestLabel: string;
  request: string;
  compare: string;
  viewLabel: string;
  manualLabel: string;
  autonomousLabel: string;
  stages: BuildStage[];
  manual: FlowStep[];
  autonomous: FlowStep[];
};

const english: AutomationContent = {
  eyebrow: "Custom automation",
  titleLine1: "Your workflow isn't a template.",
  titleLine2: "Your AI shouldn't be either.",
  description:
    "We build the system around the process a company already runs. First the work is mapped. Then the repetitive steps are connected, tested, deployed, and watched.",
  processLabel: "How a custom agent is built",
  exampleLabel: "Representative",
  requestLabel: "Request",
  request: "The customer asks to move Tuesday's meeting and update the account.",
  compare: "The same request, finished in two ways.",
  viewLabel: "Workflow view",
  manualLabel: "Existing manual process",
  autonomousLabel: "AI-powered autonomous workflow",
  stages: [
    {
      id: "current",
      label: "Current process",
      summary: "We start from the process as it is run today, including the handoffs.",
      focus: "manual",
    },
    {
      id: "map",
      label: "Map workflow",
      summary: "The steps, the owners, and the systems are written down before anything is automated.",
      focus: "both",
    },
    {
      id: "repetitive",
      label: "Identify repetitive work",
      summary: "The repeated work is separated from the judgment that should stay with a person.",
      focus: "manual",
    },
    {
      id: "connect",
      label: "Connect systems",
      summary: "The agent is connected to the systems this process already uses.",
      focus: "autonomous",
    },
    {
      id: "build",
      label: "Build agent",
      summary: "The agent is built for this path, not taken from a template.",
      focus: "autonomous",
    },
    {
      id: "test",
      label: "Test",
      summary: "The same requests are run through the agent and checked against the expected result.",
      focus: "autonomous",
    },
    {
      id: "deploy",
      label: "Deploy",
      summary: "The agent takes the live path only after that checked run is accepted.",
      focus: "autonomous",
    },
    {
      id: "monitor",
      label: "Monitor",
      summary: "What the agent did stays visible, including the points that still need a person.",
      focus: "autonomous",
    },
  ],
  manual: [
    {
      id: "request",
      label: "Customer request",
      detail: "The message waits in a shared inbox.",
    },
    {
      id: "read",
      label: "A person reads it",
      detail: "Someone interprets what the customer is asking for.",
    },
    {
      id: "crm",
      label: "CRM lookup",
      detail: "They search the account themselves.",
    },
    {
      id: "rule",
      label: "Business rule",
      detail: "They check whether this meeting can be moved.",
    },
    {
      id: "action",
      label: "Action",
      detail: "They update the calendar and the account by hand.",
    },
    {
      id: "confirm",
      label: "Confirmation",
      detail: "A colleague confirms the change later, if someone asks.",
    },
  ],
  autonomous: [
    {
      id: "request",
      label: "Customer request",
      detail: "The same message arrives.",
    },
    {
      id: "understand",
      label: "AI understands",
      detail: "The agent reads the intent: move Tuesday's meeting and update the account.",
    },
    {
      id: "crm",
      label: "CRM lookup",
      detail: "It retrieves the account and the open meeting.",
    },
    {
      id: "rule",
      label: "Business rule",
      detail: "It applies the rescheduling rule for that account.",
    },
    {
      id: "action",
      label: "Action",
      detail: "It moves the meeting and writes the account note.",
    },
    {
      id: "confirm",
      label: "Confirmation",
      detail: "It records that the change was made, and where it was written.",
    },
  ],
};

const arabic: AutomationContent = {
  eyebrow: "أتمتة مخصصة",
  titleLine1: "مسار عملكم ليس قالبًا.",
  titleLine2: "والنظام الذكي الذي يخدمه لا ينبغي أن يكون كذلك.",
  description:
    "نبني النظام حول الإجراء الذي تعمل به المؤسسة فعلًا. يُرسم العمل أولًا، ثم تُربط الخطوات المتكررة، وتُختبر، وتُنشر، وتُراقب.",
  processLabel: "كيف يُبنى الوكيل المخصص",
  exampleLabel: "تمثيلي",
  requestLabel: "الطلب",
  request: "يطلب العميل نقل اجتماع الثلاثاء وتحديث الحساب.",
  compare: "الطلب نفسه، بطريقتين لإنهائه.",
  viewLabel: "عرض المسار",
  manualLabel: "الإجراء اليدوي الحالي",
  autonomousLabel: "مسار مؤتمت ينفّذه الوكيل",
  stages: [
    {
      id: "current",
      label: "الإجراء الحالي",
      summary: "نبدأ من الإجراء كما يُنفَّذ اليوم، بما فيه التسليم بين الأشخاص.",
      focus: "manual",
    },
    {
      id: "map",
      label: "رسم المسار",
      summary: "تُكتب الخطوات والمسؤولون والأنظمة قبل أي أتمتة.",
      focus: "both",
    },
    {
      id: "repetitive",
      label: "تحديد العمل المتكرر",
      summary: "يُفصل العمل المتكرر عن الحكم الذي ينبغي أن يبقى للإنسان.",
      focus: "manual",
    },
    {
      id: "connect",
      label: "ربط الأنظمة",
      summary: "يُربط الوكيل بالأنظمة التي يستخدمها هذا الإجراء أصلًا.",
      focus: "autonomous",
    },
    {
      id: "build",
      label: "بناء الوكيل",
      summary: "يُبنى الوكيل لهذا المسار، ولا يُؤخذ من قالب جاهز.",
      focus: "autonomous",
    },
    {
      id: "test",
      label: "الاختبار",
      summary: "تُمرَّر الطلبات نفسها عبر الوكيل وتُراجع مقابل النتيجة المتوقعة.",
      focus: "autonomous",
    },
    {
      id: "deploy",
      label: "النشر",
      summary: "لا يسلك الوكيل المسار الحي إلا بعد قبول هذا التشغيل المراجع.",
      focus: "autonomous",
    },
    {
      id: "monitor",
      label: "المراقبة",
      summary: "يبقى ما نفّذه الوكيل ظاهرًا، بما فيه المواضع التي ما زالت تحتاج إلى شخص.",
      focus: "autonomous",
    },
  ],
  manual: [
    {
      id: "request",
      label: "طلب العميل",
      detail: "تنتظر الرسالة في صندوق مشترك.",
    },
    {
      id: "read",
      label: "يقرأها شخص",
      detail: "يفسّر أحد الموظفين ما الذي يطلبه العميل.",
    },
    {
      id: "crm",
      label: "بحث في نظام العملاء",
      detail: "يبحث عن الحساب بنفسه.",
    },
    {
      id: "rule",
      label: "قاعدة العمل",
      detail: "يتحقق إن كان نقل هذا الاجتماع مسموحًا.",
    },
    {
      id: "action",
      label: "التنفيذ",
      detail: "يعدّل التقويم والحساب يدويًا.",
    },
    {
      id: "confirm",
      label: "التأكيد",
      detail: "يراجع زميل التغيير لاحقًا، إذا طلب أحد ذلك.",
    },
  ],
  autonomous: [
    {
      id: "request",
      label: "طلب العميل",
      detail: "تصل الرسالة نفسها.",
    },
    {
      id: "understand",
      label: "يفهم الوكيل",
      detail: "يقرأ القصد: نقل اجتماع الثلاثاء وتحديث الحساب.",
    },
    {
      id: "crm",
      label: "بحث في نظام العملاء",
      detail: "يجلب الحساب والاجتماع المفتوح.",
    },
    {
      id: "rule",
      label: "قاعدة العمل",
      detail: "يطبّق قاعدة إعادة الجدولة لهذا الحساب.",
    },
    {
      id: "action",
      label: "التنفيذ",
      detail: "ينقل الاجتماع ويكتب ملاحظة الحساب.",
    },
    {
      id: "confirm",
      label: "التأكيد",
      detail: "يسجّل أن التغيير تم، وأين كُتب.",
    },
  ],
};

export const automationContent: Record<Locale, AutomationContent> = {
  en: english,
  ar: arabic,
};

export function defaultWorkflowMode(focus: StageFocus): WorkflowMode {
  return focus === "autonomous" ? "autonomous" : "manual";
}
