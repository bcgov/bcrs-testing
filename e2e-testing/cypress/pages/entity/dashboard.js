// Business Dashboard page

export class Dashboard {
  constructor () {
    this.entityName = '#entity-legal-name'
    this.identifier = '#entity-incorporation-number'
  }

  visit (url) {
    cy.visit(url)
  }

  verifyElements () {
    cy.get(this.entityName).should('be.visible')
    cy.get(this.identifier).should('be.visible')
  }
}

export const dashboard = new Dashboard()
