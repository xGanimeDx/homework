import { test } from "@playwright/test";
import Pages from "../pages/Pages";
import helper from "../utils/helper";

let pages: Pages;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  pages = new Pages(page);
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test("Check Personal Plans", async () => {
  await pages.topMenu.gotoPlansPage();
  await pages.plansPage.openTwoYearPlanView();
  await pages.plansPage.checkElementVisibility([
    pages.plansPage.freePlanLabel,
    pages.plansPage.premiumPlanLabel,
    pages.plansPage.familyPlanLabel,
  ]);
  await pages.plansPage.openOneYearPlanView();
  await pages.plansPage.checkElementVisibility([
    pages.plansPage.freePlanLabel,
    pages.plansPage.premiumPlanLabel,
    pages.plansPage.familyPlanLabel,
  ]);
});

test("Search in Blog posts", async () => {
  await pages.topMenu.gotoBlogPage();
  await pages.blogPage.search(helper.generateRandomString(10));
  await pages.blogPage.checkResultsAbsence();
  await pages.blogPage.search("security");
  await pages.blogPage.checkResultsPresence();
});
