import { dashboard } from '../../pages/entity/dashboard'

describe('Dashboard test Suite ', function () {
  // Mostly used for Setup Part
  before(function () {
    cy.fixture('relationship/bcsc-2027').then(function (data) {
      this.data = data
      this.loginUrl = Cypress.env('BCRS_DOMAIN') + '/CP0001575'
      cy.bcscLogin(this.loginUrl, data.username, data.password)
    })
  })

  it('Dashboard Test Case', function () {
    dashboard.visit(this.loginUrl)
    dashboard.verifyElements()
  })

  // Mostly Used for TearDown Part
  after(function () {
    // cy.authReset(Cypress.env('AUTH_RESET_URL'))
  })
})
