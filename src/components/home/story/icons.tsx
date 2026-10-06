import type { ReactNode } from "react";

export const storyIconIds = [
  "input",
  "rules",
  "workflow",
  "output",
  "question",
  "answer",
  "intent",
  "understand",
  "reason",
  "act",
  "verify",
  "result",
  "voice",
  "chat",
  "email",
  "whatsapp",
  "document",
  "image",
  "api",
  "request",
  "structure",
  "execute",
  "crm",
  "erp",
  "database",
  "calendar",
  "slack",
  "internal",
  "pdf",
  "transcript",
  "extract",
  "validate",
] as const;

export type StoryIconId = (typeof storyIconIds)[number];

type IconProps = {
  id: StoryIconId;
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<StoryIconId, ReactNode> = {
  input: <path {...stroke} d="M3 8h10M9.5 4.5L13 8l-3.5 3.5" />,
  rules: <path {...stroke} d="M3 4.5h10M3 8h7M3 11.5h10" />,
  workflow: (
    <>
      <circle {...stroke} cx="4" cy="8" r="1.4" />
      <circle {...stroke} cx="12" cy="8" r="1.4" />
      <path {...stroke} d="M5.4 8h5.2" />
    </>
  ),
  output: <path {...stroke} d="M3 8h7M8 5l3 3-3 3M3 4.5v7" />,
  question: <path {...stroke} d="M3.5 4.5h9v6h-5l-2 2v-2h-2z" />,
  answer: <path {...stroke} d="M3.5 4.5h9v6h-5l-2 2v-2h-2zM5.5 7h5" />,
  intent: (
    <>
      <circle {...stroke} cx="8" cy="8" r="4.5" />
      <circle {...stroke} cx="8" cy="8" r="1.2" />
    </>
  ),
  understand: (
    <>
      <circle {...stroke} cx="8" cy="5.5" r="2" />
      <path {...stroke} d="M3.5 13c.6-2.2 2.3-3.5 4.5-3.5s3.9 1.3 4.5 3.5" />
    </>
  ),
  reason: <path {...stroke} d="M3 4.5h4.5L12 11.5M7.5 4.5L12 4.5M7.5 11.5H3" />,
  act: <path {...stroke} d="M6 3.5v9l6-4.5-6-4.5z" />,
  verify: (
    <>
      <circle {...stroke} cx="8" cy="8" r="4.5" />
      <path {...stroke} d="M5.7 8.1l1.6 1.6 3-3.1" />
    </>
  ),
  result: <path {...stroke} d="M3.5 8.4l3 3 6-6.4" />,
  voice: <path {...stroke} d="M5 7v2M8 4.5v7M11 6v4M14 7.5v1" />,
  chat: <path {...stroke} d="M2.5 4h11v6.5H7.5L5 13V10.5H2.5z" />,
  email: <path {...stroke} d="M2.5 4.5h11v7h-11zM2.5 4.5l5.5 4 5.5-4" />,
  whatsapp: <path {...stroke} d="M3 12.5l1-2.2A4.8 4.8 0 1 1 8 12.2L3 12.5z" />,
  document: <path {...stroke} d="M4.5 2.5h5l3 3v8h-8zM9.5 2.5V5.5H12.5" />,
  image: (
    <>
      <path {...stroke} d="M2.5 3.5h11v9h-11z" />
      <path {...stroke} d="M2.5 10l3-2.5 2 1.5 2.2-2 3.3 3" />
    </>
  ),
  api: <path {...stroke} d="M6 4L2.5 8 6 12M10 4l3.5 4L10 12" />,
  request: <path {...stroke} d="M3 3.5h10v3l-1.5 1.5V12.5h-7V8L3 6.5z" />,
  structure: <path {...stroke} d="M3 3.5h10v9H3zM3 6.5h10M7 6.5V12.5" />,
  execute: <path {...stroke} d="M5.5 3.2v9.6L12.2 8 5.5 3.2z" />,
  crm: (
    <>
      <circle {...stroke} cx="6" cy="6" r="1.6" />
      <circle {...stroke} cx="11" cy="6.5" r="1.3" />
      <path {...stroke} d="M3.2 12c.4-1.6 1.6-2.4 2.8-2.4S8.4 10.4 8.8 12M9.2 12c.2-1.1 1-1.8 1.8-1.8 1 0 1.6.7 1.9 1.8" />
    </>
  ),
  erp: <path {...stroke} d="M3 3.5h4v4H3zM9 3.5h4v4H9zM3 9h4v3.5H3zM9 9h4v3.5H9z" />,
  database: <path {...stroke} d="M4 4.5c0-1 1.8-1.8 4-1.8s4 .8 4 1.8v7c0 1-1.8 1.8-4 1.8s-4-.8-4-1.8zM4 7.5c0 1 1.8 1.8 4 1.8s4-.8 4-1.8" />,
  calendar: <path {...stroke} d="M3.5 4.5h9v8h-9zM3.5 7h9M6 3v2.5M10 3v2.5" />,
  slack: <path {...stroke} d="M6 2.5v4M6 9.5v4M10 2.5v4M10 9.5v4M2.5 6h4M9.5 6h4M2.5 10h4M9.5 10h4" />,
  internal: <path {...stroke} d="M3 13.5h10M4.5 13.5V6L8 3.5 11.5 6v7.5M7 13.5v-3h2v3" />,
  pdf: <path {...stroke} d="M4.5 2.5h5l3 3v8h-8zM6 9.5h4M6 7h3" />,
  transcript: <path {...stroke} d="M3 4h10M3 7.5h8M3 11h6" />,
  extract: <path {...stroke} d="M4 3.5h5l2.5 2.5V8M4 3.5V12.5h5M9 10.5l2.5 2 2.5-2M11.5 12.5v-4" />,
  validate: <path {...stroke} d="M3 8.2l2.2 2.2L9 6.5M9.5 9.5h4M9.5 12h3" />,
};

export function StoryIcon({ id }: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      {paths[id]}
    </svg>
  );
}
