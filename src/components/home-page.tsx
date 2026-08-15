import { SITE } from "@/lib/site";
import styles from "./home-page.module.css";

export function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="name">
        <p className={styles.kicker}>São Paulo · Hub XP</p>
        <h1 id="name" className={styles.name}>
          <span className={styles.first}>Felipe</span>
          <span className={styles.last}>Maffezzolli</span>
        </h1>
        <p className={styles.subtitle}>{SITE.subtitle}</p>
        <p className={styles.hint}>
          Pressione{" "}
          <kbd className={styles.kbd}>
            <span>⌘</span>
            <span>K</span>
          </kbd>{" "}
          ou use o menu para navegar.
        </p>
      </section>
    </main>
  );
}
