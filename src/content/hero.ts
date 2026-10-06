import type { Locale } from "@/i18n/routing";

export const heroStageIds = [
  "request",
  "agent",
  "understand",
  "plan",
  "tools",
  "execute",
  "verify",
  "completed",
] as const;

export type HeroStageId = (typeof heroStageIds)[number];

export type HeroLine = {
  label: string;
  value: string;
};

export type HeroStage = {
  id: HeroStageId;
  label: string;
  status: string;
  title: string;
  lines: HeroLine[];
};

export type HeroContent = {
  metaTitle: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  support: string;
  primary: string;
  secondary: string;
  engineer: string;
  visualLabel: string;
  live: string;
  paused: string;
  pause: string;
  play: string;
  requestLabel: string;
  request: string;
  stagesLabel: string;
  activityLabel: string;
  stages: HeroStage[];
};

const englishStages: HeroStage[] = [
  {
    id: "request",
    label: "Request",
    status: "Received",
    title: "Incoming request",
    lines: [
      { label: "Task", value: "Schedule a meeting with the client and update the CRM." },
      { label: "Source", value: "Operator" },
      { label: "State", value: "Queued for an agent" },
    ],
  },
  {
    id: "agent",
    label: "AI Agent",
    status: "Assigned",
    title: "Agent takes the work",
    lines: [
      { label: "Agent", value: "Operations" },
      { label: "Scope", value: "Calendar and CRM" },
      { label: "State", value: "Ready to read the account" },
    ],
  },
  {
    id: "understand",
    label: "Understand",
    status: "In context",
    title: "Customer context",
    lines: [
      { label: "Account", value: "Afaq Trading" },
      { label: "Owner", value: "Lina Haddad" },
      { label: "Last contact", value: "12 days ago" },
      { label: "Open deal", value: "Q4 renewal" },
    ],
  },
  {
    id: "plan",
    label: "Plan",
    status: "Planned",
    title: "Agent planning",
    lines: [
      { label: "01", value: "Confirm the account owner and the open renewal." },
      { label: "02", value: "Check the client calendar for a free 30 minutes." },
      { label: "03", value: "Book the meeting and write it back to the CRM." },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    status: "Returned",
    title: "Tool calls",
    lines: [
      { label: "CRM lookup", value: "Afaq Trading matched. Renewal is open." },
      { label: "Calendar lookup", value: "Tuesday 10:30 is free for both sides." },
      { label: "State", value: "Both tools returned" },
    ],
  },
  {
    id: "execute",
    label: "Execute",
    status: "Running",
    title: "Execution",
    lines: [
      { label: "Calendar", value: "Meeting booked, Tuesday 10:30." },
      { label: "CRM", value: "Note added to the Q4 renewal." },
      { label: "Invite", value: "Sent to the client." },
    ],
  },
  {
    id: "verify",
    label: "Verify",
    status: "Checked",
    title: "Verification",
    lines: [
      { label: "Calendar event", value: "Confirmed" },
      { label: "CRM record", value: "Updated" },
      { label: "Conflicts", value: "None" },
    ],
  },
  {
    id: "completed",
    label: "Completed",
    status: "Done",
    title: "Completed result",
    lines: [
      { label: "Meeting", value: "Tuesday 10:30 with Afaq Trading" },
      { label: "CRM", value: "Renewal note saved" },
      { label: "Outcome", value: "Work finished, not just answered" },
    ],
  },
];

const arabicStages: HeroStage[] = [
  {
    id: "request",
    label: "الطلب",
    status: "وصل",
    title: "طلب وارد",
    lines: [
      { label: "المهمة", value: "حدّد اجتماعًا مع العميل، وحدّث سجلّه في نظام المبيعات." },
      { label: "المصدر", value: "المشغّل" },
      { label: "الحالة", value: "بانتظار الوكيل" },
    ],
  },
  {
    id: "agent",
    label: "الوكيل",
    status: "استلم",
    title: "الوكيل يتولّى العمل",
    lines: [
      { label: "الوكيل", value: "العمليات" },
      { label: "النطاق", value: "التقويم ونظام المبيعات" },
      { label: "الحالة", value: "جاهز لقراءة الحساب" },
    ],
  },
  {
    id: "understand",
    label: "الفهم",
    status: "في السياق",
    title: "سياق العميل",
    lines: [
      { label: "الحساب", value: "مؤسسة الأفق التجارية" },
      { label: "المسؤول", value: "لينا حداد" },
      { label: "آخر تواصل", value: "قبل 12 يومًا" },
      { label: "الصفقة", value: "تجديد العقد للربع الرابع" },
    ],
  },
  {
    id: "plan",
    label: "الخطة",
    status: "وُضعت",
    title: "خطة الوكيل",
    lines: [
      { label: "01", value: "تأكيد صاحب الحساب وصفقة التجديد المفتوحة." },
      { label: "02", value: "فحص التقويم لموعد حر مدته 30 دقيقة." },
      { label: "03", value: "حجز الاجتماع وتسجيله في نظام المبيعات." },
    ],
  },
  {
    id: "tools",
    label: "الأدوات",
    status: "اكتملت",
    title: "استدعاء الأدوات",
    lines: [
      { label: "نظام المبيعات", value: "تم العثور على مؤسسة الأفق. التجديد ما زال مفتوحًا." },
      { label: "التقويم", value: "الثلاثاء 10:30 متاح للطرفين." },
      { label: "الحالة", value: "عادت النتيجتان" },
    ],
  },
  {
    id: "execute",
    label: "التنفيذ",
    status: "جارٍ",
    title: "تنفيذ العمل",
    lines: [
      { label: "التقويم", value: "حُجز الاجتماع، الثلاثاء 10:30." },
      { label: "المبيعات", value: "أُضيفت ملاحظة على تجديد الربع الرابع." },
      { label: "الدعوة", value: "أُرسلت إلى العميل." },
    ],
  },
  {
    id: "verify",
    label: "التحقق",
    status: "رُوجع",
    title: "مراجعة النتيجة",
    lines: [
      { label: "الموعد", value: "مؤكد" },
      { label: "السجل", value: "محدّث" },
      { label: "التعارض", value: "لا يوجد" },
    ],
  },
  {
    id: "completed",
    label: "مكتمل",
    status: "تم",
    title: "النتيجة المكتملة",
    lines: [
      { label: "الاجتماع", value: "الثلاثاء 10:30 مع مؤسسة الأفق" },
      { label: "السجل", value: "حُفظت ملاحظة التجديد" },
      { label: "الحصيلة", value: "العمل أُنجز، ولم يتوقف عند إجابة" },
    ],
  },
];

export const heroContent: Record<Locale, HeroContent> = {
  en: {
    metaTitle: "Okay — AI agents that get the work done",
    eyebrow: "From request to result",
    titleLine1: "AI agents that don't just answer.",
    titleLine2: "They get the work done.",
    support:
      "We build intelligent systems that understand your business, work across your tools, and execute real workflows from beginning to end.",
    primary: "Start building",
    secondary: "See how it works",
    engineer: "Talk to an engineer",
    visualLabel: "Execution",
    live: "Live",
    paused: "Paused",
    pause: "Pause",
    play: "Play",
    requestLabel: "Request",
    request: "Schedule a meeting with the client and update the CRM.",
    stagesLabel: "Execution stages",
    activityLabel: "Stage activity",
    stages: englishStages,
  },
  ar: {
    metaTitle: "أوكي — وكلاء يُنجزون العمل",
    eyebrow: "من الطلب إلى النتيجة",
    titleLine1: "وكلاء ذكاء اصطناعي لا\u00A0يكتفون بالإجابة.",
    titleLine2: "يُنجزون العمل.",
    support:
      "نبني أنظمة ذكية تفهم سياق عملك، وتتصل بأدواتك، وتنفّذ مسار العمل من أول طلب حتى النتيجة.",
    primary: "ابدأ البناء",
    secondary: "شاهد آلية العمل",
    engineer: "تحدّث مع مهندس",
    visualLabel: "التنفيذ",
    live: "مباشر",
    paused: "متوقف",
    pause: "إيقاف",
    play: "تشغيل",
    requestLabel: "الطلب",
    request: "حدّد اجتماعًا مع العميل، وحدّث سجلّه في نظام المبيعات.",
    stagesLabel: "مراحل التنفيذ",
    activityLabel: "نشاط المرحلة",
    stages: arabicStages,
  },
};
