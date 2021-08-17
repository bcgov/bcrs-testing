import { landingPage } from '../../pages/assets/landingPage'
import { myRegistryDashboardPage } from '../../pages/assets/myRegistryDashboardPage'
import { pprDashboardPage } from '../../pages/assets/pprDashboardPage'


describe('PPR Dashboard test Suite ', function () {
    // Setup data and login as BC Service Card
    before(function () {
        cy.fixture('relationship/bcsc-0058').then(function (data) {
            this.data = data
            this.loginUrl = Cypress.env('PPR_DOMAIN')
            cy.bcscLogin(this.loginUrl, data.username, data.password)
        })
    })


    it('Landing Page Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        pprDashboardPage.selectPPRSearchCategory()

        pprDashboardPage.setPPRSearchTextbox("1234567")

        pprDashboardPage.clickSearchButton()
    })


})