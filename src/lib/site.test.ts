import { describe, expect, it } from "vitest";
import {
  SITE,
  aboutIntro,
  contactLinks,
  navItems,
  projects,
  roles,
} from "./site";

describe("site content", () => {
  it("exposes the canonical identity", () => {
    expect(SITE.name).toBe("Felipe Maffezzolli");
    expect(SITE.subtitle).toBe("Fundador e construtor");
    expect(SITE.email).toBe("felipe@hubxp.com.br");
    expect(SITE.url).toBe("https://felipemaffezzolli.com");
    expect(SITE.locale).toBe("pt-BR");
  });

  it("ships the Portuguese IA routes", () => {
    expect(navItems.map((item) => item.href)).toEqual([
      "/sobre",
      "/projetos",
      "/contato",
    ]);
    expect(navItems.map((item) => item.label)).toEqual([
      "Sobre",
      "Projetos",
      "Contato",
    ]);
  });

  it("only includes verified contact links", () => {
    expect(contactLinks.map((link) => link.label)).toEqual([
      "E-mail",
      "LinkedIn",
      "Instagram",
      "TikTok",
      "X",
      "GitHub",
      "Hub XP",
    ]);

    expect(contactLinks.find((l) => l.label === "LinkedIn")?.href).toBe(
      "https://www.linkedin.com/in/felipe-santana-maffezzolli/",
    );
    expect(contactLinks.find((l) => l.label === "Instagram")?.href).toBe(
      "https://www.instagram.com/felipemaffezzolli/",
    );
    expect(contactLinks.find((l) => l.label === "TikTok")?.href).toBe(
      "https://www.tiktok.com/@felipe.maffezzoll",
    );
    expect(contactLinks.find((l) => l.label === "GitHub")?.href).toBe(
      "https://github.com/FeMaffezzolli",
    );
    expect(contactLinks.find((l) => l.label === "E-mail")?.href).toBe(
      "mailto:felipe@hubxp.com.br",
    );
  });

  it("keeps verified roles without invented titles", () => {
    expect(roles).toHaveLength(2);
    expect(roles[0]).toMatchObject({
      title: "Fundador",
      org: "Hub XP",
      period: "set 2021 — presente",
      location: "São Paulo",
    });
    expect(roles[1]).toMatchObject({
      title: "Content Creator",
      org: "Rocketseat Experts Club",
      period: "jun 2021 — mai 2024",
    });
  });

  it("lists real projects only", () => {
    expect(projects.map((project) => project.name)).toEqual([
      "Hub XP",
      "Élégant",
      "4ever",
      "Prontu",
      "7Group",
    ]);
    expect(projects.find((p) => p.name === "Élégant")?.href).toBe(
      "https://elegant.club",
    );
    expect(projects.find((p) => p.name === "4ever")?.href).toBe(
      "https://use4ever.com",
    );
    expect(projects.find((p) => p.name === "Prontu")?.href).toBe(
      "https://useprontu.com.br",
    );
    expect(projects.find((p) => p.name === "7Group")).toMatchObject({
      summary: "Produtora 360º de eventos corporativos e sociais.",
      href: "https://7group.com.br",
    });
    expect(projects.some((p) => p.name === "Seven Pass")).toBe(false);
  });

  it("has a short Portuguese about intro", () => {
    expect(aboutIntro.length).toBeGreaterThan(0);
    for (const paragraph of aboutIntro) {
      expect(paragraph.length).toBeGreaterThan(20);
    }
  });
});
