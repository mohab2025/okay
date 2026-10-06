import type { Locale } from "@/i18n/routing";

export type Solution = {
  id: string;
  name: string;
  problem: string;
  workflow: string[];
  outcome: string;
};

export type SolutionsContent = {
  eyebrow: string;
  title: string;
  description: string;
  problem: string;
  workflow: string;
  outcome: string;
  solutions: Solution[];
};

const english: SolutionsContent = {
  eyebrow: "Solutions",
  title: "Business solutions",
  description:
    "Each solution is a path an agent can run for one kind of work: the problem, the workflow, and the result that path is built to produce.",
  problem: "Problem",
  workflow: "AI workflow",
  outcome: "Outcome",
  solutions: [
    {
      id: "engineering",
      name: "Engineering",
      problem: "A requirement is approved, but the change still has to be designed, written, and reviewed.",
      workflow: ["Requirement", "Design", "Change", "Review"],
      outcome: "A reviewed change is prepared for the team's release step.",
    },
    {
      id: "operations",
      name: "Operations",
      problem: "Work moves between teams, and the owner and the next step are easy to lose.",
      workflow: ["Status", "Owner", "Update", "Notify"],
      outcome: "The record shows who owns the work and what happens next.",
    },
    {
      id: "support",
      name: "Customer Support",
      problem: "A customer writes in, and the account, the case, and the reply sit in different tools.",
      workflow: ["Request", "Account", "Case", "Reply"],
      outcome: "The case is updated, and the reply is ready to send.",
    },
    {
      id: "sales",
      name: "Sales",
      problem: "A prospect replies, and the opportunity, the meeting, and the note are still open.",
      workflow: ["Reply", "Opportunity", "Meeting", "Note"],
      outcome: "The opportunity record holds the meeting and the note.",
    },
    {
      id: "finance",
      name: "Finance",
      problem: "An invoice and a ledger line still have to agree.",
      workflow: ["Invoice", "Match", "Check", "Post"],
      outcome: "The entry is ready to post against the matched document.",
    },
    {
      id: "research",
      name: "Research",
      problem: "A decision needs a brief, and the sources are still scattered.",
      workflow: ["Question", "Sources", "Brief", "Review"],
      outcome: "A sourced brief is ready for a person to review.",
    },
    {
      id: "data",
      name: "Data & Analytics",
      problem: "A question depends on records that still sit in separate tables.",
      workflow: ["Question", "Tables", "Query", "Answer"],
      outcome: "The answer comes back with the tables it was drawn from.",
    },
    {
      id: "documents",
      name: "Document Processing",
      problem: "A file arrives, and the fields inside it are not in the record yet.",
      workflow: ["File", "Extract", "Check", "Record"],
      outcome: "The checked fields are written into the record.",
    },
  ],
};

const arabic: SolutionsContent = {
  eyebrow: "الحلول",
  title: "حلول العمل",
  description:
    "كل حل مسار يستطيع الوكيل أن ينفّذه لنوع واحد من العمل: المهمة، ومسار العمل، والنتيجة التي يُبنى المسار ليصل إليها.",
  problem: "المهمة",
  workflow: "مسار الوكيل",
  outcome: "النتيجة",
  solutions: [
    {
      id: "engineering",
      name: "الهندسة",
      problem: "المتطلب معتمد، والتعديل ما زال بحاجة إلى تصميم وكتابة ومراجعة.",
      workflow: ["متطلب", "تصميم", "تعديل", "مراجعة"],
      outcome: "تعديل مُراجع، جاهز لخطوة الإصدار لدى الفريق.",
    },
    {
      id: "operations",
      name: "العمليات",
      problem: "العمل ينتقل بين الفرق، ومن السهل أن يضيع المسؤول والخطوة التالية.",
      workflow: ["حالة", "مسؤول", "تحديث", "تبليغ"],
      outcome: "يظهر في السجل من يملك العمل وما الذي يليه.",
    },
    {
      id: "support",
      name: "دعم العملاء",
      problem: "يكتب العميل، والحساب والحالة والرد موزعة على أدوات مختلفة.",
      workflow: ["طلب", "حساب", "حالة", "رد"],
      outcome: "تُحدَّث الحالة ويصبح الرد جاهزًا للإرسال.",
    },
    {
      id: "sales",
      name: "المبيعات",
      problem: "يردّ العميل المحتمل، والفرصة والاجتماع والملاحظة ما زالت مفتوحة.",
      workflow: ["رد", "فرصة", "اجتماع", "ملاحظة"],
      outcome: "يحتفظ سجل الفرصة بالاجتماع والملاحظة.",
    },
    {
      id: "finance",
      name: "المالية",
      problem: "الفاتورة وقيد الدفتر ما زالا بحاجة إلى أن يتفقا.",
      workflow: ["فاتورة", "مطابقة", "مراجعة", "ترحيل"],
      outcome: "يصبح القيد جاهزًا للترحيل مقابل المستند المطابق.",
    },
    {
      id: "research",
      name: "البحث",
      problem: "القرار يحتاج موجزًا، والمصادر ما زالت متفرقة.",
      workflow: ["سؤال", "مصادر", "موجز", "مراجعة"],
      outcome: "موجز مدعوم بالمصادر، جاهز ليراجعه شخص.",
    },
    {
      id: "data",
      name: "البيانات والتحليل",
      problem: "السؤال يعتمد على سجلات ما زالت في جداول منفصلة.",
      workflow: ["سؤال", "جداول", "استعلام", "إجابة"],
      outcome: "تعود الإجابة ومعها الجداول التي أُخذت منها.",
    },
    {
      id: "documents",
      name: "معالجة المستندات",
      problem: "يصل الملف، والحقول التي بداخله لم تدخل السجل بعد.",
      workflow: ["ملف", "استخراج", "مراجعة", "سجل"],
      outcome: "تُكتب الحقول المراجعة في السجل.",
    },
  ],
};

export const solutionsContent: Record<Locale, SolutionsContent> = {
  en: english,
  ar: arabic,
};
