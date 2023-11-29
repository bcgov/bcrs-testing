/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import partyData from '../../../fixtures/assets/partyData.json'
import debtorData from '../../../fixtures/assets/debtorData.json'
import collateralData from '../../../fixtures/assets/collateralData.json'
import feeData from '../../../fixtures/assets/fees.json'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import gcData from '../../../fixtures/assets/gcData.json'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import authorizationData from '../../../fixtures/assets/authorizationData.json'


describe('Standard Registrations Test Suite ', function () {
    // Setup data and login as BC Service Card
   
    it('Possession under S.30 of the Sale of Goods Act (SG) Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.sg)

        securityAgreementPage.clickRegistrationLengthInfiniteButton()

        feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.sg)

        securityAgreementPage.clickRegistrationLengthInfiniteButton()

        securityAgreementPage.clickRegistrationLengthInfiniteButton()

        securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyIndividual(partyData.partyIndividual)

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyBusiness(partyData.partyBusiness)

        securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        securityAgreementPage.clickAddCollateralButton()

        securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.tr, true)

       // securityAgreementPage.verifyVehicleCollateral(collateralData.vehicleCollateral)

        securityAgreementPage.setGeneralCollateralText(gcData.collateralDescription.sg.description)

        securityAgreementPage.clickReviewAndConfirmButton()

        securityAgreementPage.verifyGeneralCollateral(gcData.collateralDescription.sg.description)

        securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        securityAgreementPage.clickRegisterAndPayButton()

    })

})