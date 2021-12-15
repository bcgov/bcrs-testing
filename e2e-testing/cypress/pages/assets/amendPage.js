/// <reference types="Cypress" />

const log = require("log");


export class AmendPage {

    constructor() {

        //Summary Page Header

        this.breadcrumbTitle = ':nth-child(5) > .v-breadcrumbs__item > .Breadcrumb_breadcrumb-text_2jfZ3'
        this.tombstoneHeader = '.tombstone-header'
        this.tombstoneSubHeader = '.tombstone-sub-header > :nth-child(1)'
        this.tombstoneRegDateandTimeTitle = 'span:contains("Base Registration Date and Time: ")'
        this.tombstoneRegDateandTime = ':nth-child(1) > .ml-16 > .row > .pl-3'
        this.tombstoneCurrentExpiryTitle = 'span:contains("Current Expiry Date and Time: ")'
        this.tombstoneCurrentExpiryDate = '.tombstone-sub-header > .ml-16 > .row > .pl-3'
        this.amendTitle = 'h1:contains("Registration Amendment")'
        this.cautionBox = '.caution-box > .ma-0'

        // Current Expiry & Trust Indenture

        this.step1Title = '.pr-10 > .summary-header'
        this.currentExpiry = '#current-expiry'
        this.trustIndenture = '.summary-text'
        this.trustIndentureAmendButton = '#trust-indenture-amend-btn'
        this.trustIndentureCheckbox = '.v-input--selection-controls__ripple'
        this.trustIndentureDoneButton = '#done-btn-trust-indenture'
        this.trustIndentureCancelButton = '#cancel-btn-trust-indenture'

        // Registering Party

        this.step2Title = 'label:contains("Registering Party, Secured Parties, and Debtors")'
        this.registeringPartyTitle = 'h3:contains("Original Registering Party")'
        this.registeringPartyName = ':nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title'
        this.registeringPartyAddress = ':nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'

        //Secured Parties

        this.securedPartiesTitle = 'h3:contains("Secured Parties")'
        this.individualPersonName = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualPartyAddress = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualPartyEmail = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualBusinessName = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        this.individualBusinessAddress = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.individualBusinessEmail = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'
        this.individualPartyBusinessName = ':nth-child(3) > .list-item__title'
        this.individualPartyBusinessAddress = 'tbody > :nth-child(3) > :nth-child(2)'
        this.securedPartyCode = ':nth-child(3) > :nth-child(4)'
        this.individualPersonAmendButton = '#class-0-change-added-btn'
        this.businessNameAmendButton = '#class-1-change-added-btn'
        this.securedPartyCodeDeleteButton = '.actions float-right actions-up'
        this.securedPartyEditButton = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .actions-cell > .actions-up > .actions-border > .smaller-actions'
        this.securedPartyDeleteButton = '.v-menu__content > .v-list'

        // Debtors

        this.debtorTitle = 'h3:contains("Debtors")'
        this.individualDebtorName = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualDebtorAddress = ':nth-child(12) > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualDebtorEmail = ':nth-child(12) > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualDebtorBirthdate = ':nth-child(12) > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(4)'
        this.businessDebtorName = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        this.businessDebtorAddress = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.businessDebtorEmail = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

        // Collateral

        this.step3Title = '#collateral-summary > .summary-header > .pa-2'
        this.vehicleType = '.pl-4'
        this.vehicleYear = '.vehicle-row > :nth-child(2)'
        this.vehicleMake = '.vehicle-row > :nth-child(3)'
        this.vehicleModel = '.vehicle-row > :nth-child(4)'
        this.vehicleSerialNumber = '.vehicle-cell'
        this.generalCollateralTitle = '.col-10 > h3'
        this.viewGeneralCollateralLink = '.v-btn__content > .ma-0'
        this.gcDateAndTime = '.gc-description > :nth-child(1)'
        this.collateralDescriptionTitle = '.gc-description > :nth-child(2)'
        this.collateralDescription = '.gc-description > .ma-0'
        this.generalCollateralAmendButton = '#gen-col-amend-btn'
        this.generalCollateralDeleteDescription = '#general-collateral-delete-desc'
        this.generalCollateralAddDescription = '#general-collateral-add-desc'
        this.generalCollateralDoneButton = '#done-btn-gen-col'
        this.generalCollateralCancelButton = '#cancel-btn-gen-col'
        this.addVehicleCollateral = '#btn-add-collateral'


        //Details Description

        this.detailsDescriptionTitle = ':nth-child(14) > .summary-header'
        this.detailsDescriptionInfo = ':nth-child(14) > .pb-6 > .col'
        this.detailsDescriptionTextBox = '#amendment-description'


        // Court Order

        this.courtOrderTitle = 'label:contains("Court Order")'
        this.courtName = '#txt-court-name'
        this.courtRegistry = '#txt-court-registry'
        this.courtFileNumber = '#txt-court-file-number'
        this.dateOfOrder = '#court-date-text-field'
        this.selectDate = ':nth-child(2) > :nth-child(3) > .v-btn'
        this.clickOkButton = '.v-btn__content > strong'
        this.effectOfOrder = '#effect-of-order'

        // Confirm Page

        this.submitButton = '#btn-stacked-submit'
        this.continueButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.confirmTombstoneRegDateandTime = ':nth-child(1) > .ml-16 > .row > .pl-3'
        this.confirmTombstoneCurrentExpiryDate = '.tombstone-sub-header > .ml-16 > .row > .pl-3'
        this.confirmAmendTitle = '.summary-header > .pa-2'
        this.confirmCourtOrderTitle = '.container > .pa-2'
        this.courtNameDisplay = '#court-name-display'
        this.courtRegistryDisplay = '#court-registry-display'
        this.courtFileNumberDisplay = '#file-number-display'
        this.dateDisplay = '#date-display'
        this.effectOfOrderDisplay = '#effect-display'
        this.registeringPartyAmendmentTitle = '[style="min-width: 960px;"] > :nth-child(1) > :nth-child(1) > .pt-14'
        this.confirmRegisteringPartyName = ':nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title'
        this.confirmRegisteringPartyAddress = ':nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        this.folioNumberTitle = '.v-form > :nth-child(1) > .generic-label > h2'
        this.folioInfo = '.v-form > .pb-6'
        this.folioTextbox = '#txt-folio'

    }

