import { expect, Locator, type Page } from "@playwright/test";

class BasePage {
  constructor(public readonly page: Page) {}

  async checkElementVisibility(locators: Locator[]) {
    for (const locator of locators) {
      await expect(locator).toBeVisible();
    }
  }
}

export default BasePage;
