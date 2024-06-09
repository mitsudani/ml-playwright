import { type Locator, type Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    readonly novedadesCarrousel: Locator;
    readonly accesosDinamicosCardsContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.novedadesCarrousel = page.getByLabel("novedades principales");
        this.accesosDinamicosCardsContainer = page.getByLabel("Tus accesos dinámicos");
    }

    async goto() {
        await this.page.goto("/");
    }
}
