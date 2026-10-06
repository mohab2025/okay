import type { StoryContent } from "@/content/story";
import { Section } from "@/components/primitives/Section/Section";
import { FlowChain, FlowJoin, RecordList } from "./Flow";
import { StoryIcon } from "./icons";
import { MotionFrame } from "./MotionFrame";
import styles from "./story.module.css";

type UnstructuredDataProps = {
  content: StoryContent;
};

export function UnstructuredData({ content }: UnstructuredDataProps) {
  const section = content.structure;

  return (
    <Section
      id="unstructured-data"
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      width="wide"
      divider
    >
      <MotionFrame label={section.diagramLabel} pauseLabel={content.pause} playLabel={content.play}>
        <div className={styles.split}>
          <section className={styles.panel} aria-label={section.sourcesLabel}>
            <h3 className={styles.panelLabel}>{section.sourcesLabel}</h3>
            <ul className={styles.sources}>
              {section.fragments.map((fragment) => (
                <li key={fragment.id} className={styles.source} data-kind={fragment.kind}>
                  <header className={styles.sourceHead}>
                    <span className={styles.signalIcon}>
                      <StoryIcon id={fragment.icon} />
                    </span>
                    <span>{fragment.label}</span>
                    <span className={styles.sourceMeta}>{fragment.meta}</span>
                  </header>
                  {fragment.kind === "voice" ? (
                    <span className={styles.bars} aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </span>
                  ) : null}
                  <p className={styles.sample}>{fragment.text}</p>
                </li>
              ))}
            </ul>
          </section>
          <FlowJoin breakAt="desk" delay="0.4s" />
          <div className={styles.resultStack}>
            <section className={styles.panel} aria-label={section.pipelineLabel}>
              <h3 className={styles.panelLabel}>{section.pipelineLabel}</h3>
              <FlowChain steps={section.pipeline} tone="active" />
            </section>
            <FlowJoin delay="1.2s" />
            <section className={styles.panel} aria-label={section.recordLabel}>
              <header className={styles.panelHead}>
                <h3 className={styles.panelLabel}>{section.recordLabel}</h3>
                <p className={styles.example}>{section.exampleLabel}</p>
              </header>
              <RecordList rows={section.record} />
            </section>
            <div className={styles.next}>
              <p className={styles.nextLabel}>{section.nextLabel}</p>
              <p className={styles.nextAction}>{section.nextAction}</p>
            </div>
          </div>
        </div>
      </MotionFrame>
    </Section>
  );
}
