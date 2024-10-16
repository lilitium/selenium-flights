"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
const tests_1 = require("./tests");
const browsers = [
    selenium_webdriver_1.Browser.CHROME,
    // Browser.FIREFOX
];
let options = new chrome_1.default.Options();
options.addArguments('--start-maximized');
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    for (let browser of browsers) {
        const br = new selenium_webdriver_1.Builder().forBrowser(browser);
        if (browser === selenium_webdriver_1.Browser.CHROME) {
            br.setChromeOptions(options);
        }
        const driver = yield br.build();
        try {
            for (let testFunc of tests_1.tests) {
                yield testFunc(driver);
            }
        }
        catch (error) {
            console.error('Test failed in ' + browser);
            console.error(error);
        }
        finally {
            yield driver.quit();
        }
    }
});
run();
