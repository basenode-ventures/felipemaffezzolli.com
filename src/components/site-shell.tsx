"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { CommandPalette } from "@/components/command-palette";
import { SITE, navItems } from "@/lib/site";
import styles from "./site-shell.module.css";

type SiteShellProps = {
  children: React.ReactNode;
};

function isMacPlatform(): boolean {
  return /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent);
}

function subscribeToNothing() {
  return () => undefined;
}

function useModKeyLabel(): string {
  return useSyncExternalStore(
    subscribeToNothing,
    () => (isMacPlatform() ? "⌘" : "Ctrl"),
    () => "⌘",
  );
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const modKey = useModKeyLabel();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isModK =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (!isModK) return;
      event.preventDefault();
      setOpen((current) => !current);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.glow} aria-hidden="true" />

      <header className={styles.header}>
        <Link
          href="/"
          className={styles.brand}
          aria-label={`${SITE.name} — início`}
        >
          <span className={styles.monogram}>{SITE.shortName}</span>
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? styles.navLinkActive : styles.navLink}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.commandButton}
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="command-palette"
        >
          <span className={styles.commandLabel}>Buscar</span>
          <kbd className={styles.kbd}>
            <span>{modKey}</span>
            <span>K</span>
          </kbd>
        </button>
      </header>

      <div className={styles.content}>{children}</div>

      <CommandPalette open={open} onOpenChange={setOpen} />
    </div>
  );
}
