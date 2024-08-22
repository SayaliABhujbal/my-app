//logic for auotmate click on selected fruts
//  const { Builder, By, until } = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
// const axios = require('axios');
// require('chromedriver'); // This will set up chromedriver automatically

// async function waitForReactApp() {
//   const url = 'http://localhost:3000';
//   const maxAttempts = 10; // Increased attempts
//   const delay = 3000; // Increased delay to 5 seconds

//   for (let attempt = 0; attempt < maxAttempts; attempt++) {
//     try {
//       console.log(`Attempt ${attempt + 1}: Checking if React app is running...`);
//       await axios.get(url);
//       console.log('React app is up and running.');
//       return;
//     } catch (error) {
//       console.log(`React app is not ready yet, retrying in ${delay / 1000} seconds...`);
//       await new Promise(resolve => setTimeout(resolve, delay));
//     }
//   }
//   throw new Error('React app did not start in time.');
// }

// async function automateButtonClick() {
//   console.log('Starting Selenium script...');

//   try {
//     console.log('Waiting for React app to be ready...');
//     await waitForReactApp();

//     console.log('Initializing WebDriver using WebDriver Manager...');
//     let options = new chrome.Options();
//     let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
//     console.log('WebDriver initialized.');
  
//     try {
//               console.log('Opening React app...');
//               await driver.get('http://localhost:3000');
//               console.log('React app opened.');
        
//               console.log('Waiting for "Select All" button to be located...');
//               await driver.wait(until.elementLocated(By.id('selectAllButton')), 20000);
//               console.log('"Select All" button located.');
        
//               let selectAllButton = await driver.findElement(By.id('selectAllButton'));
//               console.log('Clicking the "Select All" button...');
//               await selectAllButton.click();
//               console.log('"Select All" button clicked.');
        
//               console.log('Waiting for "Delete Selected" button to be located...');
//               await driver.wait(until.elementLocated(By.id('deleteButton')), 20000);
//               console.log('"Delete Selected" button located.');
        
//               let deleteButton = await driver.findElement(By.id('deleteButton'));
//               console.log('Clicking the "Delete Selected" button...');
//               await deleteButton.click();
//               console.log('"Delete Selected" button clicked.');
        
//               console.log('Waiting for message...');
//               let message = await driver.wait(until.elementLocated(By.id('message')), 10000);
//               console.log('Message found: ' + await message.getText());
//       // Verify that the list is empty
//       let fruitsList = await driver.findElements(By.css('ul li'));
//       if (fruitsList.length === 0) {
//         console.log('All selected fruits have been deleted successfully.');
//       } else {
//         console.log('Some fruits were not deleted.');
//       }
//     } catch (error) {
//       console.error('Error during WebDriver operation:', error);
//     } 
//   } catch (error) {
//     console.error('Error initializing WebDriver:', error);
//   }
// }

// automateButtonClick().catch(console.error);

