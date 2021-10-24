/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import credentials from '../../../fixtures/relationship/assetsBCSC.json'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import { step1AssertionPage } from '../../../pages/assets/step1AssertionPage'
import step1Data from '../../../fixtures/assets/step1Data.json'


describe('Standard Registrations Test Suite ', function () {

    it('Security Agreement Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('credentials'))

        addSecurityAgreementPage.selectSecurityAgreementDropdown(credentials.type)

        addSecurityAgreementPage.selectStandardRegistrations(credentials.type, registrationType.standard.sa)
        
        for (let i = 0; i <= feeSummaryData.years.length - 1; i++) {

            step1AssertionPage.verifyFeeModal(step1Data.years[i])

        }

        for (let i = 0; i <= feeSummaryData.invalidData.length - 1; i++) {

            step1AssertionPage.verifyInvalidData(step1Data.invalidData[i])

        }
    })

})