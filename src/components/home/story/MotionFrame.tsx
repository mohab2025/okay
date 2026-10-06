"use client";

import { useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./story.module.css";

type MotionFrameProps = {
  label: string;
  pauseLabel: string;
  playLabel: string;
  children: ReactNode;
};

export function MotionFrame({ label, pauseLabel, playLabel, children }: MotionFrameProps) {
  const reduced = useReducedMotion();
  const motionOff = reduced !== false;
  const [manualPause, setManualPause] = useState(false);
  const [allowMotion, setAllowMotion] = useState(false);
  const paused = manualPause || (motionOff && !allowMotion);

  function toggle() {
    if (paused) {
      setManualPause(false);
      setAllowMotion(true);
      return;
    }
    setManualPause(true);
  }

  return (
    <div className={styles.frame} data-motion={paused ? "off" : "on"}>
      <div className={styles.frameBar}>
        <p className={styles.frameLabel}>{label}</p>
        <button type="button" className={styles.play} aria-pressed={paused} onClick={toggle}>
          {paused ? playLabel : pauseLabel}
        </button>
      </div>
      {children}
    </div>
  );
}
