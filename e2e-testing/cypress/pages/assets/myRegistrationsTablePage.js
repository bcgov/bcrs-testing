/// <reference types="Cypress" />

const log = require("log");
const tab = require('cypress-plugin-tab')

export class MyRegistrationsTablePage {

    constructor() {

        this.filterByKeyword = '#my-reg-table-filter'
        this.columnsToShowDropdown = '#column-selection'
        this.registeredByCheckbox = 'div:contains("Registered By")'
        this.registeringPartyCheckbox = 'div:contains("Registering Party")'
        this.securedPartiesCheckbox = 'div:contains("Secured Parties")'
        this.folioNumberCheckbox = 'div:contains("Folio/Reference Number")'
        this.registrationNumberSearch = 'my-reg-add'
        this.amend = 'span:contains("Amend")'
        this.totalDischarge = 'span:contains("Total Discharge")'
        this.renew = 'span:contains("Renew")'
        this.removeFromTable = 'span:contains("Remove From Table")'
        this.deleteDraft = 'span:contains("Delete Draft")'
        this.actionDropdown = '.actions__more-actions__btn > .v-btn__content > .v-icon'

        //Total Discharge

        this.debtorTextbox = '#debtor-drop'
        this.selectDebtorName = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(7) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)'
        this.continueButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.clearIcon = '.v-icon notranslate v-icon--link mdi mdi-close theme--light'
        this.selectDebtorName2 = 'div:contains("PARTY FAVOUR PARTY SERVICE")'
        this.dischargePageCancelButton = '#btn-stacked-cancel'
        this.submitButton = '#btn-stacked-submit'
        this.dischargeCheckbox1 = ':nth-child(2) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
        this.dischargeCheckbox2 = ':nth-child(3) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
        this.dischargeCheckBox3 = ':nth-child(4) > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
        this.confirmPageBackbutton = '#btn-stacked-back'
        this.cautionBox = '.caution-box > .ma-0'

        // Header

        this.breadcrumbTitle = ':nth-child(5) > .v-breadcrumbs__item > .Breadcrumb_breadcrumb-text_2jfZ3'
        this.tombstoneHeader = '.tombstone-header'
        this.tombstoneSubHeader = '.tombstone-sub-header > :nth-child(1)'
        this.tombstoneRegDateandTimeTitle = 'span:contains("Base Registration Date and Time: ")'
        this.tombstoneRegDateandTime = ':nth-child(1) > .ml-16 > .row > .pl-3'
        this.tombstoneCurrentExpiryTitle = 'span:contains("Current Expiry Date and Time: ")'
        this.tombstoneCurrentExpiryDate = '.tombstone-sub-header > .ml-16 > .row > .pl-3'
        this.dischargeTitle = 'h1:contains("Total Discharge")'
        
        // Registration Length and Trust Indenture

        this.step1Title = 'label:contains("Registration Length and Trust Indenture")'
        this.registrationLength = '#length-trust-summary > .container > :nth-child(1) > .generic-label'
        this.registrationLengthInYears = '#registration-length'
        this.trustIndenture = '.pt-6 > .generic-label'
        this.trustIndentureValue = '#trust-indenture-summary'

        // Registering Party

        this.step2Title = 'label:contains("Registering Party, Secured Parties, and Debtors")'
        this.registeringPartyTitle = 'h3:contains("Original Registering Party")'
        this.registeringPartyName = ':nth-child(7) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title > .row > .col-9 > div'
        this.registeringPartyAddress = ':nth-child(7) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        
        //Secured Parties

        this.securedPartiesTitle = 'h3:contains("Secured Parties")'
        this.individualPersonName = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > div'
        this.individualPartyAddress = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualPartyEmail = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualBusinessName = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title > .row > .col-9 > div'
        this.individualBusinessAddress = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.individualBusinessEmail = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'
        this.individualPartyBusinessName = ':nth-child(3) > .list-item__title > .row > .col-9 > div'
        this.individualPartyBusinessAddress = 'tbody > :nth-child(3) > :nth-child(2)'
        this.securedPartyCode = ':nth-child(3) > :nth-child(4)'

        // Debtors

