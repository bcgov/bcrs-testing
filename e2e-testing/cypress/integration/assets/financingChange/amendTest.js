/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { myRegistrationsTablePage } from '../../../pages/assets/myRegistrationsTablePage'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import feeData from '../../../fixtures/assets/fees.json'
import registrationNumbers from '../../../fixtures/assets/registrationNumbers.json'
import authorizationData from '../../../fixtures/assets/authorizationData.json'
import { amendPage } from '../../../pages/assets/amendPage'
import amendData from '../../../fixtures/assets/amendData.json'


describe(' Registrations Change Test Suite ', function () {
    // Setup data and login as BC Service Card

    it('Registration Amendment Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        myRegistrationsTablePage.clickAmendButton(registrationNumbers.amend)

        amendPage.verifyHeader(amendData)

        amendPage.verifyLengthAndTrustIndenture(amendData)

        feeSummaryModalPage.verifyAmendmentFeeModal(feeData.feeSummary.amendment)

        amendPage.verifyRegisteringParty(amendData)

        amendPage.verifySecuredParties(amendData)

        amendPage.verifyDebtors(amendData)

        amendPage.verifyCollateral(amendData)

        amendPage.setCourtOrder(amendData)

        amendPage.verifyConfirmPage(amendData)

        feeSummaryModalPage.verifyAmendmentFeeModal(feeData.feeSummary.amendment)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)

    })

})