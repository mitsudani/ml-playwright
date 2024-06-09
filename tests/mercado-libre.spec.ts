import { test, expect, type Page, selectors } from '@playwright/test';
import { HomePage } from "../pom/home-page";
import { HeaderPage } from '../pom/header-page';
import { SearchResultPage } from '../pom/searchResult-page';

test.describe('Mercado Libre', () => {

    test.beforeEach(async ({ page }) => {
        selectors.setTestIdAttribute("data-link-id");
        const homePage = new HomePage(page);
        await homePage.goto();
    });

    test('should show sections', async ({ page }) => {
        const homePage = new HomePage(page);
        await expect(homePage.novedadesCarrousel).toBeVisible();
        await expect(homePage.accesosDinamicosCardsContainer).toBeVisible();
    });

    test('search Estee Lauder item', async ({ page }) => {
        const headerPage = new HeaderPage(page);
        const searchResultPage = new SearchResultPage(page);
        const totalResultCards = 54;
        await headerPage.searchItems("estee lauder");
        await expect(searchResultPage.resultCards).toHaveCount(totalResultCards);
        await searchResultPage.assertSponsoredItems(searchResultPage.resultCards);
    });

    test('login', async ({ page }) => {
        const headerPage = new HeaderPage(page);
        await headerPage.loginLink.click();
    });
});