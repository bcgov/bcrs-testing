/// <reference types="Cypress" />

export class EndToEndFlowPage {

    constructor() {

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
        this.confirmTrustIndenture = '#trust-indenture-summary'
        this.trustIndenture = '.summary-text'

        // Repairers Lien Renewal

        this.renewalLength = ':nth-child(2) > .summary-text'
        this.newExpiry = '#new-expiry-rl'
        this.amountOfLien = ':nth-child(6) > .summary-text'
        this.surrenderDate = '#surrender-date'


        // Confirm Page

        this.submitButton = '#btn-stacked-submit'
        this.continueButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.confirmTombstoneRegDateandTime = ':nth-child(1) > .ml-16 > .row > .pl-3'
        this.confirmTombstoneCurrentExpiryDate = '.tombstone-sub-header > .ml-16 > .row > .pl-3'
        this.renewInfo = '[style="padding-top: 25px; max-width: 875px;"] > .ma-0'
        this.registeringPartyRenewalTitle = '[style="min-width: 960px;"] > :nth-child(1) > :nth-child(1) > .pt-14'
        this.confirmRegisteringPartyName = '.registering-row > .list-item__title'
        this.confirmRegisteringPartyAddress = '.registering-row > :nth-child(2)'
        this.confirmRenewalLengthTitle = '#length-trust-summary > .pt-2'
        this.confirmRenewalLength = '#registration-length'
        this.confirmNewExpiry = '#new-expiry'
        this.confirmAmountOfLien = ':nth-child(3) > .summary-text'
        this.confirmSurrenderDate = ':nth-child(4) > .summary-text'
        this.confirmCourtOrderTitle = '.py-2'
        this.courtNameDisplay = '#court-name-display'
        this.courtRegistryDisplay = '#court-registry-display'
        this.courtFileNumberDisplay = '#file-number-display'
        this.dateDisplay = '#date-display'
        this.effectOfOrderDisplay = '#effect-display'
        this.folioNumberTitle = '.v-form > :nth-child(1) > .generic-label > h2'
        this.folioInfo = '.v-form > .pb-6'
        this.folioTextbox = '#txt-folio'
        this.confirmAmendTitle = '.summary-header > .pa-2'
        this.registeringPartyAmendmentTitle = '[style="min-width: 960px;"] > :nth-child(1) > :nth-child(1) > .pt-14'

        // Registration Length and Trust Indenture (Discharge)

        this.step1Title = '#length-trust-summary > .summary-header'
        this.registrationLengthInYears = '#registration-length'
        this.trustIndentureValue = '#trust-indenture-summary'


        //Secured Parties (total discharge)

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

        //Collateral

        this.vehicleCollateralTitle = '.row > .pt-4'
        this.vehicleType = '.VehicleCollateral_summary-cell_3VJKw > div'
        this.vehicleYear = 'td:contains("2020")'
        this.vehicleMake = 'td:contains("GMC")'
        this.vehicleModel = 'td:contains("SIERRA 1500")'
        this.vehicleSerialNumber = '.VehicleCollateral_vehicle-cell_2yvB9'

        //Tombstone Header
        this.verifyTombstoneHeader = '.tombstone-header > b'

        //Registration table button
        this.removeFromTable = '.TableRow_remove-btn_1a8lM'


        //Confirm Authorization

        this.cerifyTitle = 'h2:contains("2. Authorization")'
        this.certifyInfo = '#certify-summary > .pb-6 > .col'
        this.certifyName = '.mb-5 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title > .row > .col-9 > div'
        this.certifyAccountName = '.mb-5 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        this.certifyAddress = '.mb-5 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(3)'
        this.confirmAuthorizationInfo = 'label[for^="checkbox-certified"]'
        this.confirmCertifyDate = '.pl-8 > .summary-text'
        this.confirmCheckbox = '.summary-text > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'

        //CT Discharge

        this.securedPartyName = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title'
        this.securedPartyAddress = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        this.ctSecuredPartyCode = ':nth-child(9) > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(4)'

        //RL Amendment

        // this.currentExpiryTitle = 'strong:contains("Current Expiry")'
        // this.currentExpiry = '#current-expiry'
        // this.step2Title = 'label:contains("Registering Party, Secured Parties, and Debtors")'
        // this.registeringPartyTitle = 'h3:contains("Original Registering Party")'
        // this.registeringPartyName = '.container.pt-4 > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > .list-item__title'
        // this.registeringPartyAddress = '.container.pt-4 > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > .party-row > :nth-child(2)'
        // this.securedPartiesTitle = 'h3:contains("Secured Parties")'
        // this.individualPersonName = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        // this.individualPartyAddress = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        // this.individualPartyEmail = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        // this.individualBusinessName = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        // this.individualBusinessAddress = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        // this.individualBusinessEmail = '.secured-party-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'
        // this.debtorTitle = 'h3:contains("Debtors")'
        // this.individualDebtorName = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        // this.individualDebtorAddress = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        // this.individualDebtorEmail = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        // this.individualDebtorBirthdate = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(4)'
        // this.businessDebtorName = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title'
        // this.businessDebtorAddress = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        // this.businessDebtorEmail = '.debtor-summary > .container > :nth-child(1) > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

    }

