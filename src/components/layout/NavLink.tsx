"use client";

import type { ReactNode } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { cx } from "@/lib/cx";

type NavLinkProps = {
  href: string;
  className?: string;
  currentClassName?: string;
  children: ReactNode;
};

export function NavLink({
  href,
  className,
  currentClassName,
  children,
}: NavLinkProps) {
  const pathname = usePathname();
  const current = normalize(pathname) === normalize(href);

  return (
    <Link
      href={href}
      className={cx(className, current && currentClassName)}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path;
}
