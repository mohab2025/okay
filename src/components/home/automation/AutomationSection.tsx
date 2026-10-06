import { useId } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { automationContent } from "@/content/automation";
import type { Locale } from "@/i18n/routing";
import { AutomationVisual } from "./AutomationVisual";
import styles from "./automation.module.css";

type AutomationSectionProps = {
  locale: Locale;
};

export function AutomationSection({ locale }: AutomationSectionProps) {
  const content = automationContent[locale];
  const titleId = useId();

  return (
    <section
      className={styles.section}
      id="custom-automation"
      data-reveal=""
      data-atmosphere="raised"
      aria-labelledby={titleId}
    >
      <PageContainer size="wide">
        <header className={styles.intro} data-reveal-text="">
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 id={titleId} className={styles.title}>
            <span className={styles.muted}>{content.titleLine1}</span>
            <span>{content.titleLine2}</span>
          </h2>
          <p className={styles.description}>{content.description}</p>
        </header>
        <AutomationVisual content={content} />
      </PageContainer>
    </section>
  );
}
