/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { myRegistrationsTablePage } from '../../../pages/assets/myRegistrationsTablePage'
import credentials from '../../../fixtures/relationship/assetsBCSC.json'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import feeData from '../../../fixtures/assets/fees.json'
import registrationNumbers from '../../../fixtures/assets/registrationNumbers.json'
import totalDischargeData from '../../../fixtures/assets/totalDischargeData.json'


describe('Crown Charge Registrations Test Suite ', function () {
    // Setup data and login as BC Service Card

    it('Other Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('credentials'))

        myRegistrationsTablePage.clickTotalDischargeButton(registrationNumbers)

        feeSummaryModalPage.verifyTotalDischargeFeeModal(feeData.feeSummary.totalDischarge)

        myRegistrationsTablePage.verifyCautionBox(totalDischargeData)

        myRegistrationsTablePage.verifyRegistrationLengthAndTrustIndenture(totalDischargeData)

        myRegistrationsTablePage.verifyRegisteringParty(totalDischargeData)

        myRegistrationsTablePage.verifySecuredParties(totalDischargeData)

        myRegistrationsTablePage.verifyDebtors(totalDischargeData)

        myRegistrationsTablePage.verifyCollateral(totalDischargeData)

        myRegistrationsTablePage.verifyHeader(totalDischargeData)

        myRegistrationsTablePage.verifyConfirmPage(totalDischargeData)
        
        myRegistrationsTablePage.verifyHeader(totalDischargeData)



    })

})