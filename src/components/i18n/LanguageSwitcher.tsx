"use client";

import { Fragment } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cx } from "@/lib/cx";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("language");

  return (
    <nav className={styles.switcher} dir="ltr" aria-label={t("label")}>
      {routing.locales.map((item, index) => {
        const isCurrent = item === locale;

        return (
          <Fragment key={item}>
            {index > 0 ? (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            ) : null}
            <Link
              href={pathname}
              locale={item}
              hrefLang={item}
              lang={item}
              aria-current={isCurrent ? "true" : undefined}
              aria-label={t(item)}
              className={cx(styles.link, isCurrent && styles.current)}
            >
              {t(`short.${item as Locale}`)}
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
}
