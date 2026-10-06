import type { Industry } from "@/content/industries";
import { WorkPath } from "@/components/home/work/WorkPath";
import styles from "./industries.module.css";

type IndustryCardProps = {
  industry: Industry;
  requestLabel: string;
  workflowLabel: string;
  resultLabel: string;
};

export function IndustryCard({
  industry,
  requestLabel,
  workflowLabel,
  resultLabel,
}: IndustryCardProps) {
  return (
    <article id={`industry-${industry.id}`} className={styles.card}>
      <header className={styles.head}>
        <h3 className={styles.name}>{industry.name}</h3>
      </header>
      <div className={styles.request}>
        <p className={styles.label}>{requestLabel}</p>
        <p className={styles.copy}>{industry.request}</p>
      </div>
      <WorkPath steps={industry.workflow} label={workflowLabel} />
      <div className={styles.result}>
        <p className={styles.label}>{resultLabel}</p>
        <p className={styles.copy}>{industry.result}</p>
      </div>
    </article>
  );
}
