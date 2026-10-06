import { deploymentContent } from "@/content/deployment";
import type { Locale } from "@/i18n/routing";
import { EditorialSection } from "./EditorialSection";
import styles from "./deployment.module.css";

type DeploymentSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function DeploymentSection({ locale, heading = "h2" }: DeploymentSectionProps) {
  const content = deploymentContent[locale];

  return (
    <EditorialSection
      id="deployment"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      heading={heading}
      atmosphere="raised"
    >
      <ol className={styles.index}>
        {content.modes.map((mode, index) => (
          <li key={mode.id} className={styles.row}>
            <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
            <h3 className={styles.name}>{mode.name}</h3>
            <p className={styles.detail}>{mode.detail}</p>
          </li>
        ))}
      </ol>
    </EditorialSection>
  );
}
