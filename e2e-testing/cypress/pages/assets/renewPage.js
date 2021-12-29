/// <reference types="Cypress" />

const log = require("log");

export class RenewPage {

    constructor() {

        //Summary Page Header

        this.breadcrumbTitle = ':nth-child(5) > .v-breadcrumbs__item > .Breadcrumb_breadcrumb-text_2jfZ3'
        this.tombstoneHeader = '.tombstone-header'
        this.tombstoneSubHeader = '.tombstone-sub-header > :nth-child(1)'
        this.tombstoneRegDateandTimeTitle = 'span:contains("Base Registration Date and Time: ")'
        this.tombstoneRegDateandTime = ':nth-child(1) > .ml-16 > .row > .pl-3'
        this.tombstoneCurrentExpiryTitle = 'span:contains("Current Expiry Date and Time: ")'
        this.tombstoneCurrentExpiryDate = '.tombstone-sub-header > .ml-16 > .row > .pl-3'
        this.renewTitle = 'h1:contains("Renewal")'

        // Renewal Length & Terms

        this.step1Title = 'label:contains("Renewal Length and Terms")'
        this.renewalLength = ':nth-child(2) > .summary-text'
        this.newExpiry = '#new-expiry-rl'
        this.amountOfLien = ':nth-child(6) > .summary-text'
        this.surrenderDate = '#surrender-date'

        // Registering Party

        this.step2Title = 'label:contains("Registering Party, Secured Parties, and Debtors")'
        this.registeringPartyTitle = 'h3:contains("Original Registering Party")'
        this.registeringPartyName = ':nth-child(6) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title'
        this.registeringPartyAddress = ':nth-child(6) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'

        //Secured Parties

        this.securedPartiesTitle = 'h3:contains("Secured Parties")'
        this.individualPersonName = ':nth-child(8) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualPartyAddress = ':nth-child(8) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualPartyEmail = ':nth-child(8) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualBusinessName = ':nth-child(8) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        this.individualBusinessAddress = ':nth-child(8) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.individualBusinessEmail = ':nth-child(8) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

        // Debtors

        this.debtorTitle = 'h3:contains("Debtors")'
        this.individualDebtorName = ':nth-child(10) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualDebtorAddress = ':nth-child(10) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualDebtorEmail = ':nth-child(10) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualDebtorBirthdate = ':nth-child(10) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(4)'
        this.businessDebtorName = ':nth-child(10) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        this.businessDebtorAddress = ':nth-child(10) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.businessDebtorEmail = ':nth-child(10) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

        // Collateral

        this.step3Title = '#collateral-summary > .summary-header > .pa-2'
        this.vehicleCollateralTitle = '.container > .row > .pt-4'
        this.vehicleType = '.summary-cell'
        this.vehicleYear = 'td:contains("2019")'
        this.vehicleMake = 'td:contains("KAWASAKI")'
        this.vehicleModel = 'td:contains("JETSKI")'
        this.vehicleSerialNumber = '.vehicle-cell'

        // Court Order

        this.courtOrderTitle = 'label:contains("Court Order")'
        this.courtName = '#txt-court-name'
        this.courtRegistry = '#txt-court-registry'
        this.courtFileNumber = '#txt-court-file-number'
        this.dateOfOrder = '#court-date-text-field'
        this.selectDate = 'tbody > :nth-child(2) > :nth-child(5)'
        this.clickOkButton = '.v-btn__content > strong'
        this.effectOfOrder = '#effect-of-order'

        // Confirm Page

        this.submitButton = '#btn-stacked-submit'
        this.continueButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.confirmTombstoneRegDateandTime = ':nth-child(1) > .ml-16 > .row > .pl-3'
        this.confirmTombstoneCurrentExpiryDate = '.tombstone-sub-header > .ml-16 > .row > .pl-3'
        this.renewInfo = '[style="padding-top: 25px; max-width: 875px;"] > .ma-0'
        this.registeringPartyRenewalTitle = '[style="min-width: 960px;"] > :nth-child(1) > :nth-child(1) > .pt-14'
        this.confirmRegisteringPartyName = ':nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title'
        this.confirmRegisteringPartyAddress = ':nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        this.confirmRenewalLengthTitle = '#length-trust-summary > .pt-2'
        this.confirmRenewalLength = '#registration-length'
        this.confirmNewExpiry = '#new-expiry'
        this.confirmAmountOfLien = ':nth-child(3) > .summary-text'
        this.confirmSurrenderDate = ':nth-child(4) > .summary-text'
        this.confirmCourtOrderTitle = '.pa-0 > .pt-2'
        this.courtNameDisplay = '#court-name-display'
        this.courtRegistryDisplay = '#court-registry-display'
        this.courtFileNumberDisplay = '#file-number-display'
        this.dateDisplay = '#date-display'
        this.effectOfOrderDisplay = '#effect-display'
        this.folioNumberTitle = '.v-form > :nth-child(1) > .generic-label > h2'
        this.folioInfo = '.v-form > .pb-6'
        this.folioTextbox = '#txt-folio'

        //Registration Renewal screen1

        this.renewalLengthTitle = '.row summary-header pa-2 mb-8 mt-n3 ml-n8 mr-n10 no-gutters'
        this.registrationLengthRadioButton = 'input#length-in-years'
        this.lengthInYearsText = 'input#life-years-field'
        this.lengthInfiniteRadioButton = '#length-infinite'
        this.renewalExpiry = '#new-expiry'
        this.step3Title = '#collateral-summary > .summary-header > .pa-2'
        this.generalCollateralTitle = '.col-10 > h3'
        this.viewGeneralCollateralLink = '.v-btn__content > .ma-0'
        this.gcDateAndTime = '.gc-description > :nth-child(1)'
        this.collateralDescriptionTitle = '.gc-description > :nth-child(2)'
        this.collateralDescription = '.gc-description > .ma-0'


    }

