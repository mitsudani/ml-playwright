import { test, expect, type Page, selectors } from '@playwright/test';
import { HomePage } from "../pom/home-page";
import { HeaderPage } from '../pom/header-page';
import { SearchResultPage } from '../pom/searchResult-page';
import { LoginPage } from '../pom/login-page';

test.describe('Mercado Libre', () => {

    test.beforeEach(async ({ page }) => {

        // Example of custom attribute name to be used in getByTestId()
        //selectors.setTestIdAttribute("data-link-id");
        const homePage = new HomePage(page);
        await homePage.goto();
    });

    test('should show sections', async ({ page }) => {
        const homePage = new HomePage(page);
        await expect(homePage.novedadesCarrousel).toBeVisible();
        await expect(homePage.accesosDinamicosCardsContainer).toBeVisible();
    });

    test('search items', {
        tag: ['@slow', '@flaky'],
    }, async ({ page }) => {
        const headerPage = new HeaderPage(page);
        const searchResultPage = new SearchResultPage(page);
        const totalResultCards = 54;
        await headerPage.searchItems("velas de soja");
        await expect(searchResultPage.resultCards).toHaveCount(totalResultCards);
        await searchResultPage.assertSponsoredItems(searchResultPage.resultCards);
    });

    test('show Captcha validation when login', async ({ page }) => {
        const user = process.env.USER as string;
        const headerPage = new HeaderPage(page);
        const loginPage = new LoginPage(page);
        await headerPage.loginLink.click();
        await loginPage.assertCaptchaValidation(user);
    });

    test('API testing', async ({ page }) => {
        const response = await page.request.get('/menu/departments?zipcode=');
        const responseBody = await response.json();
        expect(response.status()).toBe(200);
        expect(responseBody.departments[0]).toHaveProperty("name", "Tecnología");
    });
});
