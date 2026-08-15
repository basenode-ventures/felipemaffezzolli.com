import styles from "./page-frame.module.css";

type PageFrameProps = {
  eyebrow: string;
  title: string;
  lead: string;
  children: React.ReactNode;
};

export function PageFrame({ eyebrow, title, lead, children }: PageFrameProps) {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </header>
      <div className={styles.body}>{children}</div>
    </main>
  );
}
