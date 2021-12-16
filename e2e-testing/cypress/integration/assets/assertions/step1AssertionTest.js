/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import { step1AssertionPage } from '../../../pages/assets/step1AssertionPage'
import step1Data from '../../../fixtures/assets/step1Data.json'


describe('Assertions Test Suite ', function () {

    it('Step1 Assertions Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.sa)
        
        for (let i = 0; i <= step1Data.years.length - 1; i++) {

            step1AssertionPage.verifyFeeModal(step1Data.years[i])

        }

        for (let i = 0; i <= step1Data.invalidData.length - 1; i++) {

            step1AssertionPage.verifyInvalidData(step1Data.invalidData[i])

        }
    })

})