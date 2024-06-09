import { type Locator, type Page } from '@playwright/test';

export class HeaderPage {

    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly loginLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByPlaceholder("Buscar productos, marcas y más…");
        this.searchButton = page.locator(".nav-search-btn");
        // Example of xpath locator:
        this.loginLink = page.locator("xpath=//*[@id='nav-header-menu']/a[contains(text(),'Ingresá')]");
        // Locator with overridden attribute name in getByTestId()
        //this.loginLink = page.getByTestId("login");
    }

    async searchItems(item: string) {
        await this.searchInput.fill(item);
        await this.searchButton.click();
    }
}
