# StockX Automation Test

Description of Assigned Automation Challenge:
StockX (https://stockx.com) is a website where users can post asks (try to sell) and make bids (try
to buy) on shoes, streetwear, handbags and watches. Is is “The Stock Market of Things”.

Your goal is to choose 2-3 activities on the site (authentication, bid, ask, purchase ...) and create a
test plan describing the functionality and how you would test. Please write automated tests in
the framework or language of your choice that validates your test plan. Feel free to
write as many tests as you feel comfortable with.

Please include your test plan, testing framework and any dependencies needed as we will recreate and run them for validation.

## Getting Started

This automation code does not exist on Github.
If you are reading this, you should already have received the repository and be able to run it locally on your machine.

### Prerequisites

The tests are currently configured to run using the Firefox browser.  You must have Firefox installed on your machine to run the test suite.
To download Firefox browser, go here: https://www.mozilla.org/en-US/firefox/new/

You will need to install Node.js and NPM. To install both, go here: https://www.npmjs.com/get-npm

You will need to install all dev dependencies in the package.json file.

### Installing

To install all dev dependencies:
1. In your terminal, navigate to this project (project folder should be named 'stockxtest')
2. Execute 'npm install'

## Running the tests

To run the tests, open terminal, navigate to this project then execute any of the following commands:
'npm run authtests' -- This will run all Authentication tests in the Authentication feature file (FYI: Do not run test repeatedly in a short time frame.  User's account will get locked out and tests will fail.)
'npm run bidtests' -- This will run all Bidding tests in the Bidding feature file
'npm run asktests' -- This will run all Ask tests in the Ask feature file
'npm run alltests' -- This will run all tests in all feature files

### What do these tests validate?

These tests validates core functionality that allows users to log in or log out.
These tests validate the simple process of users selecting a popular item and asking/bidding on that item, whether they are authenticated or not.
These tests go as far as validating these processes up until purchase/payment.
(Since these tests are being run against production, validation of purchase was omitted).

## Built With

* [Cucumber] https://cucumber.io/
* [WebdriverIO] http://webdriver.io/
* [Selenium] https://www.seleniumhq.org/
* [Chai] http://www.chaijs.com/

## Author

Carianne Kopp

## License

This project is not licensed

## Acknowledgments

* http://webdriver.io/
* http://www.chaijs.com/
