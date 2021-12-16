/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { myRegistrationsTablePage } from '../../../pages/assets/myRegistrationsTablePage'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import feeData from '../../../fixtures/assets/fees.json'
import registrationNumbers from '../../../fixtures/assets/registrationNumbers.json'
import totalDischargeData from '../../../fixtures/assets/totalDischargeData.json'
import renewalData from '../../../fixtures/assets/renewalData.json'
import { renewPage } from '../../../pages/assets/renewPage'
import authorizationData from '../../../fixtures/assets/authorizationData.json'


describe(' Registrations Change Test Suite ', function () {
    // Setup data and login as BC Service Card

    it('Registration Renewal Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        myRegistrationsTablePage.clickRenewButton(registrationNumbers.regRenew)

        renewPage.verifyRenewalHeader(renewalData.regRenew)

        renewPage.verifyInfiniteLength(renewalData.regRenew)

        feeSummaryModalPage.verifyInfiniteRenewalFeeModal(feeData.feeSummary.regRenewInfinite)

        renewPage.verifyRegRenewalLengthInYears(renewalData.regRenew)

        feeSummaryModalPage.verifyRegistrationRenewalFeeModal(feeData.feeSummary.regRenewInYears)

        renewPage.verifyRegisteringParty(totalDischargeData)

        renewPage.verifySecuredParties(totalDischargeData)

        renewPage.verifyDebtors(totalDischargeData)

        renewPage.verifyRenewalCollateral(renewalData.regRenew)

        renewPage.verifyRenewalConfirmPage(renewalData.regRenew)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)


    })

})