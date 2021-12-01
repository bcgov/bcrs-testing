/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import partyData from '../../../fixtures/assets/partyData.json'
import debtorData from '../../../fixtures/assets/debtorData.json'
import { step2AssertionPage } from '../../../pages/assets/step2AssertionPage'
import step2Data from '../../../fixtures/assets/step2Data.json'

describe('Assertions Test Suite ', function () {

    it('Step2 Assertions Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('credentials'))

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('credentials'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('credentials'), registrationType.standard.sa)

        step2AssertionPage.clickStep2()

        step2AssertionPage.clickAddSecuredPartyLink()

        step2AssertionPage.setPartyIndividual(partyData.partyIndividual)

        step2AssertionPage.clickAddSecuredPartyLink()

        step2AssertionPage.setPartyBusiness(partyData.partyBusiness)

        step2AssertionPage.setSecuredPartyCodeOrNameLookup(partyData.securedPartyCode)

        step2AssertionPage.verifySecuredParties(step2Data)

        step2AssertionPage.setDebtorIndividual(debtorData.debtorIndividual)

        step2AssertionPage.setDebtorBusiness(debtorData.debtorBusiness)

        step2AssertionPage.verifyDebtors(step2Data)





    })

})