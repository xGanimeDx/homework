import type { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

class TopMenu extends BasePage {
  readonly nordPassLogo: Locator;
  readonly personalItem: Locator;
  readonly businessItem: Locator;
  readonly featuresItem: Locator;
  readonly pricingItem: Locator;
  readonly blogItem: Locator;
  readonly helpItem: Locator;
  readonly logInDropdown: Locator;
  readonly accessMyPasswordsDropdownItem: Locator;
  readonly manageMySubscriptionsDropdownItem: Locator;
  readonly accessBusinessAdminPanelDropdownItem: Locator;

  constructor(public readonly page: Page) {
    super(page);
    this.nordPassLogo = page.getByTestId("header-nav-logo");
    this.personalItem = page.getByTestId("header-nav-personal");
    this.businessItem = page.getByTestId("header-nav-business");
    this.featuresItem = page.getByTestId("header-nav-features");
    this.pricingItem = page.getByTestId("header-nav-pricing");
    this.blogItem = page.getByTestId("header-nav-blog");
    this.helpItem = page.getByTestId("header-nav-help");
    this.logInDropdown = page.getByTestId("header-nav-login-btn");
    this.accessMyPasswordsDropdownItem = page.getByTestId(
      "header-nav-login-web-vault"
    );
    this.manageMySubscriptionsDropdownItem = page.getByTestId(
      "header-nav-login-nord-account"
    );
    this.accessBusinessAdminPanelDropdownItem = page.getByTestId(
      "header-nav-login-admin-panel"
    );
  }

  async gotoPlansPage(): Promise<void> {
    await this.pricingItem.click();
  }

  async gotoBlogPage(): Promise<void> {
    await this.blogItem.click();
  }
}

export default TopMenu;
