/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import { marriageOrSeparationAgreementPage } from '../../../pages/assets/marriageOrSeparationAgreementPage'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import partyData from '../../../fixtures/assets/partyData.json'
import debtorData from '../../../fixtures/assets/debtorData.json'
import collateralData from '../../../fixtures/assets/collateralData.json'
import feeData from '../../../fixtures/assets/fees.json'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import authorizationData from '../../../fixtures/assets/authorizationData.json'


describe('Standard Registrations Test Suite ', function () {
    // Setup data and login as BC Service Card
    
    it('Land Tax Deferment Lien on a Manufactured Home (LT) Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.lt)

        marriageOrSeparationAgreementPage.verifyRegistrationLength(partyData.lengthOfRegistration)

        feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.lt)

        securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyIndividual(partyData.partyIndividual)

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyBusiness(partyData.partyBusiness)

        securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        securityAgreementPage.clickAddCollateralButton()

        securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.mh, false)

        securityAgreementPage.verifyVehicleCollateral(collateralData.vehicleCollateral.mh)

        securityAgreementPage.clickReviewAndConfirmButton()

        securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        securityAgreementPage.clickRegisterAndPayButton()

    })

})