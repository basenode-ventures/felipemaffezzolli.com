import { expect, test } from "@playwright/test";

test("homepage shows name, subtitle, and verified links", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Felipe Maffezzolli",
  );
  await expect(page.getByText("Fundador da Hub XP")).toBeVisible();

  const nav = page.getByRole("navigation", { name: "Links" });
  await expect(nav.getByRole("link", { name: "GitHub" })).toHaveAttribute(
    "href",
    "https://github.com/FeMaffezzolli",
  );
  await expect(nav.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/felipe-santana-maffezzolli",
  );
  await expect(nav.getByRole("link", { name: "Hub XP" })).toHaveAttribute(
    "href",
    "https://www.hubxp.com.br",
  );
  await expect(nav.getByRole("link", { name: "X", exact: true })).toHaveAttribute(
    "href",
    "https://x.com/FeMaffezzolli",
  );
  await expect(nav.getByRole("link", { name: "Email" })).toHaveAttribute(
    "href",
    "mailto:felipe@hubxp.com.br",
  );
});

test("document language is Portuguese", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
});
