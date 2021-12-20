/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import { step4AssertionPage } from "../../../pages/assets/step4AssertionPage";
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import step4Data from "../../../fixtures/assets/step4Data.json"


describe('Assertions Test Suite ', function () {

    it('Step4 Assertions Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.sa)

        step4AssertionPage.clickStep4(step4Data)

        step4AssertionPage.verifyRegistrationLengthAndTrustIndenture(step4Data)

        step4AssertionPage.clickStep4(step4Data)

        step4AssertionPage.verifySecuredParties(step4Data)

        step4AssertionPage.clickStep4(step4Data)

        step4AssertionPage.verifyDebtors(step4Data)

        step4AssertionPage.clickStep4(step4Data)

        step4AssertionPage.verifyCollateral(step4Data)

        step4AssertionPage.clickStep4(step4Data)




    })

})