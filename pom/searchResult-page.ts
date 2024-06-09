import { type Locator, type Page } from '@playwright/test';

export class SearchResultPage {

    readonly page: Page;
    readonly resultCards: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultCards = page.locator('.ui-search-result__wrapper');
    }
}