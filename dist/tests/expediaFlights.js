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
Object.defineProperty(exports, "__esModule", { value: true });
exports.expediaFlights = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const HUMAN_DELAY = 250;
const expediaFlights = function (driver) {
    return __awaiter(this, void 0, void 0, function* () {
        yield driver.get('https://www.expedia.com/Flights');
        let leavingFromButton = yield driver.findElement(selenium_webdriver_1.By.className('uitk-input-swapper-start-input'));
        yield leavingFromButton.click();
        yield driver.sleep(HUMAN_DELAY);
        let input = yield driver.findElement(selenium_webdriver_1.By.id('origin_select'));
        yield input.sendKeys('Orlando, FL (MCO)', selenium_webdriver_1.Key.RETURN);
        yield driver.sleep(HUMAN_DELAY);
        let goingToButton = yield driver.findElement(selenium_webdriver_1.By.className('uitk-input-swapper-end-input'));
        yield goingToButton.click();
        yield driver.sleep(HUMAN_DELAY);
        let input2 = yield driver.findElement(selenium_webdriver_1.By.id('destination_select'));
        yield input2.sendKeys('New York, NY (JFK)', selenium_webdriver_1.Key.RETURN);
        yield driver.sleep(HUMAN_DELAY);
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + 10);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 5);
        let startDayButton = yield driver.findElement(selenium_webdriver_1.By.id('date_form_field-btn'));
        yield startDayButton.click();
        yield driver.sleep(HUMAN_DELAY);
        const [leftTable, rightTable] = yield driver.findElements(selenium_webdriver_1.By.className("uitk-date-picker-weeks"));
        let startDateTable = null;
        if (startDate.getMonth() === today.getMonth()) {
            startDateTable = leftTable;
        }
        else {
            startDateTable = rightTable;
        }
        const startBtn = startDateTable.findElement(selenium_webdriver_1.By.xpath(`//button[@data-day='${startDate.getDate()}']`));
        yield startBtn.click();
        yield driver.sleep(HUMAN_DELAY);
        let endDateTable = null;
        if (endDate.getMonth() === today.getMonth()) {
            endDateTable = leftTable;
        }
        else {
            endDateTable = rightTable;
        }
        const endBtn = endDateTable.findElement(selenium_webdriver_1.By.xpath(`//button[@data-day='${endDate.getDate()}']`));
        yield endBtn.click();
        yield driver.sleep(HUMAN_DELAY);
        let doneBtn = yield driver.findElement(selenium_webdriver_1.By.xpath(`//button[@data-stid='apply-date-picker']`));
        yield doneBtn.click();
        yield driver.sleep(HUMAN_DELAY);
        let travellerBtn = yield driver.findElement(selenium_webdriver_1.By.xpath(`//button[@aria-label='Travelers, 1 traveler']`));
        yield travellerBtn.click();
        yield driver.sleep(HUMAN_DELAY);
        let moreAdultsBtns = yield driver.findElements(selenium_webdriver_1.By.css('button.uitk-layout-flex-item.uitk-step-input-touch-target'));
        yield moreAdultsBtns[1].click();
        yield driver.sleep(HUMAN_DELAY);
        const travellerDoneBtn = yield driver.findElement(selenium_webdriver_1.By.id('travelers_selector_done_button'));
        yield travellerDoneBtn.click();
        yield driver.sleep(HUMAN_DELAY);
        yield (yield driver.findElement(selenium_webdriver_1.By.id('search_button'))).click();
        yield driver.sleep(HUMAN_DELAY);
        yield driver.sleep(180000);
    });
};
exports.expediaFlights = expediaFlights;
