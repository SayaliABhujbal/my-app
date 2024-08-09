from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Initialize the WebDriver using WebDriver Manager
service = Service(ChromeDriverManager().install())
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

# Open the React app
driver.get('http://localhost:3000')

# Wait for the page to load
WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, 'myButton')))

# Find the button by its ID and click it
button = driver.find_element(By.ID, 'myButton')
button.click()

# Wait for the output text to be present
output_text = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, 'outputText')))

# Retrieve and print the text
print(output_text.text)

# Optionally, perform more actions or assertions

# Close the WebDriver
driver.quit()

# package.json
# "scripts": {
#     "start": "react-scripts start",
#     "build": "react-scripts build",
#     "test": "react-scripts test",
#     "eject": "react-scripts eject"
#   },