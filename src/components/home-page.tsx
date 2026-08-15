import { SITE, links } from "@/lib/site";
import styles from "./home-page.module.css";

export function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.atmosphere} aria-hidden="true" />

      <section className={styles.stage} aria-labelledby="name">
        <h1 id="name" className={styles.name}>
          {SITE.name}
        </h1>
        <p className={styles.subtitle}>{SITE.subtitle}</p>

        <nav className={styles.nav} aria-label="Links">
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.link}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </main>
  );
}
