import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { JsonUtils } from '../utils/JsonUtils';
import { LoggerUtils } from '../utils/LoggerUtils';

test('Verify AutomationExercise HomePage', async ({ page }) => {
    await page.goto("https://www.automationexercise.com/");
    const pageTitle = await page.title();
    await expect(page).toHaveTitle(pageTitle);
    console.log("User successfully navigate to home page");
});

test.skip('Register to Automation Exercise web', async ({ page }) => {
    const testData = JsonUtils.readJsonFile('src/data/test-data.json');
    const loginPage = new LoginPage(page);
    

    await page.goto("https://www.automationexercise.com/");
    const pageTitle = await page.title();
    await expect(page).toHaveTitle(pageTitle);
    console.log("User successfully navigate to home page");
    const signUpLoginButton = page.locator('a[href = "/login"]');
    signUpLoginButton.click();
    
    await expect(page).toHaveURL("https://www.automationexercise.com/login");

    await loginPage.signUp(testData.signUp.name, testData.signUp.email);

    
    
    //Perform login with invalid data

    // await page.locator("input[data-qa='signup-name']").fill("Shashank");
    // await page.locator("input[data-qa='signup-email']").fill("shashankrao29@gmail.com");
    // page.locator("input[data-qa='signup-button']");
});

test('Login with valid credentials', async ({ page }) => {
    LoggerUtils.logInfo('Starting login test');

    const testData = JsonUtils.readJsonFile('src/data/test-data.json');
    const loginPage = new LoginPage(page);

    //Navigate to login page
    await loginPage.navigateTo('https://www.automationexercise.com/login');

    // Perform login with valid credentials
    await loginPage.login(testData.validLogin.username, testData.validLogin.password);

    //Validate Login success

});

test('Login with invalid credentials', async ({ page }) => {
    LoggerUtils.logInfo('Starting login test');

    const testData = JsonUtils.readJsonFile('src/data/test-data.json');
    const loginPage = new LoginPage(page);

    //Navigate to login page
    await loginPage.navigateTo('https://www.automationexercise.com/login');

    // Perform login with valid credentials
    await loginPage.login(testData.invalidLogin.username, testData.invalidLogin.password);

    //Validate Login success

});

test.only('Static Datable', async ({ page }) => {
    LoggerUtils.logInfo('Starting Static Datatable test');

    // const testData = JsonUtils.readJsonFile('src/data/test-data.json');
    // const loginPage = new LoginPage(page);

    //Navigate to login page
    await page.goto('https://testautomationpractice.blogspot.com/');

    let header = await page.getByText('GUI Elements');
    expect(await header.innerText()).toBe('GUI Elements');
    console.log(await header.innerText());

    // Validate the page
    expect(page).toHaveTitle('Automation Testing Practice');
    console.log("Navigated to the Automation Testing Practice page");

    let staticTable = page.locator("table[name='BookTable']");
    await staticTable.isVisible();

    const row = await staticTable.locator('tr', {hasText: 'Amit Selenium'});
    await expect(row).toContainText('Learn');
    console.log(await row.innerText());
    console.log(await row.locator('td').allInnerTexts());

    const cells = row.locator('td');
    const cellCount = await cells.count();

    for (let i=0; i < cellCount; i++) {
        const cellData = await cells.nth(i).innerText();
        console.log(`Cell ${i}: ${cellData}`);
        // console.log(await cells.nth(i).textContent());
    }


});

test('Dynamic Datable', async ({ page }) => {
    LoggerUtils.logInfo('Starting Dynamic Datatable test');

    // const testData = JsonUtils.readJsonFile('src/data/test-data.json');
    // const loginPage = new LoginPage(page);

    //Navigate to login page
    await page.goto('https://testautomationpractice.blogspot.com/');

    let actualTitle = await page.title();
    // console.log(actualTitle);

    // Validate the page
    expect(page).toHaveTitle('Automation Testing Practice');
    console.log("Navigated to the Automation Testing Practice page");

    let dynamicTable = page.locator("table#taskTable");
    await dynamicTable.isVisible();

    const headers = await dynamicTable.locator('thead tr th').allInnerTexts();;
    // await expect(headers).toContainText('Name');
    // console.log(await headers.innerText());
    // console.log(await headers.locator('th').allInnerTexts());

    const valueRows = await dynamicTable.locator('tbody tr');
    // await expect(valueRows).toContainText('System');
    const dataRowCount = await valueRows.count();
    console.log(dataRowCount);

    for(let i = 0; i < dataRowCount; i++){
        const row = await valueRows.nth(i);
        const cells = await row.locator('td').allInnerTexts();

        for (let j = 0; j < headers.length; j++){
            console.log(`${headers[j]}: ${cells[j]}`);
        }
    }
    // console.log(await values.innerText());
    // console.log(await values.locator('td').allInnerTexts());

    // const cells = row.locator('td');
    // const cellCount = await cells.count();

    // for (let i=0; i < cellCount; i++) {
    //     const cellData = await cells.nth(i).innerText();
    //     console.log(`Cell ${i}: ${cellData}`);
    //     // console.log(await cells.nth(i).textContent());
    // }


});


function reverseString(word: string) {
    if(word === "") return "";
    return reverseString(word.substring(1)+word[0])
}

function maxNumber(numArray: number[]) {
    let max = numArray[0];
    for(const num of numArray) {
        if(num > max) max = num;
    }
    return max;
}

