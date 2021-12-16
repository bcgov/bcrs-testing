/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { pprSearchPage } from '../../../pages/assets/pprSearchPage'
import pprSearchData from '../../../fixtures/assets/pprSearchData.json'


describe('PPR Search Test Suite ', function () {

    it('Carbon Tax Act Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        pprSearchPage.selectSearchCategoryDropdown()

        pprSearchPage.searchAircraftNumber(pprSearchData.searchCategory)


    })

})