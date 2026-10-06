import type { Locale } from "@/i18n/routing";

export const engineeringStageIds = [
  "requirement",
  "architecture",
  "code",
  "tests",
  "review",
  "deployment",
  "monitoring",
] as const;

export type EngineeringStageId = (typeof engineeringStageIds)[number];

export const engineeringPaneIds = [
  "files",
  "editor",
  "terminal",
  "tests",
  "git",
  "activity",
  "deploy",
] as const;

export type EngineeringPaneId = (typeof engineeringPaneIds)[number];

export type EngineeringFile = {
  id: string;
  path: string;
  language: string;
  at: number;
  body: string;
};

export type EngineeringCheck = {
  id: string;
  label: string;
  at: number;
};

export type EngineeringStage = {
  id: EngineeringStageId;
  label: string;
  activity: string;
  focusFile: string;
  terminal: string[];
  gitBranch: string;
  gitSummary: string;
  gitFiles: string[];
  deployState: string;
  deployDetail: string;
  deployTone: "idle" | "done" | "watch";
};

export type EngineeringContent = {
  eyebrow: string;
  title: string;
  description: string;
  example: string;
  received: string;
  run: string;
  pause: string;
  stagesLabel: string;
  panesLabel: string;
  panes: Record<EngineeringPaneId, string>;
  checks: EngineeringCheck[];
  files: EngineeringFile[];
  testsWaiting: string;
  testsPassed: string;
  testNames: string[];
  stages: EngineeringStage[];
};

const files: EngineeringFile[] = [
  {
    id: "req",
    path: "requirements/reschedule.md",
    language: "Markdown",
    at: 0,
    body: [
      "# Requirement",
      "",
      "Move an existing meeting.",
      "Keep the account note in sync.",
      "Fail when the meeting does not exist.",
    ].join("\n"),
  },
  {
    id: "arch",
    path: "docs/architecture.md",
    language: "Markdown",
    at: 1,
    body: [
      "# Reschedule",
      "",
      "The meetings service owns the change.",
      "The record is updated before the account note.",
      "A failing test blocks the review.",
    ].join("\n"),
  },
  {
    id: "code",
    path: "src/meetings/reschedule.ts",
    language: "TypeScript",
    at: 2,
    body: [
      "type Meeting = { id: string; start: string };",
      "",
      "export async function reschedule(id: string, start: string) {",
      "  const current = await findMeeting(id);",
      "  if (!current) throw new Error(\"Meeting not found\");",
      "  const next = { ...current, start };",
      "  await saveMeeting(next);",
      "  await syncAccountNote(next);",
      "  return next;",
      "}",
    ].join("\n"),
  },
  {
    id: "test",
    path: "src/meetings/reschedule.test.ts",
    language: "TypeScript",
    at: 3,
    body: [
      "test(\"moves the meeting\", async () => {",
      "  const next = await reschedule(\"m1\", \"2026-10-06T10:30:00Z\");",
      "  expect(next.start).toBe(\"2026-10-06T10:30:00Z\");",
      "});",
      "",
      "test(\"rejects an unknown meeting\", async () => {",
      "  await expect(reschedule(\"missing\", \"2026-10-06T10:30:00Z\")).rejects.toThrow();",
      "});",
    ].join("\n"),
  },
  {
    id: "release",
    path: "deploy/release.yml",
    language: "YAML",
    at: 5,
    body: ["name: release", "steps:", "  - name: publish", "    run: publish-release"].join("\n"),
  },
];

const terminal: Record<EngineeringStageId, string[]> = {
  requirement: ["$ read requirements/reschedule.md", "  accepted  requirements/reschedule.md"],
  architecture: ["$ plan --from requirements/reschedule.md", "  wrote     docs/architecture.md"],
  code: ["$ write src/meetings/reschedule.ts", "  wrote     src/meetings/reschedule.ts"],
  tests: [
    "$ test src/meetings/reschedule.test.ts",
    "  pass      moves the meeting",
    "  pass      rejects an unknown meeting",
    "  pass      writes the account note",
    "  3 passed",
  ],
  review: ["$ review --open", "  opened    #18  reschedule an existing meeting"],
  deployment: ["$ deploy --ref agent/reschedule", "  finished  deployment"],
  monitoring: ["$ watch", "  release is current", "  no failed check"],
};

