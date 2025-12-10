import { test, expect } from '@playwright/test';

test.describe('Practice', () => {
    test('Login', async ({ page }) => {
        await page.goto("https://demo.automationtesting.in/Static.html");
        //page.getByRole( 'img', { name: 'angular'} );   method applicable only when name tag is present.

        await expect(page.locator("#angular")).toBeVisible();
    })

    test.skip('Shadow Element', async ({ page }) => {
        await page.goto("https://practice.expandtesting.com/shadowdom");
        //page.getByRole( 'img', { name: 'angular'} );   method applicable only when name tag is present.

        await expect(page.locator("div#shadow-host >> shadow=button#my-btn")).toBeAttached();
    })
    
    test('Alerts', async ({ page }) => {
        await page.goto("https://demo.automationtesting.in/Alerts.html");
        await page.locator(".analystic[href='#Textbox']");

        await page.on('dialog', async dialog => {
            expect(dialog.type()).toContain("alerts");
            expect(dialog.message()).toContain("Please enter your name");
            await dialog.accept("Testing");
            await page.locator("//button[@on-click = 'promptbox()']").click();
        })
    })
    test('Windows', async ({ page }) => {
        await page.goto("https://demo.automationtesting.in/Windows.html");
        

        const [newPage] = await Promise.all ([

            page.waitForEvent('popup'),
            await page.locator("div#Tabbed a").click(),


        ]);

        await newPage.waitForLoadState("load");

        //frames
        //const mainFrame = await page.frame({ name: 'main-frame' });
        //const nestedFrame = mainFrame.childFrames().find(frame => frame.url().includes('nested-frame-url'));

//         const shadowHost = nestedFrame.locator('#shadow-host');
// const shadowRoot = await shadowHost.shadowRoot();
// await shadowRoot.locator('#element').click();


    }) 
})
