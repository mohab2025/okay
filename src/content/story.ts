import type { Locale } from "@/i18n/routing";
import type { StoryIconId } from "@/components/home/story/icons";

export type StoryStep = {
  id: string;
  label: string;
  icon: StoryIconId;
};

export type StorySignal = {
  id: string;
  label: string;
  icon: StoryIconId;
};

export type StoryRow = {
  label: string;
  value: string;
};

export type StoryLane = {
  id: string;
  title: string;
  status: string;
  note: string;
  tone: "muted" | "active";
  steps: StoryStep[];
};

export type StoryFragment = {
  id: string;
  label: string;
  icon: StoryIconId;
  kind: "voice" | "pdf" | "image" | "email" | "chat" | "transcript";
  meta: string;
  text: string;
};

export type StoryContent = {
  pause: string;
  play: string;
  gap: {
    eyebrow: string;
    title: string;
    description: string;
    diagramLabel: string;
    lanes: StoryLane[];
  };
  conversation: {
    eyebrow: string;
    title: string;
    description: string;
    diagramLabel: string;
    inputsLabel: string;
    inputs: StorySignal[];
    engineLabel: string;
    engine: StoryStep[];
    systemsLabel: string;
    systems: StorySignal[];
    resultLabel: string;
    exampleLabel: string;
    resultStatus: string;
    result: StoryRow[];
  };
  structure: {
    eyebrow: string;
    title: string;
    description: string;
    diagramLabel: string;
    sourcesLabel: string;
    fragments: StoryFragment[];
    pipelineLabel: string;
    pipeline: StoryStep[];
    recordLabel: string;
    exampleLabel: string;
    record: StoryRow[];
    nextLabel: string;
    nextAction: string;
  };
};

const english: StoryContent = {
  pause: "Pause flow",
  play: "Play flow",
  gap: {
    eyebrow: "Why agents",
    title: "The AI execution gap",
    description:
      "Traditional software can only follow a path written in advance. An assistant ends at the reply. An agent takes the intent and carries the work through to a checked result.",
    diagramLabel: "Three paths",
    lanes: [
      {
        id: "software",
        title: "Traditional software",
        status: "Fixed path",
        note: "The path is fixed before the request arrives.",
        tone: "muted",
        steps: [
          { id: "input", label: "Input", icon: "input" },
          { id: "rules", label: "Rules", icon: "rules" },
          { id: "workflow", label: "Workflow", icon: "workflow" },
          { id: "output", label: "Output", icon: "output" },
        ],
      },
      {
        id: "assistant",
        title: "AI assistant",
        status: "Reply only",
        note: "The exchange ends when the reply is written.",
        tone: "muted",
        steps: [
          { id: "question", label: "Question", icon: "question" },
          { id: "answer", label: "Answer", icon: "answer" },
        ],
      },
      {
        id: "agent",
        title: "AI agent",
        status: "Executes",
        note: "The system continues until the work is verified.",
        tone: "active",
        steps: [
          { id: "intent", label: "Intent", icon: "intent" },
          { id: "understand", label: "Understand", icon: "understand" },
          { id: "reason", label: "Reason", icon: "reason" },
          { id: "act", label: "Act", icon: "act" },
          { id: "verify", label: "Verify", icon: "verify" },
          { id: "result", label: "Result", icon: "result" },
        ],
      },
    ],
  },
  conversation: {
    eyebrow: "From message to work",
    title: "Conversation → action",
    description:
      "A request can arrive as voice, mail, a document, or a message. The agent turns that intent into work across the systems the business already runs.",
    diagramLabel: "Signal path",
    inputsLabel: "Inputs",
    inputs: [
      { id: "voice", label: "Voice", icon: "voice" },
      { id: "chat", label: "Chat", icon: "chat" },
      { id: "email", label: "Email", icon: "email" },
      { id: "whatsapp", label: "WhatsApp", icon: "whatsapp" },
      { id: "document", label: "Document", icon: "document" },
      { id: "image", label: "Image", icon: "image" },
      { id: "api", label: "API", icon: "api" },
      { id: "request", label: "User request", icon: "request" },
    ],
    engineLabel: "AI agent engine",
    engine: [
      { id: "understand", label: "Understand", icon: "understand" },
      { id: "structure", label: "Structure", icon: "structure" },
      { id: "reason", label: "Reason", icon: "reason" },
      { id: "execute", label: "Execute", icon: "execute" },
      { id: "verify", label: "Verify", icon: "verify" },
    ],
    systemsLabel: "Business systems",
    systems: [
      { id: "crm", label: "CRM", icon: "crm" },
      { id: "erp", label: "ERP", icon: "erp" },
      { id: "database", label: "Database", icon: "database" },
      { id: "calendar", label: "Calendar", icon: "calendar" },
      { id: "email", label: "Email", icon: "email" },
      { id: "slack", label: "Slack", icon: "slack" },
      { id: "internal", label: "Internal systems", icon: "internal" },
      { id: "apis", label: "APIs", icon: "api" },
    ],
    resultLabel: "Completed work",
    exampleLabel: "Example run",
    resultStatus: "Completed",
    result: [
      { label: "Meeting", value: "Tuesday 10:30" },
      { label: "CRM", value: "Renewal note saved" },
      { label: "Calendar", value: "Invite sent" },
    ],
  },
  structure: {
    eyebrow: "From raw input",
    title: "Unstructured data → structured data",
    description:
      "Voice, files, images, and messages do not arrive ready for a system of record. The agent extracts them, checks them, and turns them into information it can act on.",
    diagramLabel: "Structuring run",
    sourcesLabel: "Incoming",
    fragments: [
      {
        id: "voice",
        label: "Voice",
        icon: "voice",
        kind: "voice",
        meta: "00:04",
        text: "Book the renewal meeting for Tuesday.",
      },
      {
        id: "pdf",
        label: "PDF",
        icon: "pdf",
        kind: "pdf",
        meta: "PDF",
        text: "Q4 renewal agreement",
      },
      {
        id: "image",
        label: "Image",
        icon: "image",
        kind: "image",
        meta: "Account card",
        text: "Afaq Trading",
      },
      {
        id: "email",
        label: "Email",
        icon: "email",
        kind: "email",
        meta: "Subject",
        text: "Renewal meeting",
      },
      {
        id: "chat",
        label: "Chat",
        icon: "chat",
        kind: "chat",
        meta: "Thread",
        text: "Does Tuesday 10:30 work?",
      },
      {
        id: "transcript",
        label: "Meeting transcript",
        icon: "transcript",
        kind: "transcript",
        meta: "00:12",
        text: "Let's lock Tuesday at 10:30.",
      },
    ],
    pipelineLabel: "Read and structure",
    pipeline: [
      { id: "extract", label: "Extract", icon: "extract" },
      { id: "understand", label: "Understand", icon: "understand" },
      { id: "validate", label: "Validate", icon: "validate" },
      { id: "structure", label: "Structure", icon: "structure" },
    ],
    recordLabel: "Structured business information",
    exampleLabel: "Example",
    record: [
      { label: "Account", value: "Afaq Trading" },
      { label: "Owner", value: "Lina Haddad" },
      { label: "Intent", value: "Renewal meeting" },
      { label: "Time", value: "Tuesday 10:30" },
      { label: "Source", value: "Email" },
    ],
    nextLabel: "Next action",
    nextAction: "The agent books the meeting and updates the CRM.",
  },
};