    verifyRegRenewalLengthInYears(data) {
        cy.get(this.registrationLengthRadioButton).click({ force: true })
        cy.get(this.lengthInYearsText).type(data.lengthInYears)
        cy.wait(2000)
        cy.get(this.renewalExpiry).should('not.be.empty')
        cy.get(this.trustIndenture).should('have.text', data.trustIndenture)
        cy.log("Verified Renewal Length")
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
        cy.get(this.confirmRenewalLengthTitle).should('have.text', data.confirmRenewalLengthTitle1)
        cy.get(this.confirmRenewalLength).should('have.text', data.confirmRenewalLength)
        cy.get(this.confirmNewExpiry).should('not.be.empty')
        cy.get(this.confirmTrustIndenture).should('have.text', data.trustIndenture)
        cy.get(this.folioNumberTitle).should('have.text', data.folioNumberTitle)
        cy.get(this.folioInfo).should('have.text', data.folioInfo)
        cy.get(this.folioTextbox).type(data.folioTextbox)
        cy.log("Verified Registration Renewal Confirm Page")


    }

    submitRenewal() {
        cy.get(this.submitButton).click()
        cy.log("Submitted Renewal")
    }

    verifyAmendConfirmPage(data) {
        cy.get(this.submitButton).click()
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

    submitAmendment() {
        cy.get(this.submitButton).click()
        cy.log("Submitted Amendment")
    }

    //Discharge
    verifyRegistrationLengthAndTrustIndenture(data) {

        cy.get(this.step1Title).should('have.text', data.registrationLengthTitle)
        cy.get(this.registrationLengthInYears).should('have.text', data.registrationLengthInYears1)
        cy.get(this.trustIndentureValue).should('have.text', data.trustIndentureValue)
        cy.log("verified Registration Length and Trust Indenture")

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
        cy.get(this.gcDateAndTime).should('not.be.empty')
        cy.get(this.collateralDescriptionTitle).should('have.text', data.collateralDescriptionTitle)
        cy.get(this.collateralDescription).should('have.text', data.collateralDescription)
        cy.log("Verified Collateral")
    }

    submitDischarge(data) {
        cy.get(this.submitButton).click()
        cy.wait(2000)
        cy.log("Submitted Total Discharge")
        cy.get(this.removeFromTable).should('have.text', data.removeFromTable)
        cy.log("Verified End to End Registration Flow")

    }

    verifyConfirmAuthorization(data) {
        cy.get(this.cerifyTitle).should('have.text', data.cerifyTitle)
        cy.get(this.certifyInfo).should('have.text', data.certifyInfo)
        cy.get(this.certifyName).should('have.text', data.certifyName)
        cy.get(this.certifyAccountName).should('have.text', data.certifyAccountName)
        cy.get(this.certifyAddress).should('have.text', data.certifyAddress)
        cy.get(this.confirmAuthorizationInfo).should('have.text', data.confirmAuthorizationInfo)
        const todaysDate = Cypress.moment().format('MMMM D, YYYY')
        cy.get(this.confirmCertifyDate).should('contain', todaysDate)
        cy.get(this.confirmCheckbox).click({ multiple: true })
        cy.log("Clicked on Confirm Checkbox")
        //cy.get(this.confirmCertifyDate).invoke('text').then(date)
        //log.info("Printing text" + date)
    }

    // Repairers Lien Renewal

    verifyRepairersLienRenewalLengthAndTerms(data) {

        cy.get(this.step1Title).should('have.text', data.step1Title)
        cy.get(this.renewalLength).should('have.text', data.renewalLength)
        cy.get(this.newExpiry).should('not.be.empty')
        cy.get(this.amountOfLien).should('have.text', data.amountOfLien)
        cy.get(this.surrenderDate).should('not.be.empty')
        cy.log("verified Renewal Length and Terms")

    }

    //Repairers Lien Amendment

    // verifyCurrentExpiry(data) {
    //     cy.get(this.currentExpiryTitle).should('have.text', data.currentExpiryTitle)
    //     cy.get(this.currentExpiry).should('not.be.empty')
    //     cy.log("Verified Current Expiry")
    // }

    // verifyRegisteringParty(data) {
    //     cy.get(this.step2Title).should('have.text', data.step2Title)
    //     cy.get(this.registeringPartyTitle).should('have.text', data.registeringPartyTitle)
    //     cy.get(this.registeringPartyName).should('have.text', data.registeringPartyName)
    //     cy.get(this.registeringPartyAddress).should('have.text', data.registeringPartyAddress)
    //     cy.log("Verified Registering Party")
    // }

    // verifySecuredParties(data) {
    //     cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
    //     cy.get(this.individualPersonName).should('have.text', data.individualPersonName)
    //     cy.get(this.individualPartyAddress).should('have.text', data.individualPartyAddress)
    //     cy.get(this.individualPartyEmail).should('have.text', data.individualPartyEmail)
    //     cy.get(this.individualBusinessName).should('have.text', data.individualBusinessName)
    //     cy.get(this.individualBusinessAddress).should('have.text', data.individualBusinessAddress)
    //     cy.get(this.individualBusinessEmail).should('have.text', data.individualBusinessEmail)
    //     cy.log("Verified Secured Parties")

    // }
    //Total Discharge

    verifyRLSecuredParties(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.individualPersonName).should('have.text', data.individualPersonName)
        cy.get(this.individualPartyAddress).should('have.text', data.individualPartyAddress)
        cy.get(this.individualPartyEmail).should('have.text', data.individualPartyEmail)
        cy.get(this.individualBusinessName).should('have.text', data.individualBusinessName)
        cy.get(this.individualBusinessAddress).should('have.text', data.individualBusinessAddress)
        cy.get(this.individualBusinessEmail).should('have.text', data.individualBusinessEmail)
        cy.log("Verified Secured Parties")
    }

    verifyCTRegistrationLength(data) {
        cy.get(this.step1Title).should('have.text', data.ctRegistrationLengthTitle)
        cy.get(this.registrationLengthInYears).should('have.text', data.verifyCTRegistrationLength)
        cy.log("Verified Registration Length")
    }

    verifyCTSecuredParty(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.securedPartyName).should('have.text', data.securedPartyName)
        cy.get(this.securedPartyAddress).should('have.text', data.securedPartyAddress)
        cy.get(this.ctSecuredPartyCode).should('have.text', data.ctSecuredPartyCode)
        cy.log("Verified Secured Parties")

    }




}
export const endtoendFlowPage = new EndToEndFlowPage()