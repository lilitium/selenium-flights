import { Builder, Browser } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { tests } from './tests';

const browsers = [
    Browser.CHROME,
    // Browser.FIREFOX
];

let options = new chrome.Options();
options.addArguments('--start-maximized');

const run = async() => {

    for (let browser of browsers) {
        const br = new Builder().forBrowser(browser);
        if (browser === Browser.CHROME) {
            br.setChromeOptions(options);
        }
        const driver = await br.build();
        try {
            for(let testFunc of tests) {
                await testFunc(driver)
            }
        } catch (error) {
            console.error('Test failed in ' + browser)
            console.error(error)
        } finally {
            await driver.quit();
        }
    }
}
run()