const english: EngineeringContent = {
  eyebrow: "Software engineering",
  title: "From idea to production.",
  description:
    "The agent carries one change through the workflow. This console is a representative run.",
  example: "Representative",
  received: "Requirement received.",
  run: "Run",
  pause: "Pause",
  stagesLabel: "Workflow",
  panesLabel: "Console",
  panes: {
    files: "Files",
    editor: "Editor",
    terminal: "Terminal",
    tests: "Tests",
    git: "Git status",
    activity: "AI activity",
    deploy: "Deployment",
  },
  checks: [
    { id: "understood", label: "Requirements understood", at: 0 },
    { id: "architecture", label: "Architecture generated", at: 1 },
    { id: "files", label: "Files created", at: 2 },
    { id: "tests-written", label: "Tests generated", at: 3 },
    { id: "tests-passed", label: "Tests passed", at: 3 },
    { id: "pr", label: "Pull request created", at: 4 },
    { id: "deployed", label: "Deployment completed", at: 5 },
  ],
  files,
  testsWaiting: "Waiting for a test run.",
  testsPassed: "3 passed",
  testNames: ["moves the meeting", "rejects an unknown meeting", "writes the account note"],
  stages: [
    {
      id: "requirement",
      label: "Requirement",
      activity: "Reading the requirement",
      focusFile: "req",
      terminal: terminal.requirement,
      gitBranch: "main",
      gitSummary: "No change yet",
      gitFiles: [],
      deployState: "Not started",
      deployDetail: "The change has not been deployed.",
      deployTone: "idle",
    },
    {
      id: "architecture",
      label: "Architecture",
      activity: "Writing the architecture",
      focusFile: "arch",
      terminal: terminal.architecture,
      gitBranch: "agent/reschedule",
      gitSummary: "1 file added",
      gitFiles: ["docs/architecture.md"],
      deployState: "Not started",
      deployDetail: "The change has not been deployed.",
      deployTone: "idle",
    },
    {
      id: "code",
      label: "Code",
      activity: "Writing the change",
      focusFile: "code",
      terminal: terminal.code,
      gitBranch: "agent/reschedule",
      gitSummary: "2 files changed",
      gitFiles: ["docs/architecture.md", "src/meetings/reschedule.ts"],
      deployState: "Not started",
      deployDetail: "The change has not been deployed.",
      deployTone: "idle",
    },
    {
      id: "tests",
      label: "Tests",
      activity: "Running the tests",
      focusFile: "test",
      terminal: terminal.tests,
      gitBranch: "agent/reschedule",
      gitSummary: "3 files changed",
      gitFiles: ["docs/architecture.md", "src/meetings/reschedule.ts", "src/meetings/reschedule.test.ts"],
      deployState: "Not started",
      deployDetail: "The change has not been deployed.",
      deployTone: "idle",
    },
    {
      id: "review",
      label: "Review",
      activity: "Opening the review",
      focusFile: "code",
      terminal: terminal.review,
      gitBranch: "agent/reschedule",
      gitSummary: "Pull request #18 open",
      gitFiles: ["docs/architecture.md", "src/meetings/reschedule.ts", "src/meetings/reschedule.test.ts"],
      deployState: "Not started",
      deployDetail: "The review is open. The change has not been deployed.",
      deployTone: "idle",
    },
    {
      id: "deployment",
      label: "Deployment",
      activity: "Finishing the deployment",
      focusFile: "release",
      terminal: terminal.deployment,
      gitBranch: "agent/reschedule",
      gitSummary: "Release recorded",
      gitFiles: ["deploy/release.yml"],
      deployState: "Deployment completed",
      deployDetail: "The release step finished for this change.",
      deployTone: "done",
    },
    {
      id: "monitoring",
      label: "Monitoring",
      activity: "Watching the release",
      focusFile: "release",
      terminal: terminal.monitoring,
      gitBranch: "main",
      gitSummary: "Watching the current release",
      gitFiles: [],
      deployState: "Watching",
      deployDetail: "The release is current. No failed check is recorded.",
      deployTone: "watch",
    },
  ],
};

