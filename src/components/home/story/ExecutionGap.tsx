import type { StoryContent } from "@/content/story";
import { Section } from "@/components/primitives/Section/Section";
import { FlowChain } from "./Flow";
import { MotionFrame } from "./MotionFrame";
import styles from "./story.module.css";

type ExecutionGapProps = {
  content: StoryContent;
};

export function ExecutionGap({ content }: ExecutionGapProps) {
  const section = content.gap;

  return (
    <Section
      id="execution-gap"
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
      width="wide"
      divider
      atmosphere="ink"
    >
      <MotionFrame label={section.diagramLabel} pauseLabel={content.pause} playLabel={content.play}>
        <div className={styles.lanes}>
          {section.lanes.map((lane) => (
            <article key={lane.id} className={styles.lane} data-tone={lane.tone}>
              <header className={styles.laneHead}>
                <h3 className={styles.laneTitle}>{lane.title}</h3>
                <p className={styles.pill}>{lane.status}</p>
              </header>
              <FlowChain steps={lane.steps} tone={lane.tone} />
              <p className={styles.laneNote}>{lane.note}</p>
            </article>
          ))}
        </div>
      </MotionFrame>
    </Section>
  );
}
