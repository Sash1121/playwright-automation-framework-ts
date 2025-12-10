// KeywordEngine to intercept actions

import { Page } from '@playwright/test';

export class KeywordEngine {
constructor(private page: Page) {}

async executeAction(action: string, selector: string, value: string): Promise<void> {
    switch (action.toLowerCase()) {
        case 'click' :
            await this.page.locator(selector).click();
            break;
        case 'type' :
            if (value) await this.page.locator(selector).fill(value);
            break;
        case 'navigate' :
            if (value) await this.page.goto(value);
            break;
        default:
            throw new Error(`Action ${action} is not supported`);
    }
}

async executeTestSteps(testSteps: Array<{ keyword: string; locator: string; value: string }>): Promise<void> {
    for (const step of testSteps) {
      await this.executeAction(step.keyword, step.locator, step.value);
    }
  }

}