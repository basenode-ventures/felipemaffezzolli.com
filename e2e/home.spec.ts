import { expect, test } from "@playwright/test";

test("home shows name, subtitle, and Portuguese chrome", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Felipe",
  );
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Maffezzolli",
  );
  await expect(page.getByText("Fundador e construtor")).toBeVisible();

  const nav = page.getByRole("navigation", { name: "Principal" });
  await expect(nav.getByRole("link", { name: "Sobre" })).toHaveAttribute(
    "href",
    "/sobre",
  );
  await expect(nav.getByRole("link", { name: "Projetos" })).toHaveAttribute(
    "href",
    "/projetos",
  );
  await expect(nav.getByRole("link", { name: "Contato" })).toHaveAttribute(
    "href",
    "/contato",
  );
});

test("about page lists verified roles", async ({ page }) => {
  await page.goto("/sobre");

  await expect(page.getByRole("heading", { name: "Quem eu sou" })).toBeVisible();
  await expect(page.getByText("Hub XP").first()).toBeVisible();
  await expect(page.getByText("Rocketseat Experts Club")).toBeVisible();
  await expect(page.getByText("set 2021 — presente")).toBeVisible();
});

test("projects page lists companies without invented metrics", async ({
  page,
}) => {
  await page.goto("/projetos");

  await expect(
    page.getByRole("heading", { name: "O que construo" }),
  ).toBeVisible();
  for (const name of ["Hub XP", "Élégant", "4ever", "Prontu", "Seven Pass"]) {
    await expect(page.getByRole("heading", { name })).toBeVisible();
  }
  await expect(
    page.getByRole("link", { name: /Visitar/ }).first(),
  ).toHaveAttribute("href", "https://www.hubxp.com.br");
});

test("contact page exposes verified socials", async ({ page }) => {
  await page.goto("/contato");

  await expect(
    page.getByRole("heading", { name: "Vamos conversar" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /E-mail/i })).toHaveAttribute(
    "href",
    "mailto:felipe@hubxp.com.br",
  );
  await expect(page.getByRole("link", { name: /LinkedIn/i })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/felipe-santana-maffezzolli/",
  );
  await expect(page.getByRole("link", { name: /Instagram/i })).toHaveAttribute(
    "href",
    "https://www.instagram.com/felipemaffezzolli/",
  );
  await expect(page.getByRole("link", { name: /TikTok/i })).toHaveAttribute(
    "href",
    "https://www.tiktok.com/@felipe.maffezzoll",
  );
  await expect(page.getByRole("link", { name: /^X/ })).toHaveAttribute(
    "href",
    "https://x.com/FeMaffezzolli",
  );
  await expect(page.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
    "href",
    "https://github.com/FeMaffezzolli",
  );
});

test("command palette opens and navigates", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /Buscar/i }).click();
  const dialog = page.getByRole("dialog", { name: "Navegação rápida" });
  await expect(dialog).toBeVisible();

  await page.getByPlaceholder("Digite para filtrar…").fill("Contato");
  await expect(dialog.getByRole("option", { name: /Contato/i })).toBeVisible();
  await dialog.getByRole("option", { name: /Contato/i }).click();
  await expect(page).toHaveURL(/\/contato$/);
});
