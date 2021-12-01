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
import gcData from '../../../fixtures/assets/gcData.json'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'


describe('Other Registrations Test Suite ', function () {
    // Setup data and login as BC Service Card
    
    it('Proceeds of Crime Notice Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('credentials'))

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('credentials'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('credentials'), registrationType.other.pn)

        marriageOrSeparationAgreementPage.verifyRegistrationLength(partyData.lengthOfRegistration)

        feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.pn)

        securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        securityAgreementPage.setSecuredParty(partyData.securedPartyDropdown.partyCode)

        securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        securityAgreementPage.clickAddCollateralButton()

        securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.mv, true)

        securityAgreementPage.verifyVehicleCollateral(collateralData.vehicleCollateral.mv)

        securityAgreementPage.setGeneralCollateralText(gcData.collateralDescription.pn.description)

        securityAgreementPage.clickReviewAndConfirmButton()

        securityAgreementPage.verifyGeneralCollateral(gcData.collateralDescription.pn.description)

        securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        securityAgreementPage.clickConfirmAuthorization()

        securityAgreementPage.clickRegisterAndPayButton()

    })

})