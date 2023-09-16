import { type Page, type Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

class BlogPage extends BasePage {
  readonly allLink: Locator;
  readonly newsLink: Locator;
  readonly productTipsLink: Locator;
  readonly onlineSecurityABCLink: Locator;
  readonly digitalLifeLink: Locator;
  readonly businessLink: Locator;
  readonly peopleAndCultureLink: Locator;
  readonly searchBtn: Locator;
  readonly searchInput: Locator;
  readonly searchResultsGrid: Locator;

  constructor(public readonly page: Page) {
    super(page);
    this.allLink = page.getByRole("link", { name: "All" });
    this.newsLink = page.getByRole("link", { name: "News", exact: true });
    this.productTipsLink = page.getByRole("link", { name: "Product Tips" });
    this.onlineSecurityABCLink = page.getByRole("link", {
      name: "Online Security ABC",
      exact: true,
    });
    this.digitalLifeLink = page.getByRole("link", {
      name: "Digital Life",
      exact: true,
    });
    this.businessLink = page
      .getByRole("link", { name: "Business", exact: true })
      .nth(1);
    this.peopleAndCultureLink = page.getByRole("link", {
      name: "People & Culture",
    });
    this.searchBtn = page.getByRole("button", { name: "Search" });
    this.searchInput = page.getByPlaceholder("Search by keyword");
    this.searchResultsGrid = page.locator(
      ".container--blog > .nord-container > .nord-row"
    );
  }

  async search(stringToSearch: string): Promise<void> {
    await this.searchBtn.click();
    await this.searchInput.fill(stringToSearch);
    await this.searchBtn.click();
  }

  async checkResultsAbsence(): Promise<void> {
    await expect(this.searchResultsGrid).toBeEmpty();
  }

  async checkResultsPresence(): Promise<void> {
    await expect(this.searchResultsGrid).not.toBeEmpty();
  }
}

export default BlogPage;
