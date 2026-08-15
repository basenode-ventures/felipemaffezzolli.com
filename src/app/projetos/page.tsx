import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { projects } from "@/lib/site";
import styles from "./projetos.module.css";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Empresas e produtos de Felipe Maffezzolli — Hub XP, Élégant, 4ever, Prontu e Seven Pass.",
  alternates: { canonical: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <PageFrame
      eyebrow="Projetos"
      title="O que construo"
      lead="Empresas e produtos reais — sem métricas inventadas."
    >
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.name} className={styles.item}>
            <div className={styles.copy}>
              <h2 className={styles.name}>{project.name}</h2>
              <p className={styles.summary}>{project.summary}</p>
            </div>
            {project.href ? (
              <a
                className={styles.link}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar
                <span aria-hidden="true"> ↗</span>
              </a>
            ) : (
              <span className={styles.noLink}>Sem site público</span>
            )}
          </li>
        ))}
      </ul>
    </PageFrame>
  );
}