const arabic: StoryContent = {
  pause: "إيقاف الحركة",
  play: "تشغيل الحركة",
  gap: {
    eyebrow: "لماذا الوكيل",
    title: "فجوة التنفيذ",
    description:
      "البرمجيات التقليدية لا تسير إلا على مسار كُتب مسبقًا. المساعد يتوقف عند الرد. الوكيل يأخذ القصد ويوصله إلى نتيجة رُوجعت.",
    diagramLabel: "ثلاثة مسارات",
    lanes: [
      {
        id: "software",
        title: "البرمجيات التقليدية",
        status: "مسار ثابت",
        note: "المسار جاهز قبل أن يصل الطلب.",
        tone: "muted",
        steps: [
          { id: "input", label: "مدخل", icon: "input" },
          { id: "rules", label: "قواعد", icon: "rules" },
          { id: "workflow", label: "مسار عمل", icon: "workflow" },
          { id: "output", label: "مخرج", icon: "output" },
        ],
      },
      {
        id: "assistant",
        title: "مساعد ذكاء اصطناعي",
        status: "رد فقط",
        note: "ينتهي التبادل عند كتابة الإجابة.",
        tone: "muted",
        steps: [
          { id: "question", label: "سؤال", icon: "question" },
          { id: "answer", label: "إجابة", icon: "answer" },
        ],
      },
      {
        id: "agent",
        title: "وكيل ذكاء اصطناعي",
        status: "ينفّذ",
        note: "يواصل النظام حتى تُراجع النتيجة.",
        tone: "active",
        steps: [
          { id: "intent", label: "القصد", icon: "intent" },
          { id: "understand", label: "الفهم", icon: "understand" },
          { id: "reason", label: "الاستدلال", icon: "reason" },
          { id: "act", label: "الفعل", icon: "act" },
          { id: "verify", label: "التحقق", icon: "verify" },
          { id: "result", label: "النتيجة", icon: "result" },
        ],
      },
    ],
  },
  conversation: {
    eyebrow: "من الرسالة إلى العمل",
    title: "من المحادثة إلى التنفيذ",
    description:
      "قد يصل الطلب صوتًا أو بريدًا أو مستندًا أو رسالة. يحوّل الوكيل هذا القصد إلى عمل داخل الأنظمة التي تعمل بها المؤسسة.",
    diagramLabel: "مسار الإشارة",
    inputsLabel: "المدخلات",
    inputs: [
      { id: "voice", label: "صوت", icon: "voice" },
      { id: "chat", label: "محادثة", icon: "chat" },
      { id: "email", label: "بريد", icon: "email" },
      { id: "whatsapp", label: "واتساب", icon: "whatsapp" },
      { id: "document", label: "مستند", icon: "document" },
      { id: "image", label: "صورة", icon: "image" },
      { id: "api", label: "واجهة برمجية", icon: "api" },
      { id: "request", label: "طلب المستخدم", icon: "request" },
    ],
    engineLabel: "محرك الوكيل",
    engine: [
      { id: "understand", label: "الفهم", icon: "understand" },
      { id: "structure", label: "التنظيم", icon: "structure" },
      { id: "reason", label: "الاستدلال", icon: "reason" },
      { id: "execute", label: "التنفيذ", icon: "execute" },
      { id: "verify", label: "التحقق", icon: "verify" },
    ],
    systemsLabel: "أنظمة العمل",
    systems: [
      { id: "crm", label: "نظام العملاء", icon: "crm" },
      { id: "erp", label: "نظام الموارد", icon: "erp" },
      { id: "database", label: "قاعدة البيانات", icon: "database" },
      { id: "calendar", label: "التقويم", icon: "calendar" },
      { id: "email", label: "البريد", icon: "email" },
      { id: "slack", label: "سلاك", icon: "slack" },
      { id: "internal", label: "الأنظمة الداخلية", icon: "internal" },
      { id: "apis", label: "واجهات برمجية", icon: "api" },
    ],
    resultLabel: "عمل مكتمل",
    exampleLabel: "مثال على تشغيل",
    resultStatus: "مكتمل",
    result: [
      { label: "الاجتماع", value: "الثلاثاء 10:30" },
      { label: "السجل", value: "حُفظت ملاحظة التجديد" },
      { label: "التقويم", value: "أُرسلت الدعوة" },
    ],
  },
  structure: {
    eyebrow: "من المدخل الخام",
    title: "من بيانات غير منظمة إلى سجل منظم",
    description:
      "الصوت والملفات والصور والرسائل لا تصل جاهزة للسجل. يستخرجها الوكيل، ويراجعها، ثم يحوّلها إلى معلومات يستطيع أن ينفّذ عليها.",
    diagramLabel: "تشغيل التنظيم",
    sourcesLabel: "الوارد",
    fragments: [
      {
        id: "voice",
        label: "صوت",
        icon: "voice",
        kind: "voice",
        meta: "00:04",
        text: "احجز اجتماع التجديد يوم الثلاثاء.",
      },
      {
        id: "pdf",
        label: "PDF",
        icon: "pdf",
        kind: "pdf",
        meta: "PDF",
        text: "اتفاق تجديد الربع الرابع",
      },
      {
        id: "image",
        label: "صورة",
        icon: "image",
        kind: "image",
        meta: "بطاقة حساب",
        text: "مؤسسة الأفق التجارية",
      },
      {
        id: "email",
        label: "بريد",
        icon: "email",
        kind: "email",
        meta: "الموضوع",
        text: "اجتماع التجديد",
      },
      {
        id: "chat",
        label: "محادثة",
        icon: "chat",
        kind: "chat",
        meta: "خيط",
        text: "هل الثلاثاء 10:30 مناسب؟",
      },
      {
        id: "transcript",
        label: "نص الاجتماع",
        icon: "transcript",
        kind: "transcript",
        meta: "00:12",
        text: "نثبّت الثلاثاء عند العاشرة والنصف.",
      },
    ],
    pipelineLabel: "القراءة والتنظيم",
    pipeline: [
      { id: "extract", label: "استخراج", icon: "extract" },
      { id: "understand", label: "فهم", icon: "understand" },
      { id: "validate", label: "تحقق", icon: "validate" },
      { id: "structure", label: "تنظيم", icon: "structure" },
    ],
    recordLabel: "معلومات العمل المنظمة",
    exampleLabel: "مثال",
    record: [
      { label: "الحساب", value: "مؤسسة الأفق التجارية" },
      { label: "المسؤول", value: "لينا حداد" },
      { label: "القصد", value: "اجتماع تجديد" },
      { label: "الموعد", value: "الثلاثاء 10:30" },
      { label: "المصدر", value: "بريد" },
    ],
    nextLabel: "الإجراء التالي",
    nextAction: "يحجز الوكيل الاجتماع ويحدّث نظام العملاء.",
  },
};

export const storyContent: Record<Locale, StoryContent> = {
  en: english,
  ar: arabic,
};
