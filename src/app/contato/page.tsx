import type { Metadata } from "next";
import { PageFrame } from "@/components/page-frame";
import { SITE, contactLinks } from "@/lib/site";
import styles from "./contato.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com ${SITE.name} — e-mail e redes verificadas.`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <PageFrame
      eyebrow="Contato"
      title="Vamos conversar"
      lead="Canais públicos verificados. Prefira o e-mail para assuntos profissionais."
    >
      <ul className={styles.list}>
        {contactLinks.map((link) => (
          <li key={link.href}>
            <a
              className={styles.link}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className={styles.label}>{link.label}</span>
              <span className={styles.value}>
                {link.href.replace(/^mailto:/, "").replace(/^https?:\/\//, "")}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </PageFrame>
  );
}
