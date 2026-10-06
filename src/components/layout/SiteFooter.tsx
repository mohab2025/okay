import { getTranslations } from "next-intl/server";
import { NavLink } from "@/components/layout/NavLink";
import { PageContainer } from "@/components/layout/PageContainer";
import { accountNavigation, primaryNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import styles from "./SiteFooter.module.css";

export async function SiteFooter() {
  const footer = await getTranslations("footer");
  const nav = await getTranslations("nav");
  const actions = await getTranslations("actions");

  return (
    <footer className={styles.footer} data-atmosphere="horizon" aria-label={footer("label")}>
      <PageContainer>
        <div className={styles.grid}>
          <div className={styles.identity}>
            <p className={styles.brand}>{siteConfig.name}</p>
            <p className={styles.summary}>{footer("summary")}</p>
          </div>
          <nav aria-label={footer("navLabel")}>
            <ul className={styles.links}>
              {primaryNavigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={item.href}
                    className={styles.link}
                    currentClassName={styles.current}
                  >
                    {nav(item.id)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={actions("accountLabel")}>
            <ul className={styles.account}>
              {accountNavigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={item.href}
                    className={styles.link}
                    currentClassName={styles.current}
                  >
                    {actions(item.id)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className={styles.legal}>
          <span className={styles.mark} aria-hidden="true">
            © {siteConfig.copyrightYear} {siteConfig.name}
          </span>
          <span>{footer("rights")}</span>
        </p>
      </PageContainer>
    </footer>
  );
}
