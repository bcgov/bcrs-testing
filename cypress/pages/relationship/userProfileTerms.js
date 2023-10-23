// Decide Business page

export class UserProfileTerms {
  constructor () {
    this.acceptButton = 'button:contains("Accept Terms")'
    this.declineButton = 'button:contains("Decline") '
  }

  visit (url) {
    cy.visit(url)
  }

  verifyElements () {
    cy.get(this.acceptButton).should('be.visible')
    cy.get(this.declineButton).should('be.visible')
  }

  acceptTerms () {
    cy.get(this.acceptButton).click()
  }

  declineTerms () {
    cy.get(this.declineButton).click()
  }
}

export const userProfileTerms = new UserProfileTerms()
