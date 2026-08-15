import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { aboutIntro, roles } from "@/lib/site";
import styles from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Bio e trajetória de Felipe Maffezzolli — Hub XP e Rocketseat Experts Club.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <PageFrame
      eyebrow="Sobre"
      title="Quem eu sou"
      lead="Fundador da Hub XP. Construtor de software, times e produtos."
    >
      <section className={styles.bio} aria-label="Bio">
        {aboutIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.timeline} aria-labelledby="trajetoria">
        <h2 id="trajetoria" className={styles.sectionTitle}>
          Trajetória
        </h2>
        <ol className={styles.list}>
          {roles.map((role) => (
            <li key={`${role.org}-${role.period}`} className={styles.item}>
              <div className={styles.meta}>
                <p className={styles.period}>{role.period}</p>
                <p className={styles.location}>{role.location}</p>
              </div>
              <div className={styles.copy}>
                <h3 className={styles.role}>
                  {role.title}
                  <span className={styles.at}> · </span>
                  {role.orgHref ? (
                    <a
                      href={role.orgHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.orgLink}
                    >
                      {role.org}
                    </a>
                  ) : (
                    <span>{role.org}</span>
                  )}
                </h3>
                <p className={styles.summary}>{role.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PageFrame>
  );
}
