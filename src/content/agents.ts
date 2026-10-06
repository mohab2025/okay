import type { Locale } from "@/i18n/routing";

export const agentIds = [
  "software",
  "research",
  "data",
  "customer",
  "documents",
  "sales",
  "qa",
  "finance",
  "operations",
  "custom",
] as const;

export type AgentId = (typeof agentIds)[number];

export type Agent = {
  id: AgentId;
  name: string;
  status: string;
  tone: "ready" | "custom";
  problem: string;
  understands: string;
  actions: string[];
  systems: string[];
  workflow: string[];
  cta: string;
  href: string;
};

export type AgentLabels = {
  problem: string;
  understands: string;
  actions: string;
  systems: string;
  workflow: string;
};

export type AgentsContent = AgentLabels & {
  eyebrow: string;
  title: string;
  description: string;
  agents: Agent[];
};

const english: AgentsContent = {
  eyebrow: "Agents",
  title: "Specialized agents for real work.",
  description:
    "Each agent is scoped to one kind of work. It reads the context, uses the systems already in place, and carries a task through to a checked result.",
  problem: "Problem",
  understands: "Understands",
  actions: "Actions",
  systems: "Systems",
  workflow: "Example workflow",
  agents: [
    {
      id: "software",
      name: "Software Engineering Agent",
      status: "Ready",
      tone: "ready",
      problem: "A requirement is approved, but the path from design to a reviewed release is still manual.",
      understands: "The requirement, the boundaries of the current system, and what must be true before release.",
      actions: [
        "Shape the architecture",
        "Write the change",
        "Add the tests",
        "Prepare the review",
        "Stage the deployment",
      ],
      systems: ["Repository", "Issues", "CI", "Review"],
      workflow: ["Requirement", "Architecture", "Code", "Tests", "Review", "Deployment"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "research",
      name: "Research Agent",
      status: "Ready",
      tone: "ready",
      problem: "A decision needs a sourced brief, and the material is still scattered across documents and notes.",
      understands: "The question, the material that bears on it, and which points still lack a source.",
      actions: ["Collect the sources", "Compare the findings", "Mark the gaps", "Write the brief"],
      systems: ["Documents", "Notes", "Knowledge base"],
      workflow: ["Question", "Sources", "Comparison", "Brief", "Review"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "data",
      name: "Data Agent",
      status: "Ready",
      tone: "ready",
      problem: "A business question depends on records that still sit in separate tables.",
      understands: "The question, the tables that hold the answer, and which fields have to agree.",
      actions: ["Find the tables", "Join the records", "Check the result", "Return the answer"],
      systems: ["Warehouse", "Database", "Spreadsheets"],
      workflow: ["Question", "Tables", "Query", "Check", "Answer"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "customer",
      name: "Customer Operations Agent",
      status: "Ready",
      tone: "ready",
      problem: "A customer writes in, and the account, the open case, and the reply are not in one place.",
      understands: "Who the customer is, what they asked, and which case is still open.",
      actions: ["Read the account", "Update the case", "Draft the reply", "Set the follow-up"],
      systems: ["CRM", "Help desk", "Email", "Calendar"],
      workflow: ["Request", "Account", "Case", "Reply", "Follow-up"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "documents",
      name: "Document Intelligence Agent",
      status: "Ready",
      tone: "ready",
      problem: "A contract arrives as a file, and its parties, dates, and obligations are not in the record yet.",
      understands: "The document type, the parties, and the dates and obligations that have to be kept.",
      actions: ["Read the file", "Extract the terms", "Check the fields", "File the record"],
      systems: ["Files", "Document store", "CRM"],
      workflow: ["File", "Read", "Extract", "Check", "Record"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "sales",
      name: "Sales Agent",
      status: "Ready",
      tone: "ready",
      problem: "A prospect replies, and the opportunity, the meeting, and the note are still unfinished.",
      understands: "The account, the open opportunity, and what the reply is asking for.",
      actions: ["Read the thread", "Update the opportunity", "Propose a time", "Write the note"],
      systems: ["CRM", "Email", "Calendar"],
      workflow: ["Reply", "Account", "Opportunity", "Meeting", "Note"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "qa",
      name: "QA Agent",
      status: "Ready",
      tone: "ready",
      problem: "A change is ready, and the flows it can break have not been walked yet.",
      understands: "What changed, which flows it touches, and what a failure looks like.",
      actions: ["Read the change", "Select the cases", "Run them", "Report what failed"],
      systems: ["Repository", "Test runner", "Issues", "CI"],
      workflow: ["Change", "Cases", "Run", "Failures", "Report"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "finance",
      name: "Finance Agent",
      status: "Ready",
      tone: "ready",
      problem: "An invoice, a receipt, and a ledger line still have to agree.",
      understands: "The vendor, the amount, and which ledger entry the document belongs to.",
      actions: ["Read the invoice", "Match the receipt", "Check the amount", "Post the entry"],
      systems: ["Invoices", "Ledger", "Bank feed"],
      workflow: ["Invoice", "Match", "Check", "Post", "Record"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "operations",
      name: "Operations Agent",
      status: "Ready",
      tone: "ready",
      problem: "Work is moving between teams, and the owner and the next step are easy to lose.",
      understands: "What is in progress, who owns it, and which step is blocked.",
      actions: ["Read the status", "Assign the owner", "Update the record", "Notify the next team"],
      systems: ["Tasks", "Slack", "Email", "Internal systems"],
      workflow: ["Status", "Owner", "Update", "Notify", "Done"],
      cta: "Start with this agent",
      href: "/get-started",
    },
    {
      id: "custom",
      name: "Custom Enterprise Agent",
      status: "Scoped",
      tone: "custom",
      problem: "The work follows an internal process, and a general assistant cannot finish it inside your systems.",
      understands: "The company's process, the tools it already runs, and the result that counts as done.",
      actions: ["Map the process", "Connect the systems", "Run the steps", "Check the result"],
      systems: ["Internal systems", "APIs", "Database"],
      workflow: ["Process", "Systems", "Steps", "Check", "Result"],
      cta: "Talk to an engineer",
      href: "/company",
    },
  ],
};

const arabic: AgentsContent = {
  eyebrow: "الوكلاء",
  title: "وكلاء متخصصون للعمل الحقيقي.",
  description:
    "كل وكيل مخصّص لنوع واحد من العمل. يقرأ السياق، ويعمل عبر الأنظمة القائمة، ويوصل المهمة إلى نتيجة رُوجعت.",
  problem: "المهمة",
  understands: "يفهم",
  actions: "ينفّذ",
  systems: "الأنظمة",
  workflow: "مثال على المسار",
  agents: [
    {
      id: "software",
      name: "وكيل هندسة البرمجيات",
      status: "جاهز",
      tone: "ready",
      problem: "اعتماد المتطلب لا يعني أن الطريق من التصميم إلى إصدار مُراجع قد جُهز.",
      understands: "المتطلب، وحدود النظام الحالي، وما يجب أن يتحقق قبل الإصدار.",
      actions: ["يصوغ البنية", "يكتب التعديل", "يضيف الاختبارات", "يجهّز المراجعة", "يرتّب النشر"],
      systems: ["المستودع", "المهام", "التكامل المستمر", "المراجعة"],
      workflow: ["متطلب", "بنية", "كود", "اختبارات", "مراجعة", "نشر"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "research",
      name: "وكيل البحث",
      status: "جاهز",
      tone: "ready",
      problem: "القرار يحتاج موجزًا مدعومًا بالمصادر، والمادة ما زالت متفرقة بين المستندات والملاحظات.",
      understands: "السؤال، والمادة المتعلقة به، والنقاط التي ما زالت بلا مصدر.",
      actions: ["يجمع المصادر", "يقارن النتائج", "يعلّم الفجوات", "يكتب الموجز"],
      systems: ["المستندات", "الملاحظات", "قاعدة المعرفة"],
      workflow: ["سؤال", "مصادر", "مقارنة", "موجز", "مراجعة"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "data",
      name: "وكيل البيانات",
      status: "جاهز",
      tone: "ready",
      problem: "سؤال العمل يعتمد على سجلات ما زالت في جداول منفصلة.",
      understands: "السؤال، والجداول التي تحمل الإجابة، والحقول التي يجب أن تتفق.",
      actions: ["يحدد الجداول", "يربط السجلات", "يراجع الناتج", "يعيد الإجابة"],
      systems: ["مستودع البيانات", "قاعدة البيانات", "الجداول"],
      workflow: ["سؤال", "جداول", "استعلام", "مراجعة", "إجابة"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "customer",
      name: "وكيل عمليات العملاء",
      status: "جاهز",
      tone: "ready",
      problem: "يصل طلب العميل، والحساب والحالة المفتوحة والرد ليست في مكان واحد.",
      understands: "من العميل، وماذا طلب، وأي حالة ما زالت مفتوحة.",
      actions: ["يقرأ الحساب", "يحدّث الحالة", "يكتب الرد", "يحدد المتابعة"],
      systems: ["نظام العملاء", "مكتب المساعدة", "البريد", "التقويم"],
      workflow: ["طلب", "حساب", "حالة", "رد", "متابعة"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "documents",
      name: "وكيل فهم المستندات",
      status: "جاهز",
      tone: "ready",
      problem: "يصل العقد ملفًا، وأطرافه وتواريخه والتزاماته لم تدخل السجل بعد.",
      understands: "نوع المستند، والأطراف، والتواريخ والالتزامات التي يجب حفظها.",
      actions: ["يقرأ الملف", "يستخرج البنود", "يراجع الحقول", "يحفظ السجل"],
      systems: ["الملفات", "مخزن المستندات", "نظام العملاء"],
      workflow: ["ملف", "قراءة", "استخراج", "مراجعة", "سجل"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "sales",
      name: "وكيل المبيعات",
      status: "جاهز",
      tone: "ready",
      problem: "يردّ العميل المحتمل، والفرصة والاجتماع والملاحظة ما زالت غير مكتملة.",
      understands: "الحساب، والفرصة المفتوحة، وما الذي يطلبه الرد.",
      actions: ["يقرأ الرسالة", "يحدّث الفرصة", "يقترح موعدًا", "يكتب الملاحظة"],
      systems: ["نظام العملاء", "البريد", "التقويم"],
      workflow: ["رد", "حساب", "فرصة", "اجتماع", "ملاحظة"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "qa",
      name: "وكيل ضمان الجودة",
      status: "جاهز",
      tone: "ready",
      problem: "التعديل جاهز، والمسارات التي قد يكسرها لم تُفحص بعد.",
      understands: "ما الذي تغيّر، والمسارات التي يمسّها، وكيف يبدو الفشل.",
      actions: ["يقرأ التعديل", "يختار الحالات", "يشغّلها", "يبلّغ عما فشل"],
      systems: ["المستودع", "مشغّل الاختبارات", "المهام", "التكامل المستمر"],
      workflow: ["تعديل", "حالات", "تشغيل", "أعطال", "تقرير"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "finance",
      name: "وكيل المالية",
      status: "جاهز",
      tone: "ready",
      problem: "الفاتورة والإيصال وقيد الدفتر ما زالت بحاجة إلى أن تتفق.",
      understands: "المورّد، والمبلغ، والقيد الذي ينتمي إليه المستند.",
      actions: ["يقرأ الفاتورة", "يطابق الإيصال", "يراجع المبلغ", "يثبت القيد"],
      systems: ["الفواتير", "الدفتر", "حركة الحساب"],
      workflow: ["فاتورة", "مطابقة", "مراجعة", "ترحيل", "سجل"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "operations",
      name: "وكيل العمليات",
      status: "جاهز",
      tone: "ready",
      problem: "العمل ينتقل بين الفرق، ومن السهل أن يضيع المسؤول والخطوة التالية.",
      understands: "ما الجاري، ومن يملكه، وأي خطوة متوقفة.",
      actions: ["يقرأ الحالة", "يعيّن المسؤول", "يحدّث السجل", "يبلّغ الفريق التالي"],
      systems: ["المهام", "سلاك", "البريد", "الأنظمة الداخلية"],
      workflow: ["حالة", "مسؤول", "تحديث", "تبليغ", "إنجاز"],
      cta: "ابدأ بهذا الوكيل",
      href: "/get-started",
    },
    {
      id: "custom",
      name: "وكيل مؤسسي مخصص",
      status: "حسب المؤسسة",
      tone: "custom",
      problem: "العمل يسير وفق إجراء داخلي، والمساعد العام لا يستطيع إتمامه داخل أنظمتكم.",
      understands: "إجراء المؤسسة، والأدوات التي تعمل بها، والنتيجة التي تُعد إنجازًا.",
      actions: ["يرسم الإجراء", "يربط الأنظمة", "ينفّذ الخطوات", "يراجع النتيجة"],
      systems: ["الأنظمة الداخلية", "واجهات برمجية", "قاعدة البيانات"],
      workflow: ["إجراء", "أنظمة", "خطوات", "مراجعة", "نتيجة"],
      cta: "تحدّث مع مهندس",
      href: "/company",
    },
  ],
};

export const agentsContent: Record<Locale, AgentsContent> = {
  en: english,
  ar: arabic,
};
