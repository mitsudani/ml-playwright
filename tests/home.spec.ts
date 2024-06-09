import { test, expect, type Page } from '@playwright/test';
import { HomePage } from "../pom/home-page";
import { HeaderPage } from '../pom/header-page';
import { SearchResultPage } from '../pom/searchResult-page';

test.describe('Homepage', () => {

    test.beforeEach(async ({ page }) => {
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
        headerPage.searchItems("estee lauder");
        await expect(searchResultPage.resultCards).toHaveCount(totalResultCards);
    });
});