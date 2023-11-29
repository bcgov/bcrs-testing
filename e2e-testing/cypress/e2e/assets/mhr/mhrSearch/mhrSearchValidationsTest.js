/// <reference types="Cypress" />
import { landingPage } from '../../../../pages/assets/landingPage'
import { mhrSearchPage } from '../../../../pages/assets/mhr/mhrSearchPage'
import { mhrSearchValidationsPage } from '../../../../pages/assets/mhr/mhrSearchValidationsPage'
import mhrNumberData from '../../../../fixtures/assets/mhr/mhrNumberData.json'
import ownerNameData from '../../../../fixtures/assets/mhr/ownerNameData.json'
import orgNameData from '../../../../fixtures/assets/mhr/orgNameData.json'
import serialNumberData from '../../../../fixtures/assets/mhr/serialNumberData.json'


describe('MHR Search Test Suite ', function () {

    it('MHR Search Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        mhrSearchPage.selectSearchCategoryDropdown()

        mhrSearchValidationsPage.mhrNumberValidation(mhrNumberData.mhrNumberValidation)

        mhrSearchValidationsPage.ownerNameValidation(ownerNameData.ownerNameValidation)

        mhrSearchValidationsPage.orgNameValidation(orgNameData.orgNameValidation)

        mhrSearchValidationsPage.serialNumberValidation(serialNumberData.serialNumberValidation)

    })

})