/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import { step2AssertionPage } from '../../../pages/assets/step2AssertionPage'
import { pprFieldValidationsPage } from '../../../pages/assets/pprFieldValidationsPage'
import fieldValidationsData from '../../../fixtures/assets/fieldValidationsData.json'

describe('Assertions Test Suite ', function () {

    it('Step1 Assertions Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.sa)

        step2AssertionPage.clickStep2()

        pprFieldValidationsPage.clickAddSecuredPartyLink()

        pprFieldValidationsPage.setPartyIndividual(fieldValidationsData.securedParty)

        pprFieldValidationsPage.verifyPartyIndividualFieldValidations(fieldValidationsData.validations)
       

    })

})