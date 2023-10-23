// Business Dashboard page

export class Dashboard {
  constructor () {
    this.loginBtn = '#loginBtn'
    this.createAccount = '#appHeader button:nth-child(4)'
    this.bcServicesCardMenuItem = 'div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)',
    this.testWithUserName = '#tile_btn_test_with_username_password_device_div_id'
  }

  visit (url) {
    cy.visit(url)
  }

  verifyElements () {
    cy.get(this.loginBtn).should('be.visible')
    cy.get(this.createAccount).should('be.visible')
  }

    clickLoginDropdown() {
      cy.get(this.loginBtn).click()
      cy.log("Clicked on Login Dropdown Button")
      
      cy.get(this.testWithUserName).click({ multiple: true })
      cy.log("Clicked on BC services card")
      //cy.get(this.virtualCardTesting).click()
      //cy.log("Clicked on Virtual Card Testing button")

  }
  
}

export const dashboard = new Dashboard()
