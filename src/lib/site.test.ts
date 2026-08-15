import { describe, expect, it } from "vitest";
import { SITE, links } from "./site";

describe("site content", () => {
  it("exposes the canonical identity", () => {
    expect(SITE.name).toBe("Felipe Maffezzolli");
    expect(SITE.subtitle).toBe("Fundador da Hub XP");
    expect(SITE.email).toBe("felipe@hubxp.com.br");
    expect(SITE.url).toBe("https://felipemaffezzolli.com");
  });

  it("only includes verified links", () => {
    expect(links.map((link) => link.label)).toEqual([
      "GitHub",
      "LinkedIn",
      "Hub XP",
      "X",
      "Email",
    ]);

    expect(links.find((l) => l.label === "GitHub")?.href).toBe(
      "https://github.com/FeMaffezzolli",
    );
    expect(links.find((l) => l.label === "LinkedIn")?.href).toBe(
      "https://www.linkedin.com/in/felipe-santana-maffezzolli",
    );
    expect(links.find((l) => l.label === "Hub XP")?.href).toBe(
      "https://www.hubxp.com.br",
    );
    expect(links.find((l) => l.label === "X")?.href).toBe(
      "https://x.com/FeMaffezzolli",
    );
    expect(links.find((l) => l.label === "Email")?.href).toBe(
      "mailto:felipe@hubxp.com.br",
    );
  });

  it("marks web links as external and email as local", () => {
    for (const link of links) {
      if (link.href.startsWith("mailto:")) {
        expect(link.external).toBeFalsy();
      } else {
        expect(link.external).toBe(true);
        expect(link.href.startsWith("https://")).toBe(true);
      }
    }
  });
});
