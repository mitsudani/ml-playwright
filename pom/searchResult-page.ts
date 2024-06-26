import { expect, type Locator, type Page } from '@playwright/test';

export class SearchResultPage {

    readonly page: Page;
    readonly resultCards: Locator;
    readonly sponsoredLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultCards = page.locator('.ui-search-layout__item');
    }

    // Assert sponsored items are only the three first ones
    async assertSponsoredItems(locator: Locator) {
        const locators = await locator.all();
        locators.forEach(async (el, i) => {
            if (i < 3) {
                await expect(el).toHaveText(/Promocionado/);
            } else {
                await expect(el).not.toHaveText(/Promocionado/);
            }
        });

        // for loop version with count()
        // for (let i = 0; i < await locator.count(); i++) {
        //     if (i < 3) {
        //         await expect(locator.nth(i)).toHaveText(/Promocionado/);
        //     } else {
        //         await expect(locator.nth(i)).not.toHaveText(/Promocionado/);
        //     }
        // }
    }
}
