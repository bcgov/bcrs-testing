[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

# BC Registiries E2E Testing
BC Registiries E2E Testing is an automated SRE-driven end-to-end Testing app for the BC Registries applications in general.

## Technology Stack Used

* [Cypress](https://www.cypress.io/) - is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.
* [Puppeteer](https://pptr.dev/) - is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.
    * Due to cypress [web security](https://docs.cypress.io/guides/guides/web-security.html#Limitations) issue, we are using Puppeteer as a plugin to handle thirdparty applications (ie. BC Service Card, BCeID, PayBC) during testing.

## Files in this repository

```
cypress/          - Source folder
├── fixtures      - holds optional JSON data for mocking
├── integration   - holds the actual test files
├── pages         - holds page objects of application
├── plugins       - allow you to customize how tests are loaded
├── support       - runs before all tests and load additional custom commands
├── screenshots   - holds screenshots during running the test
└── videos        - holds video recording after the test
browserstack.json - file to configure your test runs on BrowserStack
cypress.json      - file to configure cypress
cypress.env.json  - file to configure local environment variable
```
## Getting started

1. Install the [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements).

2. Setup project by [this guide](https://github.com/bcgov/entity/blob/master/docs/setup-forking-workflow.md).

3. Install dependencies using:

    `npm install`

4. Run the test locally:

    `cypress run`

    `cypress run --spec cypress/intgration/entity/*.spec.js`

    `cypress run --spec cypress/intgration/relationship/*.spec.js`

    `cypress run --browser chrome`

    `cypress run --browser firefox`

## Running in CI/CD Pipelines

 [Tests in GitHub Actions](https://github.com/bcgov/bcrs-testing/actions?query=workflow%3A%22e2e+testing%22)

## Steps to add a test case (suite)
See [this](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Step-2-Query-for-an-element)

1. Write a page object in '/pages' folder then define the page elements and the actions as function;
```
// Decide Business page
export class DecideBusiness {
  constructor () {
    this.manageExistingBusinessButton = 'button:contains("Manage an Existing Business")'
  }

  visit (url) {
    cy.visit(url)
  }

  verifyElements () {
    cy.get(this.manageExistingBusinessButton).should('be.visible')
  }

  manageExistingBusiness () {
    cy.get(this.manageExistingBusinessButton).click()
  }
}

export const decideBusiness = new DecideBusiness()
```

2. Write a test spec in '/integration' folder;
```
import { decideBusiness } from '../../pages/relationship/decideBusiness'
import { userProfileTerms } from '../../pages/relationship/userProfileTerms'

describe('User Profile Terms of Use test Suite ', function () {
  // Setup data and login as BC Service Card
  before(function () {
    cy.fixture('relationship/bcsc').then(function (data) {
      this.data = data
      this.loginUrl = Cypress.env('BCRS_DOMAIN') + '/auth/signin/bcsc'
      cy.bcscLogin(this.loginUrl, data.username, data.password)
    })
  })

  it('Decide Business Page', function () {
    decideBusiness.visit(Cypress.env('BCRS_DOMAIN') + '/auth/home/decide-business')
    decideBusiness.verifyElements()
    decideBusiness.manageExistingBusiness()
  })

  // Mostly Used for TearDown
  after(function () {
    cy.authReset(Cypress.env('AUTH_RESET_URL'))
  })
})
```

3. Run the test.
```
cypress run
```
