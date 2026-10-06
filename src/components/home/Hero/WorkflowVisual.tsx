"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { HeroContent, HeroStage } from "@/content/hero";
import { cx } from "@/lib/cx";
import { StageIcon } from "./StageIcon";
import styles from "./WorkflowVisual.module.css";

type WorkflowVisualProps = {
  content: HeroContent;
};

const STEP_MS = 2800;

export function WorkflowVisual({ content }: WorkflowVisualProps) {
  const reduced = useReducedMotion();
  const motionOff = reduced !== false;
  const baseId = useId();
  const [index, setIndex] = useState(0);
  const [manualPause, setManualPause] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);
  const [pointerHeld, setPointerHeld] = useState(false);
  const [focusHeld, setFocusHeld] = useState(false);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const count = content.stages.length;
  const stage = content.stages[index];
  const userPaused = manualPause || (motionOff && !allowMotion);
  const held = pointerHeld || focusHeld;
  const advancing = !userPaused && !held;
  const progress = count > 1 ? index / (count - 1) : 1;

  useEffect(() => {
    if (!advancing) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % count);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [advancing, count]);

  function select(next: number, focus = false) {
    const bounded = (next + count) % count;
    setIndex(bounded);
    if (focus) tabs.current[bounded]?.focus();
  }

  function onTabsKeyDown(event: KeyboardEvent<HTMLDivElement>) {
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

  function togglePlayback() {
    if (userPaused) {
      setManualPause(false);
      setAllowMotion(true);
      return;
    }
    setManualPause(true);
  }

  function isStageTarget(target: EventTarget | null) {
    return (
      target instanceof Element &&
      (target.getAttribute("role") === "tab" || target.getAttribute("role") === "tabpanel")
    );
  }

  return (
    <div
      className={styles.visual}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setPointerHeld(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setPointerHeld(false);
      }}
      onFocus={(event) => {
        if (isStageTarget(event.target)) setFocusHeld(true);
      }}
      onBlur={(event) => {
        if (isStageTarget(event.relatedTarget) && event.currentTarget.contains(event.relatedTarget)) {
          return;
        }
        setFocusHeld(false);
      }}
    >
      <div className={styles.chrome}>
        <p className={styles.chromeLabel}>{content.visualLabel}</p>
        <div className={styles.chromeMeta}>
          <span className={cx(styles.live, !advancing && styles.livePaused)}>
            <span className={styles.liveDot} aria-hidden="true" />
            {advancing ? content.live : content.paused}
          </span>
          <span className={styles.count}>
            {String(index + 1).padStart(2, "0")}
            <span className={styles.countTotal} aria-hidden="true">
              {" "}
              / {String(count).padStart(2, "0")}
            </span>
          </span>
          <button
            type="button"
            className={styles.play}
            aria-pressed={userPaused}
            onClick={togglePlayback}
          >
            {userPaused ? content.play : content.pause}
          </button>
        </div>
      </div>

      <div className={styles.request}>
        <p className={styles.requestLabel}>{content.requestLabel}</p>
        <p className={styles.requestText}>{content.request}</p>
      </div>

      <div className={styles.body}>
        <div
          className={styles.steps}
          role="tablist"
          aria-label={content.stagesLabel}
          aria-orientation="vertical"
          onKeyDown={onTabsKeyDown}
          style={{ "--progress": String(progress) } as CSSProperties}
          data-advancing={advancing ? "true" : "false"}
        >
          <span className={styles.track} aria-hidden="true">
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
                className={cx(
                  styles.step,
                  selected && styles.current,
                  itemIndex < index && styles.done,
                )}
                onClick={() => select(itemIndex)}
              >
                <span className={styles.dot} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${stage.id}`}
          className={styles.detail}
        >
          {motionOff ? (
            <Detail stage={stage} index={index} />
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
              >
                <Detail stage={stage} index={index} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}

function Detail({ stage, index }: { stage: HeroStage; index: number }) {
  return (
    <div className={styles.detailInner}>
      <div className={styles.detailHead}>
        <span className={styles.detailIcon}>
          <StageIcon id={stage.id} />
        </span>
        <div className={styles.detailTitle}>
          <p className={styles.detailIndex}>{String(index + 1).padStart(2, "0")}</p>
          <h2 className={styles.detailHeading}>{stage.title}</h2>
        </div>
        <p className={styles.detailStatus}>{stage.status}</p>
      </div>
      <dl className={styles.lines}>
        {stage.lines.map((line) => (
          <div key={`${stage.id}-${line.label}`} className={styles.line}>
            <dt>{line.label}</dt>
            <dd>{line.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
