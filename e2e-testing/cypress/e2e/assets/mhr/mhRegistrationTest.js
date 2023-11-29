/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import { mhrRegistrationPage } from '../../../pages/assets/mhr/mhrRegistrationPage'
import step1Data from '../../../fixtures/assets/mhr/step1Data.json'
import step2Data from '../../../fixtures/assets/mhr/step2Data.json'


describe('Staff Flow Test Suite ', function () {

    it('BC Registry Staff MH Registration Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DEV_URL'))

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_WITH_IDIR_ROLE_USERNAME'), Cypress.env('BCSC_WITH_IDIR_ROLE_PASSWORD'))

        landingPage.visit(Cypress.env('PPR_DEV_URL'))

        landingPage.clickStaffAssetRegistriesButton()

        mhrRegistrationPage.selectMHRTab()

        mhrRegistrationPage.clickRegisterMHButton()

        mhrRegistrationPage.setManufacturerMakeAndModel(step1Data['manufacurer,make,model'])

        mhrRegistrationPage.setHomeSections(step1Data.homeSections)

        mhrRegistrationPage.setHomeCertification(step1Data.homeCertification)

        mhrRegistrationPage.setRebuiltStatus(step1Data.rebuiltStatus)

        mhrRegistrationPage.setOtherInformation(step1Data.otherInfo)

        mhrRegistrationPage.clickRegistrationNextButton()

        //mhrRegistrationPage.addSubmittingPartyIndividualPerson(step2Data.submittingPartyIndividual)

        //mhrRegistrationPage.addSubmittingPartyBusiness(step2Data.submittingPartyBusiness)

        //mhrRegistrationPage.setSubmittingPartyCodeLookup(step2Data.submittingPartyCode)

        mhrRegistrationPage.setSubmittingPartyNameLookup(step2Data.submittingPartyName)

    })

})