import { By, Key, WebDriver } from 'selenium-webdriver';

const HUMAN_DELAY = 250;

export const expediaFlights = async function(driver: any) {
  await driver.get('https://www.expedia.com/Flights');

  let leavingFromButton = await driver.findElement(By.className('uitk-input-swapper-start-input'));
  await leavingFromButton.click();
  await driver.sleep(HUMAN_DELAY);


  let input = await driver.findElement(By.id('origin_select'));
  await input.sendKeys('Orlando, FL (MCO)', Key.RETURN);
  await driver.sleep(HUMAN_DELAY);

  let goingToButton = await driver.findElement(By.className('uitk-input-swapper-end-input'));
  await goingToButton.click();
  await driver.sleep(HUMAN_DELAY);

  let input2 = await driver.findElement(By.id('destination_select'));
  await input2.sendKeys('New York, NY (JFK)', Key.RETURN);
  await driver.sleep(HUMAN_DELAY);

  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + 10);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 5);

  let startDayButton = await driver.findElement(By.id('date_form_field-btn'));
  await startDayButton.click();
  await driver.sleep(HUMAN_DELAY);
  
  const [leftTable, rightTable] = await driver.findElements(By.className("uitk-date-picker-weeks"));

  let startDateTable: any = null;
  if (startDate.getMonth() === today.getMonth()) {
    startDateTable = leftTable;
  } else {
    startDateTable = rightTable;
  }

  const startBtn = startDateTable.findElement(By.xpath(`//button[@data-day='${startDate.getDate()}']`))
  await startBtn.click();
  await driver.sleep(HUMAN_DELAY);


  let endDateTable: any = null;
  if (endDate.getMonth() === today.getMonth()) {
    endDateTable = leftTable;
  } else {
    endDateTable = rightTable;
  }

  
  const endBtn = endDateTable.findElement(By.xpath(`//button[@data-day='${endDate.getDate()}']`))
  await endBtn.click();
  await driver.sleep(HUMAN_DELAY);

  let doneBtn = await driver.findElement(By.xpath(`//button[@data-stid='apply-date-picker']`));
  await doneBtn.click();
  await driver.sleep(HUMAN_DELAY);

  let travellerBtn = await driver.findElement(By.xpath(`//button[@aria-label='Travelers, 1 traveler']`));
  await travellerBtn.click();
  await driver.sleep(HUMAN_DELAY);

  let moreAdultsBtns = await driver.findElements(By.css('button.uitk-layout-flex-item.uitk-step-input-touch-target'));
  await moreAdultsBtns[1].click();
  await driver.sleep(HUMAN_DELAY);


  const travellerDoneBtn = await driver.findElement(By.id('travelers_selector_done_button'));
  await travellerDoneBtn.click();
  await driver.sleep(HUMAN_DELAY);

  await (await driver.findElement(By.id('search_button'))).click();
  await driver.sleep(HUMAN_DELAY);

  await driver.sleep(180_000);

}