    verifyHeader(data) {
        cy.get(this.breadcrumbTitle).should('have.text', data.breadcrumbTitle)
        cy.get(this.tombstoneHeader).should('have.text', data.tombstoneHeader)
        cy.get(this.tombstoneSubHeader).should('have.text', data.tombstoneSubHeader)
        cy.get(this.tombstoneRegDateandTime).should('not.be.empty')
        cy.get(this.tombstoneCurrentExpiryDate).should('not.be.empty')
        cy.get(this.amendTitle).should('have.text', data.amendTitle)
        cy.get(this.cautionBox).should('have.text', data.cautionBoxInfo)
        cy.log("Verified Total Discharge Header")
    }

    verifyLengthAndTrustIndenture(data) {

        cy.get(this.step1Title).should('have.text', data.step1Title)
        cy.get(this.currentExpiry).should('not.be.empty')
        cy.get(this.trustIndenture).should('have.text', data.trustIndenture)
        cy.log("Verified Length & Trust Indenture")

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
        cy.get(this.individualDebtorBirthdate).should('not.be.empty')
        cy.get(this.businessDebtorName).should('have.text', data.businessDebtorName)
        cy.get(this.businessDebtorAddress).should('have.text', data.businessDebtorAddress)
        cy.get(this.businessDebtorEmail).should('have.text', data.businessDebtorEmail)
        cy.log("Verified Debtors")
    }

    verifyCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3Title)
        cy.get(this.vehicleType).should('have.text', data.vehicleType)
        cy.get(this.vehicleYear).should('have.text', data.vehicleYear)
        cy.get(this.vehicleMake).should('have.text', data.vehicleMake)
        cy.get(this.vehicleModel).should('have.text', data.vehicleModel)
        cy.get(this.vehicleSerialNumber).should('have.text', data.vehicleSerialNumber)
        cy.get(this.generalCollateralTitle).should('have.text', data.generalCollateralTitle)
        //cy.get(this.viewGeneralCollateralLink).click()
        cy.get(this.gcDateAndTime).should('not.be.empty')
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.collateralDescription)
        cy.log("Verified Collateral")
    }

    setCourtOrder(data) {
        cy.get(this.courtOrderTitle).should('have.text', data.courtOrderTitle)
        cy.get(this.courtName).type(data.courtName)
        cy.get(this.courtRegistry).type(data.courtRegistry)
        cy.get(this.courtFileNumber).type(data.courtFileNumber)
        cy.get(this.dateOfOrder).click()
        cy.get(this.selectDate).click({force: true})
        cy.get(this.clickOkButton).click()
        cy.get(this.effectOfOrder).type(data.effectOfOrder)
        cy.log("Entered Court Order")

    }

    verifyConfirmPage(data) {
        cy.get(this.submitButton).click()
        cy.get(this.breadcrumbTitle).should('have.text', data.breadcrumbTitle)
        cy.get(this.tombstoneHeader).should('have.text', data.tombstoneHeader)
        cy.get(this.tombstoneSubHeader).should('have.text', data.tombstoneSubHeader)
        cy.get(this.confirmTombstoneRegDateandTime).should('not.be.empty')
        cy.get(this.confirmTombstoneCurrentExpiryDate).should('not.be.empty')
        cy.get(this.confirmAmendTitle).should('have.text', data.confirmAmendTitle)
        cy.get(this.confirmCourtOrderTitle).should('have.text', data.courtOrderTitle)
        cy.get(this.courtNameDisplay).should('have.text', data.courtName)
        cy.get(this.courtRegistryDisplay).should('have.text', data.courtRegistry)
        cy.get(this.courtFileNumberDisplay).should('have.text', data.courtFileNumberDisplay)
        cy.get(this.dateDisplay).should('have.text', data.dateOfOrder)
        cy.get(this.effectOfOrderDisplay).should('have.text', data.effectOfOrder)
        cy.get(this.registeringPartyAmendmentTitle).should('have.text', data.registeringPartyAmendmentTitle)
        cy.get(this.confirmRegisteringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.confirmRegisteringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data. folioInfo)
        cy.get(this.folioTextbox).type(data.folioTextbox)
        cy.log("Verified Confirm Page")

    }


}
export const amendPage = new AmendPage()