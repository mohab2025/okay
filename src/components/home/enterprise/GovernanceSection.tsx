import { governanceContent } from "@/content/governance";
import type { Locale } from "@/i18n/routing";
import { EditorialSection } from "./EditorialSection";
import styles from "./governance.module.css";

type GovernanceSectionProps = {
  locale: Locale;
  heading?: "h1" | "h2";
};

export function GovernanceSection({ locale, heading = "h2" }: GovernanceSectionProps) {
  const content = governanceContent[locale];

  return (
    <EditorialSection
      id="governance"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      heading={heading}
      atmosphere="ink"
    >
      <div className={styles.ledger}>
        {content.groups.map((group) => (
          <section key={group.id} className={styles.group} aria-labelledby={`governance-${group.id}`}>
            <h3 id={`governance-${group.id}`} className={styles.groupTitle}>
              {group.title}
            </h3>
            <dl className={styles.list}>
              {group.controls.map((control) => (
                <div key={control.id} className={styles.control}>
                  <dt className={styles.name}>{control.name}</dt>
                  <dd className={styles.detail}>{control.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </EditorialSection>
  );
}
