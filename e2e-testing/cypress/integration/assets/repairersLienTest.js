/// <reference types="Cypress" />
import { landingPage } from '../../pages/assets/landingPage'
import { addSecurityAgreementPage } from '../../pages/assets/addSecurityAgreementPage'
import { repairersLienPage } from '../../pages/assets/repairersLienPage'
import repairersLienData from '../../fixtures/assets/repairersLienData.json'
import { securityAgreementPage } from '../../pages/assets/securityAgreementPage'
import partyData from '../../fixtures/assets/partyData.json'
import debtorData from '../../fixtures/assets/debtorData.json'
import collateralData from '../../fixtures/assets/collateralData.json'

describe('PPR Dashboard test Suite ', function () {
    // Setup data and login as BC Service Card
    before(function () {
        cy.fixture('relationship/assetsBCSC').then(function (data) {
            this.data = data
            this.loginUrl = Cypress.env('PPR_DOMAIN')
            cy.bcscLogin(this.loginUrl, data.username, data.password)
        })
    })

    it('Security Agreement Test Case', function () {

        landingPage.visit(Cypress.env('PPR_DOMAIN') + '/dashboard')

        addSecurityAgreementPage.selectSecurityAgreementDropdown()

        addSecurityAgreementPage.clickRepairersLien()

        repairersLienPage.setLienAmount(repairersLienData.AmountOfLien)

        repairersLienPage.setSurrenderDate(repairersLienData.SurrenderDate)

        repairersLienPage.clickDateOkButton()

        securityAgreementPage.clickAddSecuredPartiesAndDebtorsButton()

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.clickPartyIndividualPersonButton()

        securityAgreementPage.setPartyFirstName(partyData.PartyFirstName)

        securityAgreementPage.setPartyMiddleName(partyData.PartyMiddleName)

        securityAgreementPage.setPartyLastName(partyData.PartyLastName)

        securityAgreementPage.setPartyEmailAddress(partyData.PartyEmailAddress)

        securityAgreementPage.setPartyAddressCountry(partyData.PartyCountry)

        securityAgreementPage.clickPartyAddressCountry()

        securityAgreementPage.setPartyAddressLine1Text(partyData.PartyAddressLine1)

        securityAgreementPage.clickPartyAddressText()

        securityAgreementPage.clickPartyDoneButton()

        securityAgreementPage.clickAddSecuredPartyLink()

        securityAgreementPage.clickPartyBusinessButton()

        securityAgreementPage.setPartyBusinessLegalName(partyData.PartyBusinessName)

        securityAgreementPage.clickPartyBusinessText()

        securityAgreementPage.setPartyEmailAddress(partyData.PartyEmailAddress)

        securityAgreementPage.setPartyAddressCountry(partyData.PartyCountry)

        securityAgreementPage.clickPartyAddressCountry()

        securityAgreementPage.setPartyAddressLine1Text(partyData.PartyAddressLine1)

        securityAgreementPage.clickPartyAddressText()

        securityAgreementPage.clickPartyDoneButton()

        //Debtor

        securityAgreementPage.clickAddIndividualDebtor()

        securityAgreementPage.setDebtorFirstName(debtorData.DebtorFirstName)

        securityAgreementPage.setDebtorMiddleName(debtorData.DebtorMiddleName)

        securityAgreementPage.setDebtorLastName(debtorData.DebtorLastName)

        securityAgreementPage.setDebtorBirthdateMonth(debtorData.DebtorBirthMonth)

        securityAgreementPage.clickDebtorBirthMonth()

        securityAgreementPage.setDebtorBirthdateDay(debtorData.DebtorBirthDay)

        securityAgreementPage.setDebtorBirthdateYear(debtorData.DebtorBirthYear)

        securityAgreementPage.setDebtorEmailAddress(debtorData.DebtorEmailAddress)

        securityAgreementPage.setDebtorAddressCountry(debtorData.DebtorCountry)

        securityAgreementPage.setDebtorAddressLine1(debtorData.DebtorAddressLine1)

        securityAgreementPage.clickDebtorAddressText()

        securityAgreementPage.clickDebtorDoneButton()

        securityAgreementPage.clickAddBusinessDebtor()

        securityAgreementPage.setDebtorBusinessLegalName(debtorData.DebtorBusinessName)

        securityAgreementPage.clickDebtorBusinessText()

        securityAgreementPage.setDebtorEmailAddress(debtorData.DebtorEmailAddress)

        securityAgreementPage.setDebtorAddressCountry(debtorData.DebtorCountry)

        securityAgreementPage.setDebtorAddressLine1(debtorData.DebtorAddressLine1)

        securityAgreementPage.clickDebtorAddressText()

        securityAgreementPage.clickDebtorDoneButton()

        securityAgreementPage.clickAddCollateralButton()

        securityAgreementPage.clickAddVehicleCollateral()

        securityAgreementPage.setVehicleTypeDropdown(collateralData.VehicleType)

        securityAgreementPage.setSerialOrVINNumber(collateralData.SeialOrVINNumber)

        securityAgreementPage.setYearText(collateralData.Year)

        securityAgreementPage.setMakeText(collateralData.Make)

        securityAgreementPage.setModelText(collateralData.Model)

        securityAgreementPage.clickCollateralDoneButton()

        securityAgreementPage.clickReviewAndConfirmButton()

        securityAgreementPage.setFolioNumberText(collateralData.FolioNumber)

        securityAgreementPage.clcikRegisterAndPayButton()


    })

})