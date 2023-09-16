import type { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

class PlansPage extends BasePage {
  readonly freePlanLabel: Locator;
  readonly premiumPlanLabel: Locator;
  readonly familyPlanLabel: Locator;
  readonly twoYearPlanBtn: Locator;
  readonly oneYearPlanBtn: Locator;

  constructor(public readonly page: Page) {
    super(page);
    this.freePlanLabel = page.getByText("Free", { exact: true }).nth(1);
    this.premiumPlanLabel = page.getByText("Premium", { exact: true }).nth(1);
    this.familyPlanLabel = page.getByText("Family", { exact: true }).nth(1);
    this.twoYearPlanBtn = page.getByRole("button", { name: "2-year plan" });
    this.oneYearPlanBtn = page.getByRole("button", { name: "1-year plan" });
  }

  async openTwoYearPlanView(): Promise<void> {
    await this.twoYearPlanBtn.click();
  }

  async openOneYearPlanView(): Promise<void> {
    await this.oneYearPlanBtn.click();
  }
}

export default PlansPage;
