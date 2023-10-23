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
