export type SiteLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export type Role = {
  title: string;
  org: string;
  orgHref?: string;
  location: string;
  period: string;
  summary: string;
};

export type Project = {
  name: string;
  summary: string;
  href?: string;
};

export const SITE = {
  name: "Felipe Maffezzolli",
  shortName: "FM",
  subtitle: "Fundador e construtor",
  domain: "felipemaffezzolli.com",
  url: "https://felipemaffezzolli.com",
  email: "felipe@hubxp.com.br",
  locale: "pt-BR",
  description:
    "Felipe Maffezzolli — fundador da Hub XP. Sobre, projetos e contato.",
} as const;

export const navItems: NavItem[] = [
  {
    label: "Sobre",
    href: "/sobre",
    description: "Bio curta e trajetória",
  },
  {
    label: "Projetos",
    href: "/projetos",
    description: "Empresas e produtos",
  },
  {
    label: "Contato",
    href: "/contato",
    description: "E-mail e redes",
  },
];

export const roles: Role[] = [
  {
    title: "Fundador",
    org: "Hub XP",
    orgHref: "https://www.hubxp.com.br",
    location: "São Paulo",
    period: "set 2021 — presente",
    summary:
      "Software factory e talent: mobile, web, cloud e agentes de IA. Acelera empresas com software sob medida.",
  },
  {
    title: "Content Creator",
    org: "Rocketseat Experts Club",
    location: "Remoto",
    period: "jun 2021 — mai 2024",
    summary: "Aulas práticas de backend em vídeo.",
  },
];

export const projects: Project[] = [
  {
    name: "Hub XP",
    summary:
      "Fábrica de software e talent — mobile, web, cloud e agentes de IA.",
    href: "https://www.hubxp.com.br",
  },
  {
    name: "Élégant",
    summary: "Eventos exclusivos B2B2C por convite.",
  },
  {
    name: "4ever",
    summary: "Cápsula do tempo para memórias.",
    href: "https://use4ever.com",
  },
  {
    name: "Prontu",
    summary: "Produto digital em saúde.",
    href: "https://useprontu.com.br",
  },
  {
    name: "Seven Pass",
    summary: "Produto e operação em que Felipe está envolvido.",
  },
];

/** Verified public contact links only. */
export const contactLinks: SiteLink[] = [
  {
    label: "E-mail",
    href: "mailto:felipe@hubxp.com.br",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felipe-santana-maffezzolli/",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/felipemaffezzolli/",
    external: true,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@felipe.maffezzoll",
    external: true,
  },
  {
    label: "X",
    href: "https://x.com/FeMaffezzolli",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/FeMaffezzolli",
    external: true,
  },
  {
    label: "Hub XP",
    href: "https://www.hubxp.com.br",
    external: true,
  },
];

export const aboutIntro = [
  "Sou Felipe Maffezzolli, fundador da Hub XP em São Paulo.",
  "Construo software, times e produtos — com foco em entregar o que o negócio precisa, sem enrolação.",
] as const;

export function getPageTitle(segment: string): string {
  return `${segment} · ${SITE.name}`;
}
