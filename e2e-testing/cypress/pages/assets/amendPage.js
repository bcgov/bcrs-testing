/// <reference types="Cypress" />

const log = require("log");
const dayjs = require("dayjs");


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
        this.amendTitle = 'h1:contains("Amendment")'
        this.cautionBox = '.caution-box > .ma-0'

        // Current Expiry & Trust Indenture

        this.step1Title = '#length-trust-amendment > .summary-header'
        this.currentExpiry = '#current-expiry'
        this.trustIndenture = '#length-trust-amendment > :nth-child(2) > .pt-6 > .summary-text'
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
        this.securedPartyCode = 'tbody > :nth-child(3) > :nth-child(4)'
        this.individualPersonAmendButton = '#class-0-change-added-btn'
        this.businessNameAmendButton = '#class-1-change-added-btn'
        this.securedPartyCodeDeleteButton = '.actions float-right actions-up'
        this.securedPartyEditButton = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .actions-cell > .actions-up > .actions-border > .smaller-actions'
        this.securedPartyDeleteButton = '.v-menu__content > .v-list'

        // Debtors

        this.debtorTitle = 'h3:contains("Debtors")'
        this.individualDebtorName = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualDebtorAddress = 'div.v-data-table.debtor-table.theme--light > div.v-data-table__wrapper > table > tbody > tr:nth-of-type(1) > td:nth-of-type(2)'
        this.individualDebtorEmail = 'div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > table:nth-of-type(1) > tbody:nth-of-type(1) > tr:nth-of-type(1) > td:nth-of-type(3)'
        this.individualDebtorBirthdate = 'td:contains(April 12, 1965)'
        this.businessDebtorName = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        this.businessDebtorAddress = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.businessDebtorEmail = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

        // Collateral

        this.step3Title = '#collateral-summary > .summary-header'
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
        this.dischargeVehicleType = '.summary-cell > div'
        this.dischargeVehicleYear = 'td:contains("2020")'
        this.dischargeVehicleMake = 'td:contains("GMC")'
        this.dischargeVehicleModel = 'td:contains("SIERRA 1500")'


        //Details Description

        this.detailsDescriptionTitle = '.mt-12 > .summary-header'
        this.detailsDescriptionInfo = ':nth-child(14) > .pb-6 > .col'
        this.detailsDescriptionTextBox = '#amendment-description'


        // Court Order

        this.courtOrderTitle = 'label:contains("Court Order")'
        this.courtName = '#txt-court-name'
        this.courtRegistry = '#txt-court-registry'
        this.courtFileNumber = '#txt-court-file-number'
        this.dateOfOrder = '#court-date-text-field'
        this.selectDate = ':nth-child(2) > :nth-child(3) > .v-btn'
        this.clickOkButton = '#btn-done'
        this.effectOfOrder = '#effect-of-order'

        // Confirm Page

        this.submitButton = '#btn-stacked-submit'
        this.continueButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.confirmTombstoneRegDateandTime = ':nth-child(1) > .ml-16 > .row > .pl-3'
        this.confirmTombstoneCurrentExpiryDate = '.tombstone-sub-header > .ml-16 > .row > .pl-3'
        this.confirmAmendTitle = '.summary-header > .pa-2'
        this.confirmCourtOrderTitle = '.py-2'
        this.courtNameDisplay = '#court-name-display'
        this.courtRegistryDisplay = '#court-registry-display'
        this.courtFileNumberDisplay = '#file-number-display'
        this.dateDisplay = '#date-display'
        this.effectOfOrderDisplay = '#effect-display'
        this.registeringPartyAmendmentTitle = '[style="min-width: 960px;"] > :nth-child(1) > :nth-child(1) > .pt-14'
        this.confirmRegisteringPartyName = '.registering-row > .list-item__title'
        this.confirmRegisteringPartyAddress = '.registering-row > :nth-child(2)'
        this.folioNumberTitle = '.v-form > :nth-child(1) > .generic-label > h2'
        this.folioInfo = '.v-form > .pb-6'
        this.folioTextbox = '#txt-folio'

        //CarbobTax Amendment

        this.securedPartiesText = '#secured-parties-component > :nth-child(2) > .col'
        this.securedPartyDropdown = '#secured-party-autocomplete'
        this.securedPartyName = '.row.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title > .row > .col-9 > div'
        this.securedPartyAddress = '.row.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        this.ctSecuredPartyCode = '.row.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(4)'
        this.securedPartyList = '.v-list-item__content > .row'
        this.dialogTitle = '.dialog-title > b'
        this.dialogText = '.dialog-text'
        this.dialogCancelButton = '.row > .v-btn > .v-btn__content > .v-icon'
        this.deletedChip = '.disabled-text-not-action > .list-item__title > .row > .col-9 > :nth-child(2) > .v-chip'
        this.addedChip = ':nth-child(1) > .list-item__title > .row > .col-9 > :nth-child(2) > .v-chip'
        this.undoButton = '.v-remove'
        this.securedPartyAddedName = '.row.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > :nth-child(1)'
        this.securedPartyAddedAddress = '.row.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.securedPartyAddedCode = '.row.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(4)'
        this.reviewPageAmendmentTitle = 'h1:contains("Review and Complete Amendment")'
        this.amendmentInfo = '[style="padding-top: 25px; max-width: 875px;"] > .ma-0'
        this.amendmentSubTitle = '.pt-6'
        this.verifyAddedSecuredPartyName = '.party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > :nth-child(1)'
        this.verifyAddedSecuredPartyAddress = '.party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.verifyAddedSecuredPartyCode = '.party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(4)'
        this.verifyDeletedSecuredPartyName = '.disabled-text'
        this.verifyDeletedSecuredPartyAddress = '.disabled-text-not-first > :nth-child(2)'
        this.verifyDeletedSecuredPartyCode = '.disabled-text-not-first > :nth-child(4)'
        this.verifyDeletedChip = '.disabled-text-not-first > .list-item__title > .row > .col-9 > :nth-child(2) > .v-chip'
        this.confirmRegisteringPartyTitle = '.pt-14'



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
        cy.get(this.viewGeneralCollateralLink).click()
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
        const todaysDate = dayjs().format("D");
        cy.log(todaysDate);
        cy.wait(2000)
        const element = 'td > button:contains(' + todaysDate + ')'
        cy.get(element).should('be.visible').first().click()
        cy.wait(2000)
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
        cy.get(this.dateDisplay).should('not.be.empty')
        cy.get(this.effectOfOrderDisplay).should('have.text', data.effectOfOrder)
        cy.get(this.registeringPartyAmendmentTitle).should('have.text', data.registeringPartyAmendmentTitle)
        cy.get(this.confirmRegisteringPartyName).should('have.text', data.confirmRegisteringPartyName)
        cy.get(this.confirmRegisteringPartyAddress).should('have.text', data.confirmRegisteringPartyAddress)
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data.folioInfo)
        cy.get(this.folioTextbox).type(data.folioTextbox)
        cy.log("Verified Confirm Page")

    }

    //Carbon Tax Amendment
    verifyCurrentExpiry(data) {
        cy.get(this.step1Title).should('have.text', data.currentExpiryTitle)
        cy.get(this.currentExpiry).should('have.text', data.currentExpiryText)
        cy.log("Verified Current Expiry")
    }

    verifyCTSecuredParties(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.securedPartiesText).should('have.text', data.securedPartiesText)
        cy.get(this.securedPartyName).should('have.text', data.securedPartyName)
        cy.get(this.securedPartyAddress).should('have.text', data.securedPartyAddress)
        cy.get(this.ctSecuredPartyCode).should('have.text', data.ctSecuredPartyCode)
        cy.get(this.securedPartyDropdown).type(data.securedPartyAddedCode)
        cy.get(this.securedPartyList).click()
        cy.get(this.dialogTitle).should('have.text', data.dialogTitle)
        cy.get(this.dialogText).should('have.text', data.dialogText)
        cy.get(this.continueButton).click()
        cy.get(this.deletedChip).should('have.text', data.deletedChip)
        cy.get(this.addedChip).should('have.text', data.addedChip)
        cy.get(this.securedPartyAddedName).should('have.text', data.securedPartyAddedName)
        cy.get(this.securedPartyAddedAddress).should('have.text', data.securedPartyAddedAddress)
        cy.get(this.securedPartyAddedCode).should('have.text', data.securedPartyAddedCode)
        cy.log("Verified Secured Party")
    }

    verifyCTCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3Title)
        cy.get(this.vehicleType).should('have.text', data.vehicleType)
        cy.get(this.vehicleYear).should('have.text', data.vehicleYear)
        cy.get(this.vehicleMake).should('have.text', data.vehicleMake)
        cy.get(this.vehicleModel).should('have.text', data.vehicleModel)
        cy.get(this.vehicleSerialNumber).should('have.text', data.vehicleSerialNumber)
        cy.get(this.generalCollateralTitle).should('have.text', data.generalCollateralTitle)
        cy.get(this.viewGeneralCollateralLink).click()
        cy.get(this.gcDateAndTime).should('not.be.empty')
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.generalCollateralDescription)
        cy.log("Verified Collateral")

    }

    verifyAmendConfirmPage(data) {
        cy.get(this.submitButton).click()
        cy.get(this.confirmTombstoneRegDateandTime).should('not.be.empty')
        cy.get(this.confirmTombstoneCurrentExpiryDate).should('have.text', data.confirmTombstoneCurrentExpiryDate)
        cy.get(this.reviewPageAmendmentTitle).should('have.text', data.reviewPageAmendmentTitle)
        cy.get(this.amendmentInfo).should('have.text', data.amendmentInfo)
        cy.get(this.cautionBox).should('have.text', data.cautionBox)
        cy.get(this.confirmAmendTitle).should('have.text', data.confirmAmendTitle)
        cy.get(this.amendmentSubTitle).should('have.text', data.amendmentSubTitle)
        cy.get(this.verifyAddedSecuredPartyName).should('have.text', data.securedPartyAddedName)
        cy.get(this.verifyAddedSecuredPartyAddress).should('have.text', data.securedPartyAddedAddress)
        cy.get(this.verifyAddedSecuredPartyCode).should('have.text', data.securedPartyAddedCode)
        cy.get(this.addedChip).should('have.text', data.addedChip)
        cy.get(this.verifyDeletedSecuredPartyName).should('have.text', data.securedPartyName)
        cy.get(this.verifyDeletedSecuredPartyAddress).should('have.text', data.securedPartyAddress)
        cy.get(this.verifyDeletedSecuredPartyCode).should('have.text', data.ctSecuredPartyCode)
        cy.get(this.verifyDeletedChip).should('have.text', data.deletedChip)
        cy.get(this.confirmCourtOrderTitle).should('have.text', data.courtOrderTitle)
        cy.get(this.courtNameDisplay).should('have.text', data.courtName)
        cy.get(this.courtRegistryDisplay).should('have.text', data.courtRegistry)
        cy.get(this.courtFileNumberDisplay).should('have.text', data.courtFileNumberDisplay)
        cy.get(this.dateDisplay).should('not.be.empty')
        cy.get(this.effectOfOrderDisplay).should('have.text', data.effectOfOrder)
        cy.get(this.confirmRegisteringPartyTitle).should('have.text', data.confirmRegisteringPartyTitle)
        cy.get(this.confirmRegisteringPartyName).should('have.text', data.confirmRegisteringPartyName)
        cy.get(this.confirmRegisteringPartyAddress).should('have.text', data.confirmRegisteringPartyAddress)
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data.folioInfo)
        cy.get(this.folioTextbox).type(data.folioTextbox)
        cy.log("Verified Amendment Confirm Page")
    }

    //CT TotalDischarge
    verifyDischargeCTCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3Title)
        cy.get(this.dischargeVehicleType).should('have.text', data.vehicleType)
        cy.get(this.dischargeVehicleYear).should('have.text', data.vehicleYear)
        cy.get(this.dischargeVehicleMake).should('have.text', data.vehicleMake)
        cy.get(this.dischargeVehicleModel).should('have.text', data.vehicleModel)
        cy.get(this.vehicleSerialNumber).should('have.text', data.vehicleSerialNumber)
        cy.get(this.generalCollateralTitle).should('have.text', data.generalCollateralTitle)
        cy.get(this.viewGeneralCollateralLink).click()
        cy.get(this.gcDateAndTime).should('not.be.empty')
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.generalCollateralDescription)
        cy.log("Verified Collateral")

    }

    //WL Amendment
    verifyWLCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3Title)
        cy.get(this.vehicleType).should('have.text', data.vehicleType)
        cy.get(this.vehicleYear).should('have.text', data.vehicleYear)
        cy.get(this.vehicleMake).should('have.text', data.vehicleMake)
        cy.get(this.vehicleModel).should('have.text', data.vehicleModel)
        cy.get(this.vehicleSerialNumber).should('have.text', data.vehicleSerialNumber)
        cy.get(this.generalCollateralTitle).should('have.text', data.generalCollateralTitle)
        cy.get(this.viewGeneralCollateralLink).click()
        cy.get(this.gcDateAndTime).should('not.be.empty')
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.generalCollateralWLDescription)
        cy.log("Verified Collateral")

    }

    verifyDischargeWLCollateral(data) {
        cy.get(this.step3Title).should('have.text', data.step3Title)
        cy.get(this.dischargeVehicleType).should('have.text', data.vehicleType)
        cy.get(this.dischargeVehicleYear).should('have.text', data.vehicleYear)
        cy.get(this.dischargeVehicleMake).should('have.text', data.vehicleMake)
        cy.get(this.dischargeVehicleModel).should('have.text', data.vehicleModel)
        cy.get(this.vehicleSerialNumber).should('have.text', data.vehicleSerialNumber)
        cy.get(this.generalCollateralTitle).should('have.text', data.generalCollateralTitle)
        cy.get(this.viewGeneralCollateralLink).click()
        cy.get(this.gcDateAndTime).should('not.be.empty')
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.generalCollateralWLDescription)
        cy.log("Verified Collateral")

    }


}
export const amendPage = new AmendPage()