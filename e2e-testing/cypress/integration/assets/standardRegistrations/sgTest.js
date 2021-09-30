/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import partyData from '../../../fixtures/assets/partyData.json'
import debtorData from '../../../fixtures/assets/debtorData.json'
import collateralData from '../../../fixtures/assets/collateralData.json'
import credentials from '../../../fixtures/relationship/assetsBCSC.json'
import feeData from '../../../fixtures/assets/fees.json'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import gcData from '../../../fixtures/assets/gcData.json'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'


describe('PPR Dashboard test Suite ', function () {
    // Setup data and login as BC Service Card
   
    it('Security Agreement Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(credentials)

        addSecurityAgreementPage.selectSecurityAgreementDropdown(credentials.type)

        addSecurityAgreementPage.selectStandardRegistrations(credentials.type, registrationType.standard.sg)

        securityAgreementPage.setLengthInYearsTextField(partyData.partyIndividual.lengthInYears)

        feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.sg)

        securityAgreementPage.clickRegistrationLengthInfiniteButton()

        securityAgreementPage.clickRegistrationLengthRadioButton()

        securityAgreementPage.setLengthInYearsTextField(partyData.partyIndividual.lengthInYears)

        securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyIndividual(partyData.partyIndividual)

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyBusiness(partyData.partyBusiness)

        securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        securityAgreementPage.clickAddCollateralButton()

        securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.tr, true)

        securityAgreementPage.verifyVehicleCollateral(collateralData.vehicleCollateral)

        securityAgreementPage.setGeneralCollateralText(gcData.collateralDescription.sg)

        securityAgreementPage.clickReviewAndConfirmButton()

        securityAgreementPage.verifyGeneralCollateral(gcData.collateralDescription.sg)

        securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        securityAgreementPage.clickRegisterAndPayButton()

    })

})