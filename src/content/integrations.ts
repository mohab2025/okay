import type { Locale } from "@/i18n/routing";

export const integrationLayerIds = ["agent", "systems", "data", "actions"] as const;

export type IntegrationLayerId = (typeof integrationLayerIds)[number];

export type IntegrationLayer = {
  id: IntegrationLayerId;
  title: string;
  summary: string;
};

export type IntegrationNode = {
  id: string;
  name: string;
  layer: IntegrationLayerId;
  exchange: string;
};

export type IntegrationsContent = {
  eyebrow: string;
  title: string;
  description: string;
  mapLabel: string;
  bridge: string;
  layers: IntegrationLayer[];
  nodes: IntegrationNode[];
};

const englishNodes: IntegrationNode[] = [
  {
    id: "openai",
    name: "OpenAI",
    layer: "agent",
    exchange: "A model the agent can call. The result comes back into the workflow.",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    layer: "agent",
    exchange: "A model the agent can call. The result comes back into the workflow.",
  },
  {
    id: "google-ai",
    name: "Google AI",
    layer: "agent",
    exchange: "A model the agent can call. The result comes back into the workflow.",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    layer: "systems",
    exchange: "The agent can read the account and write the note back.",
  },
  {
    id: "sap",
    name: "SAP",
    layer: "systems",
    exchange: "The agent can read the operational record the process already keeps.",
  },
  {
    id: "oracle",
    name: "Oracle",
    layer: "systems",
    exchange: "The agent can read the enterprise record the workflow depends on.",
  },
  {
    id: "slack",
    name: "Slack",
    layer: "systems",
    exchange: "The agent can read the message and post the update back.",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    layer: "systems",
    exchange: "The agent can read the message and post the update back.",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    layer: "systems",
    exchange: "The agent can read the customer message and send the reply.",
  },
  {
    id: "github",
    name: "GitHub",
    layer: "systems",
    exchange: "The agent can read the change and open the review.",
  },
  {
    id: "notion",
    name: "Notion",
    layer: "systems",
    exchange: "The agent can read the page and write the update back.",
  },
  {
    id: "gcal",
    name: "Google Calendar",
    layer: "systems",
    exchange: "The agent can read availability and book the time.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    layer: "data",
    exchange: "The agent can read and write rows in the application database.",
  },
  {
    id: "mysql",
    name: "MySQL",
    layer: "data",
    exchange: "The agent can read and write rows in the application database.",
  },
  {
    id: "aws",
    name: "AWS",
    layer: "data",
    exchange: "The agent can reach files and services the workflow already uses there.",
  },
  {
    id: "azure",
    name: "Azure",
    layer: "data",
    exchange: "The agent can reach files and services the workflow already uses there.",
  },
  {
    id: "gcp",
    name: "Google Cloud",
    layer: "data",
    exchange: "The agent can reach files and services the workflow already uses there.",
  },
  {
    id: "update",
    name: "Update a record",
    layer: "actions",
    exchange: "The agent writes the result back to the system of record.",
  },
  {
    id: "message",
    name: "Send a message",
    layer: "actions",
    exchange: "The agent sends the reply or the status through the channel the process uses.",
  },
  {
    id: "change",
    name: "Open a change",
    layer: "actions",
    exchange: "The agent opens the change for a person to review.",
  },
  {
    id: "book",
    name: "Book a time",
    layer: "actions",
    exchange: "The agent books the slot the rule allows.",
  },
  {
    id: "file",
    name: "Write a file",
    layer: "actions",
    exchange: "The agent writes the document or the note the step requires.",
  },
];

