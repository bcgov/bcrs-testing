/// <reference types="Cypress" />
import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import { repairersLienPage } from '../../../pages/assets/repairersLienPage'
import repairersLienData from '../../../fixtures/assets/repairersLienData.json'
import { securityAgreementPage } from '../../../pages/assets/securityAgreementPage'
import partyData from '../../../fixtures/assets/partyData.json'
import debtorData from '../../../fixtures/assets/debtorData.json'
import collateralData from '../../../fixtures/assets/collateralData.json'
import feeData from '../../../fixtures/assets/fees.json'
import { feeSummaryModalPage } from '../../../pages/assets/feeSummaryModalPage'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import authorizationData from '../../../fixtures/assets/authorizationData.json'

describe('Standard Registrations Test Suite ', function () {
  // Setup data and login as BC Service Card

  it('Repairers Lien (RL) Test Case', function () {

    landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

    landingPage.clickLoginDropdown()

    landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD') )

    addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

    addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.rl)

    repairersLienPage.setLienAmount(repairersLienData.amountOfLien)

    repairersLienPage.setSurrenderDate(repairersLienData.surrenderDate)

    feeSummaryModalPage.verifyFeeSummaryModal(feeData.feeSummary.rl)

    securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

    securityAgreementPage.clickAddSecuredPartyLink()

    securityAgreementPage.setPartyIndividual(partyData.partyIndividual)

    securityAgreementPage.clickAddSecuredPartyLink()

    securityAgreementPage.setPartyBusiness(partyData.partyBusiness)

    securityAgreementPage.setDebtorIndividual(debtorData.debtorIndividual)

    securityAgreementPage.setDebtorBusiness(debtorData.debtorBusiness)

    securityAgreementPage.clickAddCollateralButton()

    securityAgreementPage.setVehicleCollateral(collateralData.vehicleCollateral.bo, true)

    securityAgreementPage.verifyVehicleCollateral(collateralData.vehicleCollateral.bo)

    securityAgreementPage.clickReviewAndConfirmButton()

    securityAgreementPage.setFolioNumberText(collateralData.folioNumber)

    securityAgreementPage.verifyConfirmAuthorization(authorizationData)

    securityAgreementPage.clickRegisterAndPayButton()

  })

})