    verifyHeader(data) {
        cy.get(this.breadcrumbTitle).should('have.text', data.breadcrumbTitle)
        cy.get(this.tombstoneHeader).should('have.text', data.tombstoneHeader)
        cy.get(this.tombstoneSubHeader).should('have.text', data.tombstoneSubHeader)
        cy.get(this.tombstoneRegDateandTime).should('not.be.empty')
        cy.get(this.tombstoneCurrentExpiryDate).should('not.be.empty')
        cy.get(this.renewTitle).should('have.text', data.renewTitle)
        cy.log("Verified Total Discharge Header")
    }


    verifyRenewalLengthAndTerms(data) {

        cy.get(this.step1Title).should('have.text', data.step1Title)
        cy.get(this.renewalLength).should('have.text', data.renewalLength)
        cy.get(this.newExpiry).should('not.be.empty')
        cy.get(this.amountOfLien).should('have.text', data.amountOfLien)
        cy.get(this.surrenderDate).should('have.text', data.surrenderDate)
        cy.log("verified Renewal Length and Terms")

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
        cy.log("Verified Secured Parties")
    }

    
    verifyDebtors(data) {
        cy.get(this.debtorTitle).should('have.text', data.debtorTitle)
        cy.get(this.individualDebtorName).should('have.text', data.individualDebtorName)
        cy.get(this.individualDebtorAddress).should('have.text', data.individualDebtorAddress)
        cy.get(this.individualDebtorEmail).should('have.text', data.individualDebtorEmail)
        cy.get(this.individualDebtorBirthdate).should('not.be.empty')
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
        cy.log("Verified Collateral")
    }

    setCourtOrder(data) {
        cy.get(this.courtOrderTitle).should('have.text', data.courtOrderTitle)
        cy.get(this.courtName).type(data.courtName)
        cy.get(this.courtRegistry).type(data.courtRegistry)
        cy.get(this.courtFileNumber).type(data.courtFileNumber)
        cy.get(this.dateOfOrder).click()
        cy.get(this.selectDate).click()
        cy.get(this.clickOkButton).click()
        cy.log("Entered Court Order")

    }

