import type { Page } from "@playwright/test";
import TopMenu from "./TopMenu";
import PlansPage from "./PlansPage";
import BlogPage from "./BlogPage";

class Pages {
  readonly topMenu: TopMenu;
  readonly plansPage: PlansPage;
  readonly blogPage: BlogPage;

  constructor(public readonly page: Page) {
    this.topMenu = new TopMenu(page);
    this.plansPage = new PlansPage(page);
    this.blogPage = new BlogPage(page);
  }
}

export default Pages;