        this.debtorTitle = 'h3:contains("Debtors")'
        this.individualDebtorName = ':nth-child(11) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > div'
        this.individualDebtorAddress = ':nth-child(11) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualDebtorEmail = ':nth-child(11) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualDebtorBirthdate = 'td:contains("April 20, 1965")'
        this.businessDebtorName = ':nth-child(11) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title > .row > .col-9 > div'
        this.businessDebtorAddress = ':nth-child(11) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.businessDebtorEmail = ':nth-child(11) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

        // Collateral

        this.step3Title = '#collateral-summary > .summary-header > .pa-2'
        this.vehicleCollateralTitle = '.row > .pt-4'
        this.vehicleType = '.VehicleCollateral_summary-cell_3VJKw > div'
        this.vehicleYear = 'td:contains("2020")'
        this.vehicleMake = 'td:contains("GMC")'
        this.vehicleModel = 'td:contains("SIERRA 1500")'
        this.vehicleSerialNumber = '.VehicleCollateral_vehicle-cell_2yvB9'
        this.generalCollateralTitle = '.col-10 > h3'
        this.viewGeneralCollateralLink = '.v-btn__content > .ma-0'
        this.gcDateAndTime = '.general-collateral-summary > .row > .col > :nth-child(1)'
        this.collateralDescriptionTitle = '.gc-description > b'
        this.collateralDescription = '.gc-description > .pt-5'

        // Confirm Page

