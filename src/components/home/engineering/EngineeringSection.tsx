import { useId } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { engineeringContent } from "@/content/engineering";
import type { Locale } from "@/i18n/routing";
import { EngineeringConsole } from "./EngineeringConsole";
import styles from "./engineering.module.css";

type EngineeringSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function EngineeringSection({ locale, heading = "h2" }: EngineeringSectionProps) {
  const content = engineeringContent[locale];
  const titleId = useId();
  const Title = heading;

  return (
    <section
      className={styles.section}
      id="software-engineering"
      data-reveal=""
      data-atmosphere="ink"
      aria-labelledby={titleId}
    >
      <PageContainer size="wide">
        <header className={styles.intro} data-reveal-text="">
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <Title id={titleId} className={styles.title}>
            {content.title}
          </Title>
          <p className={styles.description}>{content.description}</p>
        </header>
        <EngineeringConsole content={content} />
      </PageContainer>
    </section>
  );
}
