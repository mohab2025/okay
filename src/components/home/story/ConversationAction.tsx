import type { StoryContent } from "@/content/story";
import { Section } from "@/components/primitives/Section/Section";
import { FlowChain, FlowJoin, RecordList, SignalGrid } from "./Flow";
import { MotionFrame } from "./MotionFrame";
import styles from "./story.module.css";

type ConversationActionProps = {
  content: StoryContent;
};

export function ConversationAction({ content }: ConversationActionProps) {
  const section = content.conversation;

  return (
    <Section
      id="conversation-action"
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      width="wide"
      divider
      atmosphere="raised"
    >
      <MotionFrame label={section.diagramLabel} pauseLabel={content.pause} playLabel={content.play}>
        <div className={styles.board}>
          <section className={styles.panel} aria-label={section.inputsLabel}>
            <h3 className={styles.panelLabel}>{section.inputsLabel}</h3>
            <SignalGrid items={section.inputs} />
          </section>
          <FlowJoin breakAt="wide" delay="0.2s" />
          <section className={styles.panel} aria-label={section.engineLabel}>
            <h3 className={styles.panelLabel}>{section.engineLabel}</h3>
            <FlowChain steps={section.engine} tone="active" layout="stack" />
          </section>
          <FlowJoin breakAt="wide" delay="1.6s" />
          <section className={styles.panel} aria-label={section.systemsLabel}>
            <h3 className={styles.panelLabel}>{section.systemsLabel}</h3>
            <SignalGrid items={section.systems} />
          </section>
          <FlowJoin breakAt="wide" delay="3s" />
          <section className={styles.panel} aria-label={section.resultLabel}>
            <header className={styles.panelHead}>
              <h3 className={styles.panelLabel}>{section.resultLabel}</h3>
              <p className={styles.example}>{section.exampleLabel}</p>
            </header>
            <p className={styles.resultStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              {section.resultStatus}
            </p>
            <RecordList rows={section.result} />
          </section>
        </div>
      </MotionFrame>
    </Section>
  );
}
