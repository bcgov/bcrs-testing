import { dashboard } from '../../pages/entity/dashboard'

describe('Dashboard test Suite ', function () {
  before(function () {
    cy.fixture('relationship/bcsc-2027').then(function (data) {
      this.data = data
      this.loginUrl = Cypress.env('BCRS_DOMAIN')
      //cy.bcscLogin(this.loginUrl, data.username, data.password)
    })
  })

  it('verify Login Page and Login', function () {
    dashboard.visit(this.loginUrl)
    dashboard.verifyElements()
    dashboard.clickLoginDropdown()
  })

 
  after(function () {
  })
})
