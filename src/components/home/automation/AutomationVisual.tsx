"use client";

import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import {
  defaultWorkflowMode,
  type AutomationContent,
  type FlowStep,
  type WorkflowMode,
} from "@/content/automation";
import { cx } from "@/lib/cx";
import styles from "./automation.module.css";

type AutomationVisualProps = {
  content: AutomationContent;
};

export function AutomationVisual({ content }: AutomationVisualProps) {
  const baseId = useId();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<WorkflowMode>(defaultWorkflowMode(content.stages[0].focus));
  const count = content.stages.length;
  const stage = content.stages[index];
  const progress = count > 1 ? index / (count - 1) : 1;

  function select(next: number, focus = false) {
    const bounded = (next + count) % count;
    setIndex(bounded);
    setMode(defaultWorkflowMode(content.stages[bounded].focus));
    if (focus) tabs.current[bounded]?.focus();
  }

  function onRailKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      select(index + 1, true);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      select(index - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      select(count - 1, true);
    }
  }

  return (
    <div className={styles.visual}>
      <div
        className={styles.rail}
        role="tablist"
        aria-label={content.processLabel}
        aria-orientation="vertical"
        onKeyDown={onRailKeyDown}
        style={{ "--progress": String(progress) } as CSSProperties}
      >
        <span className={styles.railLine} aria-hidden="true">
          <span className={styles.fill} />
          <span className={styles.cursor} />
        </span>
        {content.stages.map((item, itemIndex) => {
          const selected = itemIndex === index;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabs.current[itemIndex] = node;
              }}
              id={`${baseId}-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              className={cx(styles.step, selected && styles.current, itemIndex < index && styles.done)}
              onClick={() => select(itemIndex)}
            >
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.stepIndex}>{String(itemIndex + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${stage.id}`}
        className={styles.board}
      >
        <div className={styles.boardHead}>
          <p className={styles.kicker}>
            <span>{content.exampleLabel}</span>
            <span className={styles.kickerIndex}>{String(index + 1).padStart(2, "0")}</span>
          </p>
          <h3 className={styles.stageTitle}>{stage.label}</h3>
          <p className={styles.summary}>{stage.summary}</p>
        </div>

        <div className={styles.request}>
          <p className={styles.requestLabel}>{content.requestLabel}</p>
          <p className={styles.requestText}>{content.request}</p>
        </div>

        <div className={styles.switch} role="group" aria-label={content.viewLabel}>
          <p className={styles.compare}>{content.compare}</p>
          <div className={styles.switchButtons}>
            <ModeButton
              pressed={mode === "manual"}
              onClick={() => setMode("manual")}
              label={content.manualLabel}
            />
            <ModeButton
              pressed={mode === "autonomous"}
              onClick={() => setMode("autonomous")}
              label={content.autonomousLabel}
            />
          </div>
        </div>

        <div className={styles.tracks}>
          <FlowTrack
            title={content.manualLabel}
            steps={content.manual}
            active={mode === "manual"}
            tone="manual"
          />
          <FlowTrack
            title={content.autonomousLabel}
            steps={content.autonomous}
            active={mode === "autonomous"}
            tone="autonomous"
          />
        </div>
      </div>
    </div>
  );
}

function ModeButton({
  pressed,
  onClick,
  label,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button type="button" className={styles.mode} aria-pressed={pressed} onClick={onClick}>
      {label}
    </button>
  );
}

function FlowTrack({
  title,
  steps,
  active,
  tone,
}: {
  title: string;
  steps: FlowStep[];
  active: boolean;
  tone: WorkflowMode;
}) {
  return (
    <section className={styles.track} data-active={active} data-tone={tone} aria-label={title}>
      <h4 className={styles.trackTitle}>{title}</h4>
      <ol className={styles.flow}>
        {steps.map((step, stepIndex) => (
          <li key={step.id} className={styles.flowItem}>
            {stepIndex > 0 ? <span className={styles.join} aria-hidden="true" /> : null}
            <div className={styles.flowBody}>
              <p className={styles.flowLabel}>{step.label}</p>
              <p className={styles.flowDetail}>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
