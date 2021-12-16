/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { myRegistrationsTablePage } from '../../../pages/assets/myRegistrationsTablePage'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import feeData from '../../../fixtures/assets/fees.json'
import registrationNumbers from '../../../fixtures/assets/registrationNumbers.json'
import totalDischargeData from '../../../fixtures/assets/totalDischargeData.json'
import authorizationData from '../../../fixtures/assets/authorizationData.json'

describe('Registrations Change Test Suite ', function () {
    // Setup data and login as BC Service Card

    it('Total Discharge Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        myRegistrationsTablePage.clickTotalDischargeButton(registrationNumbers.discharge)

        myRegistrationsTablePage.verifyHeader(totalDischargeData)

        feeSummaryModalPage.verifyTotalDischargeFeeModal(feeData.feeSummary.totalDischarge)

        myRegistrationsTablePage.verifyCautionBox(totalDischargeData)

        myRegistrationsTablePage.verifyRegistrationLengthAndTrustIndenture(totalDischargeData)

        myRegistrationsTablePage.verifyRegisteringParty(totalDischargeData)

        myRegistrationsTablePage.verifySecuredParties(totalDischargeData)

        myRegistrationsTablePage.verifyDebtors(totalDischargeData)

        myRegistrationsTablePage.verifyCollateral(totalDischargeData)

        myRegistrationsTablePage.verifyConfirmPage(totalDischargeData)

        securityAgreementPage.verifyConfirmAuthorization(authorizationData)
        
        myRegistrationsTablePage.verifyHeader(totalDischargeData)



    })

})