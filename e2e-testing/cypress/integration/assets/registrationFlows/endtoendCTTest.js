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
import authorizationData from '../../../fixtures/assets/authorizationData.json'
import { myRegistrationsTablePage } from '../../../pages/assets/myRegistrationsTablePage'
import { amendPage } from '../../../pages/assets/amendPage'
import amendData from '../../../fixtures/assets/amendData.json'
import registrationNumbers from '../../../fixtures/assets/registrationNumbers.json'
import { endtoendFlowPage } from '../../../pages/assets/endtoendFlowPage'

describe('Crown Charge Registrations Test Suite ', function () {
    // Setup data and login as BC Service Card
    
    it('Carbon Tax Act Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickLoginDropdown()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        // addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        // addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.crownCharge.ct)

        // marriageOrSeparationAgreementPage.verifyRegistrationLength(partyData.lengthOfRegistration)

        // feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.ct)

        // securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        // securityAgreementPage.setSecuredParty(partyData.securedPartyDropdown.partyCode)

        // securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

        // securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

        // securityAgreementPage.clickAddCollateralButton()

        // securityAgreementPage.clickReviewAndConfirmButton()

        // securityAgreementPage.verifyGeneralCollateral(gcData.collateralDescription.ct.description)

        // securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

        // securityAgreementPage.verifyConfirmAuthorization(authorizationData)

        // securityAgreementPage.clickRegisterAndPayButton()

        // cy.wait(5000)

        //Renew Flow

        myRegistrationsTablePage.selectRegistrationFromTable()

        myRegistrationsTablePage.filterRegistration()

        myRegistrationsTablePage.selectAmendButton(registrationNumbers.amend)

        amendPage.verifyCurrentExpiry(amendData)

        feeSummaryModalPage.verifyAmendmentFeeModal(feeData.feeSummary.ctAmendment)

        amendPage.verifyRegisteringParty(amendData)

        amendPage.verifyCTSecuredParties(amendData)

        amendPage.verifyDebtors(amendData)

        amendPage.verifyCTCollateral(amendData)

        amendPage.setCourtOrder(amendData)

        endtoendFlowPage.verifyAmendConfirmPage(amendData)

        





    })

})