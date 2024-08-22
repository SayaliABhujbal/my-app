//logic for login 
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const axios = require('axios');
require('chromedriver');

async function waitForReactApp() {
  const url = 'http://localhost:3000';
  const maxAttempts = 20;
  const delay = 5000;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      console.log(`Attempt ${attempt + 1}: Checking if React app is running...`);
      await axios.get(url);
      console.log('React app is up and running.');
      return;
    } catch (error) {
      console.log(`React app is not ready yet, retrying in ${delay / 1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('React app did not start in time.');
}

async function automateLogin() {
  console.log('Starting Selenium script for login...');

  try {
    console.log('Waiting for React app to be ready...');
    await waitForReactApp();

    console.log('Initializing WebDriver using WebDriver Manager...');
    let options = new chrome.Options();
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    console.log('WebDriver initialized.');

    try {
      console.log('Opening React app login page...');
      await driver.get('http://localhost:3000/login');
      console.log('Login page opened.');

      console.log('Waiting for username input field...');
      await driver.wait(until.elementLocated(By.id('username')), 20000);
      console.log('Username input field located.');

      let usernameField = await driver.findElement(By.id('username'));
      console.log('Entering username...');
      await usernameField.sendKeys('Sayali');

      console.log('Waiting for password input field...');
      await driver.wait(until.elementLocated(By.id('password')), 20000);
      console.log('Password input field located.');

      let passwordField = await driver.findElement(By.id('password'));
      console.log('Entering password...');
      await passwordField.sendKeys('Sayali@123');

      console.log('Waiting for login button...');
      await driver.wait(until.elementLocated(By.id('loginButton')), 20000);
      console.log('Login button located.');

      let loginButton = await driver.findElement(By.id('loginButton'));
      console.log('Clicking the login button...');
      await loginButton.click();
      console.log('Login button clicked.');

      console.log('Waiting for the login process to complete...');
      await driver.wait(until.urlIs('http://localhost:3000/dashboard'), 20000);
      console.log('Login successful, redirected to dashboard.');

    } catch (error) {
      console.error('Error during WebDriver operation:', error);
    } finally {
      await driver.quit();
    }
  } catch (error) {
    console.error('Error initializing WebDriver:', error);
  }
}

automateLogin().catch(console.error);
