"use client";

import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import {
  engineeringPaneIds,
  type EngineeringContent,
  type EngineeringFile,
  type EngineeringPaneId,
} from "@/content/engineering";
import { cx } from "@/lib/cx";
import styles from "./engineering.module.css";

type EngineeringConsoleProps = {
  content: EngineeringContent;
};

type TreeNode = {
  name: string;
  path: string;
  file?: EngineeringFile;
  children: TreeNode[];
};

export function EngineeringConsole({ content }: EngineeringConsoleProps) {
  const baseId = useId();
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const logRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [lock, setLock] = useState<string | null>(null);
  const [pane, setPane] = useState<EngineeringPaneId>("editor");

  const count = content.stages.length;
  const last = count - 1;
  const stage = content.stages[index] ?? content.stages[0];
  const progress = last > 0 ? index / last : 1;

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      const current = indexRef.current;
      if (current >= last) {
        setRunning(false);
        return;
      }
      const next = current + 1;
      setLock(null);
      setIndex(next);
      if (next >= last) setRunning(false);
    }, 1400);
    return () => window.clearInterval(timer);
  }, [running, last]);

  useEffect(() => {
    const node = logRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [index]);

  if (!stage) return null;

  const visibleFiles = content.files.filter((file) => file.at <= index);
  const openFile =
    visibleFiles.find((file) => file.id === (lock ?? stage.focusFile)) ??
    visibleFiles[visibleFiles.length - 1];
  const log = content.stages.slice(0, index + 1).flatMap((item) => item.terminal);
  const testsReady = index >= 3;

  function go(next: number, focus = false) {
    const bounded = Math.min(last, Math.max(0, next));
    setRunning(false);
    setLock(null);
    setIndex(bounded);
    if (focus) tabs.current[bounded]?.focus();
  }

  function onStageKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      go(index + 1, true);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      go(index - 1, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      go(0, true);
    } else if (event.key === "End") {
      event.preventDefault();
      go(last, true);
    }
  }

  function toggleRun() {
    if (running) {
      setRunning(false);
      return;
    }
    if (index >= last) go(0);
    setRunning(true);
  }

  return (
    <div className={styles.console}>
      <div className={styles.chrome}>
        <p className={styles.chromeMeta}>
          <span className={styles.example}>{content.example}</span>
          <span className={styles.branch} dir="ltr">
            {stage.gitBranch}
          </span>
        </p>
        <p className={styles.activityLive} aria-live="polite">
          {stage.activity}
        </p>
        <button
          type="button"
          className={styles.run}
          aria-pressed={running}
          onClick={toggleRun}
        >
          {running ? content.pause : content.run}
        </button>
      </div>

      <div
        className={styles.stages}
        role="tablist"
        aria-label={content.stagesLabel}
        aria-orientation="horizontal"
        onKeyDown={onStageKeyDown}
        style={{ "--progress": String(progress) } as CSSProperties}
      >
        <span className={styles.track} aria-hidden="true">
          <span className={styles.fill} />
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
              className={cx(styles.stage, selected && styles.stageCurrent)}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => go(itemIndex)}
            >
              <span className={styles.stageIndex}>{String(itemIndex + 1).padStart(2, "0")}</span>
              {item.label}
            </button>
          );
        })}
      </div>

      <div className={styles.panes} role="group" aria-label={content.panesLabel}>
        {engineeringPaneIds.map((id) => (
          <button
            key={id}
            type="button"
            className={styles.pane}
            aria-pressed={pane === id}
            onClick={() => setPane(id)}
          >
            {content.panes[id]}
          </button>
        ))}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${stage.id}`}
        className={styles.workspace}
        data-pane={pane}
      >
        <section className={styles.region} data-region="files" aria-label={content.panes.files}>
          <h3 className={styles.panelTitle}>{content.panes.files}</h3>
          <div className={styles.tree} dir="ltr">
            <FileTree
              nodes={buildTree(visibleFiles)}
              openId={openFile?.id}
              onOpen={(id) => setLock(id)}
            />
          </div>
        </section>

        <section className={styles.region} data-region="editor" aria-label={content.panes.editor}>
          <h3 className={styles.panelTitle}>
            <span>{content.panes.editor}</span>
            {openFile ? (
              <span className={styles.filePath} dir="ltr">
                {openFile.path}
              </span>
            ) : null}
          </h3>
          <div className={styles.editor} dir="ltr" key={openFile?.id ?? "empty"}>
            {openFile ? <Editor body={openFile.body} /> : null}
          </div>
        </section>

        <section className={styles.region} data-region="terminal" aria-label={content.panes.terminal}>
          <h3 className={styles.panelTitle}>{content.panes.terminal}</h3>
          <div className={styles.terminal} dir="ltr" ref={logRef}>
            {log.map((line, lineIndex) => (
              <p key={`${line}-${lineIndex}`} className={cx(styles.logLine, line.startsWith("$") && styles.command)}>
                {line}
              </p>
            ))}
          </div>
        </section>

        <div className={styles.side}>
          <section className={styles.region} data-region="activity" aria-label={content.panes.activity}>
            <h3 className={styles.panelTitle}>{content.panes.activity}</h3>
            <p className={styles.received}>{content.received}</p>
            <ul className={styles.checks}>
              {content.checks.map((check) => {
                const done = index >= check.at;
                return (
                  <li key={check.id} className={styles.check} data-done={done ? "true" : "false"}>
                    <span className={styles.mark} aria-hidden="true">
                      {done ? "✓" : "·"}
                    </span>
                    {check.label}
                  </li>
                );
              })}
            </ul>
          </section>

          <section className={styles.region} data-region="tests" aria-label={content.panes.tests}>
            <h3 className={styles.panelTitle}>
              <span>{content.panes.tests}</span>
              <span>{testsReady ? content.testsPassed : content.testsWaiting}</span>
            </h3>
            {testsReady ? (
              <ul className={styles.results} dir="ltr">
                {content.testNames.map((name) => (
                  <li key={name}>
                    <span aria-hidden="true">✓</span>
                    {name}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>

          <section className={styles.region} data-region="git" aria-label={content.panes.git}>
            <h3 className={styles.panelTitle}>
              <span>{content.panes.git}</span>
              <span dir="ltr">{stage.gitBranch}</span>
            </h3>
            <p className={styles.gitSummary}>{stage.gitSummary}</p>
            {stage.gitFiles.length > 0 ? (
              <ul className={styles.gitFiles} dir="ltr">
                {stage.gitFiles.map((file) => (
                  <li key={file}>{file}</li>
                ))}
              </ul>
            ) : null}
          </section>

          <section className={styles.region} data-region="deploy" aria-label={content.panes.deploy}>
            <h3 className={styles.panelTitle}>{content.panes.deploy}</h3>
            <p className={styles.deploy} data-tone={stage.deployTone}>
              <span className={styles.deployDot} aria-hidden="true" />
              <span>
                <span className={styles.deployState}>{stage.deployState}</span>
                <span className={styles.deployDetail}>{stage.deployDetail}</span>
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function Editor({ body }: { body: string }) {
  const lines = body.split("\n");
  return (
    <ol className={styles.lines}>
      {lines.map((line, lineIndex) => {
        const comment = /^\s*(#|\/\/)/.test(line);
        return (
          <li key={lineIndex}>
            <span className={styles.ln}>{lineIndex + 1}</span>
            <code className={comment ? styles.comment : undefined}>{line || " "}</code>
          </li>
        );
      })}
    </ol>
  );
}

function FileTree({
  nodes,
  openId,
  onOpen,
  depth = 0,
}: {
  nodes: TreeNode[];
  openId?: string;
  onOpen: (id: string) => void;
  depth?: number;
}) {
  return (
    <ul className={styles.treeList}>
      {nodes.map((node) => (
        <li key={node.path}>
          {node.file ? (
            <button
              type="button"
              className={styles.treeFile}
              style={{ paddingInlineStart: `${0.75 + depth * 0.85}rem` }}
              aria-current={node.file.id === openId ? "true" : undefined}
              onClick={() => onOpen(node.file?.id ?? node.path)}
            >
              {node.name}
            </button>
          ) : (
            <span className={styles.treeDir} style={{ paddingInlineStart: `${0.75 + depth * 0.85}rem` }}>
              {node.name}
            </span>
          )}
          {node.children.length > 0 ? (
            <FileTree nodes={node.children} openId={openId} onOpen={onOpen} depth={depth + 1} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function buildTree(files: EngineeringFile[]): TreeNode[] {
  const roots: TreeNode[] = [];
  for (const file of files) {
    const parts = file.path.split("/");
    let level = roots;
    let acc = "";
    parts.forEach((part, partIndex) => {
      acc = acc ? `${acc}/${part}` : part;
      let node = level.find((item) => item.name === part);
      if (!node) {
        node = { name: part, path: acc, children: [] };
        level.push(node);
      }
      if (partIndex === parts.length - 1) node.file = file;
      level = node.children;
    });
  }
  return roots;
}
