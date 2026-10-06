"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { IconArrow, IconClose, IconMenu } from "@/components/icons/Icons";
import { NavLink } from "@/components/layout/NavLink";
import { ButtonLink } from "@/components/primitives/Button/ButtonLink";
import { Container } from "@/components/primitives/Container/Container";
import { primaryNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { Link, usePathname } from "@/i18n/navigation";
import { cx } from "@/lib/cx";
import styles from "./SiteHeader.module.css";

const SCROLL_THRESHOLD = 8;

export function SiteHeader() {
  const pathname = usePathname();
  const nav = useTranslations("nav");
  const actions = useTranslations("actions");
  const header = useTranslations("header");
  const menuId = useId();
  const shellRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const open = openPath === pathname;

  function setOpen(next: boolean) {
    setOpenPath(next ? pathname : null);
  }

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const next = window.scrollY > SCROLL_THRESHOLD;
      setScrolled((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    frame = window.requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 80rem)");
    const onChange = () => {
      if (query.matches) setOpenPath(null);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (main) main.inert = open;
    if (footer instanceof HTMLElement) footer.inert = open;

    if (!open) {
      if (restoreFocus.current) {
        menuButtonRef.current?.focus();
        restoreFocus.current = false;
      }
      return () => {
        document.body.classList.remove("nav-open");
        if (main) main.inert = false;
        if (footer instanceof HTMLElement) footer.inert = false;
      };
    }

    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        restoreFocus.current = true;
        setOpenPath(null);
        return;
      }

      if (event.key !== "Tab") return;
      const shell = shellRef.current;
      if (!shell) return;

      const items = [...shell.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")]
        .filter((node) => node.getClientRects().length > 0);
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("nav-open");
      document.removeEventListener("keydown", onKeyDown);
      if (main) main.inert = false;
      if (footer instanceof HTMLElement) footer.inert = false;
    };
  }, [open]);

  function closeMenu(restore = false) {
    restoreFocus.current = restore;
    setOpen(false);
  }

  return (
    <div ref={shellRef} className={styles.shell}>
      <header className={styles.header}>
        <div
          className={cx(styles.surface, (scrolled || open) && styles.solid)}
        >
          <Container size="wide">
            <div className={styles.bar}>
              <Link
                href="/"
                className={styles.brand}
                aria-label={`${siteConfig.name}, ${header("home")}`}
              >
                <span className={styles.mark} aria-hidden="true" />
                <span className={styles.wordmark}>{siteConfig.name}</span>
              </Link>

              <nav className={styles.desktopNav} aria-label={nav("label")}>
                <ul className={styles.desktopList}>
                  {primaryNavigation.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        href={item.href}
                        className={styles.desktopLink}
                        currentClassName={styles.desktopCurrent}
                      >
                        {nav(item.id)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.tools}>
                <LanguageSwitcher />
                <NavLink
                  href="/sign-in"
                  className={styles.signIn}
                  currentClassName={styles.signInCurrent}
                >
                  {actions("signIn")}
                </NavLink>
                <ButtonLink
                  href="/get-started"
                  size="sm"
                  className={styles.getStarted}
                >
                  {actions("getStarted")}
                  <IconArrow />
                </ButtonLink>
                <button
                  ref={menuButtonRef}
                  type="button"
                  className={styles.menuButton}
                  aria-expanded={open}
                  aria-controls={menuId}
                  aria-label={open ? actions("closeMenu") : actions("openMenu")}
                  onClick={() => {
                    if (open) closeMenu(true);
                    else setOpen(true);
                  }}
                >
                  <span className={styles.menuIcon} data-open={open}>
                    <IconMenu />
                    <IconClose />
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <div
        ref={panelRef}
        id={menuId}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label={actions("menuLabel")}
        tabIndex={-1}
        inert={open ? undefined : true}
        data-open={open}
        className={styles.panel}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            setOpen(false);
          }
        }}
      >
        <Container size="wide">
          <nav aria-label={nav("label")}>
            <ul className={styles.menuList}>
              {primaryNavigation.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={item.href}
                    className={styles.menuLink}
                    currentClassName={styles.menuCurrent}
                  >
                    <span>{nav(item.id)}</span>
                    <IconArrow />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.menuActions}>
            <NavLink
              href="/sign-in"
              className={styles.menuSignIn}
              currentClassName={styles.menuCurrent}
            >
              {actions("signIn")}
            </NavLink>
            <ButtonLink href="/get-started">
              {actions("getStarted")}
              <IconArrow />
            </ButtonLink>
          </div>
        </Container>
      </div>
    </div>
  );
}
