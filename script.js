// const {Builder, By, Key, until} = require('selenium-webdriver');

// (async function example() {
//   let driver = await new Builder().forBrowser('safari').build();
//   try {
//     await driver.get('http://www.google.com');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();

const webdriver = require('selenium-webdriver');
const {until} = require('selenium-webdriver');
require('chromedriver');
require('geckodriver');

const driver = new webdriver.Builder()
	.forBrowser('safari')
	.setSafariOptions()
	.build();

function success() {
	console.log('test PASSED');
}
function fail(e) {
	console.log(`test FAILED: ${e}`)
}
function quit() {
	console.log('Closing webdriver...');
	driver.quit();
}

async function getHomepage() {
	await driver.get('http://www.bodybuilding.com');
	await driver.wait(until.titleContains('Bodybuilding.com'), 5000);
}

getHomepage()
	.then(success, fail)
	.then(quit);






