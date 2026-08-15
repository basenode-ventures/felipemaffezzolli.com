export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const SITE = {
  name: "Felipe Maffezzolli",
  subtitle: "Fundador da Hub XP",
  domain: "felipemaffezzolli.com",
  url: "https://felipemaffezzolli.com",
  email: "felipe@hubxp.com.br",
  locale: "pt-BR",
  description:
    "Felipe Maffezzolli — fundador da Hub XP. Contato, GitHub e LinkedIn.",
} as const;

/** Verified public links only. */
export const links: SiteLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/FeMaffezzolli",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipe-santana-maffezzolli",
    external: true,
  },
  {
    label: "Hub XP",
    href: "https://www.hubxp.com.br",
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/FeMaffezzolli",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:felipe@hubxp.com.br",
  },
];
