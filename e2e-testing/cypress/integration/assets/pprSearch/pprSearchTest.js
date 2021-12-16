/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { pprSearchPage } from '../../../pages/assets/pprSearchPage'
import pprSearchData from '../../../fixtures/assets/pprSearchData.json'


describe('PPR Search Test Suite ', function () {

    it('PPR Search Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        pprSearchPage.selectSearchCategoryDropdown()

        pprSearchPage.searchSerialNumber(pprSearchData.searchCategory)

        pprSearchPage.selectSearchCategoryDropdown()

        pprSearchPage.searchIndividualDebtorName(pprSearchData.searchCategory)

        pprSearchPage.selectSearchCategoryDropdown()

        pprSearchPage.searchBusinessDebtorName(pprSearchData.searchCategory)

        pprSearchPage.selectSearchCategoryDropdown()

        pprSearchPage.searchManufacturedHomeRegistrationNumber(pprSearchData.searchCategory)

        pprSearchPage.selectSearchCategoryDropdown()

        pprSearchPage.searchAircraftNumber(pprSearchData.searchCategory)

        pprSearchPage.selectSearchCategoryDropdown()

        pprSearchPage.searchRegistrationNumber(pprSearchData.searchCategory)


    })

})