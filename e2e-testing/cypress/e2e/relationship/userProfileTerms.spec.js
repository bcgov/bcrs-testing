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

  it('User Profile Terms of Use Page', function () {
    userProfileTerms.verifyElements()
    userProfileTerms.acceptTerms()
  })

  // Mostly Used for TearDown
  after(function () {
    cy.authReset(Cypress.env('AUTH_RESET_URL'))
  })
})
