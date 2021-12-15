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

    it('Repairers Lien Renewal Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('credentials'))

        myRegistrationsTablePage.clickRenewButton(registrationNumbers.rlRenew)

        feeSummaryModalPage.verifyRenewalFeeModal(feeData.feeSummary.renew)

        renewPage.verifyHeader(renewalData.rlRenew)

        renewPage.verifyRenewalLengthAndTerms(renewalData.rlRenew)

        renewPage.verifyRegisteringParty(totalDischargeData)

        renewPage.verifySecuredParties(totalDischargeData)

        renewPage.verifyDebtors(totalDischargeData)

        renewPage.verifyCollateral(renewalData.rlRenew)

        renewPage.setCourtOrder(renewalData.rlRenew)

        renewPage.verifyConfirmPage(renewalData.rlRenew)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

    })

})