import type { CSSProperties } from "react";
import type { StoryRow, StorySignal, StoryStep } from "@/content/story";
import { cx } from "@/lib/cx";
import { StoryIcon } from "./icons";
import styles from "./story.module.css";

type BreakAt = "none" | "desk" | "wide";

export function FlowJoin({
  breakAt = "none",
  delay = "0s",
  placement = "board",
}: {
  breakAt?: BreakAt;
  delay?: string;
  placement?: "chain" | "board";
}) {
  return (
    <span
      className={cx(styles.joinAxis, placement === "chain" && styles.joinChain)}
      data-break={breakAt === "none" ? undefined : breakAt}
      style={{ "--delay": delay } as CSSProperties}
      aria-hidden="true"
    >
      <span className={styles.packet} />
    </span>
  );
}

export function FlowChain({
  steps,
  tone = "muted",
  layout = "adaptive",
}: {
  steps: StoryStep[];
  tone?: "muted" | "active";
  layout?: "adaptive" | "stack";
}) {
  const breakAt: BreakAt = layout === "stack" ? "none" : "desk";

  return (
    <ol
      className={cx(styles.chain, layout === "stack" ? styles.chainStack : styles.chainAdaptive)}
      data-tone={tone}
    >
      {steps.map((step, index) => (
        <li key={step.id} className={styles.chainItem}>
          {index > 0 ? (
            <span className={styles.joinSlot} aria-hidden="true">
              <FlowJoin placement="chain" breakAt={breakAt} delay={`${(index - 1) * 0.35}s`} />
            </span>
          ) : null}
          <span className={styles.node}>
            <span className={styles.nodeIcon}>
              <StoryIcon id={step.icon} />
            </span>
            <span className={styles.nodeLabel}>{step.label}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function SignalGrid({ items }: { items: StorySignal[] }) {
  return (
    <ul className={styles.signals}>
      {items.map((item) => (
        <li key={item.id} className={styles.signal}>
          <span className={styles.signalIcon}>
            <StoryIcon id={item.icon} />
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export function RecordList({ rows }: { rows: StoryRow[] }) {
  return (
    <dl className={styles.record}>
      {rows.map((row) => (
        <div key={row.label} className={styles.recordRow}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
