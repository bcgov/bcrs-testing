/// <reference types="Cypress" />

import { landingPage } from '../../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../../pages/assets/addSecurityAgreementPage'
import registrationType from '../../../fixtures/assets/registrationTypesData.json'
import { step3AssertionPage } from '../../../pages/assets/step3AssertionPage'
import collateralData from '../../../fixtures/assets/collateralData.json'

describe('Assertions Test Suite ', function () {

    it('Step2 Assertions Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        landingPage.clickVirtualCardTestingButton()

        landingPage.bcscLogin(Cypress.env('BCSC_USERNAME'), Cypress.env('BCSC_PASSWORD'))

        addSecurityAgreementPage.selectSecurityAgreementDropdown(Cypress.env('TYPE'))

        addSecurityAgreementPage.selectStandardRegistrations(Cypress.env('TYPE'), registrationType.standard.sa)

        step3AssertionPage.clickStep3()

        step3AssertionPage.setVehicleCollateral(collateralData.vehicleCollateral.mv)

        step3AssertionPage.setVehicleCollateral(collateralData.vehicleCollateral.bo)

        step3AssertionPage.setVehicleCollateral(collateralData.vehicleCollateral.tr)

        step3AssertionPage.setVehicleCollateral(collateralData.vehicleCollateral.om)

        step3AssertionPage.setVehicleCollateral(collateralData.vehicleCollateral.mh)

        step3AssertionPage.setVehicleCollateral(collateralData.vehicleCollateral.ac)

        step3AssertionPage.setVehicleCollateral(collateralData.vehicleCollateral.af)

        step3AssertionPage.verifyVehicleCollateralEditModal(collateralData)

        step3AssertionPage.verifyVehicleCollateral(collateralData.vehicleCollateral.mv)


        
    })

})