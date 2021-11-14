import { chromium, Page, ChromiumBrowserContext, ChromiumBrowser, Cookie } from 'playwright-chromium';
import { KeyValuePair } from '../../models';
let loginData = require('../../fixtures/relationship/bcsc-2027.json')

const selectors = {
    virturalCardOption: '#tile_virtual_device_div_id',
    userName:'#csn',
    passcode:'#passcode',
    continueButton: '#continue',
    submitButton:'#btnSubmit',
    elementAfterLogin: 'a[aria-current="page"]'
}

export const LoginToApp = async function (): Promise<{ cookies: Cookie[], localStorage: KeyValuePair[] }> {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    await context.setDefaultTimeout(200000);
    await context.setDefaultNavigationTimeout(200000);
    const page = await context.newPage();
    await page.goto('https://test.bcregistry.ca/business/auth/signin/bcsc');
    await page.waitForSelector(selectors.virturalCardOption);
    await page.click(selectors.virturalCardOption);
    await page.waitForSelector(selectors.userName);
    await page.click(selectors.userName);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.type(selectors.userName, loginData.username);
    await page.click(selectors.continueButton);

    await page.waitForSelector(selectors.passcode);
    await page.click(selectors.passcode);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.type(selectors.passcode, loginData.password);
    await page.click(selectors.submitButton);

    await page.waitForSelector(selectors.submitButton);
    await page.click(selectors.submitButton);

    const cookies = await getCookies(context, page);
    const localStorage = await getStorageValues(page, "localStorage")
    await finalizeSession(browser);
    return {
        cookies,
        localStorage
    };
}

async function getCookies(context: ChromiumBrowserContext, page: Page) {
    await page.waitForSelector(selectors.elementAfterLogin);
    // Retrieving all the cookies
    const cookies = await context.cookies();
    return cookies
}

async function getStorageValues(page: Page, type: "localStorage") {
    const storageItems = await page.evaluate(() => {
        const storage = window.localStorage;
        const keys = Object.keys(storage);
        return keys.map(key => ({
            key,
            value: storage.getItem(key)
        }));
    });
    return storageItems;
}

async function finalizeSession(browser: ChromiumBrowser) {
    await browser.close()
}