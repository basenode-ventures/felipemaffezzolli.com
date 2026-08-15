"use client";

import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { contactLinks, navItems } from "@/lib/site";
import styles from "./command-palette.module.css";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type CommandItem = {
  id: string;
  label: string;
  hint: string;
  group: string;
  run: () => void;
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const close = useCallback(() => {
    onOpenChange(false);
    setQuery("");
    setActiveIndex(0);
  }, [onOpenChange]);

  const items = useMemo<CommandItem[]>(() => {
    const navigation: CommandItem[] = [
      {
        id: "home",
        label: "Início",
        hint: "Página principal",
        group: "Navegação",
        run: () => router.push("/"),
      },
      ...navItems.map((item) => ({
        id: item.href,
        label: item.label,
        hint: item.description,
        group: "Navegação",
        run: () => router.push(item.href),
      })),
    ];

    const contacts: CommandItem[] = contactLinks.map((link) => ({
      id: link.href,
      label: link.label,
      hint: link.href.replace(/^mailto:/, ""),
      group: "Contato",
      run: () => {
        if (link.external) {
          window.open(link.href, "_blank", "noopener,noreferrer");
          return;
        }
        window.location.href = link.href;
      },
    }));

    return [...navigation, ...contacts];
  }, [router]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    if (!normalized) return items;
    return items.filter((item) => {
      const haystack = `${item.label} ${item.hint} ${item.group}`.toLocaleLowerCase(
        "pt-BR",
      );
      return haystack.includes(normalized);
    });
  }, [items, query]);

  useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((current) =>
          filtered.length === 0 ? 0 : (current + 1) % filtered.length,
        );
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((current) =>
          filtered.length === 0
            ? 0
            : (current - 1 + filtered.length) % filtered.length,
        );
        return;
      }

      if (event.key === "Enter") {
        const item = filtered[activeIndex];
        if (!item) return;
        event.preventDefault();
        item.run();
        close();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, activeIndex, close]);

  if (!open) return null;

  let lastGroup = "";

  return (
    <div className={styles.overlay} role="presentation" onClick={close}>
      <div
        id="command-palette"
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.top}>
          <h2 id={titleId} className={styles.title}>
            Navegação rápida
          </h2>
          <p className={styles.subtitle}>
            Vá para uma página ou abra um contato.
          </p>
        </div>

        <label className={styles.search}>
          <span className={styles.srOnly}>Filtrar comandos</span>
          <input
            ref={inputRef}
            className={styles.input}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            placeholder="Digite para filtrar…"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            aria-autocomplete="list"
            aria-controls="command-palette-list"
          />
        </label>

        <ul id="command-palette-list" className={styles.list} role="listbox">
          {filtered.length === 0 ? (
            <li className={styles.empty}>Nada encontrado.</li>
          ) : (
            filtered.map((item, index) => {
              const showGroup = item.group !== lastGroup;
              lastGroup = item.group;
              const active = index === activeIndex;

              return (
                <li key={item.id} role="presentation">
                  {showGroup ? (
                    <div className={styles.group} aria-hidden="true">
                      {item.group}
                    </div>
                  ) : null}
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={active ? styles.optionActive : styles.option}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => {
                      item.run();
                      close();
                    }}
                  >
                    <span className={styles.optionLabel}>{item.label}</span>
                    <span className={styles.optionHint}>{item.hint}</span>
                  </button>
                </li>
              );
            })
          )}
        </ul>

        <p className={styles.footer}>
          <span>↑↓ para navegar</span>
          <span>↵ para abrir</span>
          <span>esc para fechar</span>
        </p>
      </div>
    </div>
  );
}
