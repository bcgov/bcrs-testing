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
import { repairersLienPage } from '../../../pages/assets/repairersLienPage'
import repairersLienData from '../../../fixtures/assets/repairersLienData.json'

describe(' Registration Flows Test Suite ', function () {
    // Setup data and login as BC Service Card

    it('End to End Repairers Lien Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        // addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        // addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.rl)

        // repairersLienPage.setLienAmount(repairersLienData.amountOfLien)

        // repairersLienPage.setSurrenderDate(repairersLienData.surrenderDate)

        // feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.rl)

        // repairersLienPage.clickDateOkButton()

        // securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        // securityAgreementPage.clickAddSecuredPartyLink()

        // securityAgreementPage.setPartyIndividual(partyData.partyIndividual)

        // securityAgreementPage.clickAddSecuredPartyLink()

        // securityAgreementPage.setPartyBusiness(partyData.partyBusiness)

        // securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        // securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        // securityAgreementPage.clickAddCollateralButton()

        // securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.bo, true)

        // securityAgreementPage.verifyVehicleCollateral(collateralData.vehicleCollateral.bo)

        // securityAgreementPage.clickReviewAndConfirmButton()

        // securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        // securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        // securityAgreementPage.clickRegisterAndPayButton()

        // cy.wait(5000)

        //Renew Flow

        myRegistrationsTablePage.selectRegistrationFromTable()

        myRegistrationsTablePage.filterRegistration()

        myRegistrationsTablePage.selectRenewButton(registrationNumbers.rlRenew)

        feeSummaryModalPage.verifyRenewalFeeModal(feeData.feeSummary.renew)

        endtoendFlowPage.verifyRepairersLienRenewalLengthAndTerms(renewalData.rlRenew)

        renewPage.verifyRegisteringParty(totalDischargeData)

        renewPage.verifySecuredParties(totalDischargeData)

        renewPage.verifyDebtors(totalDischargeData)

        renewPage.verifyCollateral(renewalData.rlRenew)

        renewPage.setCourtOrder(renewalData.rlRenew)

        renewPage.verifyConfirmPage(renewalData.rlRenew)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        endtoendFlowPage.submitRenewal()

        cy.wait(3000)


    })

})