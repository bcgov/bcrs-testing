/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { myRegistrationsTablePage } from '../../../pages/assets/myRegistrationsTablePage'
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
import registrationNumbers from '../../../fixtures/assets/registrationNumbers.json'
import { renewPage } from '../../../pages/assets/renewPage'
import renewalData from '../../../fixtures/assets/renewalData.json'
import totalDischargeData from '../../../fixtures/assets/totalDischargeData.json'
import { endtoendFlowPage } from '../../../pages/assets/endtoendFlowPage'
import { amendPage } from '../../../pages/assets/amendPage'
import amendData from '../../../fixtures/assets/amendData.json'


describe(' Registration Flows Test Suite ', function () {
    // Setup data and login as BC Service Card

    it('End to End Registration Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.sa)

        securityAgreementPage.setLengthInYearsTextField(feeData.feeSummary.sa.setYears)

        feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.sa)

        securityAgreementPage.clickRegistrationLengthInfiniteButton()

        securityAgreementPage.clickRegistrationLengthRadioButton()

        securityAgreementPage.setLengthInYearsTextField(feeData.feeSummary.sa.setYears)

        securityAgreementPage.clickTrustIndentureCheckbox()

        securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyIndividual(partyData.partyIndividual)

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.setPartyBusiness(partyData.partyBusiness)

        securityAgreementPage.setSecuredPartyCodeOrNameLookup(partyData.securedPartyCode)

        securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        securityAgreementPage.clickAddCollateralButton()

        securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.mv, true)

        securityAgreementPage.setGeneralCollateralText(gcData.collateralDescription.sa.description)

        securityAgreementPage.clickReviewAndConfirmButton()

        securityAgreementPage.verifyGeneralCollateral(gcData.collateralDescription.sa.description)

        securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        securityAgreementPage.clickRegisterAndPayButton()

        cy.wait(5000)

        //Renew Flow

        myRegistrationsTablePage.selectRegistrationFromTable()

        myRegistrationsTablePage.filterRegistration()

        myRegistrationsTablePage.selectRenewButton(registrationNumbers.regRenew)

        renewPage.verifyInfiniteLength(renewalData.regRenew)

        feeSummaryModalPage.verifyInfiniteRenewalFeeModal(feeData.feeSummary.regRenewInfinite)

        endtoendFlowPage.verifyRegRenewalLengthInYears(renewalData.regRenew)

        feeSummaryModalPage.verifyRegistrationRenewalFeeModal(feeData.feeSummary.regRenewInYears)

        renewPage.verifyRegisteringParty(totalDischargeData)

        renewPage.verifySecuredParties(totalDischargeData)

        renewPage.verifyDebtors(totalDischargeData)

        endtoendFlowPage.verifyRenewalCollateral(renewalData.regRenew)

        endtoendFlowPage.verifyRenewalConfirmPage(renewalData.regRenew)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        endtoendFlowPage.submitRenewal()

        cy.wait(3000)

        //Amend Flow

        // myRegistrationsTablePage.selectRegistrationFromTable()

        // myRegistrationsTablePage.filterRegistration()

        myRegistrationsTablePage.selectAmendButton(registrationNumbers.amend)

        amendPage.verifyLengthAndTrustIndenture(amendData)

        feeSummaryModalPage.verifyAmendmentFeeModal(feeData.feeSummary.amendment)

        amendPage.verifyRegisteringParty(amendData)

        amendPage.verifySecuredParties(amendData)

        amendPage.verifyDebtors(amendData)

        amendPage.verifyCollateral(amendData)

        amendPage.setCourtOrder(amendData)

        endtoendFlowPage.verifyAmendConfirmPage(amendData)

        feeSummaryModalPage.verifyAmendmentFeeModal(feeData.feeSummary.amendment)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        endtoendFlowPage.submitAmendment()

        cy.wait(3000)

        //Discharge Flow

        // myRegistrationsTablePage.selectRegistrationFromTable()

        // myRegistrationsTablePage.filterRegistration()

        myRegistrationsTablePage.selectDischargeButton(registrationNumbers.discharge)

        feeSummaryModalPage.verifyTotalDischargeFeeModal(feeData.feeSummary.totalDischarge)

        myRegistrationsTablePage.verifyCautionBox(totalDischargeData)

        endtoendFlowPage.verifyRegistrationLengthAndTrustIndenture(totalDischargeData)

        myRegistrationsTablePage.verifyRegisteringParty(totalDischargeData)

        endtoendFlowPage.verifySecuredParties(totalDischargeData)

        myRegistrationsTablePage.verifyDebtors(totalDischargeData)

        myRegistrationsTablePage.verifyCollateral(totalDischargeData)

        myRegistrationsTablePage.verifyConfirmPage(totalDischargeData)

        feeSummaryModalPage.verifyTotalDischargeFeeModal(feeData.feeSummary.totalDischarge)

        endtoendFlowPage.verifyConfirmAuthorization(authorizationData)

        endtoendFlowPage.submitDischarge(totalDischargeData)



    })

})