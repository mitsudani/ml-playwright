import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly userInput: Locator;
    readonly continueButton: Locator;
    readonly passInput: Locator;
    readonly loginButton: Locator;
    readonly captchaContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userInput = page.getByTestId("user_id");
        this.continueButton = page.getByRole("button", { name: "Continuar" });
        this.passInput = page.getByTestId("password");
        this.loginButton = page.getByRole("button", { name: "Iniciar sesión" });
        this.captchaContainer = page.locator(".recaptcha__container");
    }

    async assertCaptchaValidation(user: string) {
        await this.userInput.fill(user);
        await this.continueButton.click();
        await expect(this.captchaContainer).toBeVisible();
    }
}