import { IconArrow } from "@/components/icons/Icons";
import styles from "./WorkPath.module.css";

type WorkPathProps = {
  steps: string[];
  label: string;
};

export function WorkPath({ steps, label }: WorkPathProps) {
  return (
    <div className={styles.block}>
      <p className={styles.label}>{label}</p>
      <ol className={styles.path}>
        {steps.map((step, index) => (
          <li key={`${step}-${index}`} className={styles.item}>
            {index > 0 ? <IconArrow className={styles.arrow} /> : null}
            <span className={styles.step}>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
