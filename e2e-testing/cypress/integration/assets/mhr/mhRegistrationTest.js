/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import { mhrRegistrationPage } from '../../../pages/assets/mhr/mhrRegistrationPage'
import step1Data from '../../../fixtures/assets/mhr/step1Data.json'


describe('Staff Flow Test Suite ', function () {

    it('BC Registry Staff MH Registration Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DEV_URL'))

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_WITH_IDIR_ROLE_USERNAME'), Cypress.env('BCSC_WITH_IDIR_ROLE_PASSWORD'))

        landingPage.clickStaffAssetRegistriesButton()

        mhrRegistrationPage.selectMHRTab()

        mhrRegistrationPage.clickRegisterMHButton()

        mhrRegistrationPage.setManufacturerMakeAndModel(step1Data['manufacurer,make,model'])

        mhrRegistrationPage.setHomeSections(step1Data.homeSections)




    })

})