const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('http://34.142.189.109:3000/');
    await driver.findElement(By.name('value')).sendKeys('test demo', Key.RETURN);
    await driver.wait(until.titleIs('test demo - text'), 1000);
  } finally {
    //await driver.quit();
  }
})();