import type { Solution } from "@/content/solutions";
import { WorkPath } from "@/components/home/work/WorkPath";
import styles from "./solutions.module.css";

type SolutionCardProps = {
  solution: Solution;
  problemLabel: string;
  workflowLabel: string;
  outcomeLabel: string;
};

export function SolutionCard({
  solution,
  problemLabel,
  workflowLabel,
  outcomeLabel,
}: SolutionCardProps) {
  return (
    <article id={`solution-${solution.id}`} className={styles.card}>
      <header className={styles.head}>
        <h3 className={styles.name}>{solution.name}</h3>
      </header>
      <div className={styles.problem}>
        <p className={styles.label}>{problemLabel}</p>
        <p className={styles.copy}>{solution.problem}</p>
      </div>
      <WorkPath steps={solution.workflow} label={workflowLabel} />
      <div className={styles.outcome}>
        <p className={styles.label}>{outcomeLabel}</p>
        <p className={styles.copy}>{solution.outcome}</p>
      </div>
    </article>
  );
}