const arabic: EngineeringContent = {
  eyebrow: "هندسة البرمجيات",
  title: "من الفكرة إلى الإنتاج.",
  description: "ينقل الوكيل تعديلًا واحدًا عبر المسار. هذه الشاشة تشغيل تمثيلي.",
  example: "تمثيلي",
  received: "تم استلام المتطلب.",
  run: "تشغيل",
  pause: "إيقاف",
  stagesLabel: "المسار",
  panesLabel: "الشاشة",
  panes: {
    files: "الملفات",
    editor: "المحرر",
    terminal: "الطرفية",
    tests: "الاختبارات",
    git: "حالة Git",
    activity: "نشاط الوكيل",
    deploy: "النشر",
  },
  checks: [
    { id: "understood", label: "فُهم المتطلب", at: 0 },
    { id: "architecture", label: "أُنشئت البنية", at: 1 },
    { id: "files", label: "أُنشئت الملفات", at: 2 },
    { id: "tests-written", label: "أُنشئت الاختبارات", at: 3 },
    { id: "tests-passed", label: "نجحت الاختبارات", at: 3 },
    { id: "pr", label: "أُنشئ طلب المراجعة", at: 4 },
    { id: "deployed", label: "اكتمل النشر", at: 5 },
  ],
  files,
  testsWaiting: "بانتظار تشغيل الاختبارات.",
  testsPassed: "3 نجحت",
  testNames: ["moves the meeting", "rejects an unknown meeting", "writes the account note"],
  stages: [
    {
      id: "requirement",
      label: "المتطلب",
      activity: "يقرأ المتطلب",
      focusFile: "req",
      terminal: terminal.requirement,
      gitBranch: "main",
      gitSummary: "لا تغيير بعد",
      gitFiles: [],
      deployState: "لم يبدأ",
      deployDetail: "لم يُنشر التعديل.",
      deployTone: "idle",
    },
    {
      id: "architecture",
      label: "البنية",
      activity: "يكتب البنية",
      focusFile: "arch",
      terminal: terminal.architecture,
      gitBranch: "agent/reschedule",
      gitSummary: "ملف واحد مضاف",
      gitFiles: ["docs/architecture.md"],
      deployState: "لم يبدأ",
      deployDetail: "لم يُنشر التعديل.",
      deployTone: "idle",
    },
    {
      id: "code",
      label: "الكود",
      activity: "يكتب التعديل",
      focusFile: "code",
      terminal: terminal.code,
      gitBranch: "agent/reschedule",
      gitSummary: "ملفان تغيّرا",
      gitFiles: ["docs/architecture.md", "src/meetings/reschedule.ts"],
      deployState: "لم يبدأ",
      deployDetail: "لم يُنشر التعديل.",
      deployTone: "idle",
    },
    {
      id: "tests",
      label: "الاختبارات",
      activity: "يشغّل الاختبارات",
      focusFile: "test",
      terminal: terminal.tests,
      gitBranch: "agent/reschedule",
      gitSummary: "3 ملفات تغيّرت",
      gitFiles: ["docs/architecture.md", "src/meetings/reschedule.ts", "src/meetings/reschedule.test.ts"],
      deployState: "لم يبدأ",
      deployDetail: "لم يُنشر التعديل.",
      deployTone: "idle",
    },
    {
      id: "review",
      label: "المراجعة",
      activity: "يفتح المراجعة",
      focusFile: "code",
      terminal: terminal.review,
      gitBranch: "agent/reschedule",
      gitSummary: "طلب المراجعة 18 مفتوح",
      gitFiles: ["docs/architecture.md", "src/meetings/reschedule.ts", "src/meetings/reschedule.test.ts"],
      deployState: "لم يبدأ",
      deployDetail: "المراجعة مفتوحة. لم يُنشر التعديل.",
      deployTone: "idle",
    },
    {
      id: "deployment",
      label: "النشر",
      activity: "ينهي النشر",
      focusFile: "release",
      terminal: terminal.deployment,
      gitBranch: "agent/reschedule",
      gitSummary: "سُجّل الإصدار",
      gitFiles: ["deploy/release.yml"],
      deployState: "اكتمل النشر",
      deployDetail: "انتهت خطوة الإصدار لهذا التعديل.",
      deployTone: "done",
    },
    {
      id: "monitoring",
      label: "المراقبة",
      activity: "يراقب الإصدار",
      focusFile: "release",
      terminal: terminal.monitoring,
      gitBranch: "main",
      gitSummary: "مراقبة الإصدار الحالي",
      gitFiles: [],
      deployState: "تجري المراقبة",
      deployDetail: "الإصدار هو الحالي. لا يوجد فحص فاشل مسجّل.",
      deployTone: "watch",
    },
  ],
};

export const engineeringContent: Record<Locale, EngineeringContent> = {
  en: english,
  ar: arabic,
};
