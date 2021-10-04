/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import partyData from '../../../fixtures/assets/partyData.json'
import debtorData from '../../../fixtures/assets/debtorData.json'
import collateralData from '../../../fixtures/assets/collateralData.json'
import feeData from '../../../fixtures/assets/fees.json'
import credentials from '../../../fixtures/relationship/assetsBCSC.json'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import gcData from '../../../fixtures/assets/gcData.json'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'


describe('Standard Registrations Test Suite ', function () {
    // Setup data and login as BC Service Card
    // before(function () {
    //     cy.fixture('relationship/assetsBCSC').then(function (data) {
    //         this.data = data
    //         this.loginUrl = Cypress.env('PPR_DOMAIN')
    //         cy.wait(5000)
    //         cy.bcscLogin(this.loginUrl, data.username, data.password)
    //     })
    // })

    it('Security Agreement Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(credentials)

        addSecurityAgreementPage.selectSecurityAgreementDropdown(credentials.type)

        addSecurityAgreementPage.selectStandardRegistrations(credentials.type, registrationType.standard.sa)

        //addSecurityAgreementPage.clickSecurityAgreement(credentials.type)

        //securityAgreementPage.clickRegistrationLengthRadioButton()

        securityAgreementPage.setLengthInYearsTextField(partyData.partyIndividual.lengthInYears)

        feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.sa)

        securityAgreementPage.clickRegistrationLengthInfiniteButton()

        securityAgreementPage.clickRegistrationLengthRadioButton()

        securityAgreementPage.setLengthInYearsTextField(partyData.partyIndividual.lengthInYears)

        securityAgreementPage.clickTrustIndentureCheckbox()

        securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyIndividual(partyData.partyIndividual)

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyBusiness(partyData.partyBusiness)

        securityAgreementPage.setSecuredPartyCodeOrNameLookup(partyData.securedPartyCode)

        securityAgreementPage.clickSaveAndResumeLater()

        securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        securityAgreementPage.clickAddCollateralButton()

        securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.mv, true)

        securityAgreementPage.verifyVehicleCollateral(collateralData.vehicleCollateral)

        securityAgreementPage.setGeneralCollateralText(gcData.collateralDescription.sa)

        securityAgreementPage.clickReviewAndConfirmButton()

        securityAgreementPage.verifyGeneralCollateral(gcData.collateralDescription.sa)

        securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        securityAgreementPage.clickRegisterAndPayButton()




    })

})