    verifyConfirmPage(data) {
        cy.get(this.submitButton).click()
        cy.get(this.confirmTombstoneRegDateandTime).should('not.be.empty')
        cy.get(this.confirmTombstoneCurrentExpiryDate).should('not.be.empty')
        cy.get(this.renewInfo).should('have.text', data.renewInfo)
        cy.get(this.registeringPartyRenewalTitle).should('have.text', data.registeringPartyRenewalTitle)
        cy.get(this.confirmRegisteringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.confirmRegisteringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.get(this.confirmRenewalLengthTitle).should('have.text', data.confirmRenewalLengthTitle)
        cy.get(this.confirmRenewalLength).should('have.text', data.renewalLength)
        cy.get(this.confirmNewExpiry).should('not.be.empty')
        cy.get(this.confirmAmountOfLien).should('have.text', data.amountOfLien)
        cy.get(this.confirmSurrenderDate).should('have.text', data.surrenderDate)
        cy.get(this.confirmCourtOrderTitle).should('have.text', data.courtOrderTitle)
        cy.get(this.courtNameDisplay).should('have.text', data.courtName)
        cy.get(this.courtRegistryDisplay).should('have.text', data.courtRegistry)
        cy.get(this.courtFileNumberDisplay).should('have.text', data.courtFileNumberDisplay)
        cy.get(this.dateDisplay).should('have.text', data.dateOfOrder)
        cy.get(this.effectOfOrderDisplay).should('have.text', data.effectOfOrder)
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data. folioInfo)
        cy.get(this.folioTextbox).type(data.folioTextbox)
        cy.log("Verified Confirm Page")

    }

    //Reg Renewal

    verifyRenewalHeader(data) {
        cy.get(this.breadcrumbTitle).should('have.text', data.breadcrumbTitle)
        cy.get(this.tombstoneHeader).should('have.text', data.tombstoneHeader)
        cy.get(this.tombstoneSubHeader).should('have.text', data.tombstoneSubHeader)
        cy.get(this.tombstoneRegDateandTime).should('not.be.empty')
        cy.get(this.tombstoneCurrentExpiryDate).should('not.be.empty')
        cy.get(this.renewTitle).should('have.text', data.renewTitle)
        cy.log("Verified Total Discharge Header")
    }

    verifyRegRenewalLengthInYears(data) {
        cy.get(this.registrationLengthRadioButton).click({ force: true })
        cy.get(this.lengthInYearsText).type(data.lengthInYears)
        cy.wait(2000)
        cy.get(this.renewalExpiry).should('not.be.empty')
        cy.log("Verified Renewal Length")
    }

    verifyInfiniteLength(data) {
        cy.get(this.lengthInfiniteRadioButton).click({ force: true })
        cy.get(this.renewalExpiry).should('have.text', data.infiniteExpiry)
        cy.log("Verified Infinite Length")
    }

    verifyRenewalCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3Title)
        cy.get(this.generalCollateralTitle).should('have.text', data.generalCollateralTitle)
        cy.get(this.viewGeneralCollateralLink).click()
        cy.get(this.gcDateAndTime).should('not.be.empty')
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.collateralDescription)
        cy.log("Verified Collateral")
    }

    verifyRenewalConfirmPage(data) {
        cy.get(this.submitButton).click()
        cy.get(this.confirmTombstoneRegDateandTime).should('not.be.empty')
        cy.get(this.confirmTombstoneCurrentExpiryDate).should('not.be.empty')
        cy.get(this.renewInfo).should('have.text', data.renewInfo)
        cy.get(this.registeringPartyRenewalTitle).should('have.text', data.registeringPartyRenewalTitle)
        cy.get(this.confirmRegisteringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.confirmRegisteringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.get(this.confirmRenewalLengthTitle).should('have.text', data.confirmRenewalLengthTitle)
        cy.get(this.confirmRenewalLength).should('have.text', data.confirmRenewalLength)
        cy.get(this.confirmNewExpiry).should('not.be.empty')
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data. folioInfo)
        cy.get(this.folioTextbox).type(data.folioTextbox)
        cy.log("Verified Registration Renewal Confirm Page")

    }

}
export const renewPage = new RenewPage()