const arabicNodes: IntegrationNode[] = [
  {
    id: "openai",
    name: "OpenAI",
    layer: "agent",
    exchange: "نموذج يستطيع الوكيل استدعاءه. تعود النتيجة إلى مسار العمل.",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    layer: "agent",
    exchange: "نموذج يستطيع الوكيل استدعاءه. تعود النتيجة إلى مسار العمل.",
  },
  {
    id: "google-ai",
    name: "Google AI",
    layer: "agent",
    exchange: "نموذج يستطيع الوكيل استدعاءه. تعود النتيجة إلى مسار العمل.",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة الحساب وكتابة الملاحظة.",
  },
  {
    id: "sap",
    name: "SAP",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة السجل التشغيلي الذي يحتفظ به الإجراء أصلًا.",
  },
  {
    id: "oracle",
    name: "Oracle",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة السجل المؤسسي الذي يعتمد عليه المسار.",
  },
  {
    id: "slack",
    name: "Slack",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة الرسالة ونشر التحديث.",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة الرسالة ونشر التحديث.",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة رسالة العميل وإرسال الرد.",
  },
  {
    id: "github",
    name: "GitHub",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة التعديل وفتح المراجعة.",
  },
  {
    id: "notion",
    name: "Notion",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة الصفحة وكتابة التحديث.",
  },
  {
    id: "gcal",
    name: "Google Calendar",
    layer: "systems",
    exchange: "يستطيع الوكيل قراءة التوفر وحجز الموعد.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    layer: "data",
    exchange: "يستطيع الوكيل قراءة الصفوف وكتابتها في قاعدة بيانات التطبيق.",
  },
  {
    id: "mysql",
    name: "MySQL",
    layer: "data",
    exchange: "يستطيع الوكيل قراءة الصفوف وكتابتها في قاعدة بيانات التطبيق.",
  },
  {
    id: "aws",
    name: "AWS",
    layer: "data",
    exchange: "يستطيع الوكيل الوصول إلى الملفات والخدمات التي يستخدمها المسار هناك.",
  },
  {
    id: "azure",
    name: "Azure",
    layer: "data",
    exchange: "يستطيع الوكيل الوصول إلى الملفات والخدمات التي يستخدمها المسار هناك.",
  },
  {
    id: "gcp",
    name: "Google Cloud",
    layer: "data",
    exchange: "يستطيع الوكيل الوصول إلى الملفات والخدمات التي يستخدمها المسار هناك.",
  },
  {
    id: "update",
    name: "تحديث سجل",
    layer: "actions",
    exchange: "يكتب الوكيل النتيجة في نظام السجل.",
  },
  {
    id: "message",
    name: "إرسال رسالة",
    layer: "actions",
    exchange: "يرسل الوكيل الرد أو الحالة عبر القناة التي يستخدمها الإجراء.",
  },
  {
    id: "change",
    name: "فتح تعديل",
    layer: "actions",
    exchange: "يفتح الوكيل التعديل ليراجعه شخص.",
  },
  {
    id: "book",
    name: "حجز موعد",
    layer: "actions",
    exchange: "يحجز الوكيل الموعد الذي تسمح به القاعدة.",
  },
  {
    id: "file",
    name: "كتابة ملف",
    layer: "actions",
    exchange: "يكتب الوكيل المستند أو الملاحظة التي تتطلبها الخطوة.",
  },
];

const english: IntegrationsContent = {
  eyebrow: "Connections",
  title: "The agent sits between the systems, the data, and the action.",
  description:
    "A custom agent can be connected to the tools a process already uses. It reads and writes in both directions. The names below are connections on that path, not a wall of logos, and not a list of clients.",
  mapLabel: "Connection map",
  bridge: "Both directions",
  layers: [
    {
      id: "agent",
      title: "AI agent",
      summary: "The agent calls a model, then carries the result into the work.",
    },
    {
      id: "systems",
      title: "Business systems",
      summary: "The operational tools the process already runs on.",
    },
    {
      id: "data",
      title: "Data",
      summary: "Databases, files, and the platforms that hold them.",
    },
    {
      id: "actions",
      title: "Actions",
      summary: "What the agent does through those connections.",
    },
  ],
  nodes: englishNodes,
};

const arabic: IntegrationsContent = {
  eyebrow: "الربط",
  title: "الوكيل بين الأنظمة والبيانات والتنفيذ.",
  description:
    "يمكن ربط وكيل مخصص بالأدوات التي يستخدمها الإجراء أصلًا. يقرأ ويكتب في الاتجاهين. الأسماء أدناه وصلات على هذا المسار، وليست جدار شعارات، وليست قائمة عملاء.",
  mapLabel: "خريطة الربط",
  bridge: "في الاتجاهين",
  layers: [
    {
      id: "agent",
      title: "الوكيل",
      summary: "يستدعي الوكيل نموذجًا، ثم يُدخل النتيجة في العمل.",
    },
    {
      id: "systems",
      title: "أنظمة العمل",
      summary: "الأدوات التشغيلية التي يعمل عليها الإجراء أصلًا.",
    },
    {
      id: "data",
      title: "البيانات",
      summary: "قواعد البيانات والملفات والمنصات التي تحتفظ بها.",
    },
    {
      id: "actions",
      title: "التنفيذ",
      summary: "ما يفعله الوكيل عبر هذه الوصلات.",
    },
  ],
  nodes: arabicNodes,
};

export const integrationsContent: Record<Locale, IntegrationsContent> = {
  en: english,
  ar: arabic,
};
