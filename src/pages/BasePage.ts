// Class for Common Methods

import { Page } from '@playwright/test';

export class BasePage {
    constructor (protected page: Page) {}

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async clickElement(selector: string): Promise<void> {
        await this.page.locator(selector).click();
    }

    async enterText(selector: string, text: string): Promise<void> {
        await this.page.locator(selector).fill(text);
    }
}