        this.dischargeInfo = '[style="padding-top: 25px; max-width: 875px;"] > .ma-0'
        this.registeringPartyDischargeTitle = '[style="min-width: 960px;"] > :nth-child(1) > :nth-child(1) > .pt-14'
        this.folioNumberTitle = '.generic-label > h2'
        this.folioInfo = '.pb-6 > .col'
        this.folioTextbox = '#txt-folio'
        this.confirmTitle = 'h2.pt-15'
        this.confirmInfo = 'p.pt-4'
        this.cofirmModalTitle = '.mt-6 > .row > .generic-label'
        this.summaryRegNumber = '.summary-info > :nth-child(1)'
        this.summaryRegType = '.summary-info > :nth-child(2)'
        this.summaryCollateral = '.summary-info > :nth-child(3)'
        this.confirmCheckbox1 = ':nth-child(2) > .v-input__control > .v-input__slot > .v-label'
        this.confirmCheckbox2 = ':nth-child(3) > .v-input__control > .v-input__slot > .v-label > .ma-0'
        this.confirmCheckbox3 = ':nth-child(4) > .v-input__control > .v-input__slot > .v-label'

    
    }

    clickTotalDischargeButton(data) {

        cy.get(this.filterByKeyword).type(data.registrationNumber)
        cy.get(this.actionDropdown).click()
        cy.get(this.totalDischarge).click()
        cy.get(this.debtorTextbox).type(data.debtorName)
        cy.wait(2000)
        cy.get(this.debtorTextbox).type('{enter}')
        cy.get(this.continueButton).click()
        cy.log("Entered into Review Page")

    }

    verifyCautionBox(data) {

        cy.get(this.cautionBox).should('have.text', data.cautionBox)
        cy.log("Verified Caution Box")

    }

    verifyRegistrationLengthAndTrustIndenture(data){

        cy.get(this.step1Title).should('have.text', data.step1Title)
        cy.get(this.registrationLength).should('have.text', data.registrationLength)
        cy.get(this.registrationLengthInYears).should('have.text', data.registrationLengthInYears)
        cy.get(this.trustIndenture).should('have.text', data.trustIndenture)
        cy.get(this.trustIndentureValue).should('have.text', data.trustIndentureValue)
        cy.log("verified Registration Length and Trust Indenture")

    }

    verifyRegisteringParty(data) {

        cy.get(this.step2Title).should('have.text', data.step2Title)
        cy.get(this.registeringPartyTitle).should('have.text', data.registeringPartyTitle)
        cy.get(this.registeringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.registeringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.log("Verified Original Registering Party")
    }

    verifySecuredParties(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.individualPersonName).should('have.text', data.individualPersonName)
        cy.get(this.individualPartyAddress).should('have.text', data.individualPartyAddress)
        cy.get(this.individualPartyEmail).should('have.text', data.individualPartyEmail)
        cy.get(this.individualBusinessName).should('have.text', data.individualBusinessName)
        cy.get(this.individualBusinessAddress).should('have.text', data.individualBusinessAddress)
        cy.get(this.individualBusinessEmail).should('have.text', data.individualBusinessEmail)
        cy.get(this.individualPartyBusinessName).should('have.text', data.individualPartyBusinessName)
        cy.get(this.individualPartyBusinessAddress).should('have.text', data.individualPartyBusinessAddress)
        cy.get(this.securedPartyCode).should('have.text', data.securedPartyCode)
        cy.log("Verified Secured Parties")
    }

    verifyDebtors(data) {
        cy.get(this.debtorTitle).should('have.text', data.debtorTitle)
        cy.get(this.individualDebtorName).should('have.text', data.individualDebtorName)
        cy.get(this.individualDebtorAddress).should('have.text', data.individualDebtorAddress)
        cy.get(this.individualDebtorEmail).should('have.text', data.individualDebtorEmail)
        cy.get(this.individualDebtorBirthdate).should('have.text', data.individualDebtorBirthdate)
        cy.get(this.businessDebtorName).should('have.text', data.businessDebtorName)
        cy.get(this.businessDebtorAddress).should('have.text', data.businessDebtorAddress)
        cy.get(this.businessDebtorEmail).should('have.text', data.businessDebtorEmail)
        cy.log("Verified Debtors")
    }

    verifyCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3Title)
        cy.get(this.vehicleCollateralTitle).should('have.text', data.vehicleCollateralTitle)
        cy.get(this.vehicleType).should('have.text', data.vehicleType)
        cy.get(this.vehicleYear).should('have.text', data.vehicleYear)
        cy.get(this.vehicleMake).should('have.text', data.vehicleMake)
        cy.get(this.vehicleModel).should('have.text', data.vehicleModel)
        cy.get(this.vehicleSerialNumber).should('have.text', data.vehicleSerialNumber)
        cy.get(this.generalCollateralTitle).should('have.text', data.generalCollateralTitle)
        cy.get(this.viewGeneralCollateralLink).click()
        cy.get(this.gcDateAndTime).should('have.text', data.gcDateAndTime)
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.collateralDescription)
        cy.log("Verified Collateral")
    }

    verifyHeader(data) {
        cy.get(this.breadcrumbTitle).should('have.text', data.breadcrumbTitle)
        cy.get(this.tombstoneHeader).should('have.text', data.tombstoneHeader)
        cy.get(this.tombstoneSubHeader).should('have.text', data.tombstoneSubHeader)
        cy.get(this.tombstoneRegDateandTimeTitle).should('have.text', data.tombstoneRegDateandTimeTitle)
        cy.get(this.tombstoneRegDateandTime).should('have.text', data.tombstoneRegDateandTime)
        cy.get(this.tombstoneCurrentExpiryTitle).should('have.text', data.tombstoneCurrentExpiryTitle)
        cy.get(this.tombstoneCurrentExpiryDate).should('have.text', data.tombstoneCurrentExpiryDate)
        cy.get(this.dischargeTitle).should('have.text', data.dischargeTitle)
        cy.log("Verified Total Discharge Header")
    }

    verifyConfirmPage(data) {
        cy.get(this.submitButton).click()
        cy.get(this.dischargeInfo).should('have.text', data.dischargeInfo)
        cy.get(this.registeringPartyDischargeTitle).should('have.text', data.registeringPartyDischargeTitle)
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data. folioInfo)
        cy.get(this.folioTextbox).type(data.folioTextbox)
        cy.get(this.confirmTitle).should('have.text', data.confirmTitle)
        cy.get(this.confirmInfo).should('have.text', data.confirmInfo)
        cy.get(this.cofirmModalTitle).should('have.text', data.cofirmModalTitle)
        cy.get(this.summaryRegNumber).should('have.text', data.summaryRegNumber)
        cy.get(this.summaryRegType).should('have.text', data.summaryRegType)
        cy.get(this.summaryCollateral).should('have.text', data.summaryCollateral)
        cy.get(this.confirmCheckbox1).should('have.text', data.confirmCheckbox1)
        cy.get(this.confirmCheckbox2).should('have.text', data.confirmCheckbox2)
        cy.get(this.confirmCheckbox3).should('have.text', data.confirmCheckbox3)
        cy.get(this.dischargeCheckbox1).click()
        cy.get(this.dischargeCheckbox2).click()
        cy.get(this.dischargeCheckBox3).click()
        cy.log("Verified Confirm Page")

    }


}
export const myRegistrationsTablePage = new MyRegistrationsTablePage()