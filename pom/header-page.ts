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
        this.loginLink = page.getByTestId("login");
    }

    async searchItems(item: string) {
        await this.searchInput.fill(item);
        await this.searchButton.click();
    }
}