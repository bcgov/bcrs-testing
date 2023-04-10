/// <reference types="Cypress" />

const log = require("log");
const tab = require('cypress-plugin-tab')

export class Step2AssertionPage {

    constructor() {

        //step2

        this.addSecuredPartiesAndDebtorsStepper = '#step-2-btn'

        //Party Individual

        this.securedPartyCodeOrName = 'input#txt-code'
        this.addSecuredPartyCodeOrName = 'div#party-search-auto-complete'
        this.addRegisteringPartyAsSecuredPartyCheckbox = 'input#add-registering-party'
        this.addSecuredPartyLink = 'a#add-party'
        this.partyIndividualPersonRadioButton = 'input#party-individual'
        this.partyFirstName = 'input#txt-first-party'
        this.partyMiddleName = 'input#txt-middle-party'
        this.partyLastName = '#txt-last-party'
        this.partyIndividualEditButton = '#class-0-change-added-btn'
        this.partyBusinessEditButton = '#class-1-change-added-btn'
        this.securedPartyRemoveButton = '.v-remove'
        this.partyDropdownRemoveButton = '.menuable__content__active > .v-list'
        this.verifyPartyEmail = ':nth-child(4) > .col > .v-input > .v-input__control > .v-input__slot'
        this.verifySecuredPartyCountry = ':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot'
        this.verifySecuredPartyAddressLine = ':nth-child(2) > .v-input > .v-input__control > .v-input__slot'
        this.verifySecuredPartyCity = '.address-city > .v-input__control > .v-input__slot'
        this.verifySecuredPartyProvince = '.address-region > .v-input__control > .v-input__slot'
        this.verifySecuredPartyPostalcode = '.postal-code > .v-input__control > .v-input__slot'
        this.verifySecuredPartyDeliveryInstructions = ':nth-child(5) > .v-input > .v-input__control > .v-input__slot'
        this.verifyBusinessNameErrorValidation = ':nth-child(2) > .col > .v-input > .v-input__control > .v-text-field__details > .v-messages > .v-messages__wrapper > .v-messages__message'

        //Same for Individual & Business Party

        this.partyEmailAddress = 'input#txt-email-party'
        this.partyAddressCountryDropdown = '.v-select__slot'
        this.partyAddressCountry = '[role = "listbox"]'
        this.partyAddressLine1Text = 'input[id^="street-address"]'
        this.partyAddressCityText = 'input#input-3932'
        this.partyAddressRegionText = 'input#input-3935'
        this.partyAddressPostalCodeText = 'input#input-3938'
        this.partyDeliveryInstructions = ':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot'
        this.partyDoneButton = '#done-btn-party'
        this.removeButton = '#remove-btn-party'
        this.cancelPartyButton = '#cancel-btn-party'
        this.cancelDebtorButton = '#cancel-btn-debtor'

        //Party Business

        this.partyBusinessRadioButton = '#party-business'
        this.partyBusinessLegalName = 'input#txt-name-party'
        this.partyBusiness = '.v-item-group > :nth-child(1)'
        this.verifyPartyFirstNameValidation = ':nth-child(2) > :nth-child(1) > .v-input > .v-input__control > .v-text-field__details'
        this.verifyPartyLastNameValidation = ':nth-child(2) > :nth-child(3) > .v-input > .v-input__control > .v-text-field__details'

        //Debtor Individual
        this.addIndividualDebtor = 'button#btn-add-individual'
        this.debtorFirstName = 'input#txt-first-debtor'
        this.debtorMiddleName = 'input#txt-middle-debtor'
        this.debtorLastName = 'input#txt-last-debtor'
        this.debtorBirthdateMonthDropdown = 'input#txt-month'
        this.debtorBirthMonthText = '.v-list-item__title'
        this.debtorBirthdateDay = 'input#txt-day'
        this.debtorBirthdateYear = 'input#txt-year'

        //Common fields for Individual & Business Debtor

        this.debtorEmailAddress = 'input#txt-email-debtor'
        this.debtorAddressCountryDropdown = '.v-form > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot'
        this.debtorAddressCountry = '.v-list-item__title'
        this.debtorAddressLine1Text = 'input[id^="street-address"]'
        this.debtorAddress = '[title = "3320 Jacombs Rd"]'
        this.debtorAddressCityText = 'input#input-3994'
        this.debtorAddressRegionText = 'input#input-3997'
        this.debtorAddressPostalCodeText = 'input#input-4000'
        this.debtorDeliveryInstructions = ':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot'
        this.debtorDoneButton = 'button#done-btn-debtor'

        //Debtor Business

        this.addBusinessDebtor = 'button#btn-add-business'
        this.debtorBusinessLegalName = 'input#txt-name-debtor'
        this.debtorBusinessText = ':nth-child(1) > .auto-complete-item'

        //Secured Parties verification

        this.securedPartiesTitle = 'h3:contains("Secured Parties")'
        this.individualPersonName = ':nth-child(5) > :nth-child(1) > .container.pa-0 > .pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title'
        this.individualPartyAddress = ':nth-child(5) > :nth-child(1) > .container.pa-0 > .pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualPartyEmail = ':nth-child(5) > :nth-child(1) > .container.pa-0 > .pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualBusinessName = ':nth-child(2) > .list-item__title'
        this.individualBusinessAddress = 'tbody > :nth-child(2) > :nth-child(2)'
        this.individualBusinessEmail = 'tbody > :nth-child(2) > :nth-child(3)'
        this.individualPartyBusinessName = ':nth-child(3) > .list-item__title'
        this.individualPartyBusinessAddress = 'tbody > :nth-child(3) > :nth-child(2)'
        this.securedPartyCode = 'tbody > :nth-child(3) > :nth-child(4)'
        this.securedPartyDropdownList = '.v-item-group > :nth-child(1)'
        this.verifyPartyNameLookup = ':nth-child(4) > .list-item__title'
        this.verifySecuredPartyAddress = 'tbody > :nth-child(4) > :nth-child(2)'
        this.verifySecuredPartyNameCode = ':nth-child(4) > :nth-child(4)'
        this.removeSecuredPartyName = ':nth-child(4) > .actions-cell > .actions > .v-list > .v-remove'
        this.removeSecuredPartyCode = ':nth-child(3) > .actions-cell > .actions > .v-list > .v-remove'
        this.removeSecuredPartyBusinessName = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .actions-cell > .actions-up > .actions-border > .smaller-actions'
        this.removeSecuredPartyIndividualName = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .actions-cell > .actions-up > .actions-border > .smaller-actions'
        this.verifyEmptySecuredPartyModal = '.pt-2 > .col > .v-data-table > .v-data-table__wrapper > table > tbody > .v-data-table__empty-wrapper > td'
        this.verifyNoMatchesValidation = '.v-list-item__content > .v-list-item__subtitle'


        // Debtors Verification

        this.debtorTitle = 'h3:contains("Debtors")'
        this.individualDebtorName = ':nth-child(1) > .container > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > div'
        this.individualDebtorAddress = ':nth-child(1) > .container > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualDebtorEmail = ':nth-child(1) > .container > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualDebtorBirthdate = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(4)'
        this.businessDebtorName = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title > .row > .col-9 > div'
        this.businessDebtorAddress = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.businessDebtorEmail = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'
        this.verifyDebtorFirstNameValidation = ':nth-child(2) > :nth-child(1) > .v-input > .v-input__control > .v-text-field__details'
        this.verifyDebtorLastNameValidation = ':nth-child(2) > :nth-child(3) > .v-input > .v-input__control > .v-text-field__details'
        this.verifyBirthdateMonthValidation = ':nth-child(4) > :nth-child(1) > .v-input > .v-input__control > .v-text-field__details'
        this.verifyBithdateDayValidation = ':nth-child(4) > :nth-child(2) > .v-input > .v-input__control > .v-text-field__details'
        this.verifyBirthdateMonth = ':nth-child(4) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > :nth-child(3) > .v-input__icon > .v-icon'
        this.verifyDebtorBusinessNameValidation = ':nth-child(2) > .col > .v-input > .v-input__control > .v-text-field__details'
        this.removeDebtorBusinessName = ':nth-child(2) > .actions-width > .actions-up > .actions-border > .smaller-actions'
        this.removeDebtorIndividualName = ':nth-child(1) > .actions-width > .actions-up > .actions-border > .smaller-actions'
        this.verifyEmptyDebtorModal = '.pt-4 > .col > .v-data-table > .v-data-table__wrapper > table > tbody > .v-data-table__empty-wrapper > td'

        //Registering Party

        this.registeringPartyName = '.registering-row > .list-item__title'
        this.registeringPartyAddress = '.registering-row > :nth-child(2)'
        this.registeringPartyChangeButton = '.smaller-button'
        this.registeringPartyCodeOrNameTextField = '.add-party-container > .container > .px-6 > :nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-text-field__slot > #txt-code'
        this.registeringPartyLink = '.add-party-container > .container > .px-6 > :nth-child(2) > #add-party'
        this.registeringPartyCodeDropdown = '.v-item-group > :nth-child(2)'
        this.registeringPartyCode = '.registering-row > :nth-child(4)'
        this.verifyRegisteringPartyName = '.list-item__title'
        this.verifyRegisteringPartyAddress = '.registering-row > :nth-child(2)'
        this.verifyRegisteringPartyEmail = '.registering-row > :nth-child(3)'
        this.clearRegisteringPartyCountry = '.v-form > :nth-child(1) > .v-input > .v-input__control > .v-input__slot'
        this.countryDropdown = '.v-list-item__content'
        this.registeringPartyAddress2 = '.v-form > :nth-child(2) > .v-input > .v-input__control > .v-input__slot'
        this.registeringPartyEditDropdown = '.smaller-actions'
        this.registeringPartyEditButton = '.v-list'
        this.registeringPartyAddressDescription = '.pcadescription'
        

    }

    clickStep2() {
        cy.get(this.addSecuredPartiesAndDebtorsStepper).click()
        cy.log("Entered to Step2")
    }


    setSecuredPartyCodeLookup(data) {
        cy.get(this.securedPartyCodeOrName).type(data.partyCode)
        cy.wait(2000)
        const element = 'span:contains("' + data.partyCodeResult + '")'
        cy.get(element).click()
        cy.wait(2000)
    }

    setSecuredPartyNameLookup(data) {
        cy.get(this.securedPartyCodeOrName).type(data.partyName)
        cy.wait(2000)
        cy.get(this.securedPartyDropdownList).click()
    }

    clickAddSecuredPartyLink() {
        cy.get(this.addSecuredPartyLink).click()
        cy.log("Secured Party Link got clicked")
    }

    clickPartyDoneButton() {
        cy.wait(2000)
        cy.get(this.partyDoneButton).click()
        cy.log("Clicked on Party Done Button")
    }

    clickDebtorDoneButton() {
        cy.wait(2000)
        cy.get(this.debtorDoneButton).click()
        cy.log("Debtor Done Button got clicked")
    }

    clickPartyBusinessText() {
        cy.wait(2000)
        cy.get(this.partyBusiness).click()
        cy.log("Entered Party Business Name")
    }

    setDebtorAddressCountry(data) {
        cy.wait(2000)
        cy.get(this.debtorAddressCountryDropdown).type(data)
        cy.wait(2000)
        const element = 'span:contains("' + data + '")'
        cy.get(element).click()
        cy.log("Entered Debtor Address")
    }

    setPartyIndividual(data) {
        cy.get(this.partyIndividualPersonRadioButton).check({ force: true })
        cy.get(this.partyFirstName).type(data.partyFirstName)
        cy.get(this.partyMiddleName).type(data.partyMiddleName)
        cy.get(this.partyLastName).type(data.partyLastName)
        cy.get(this.partyEmailAddress).type(data.partyEmailAddress)
        cy.get(this.partyAddressCountryDropdown).type(data.partyCountry)
        cy.get(this.partyAddressCountry).click()
        cy.get(this.partyAddressLine1Text).type(data.partyAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.partyDeliveryInstructions).type(data.partyDeliveryInstructions)
        this.clickPartyDoneButton()
        cy.log("Entered Party Individual Details")
    }

    setPartyBusiness(data) {
        cy.get(this.partyBusinessRadioButton).check({ force: true })
        cy.get(this.partyBusinessLegalName).type(data.partyBusinessName)
        this.clickPartyBusinessText()
        cy.get(this.partyEmailAddress).type(data.partyEmailAddress)
        cy.get(this.partyAddressCountryDropdown).type(data.partyCountry)
        cy.get(this.partyAddressCountry).click()
        cy.get(this.partyAddressLine1Text).type(data.partyAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.partyDeliveryInstructions).type(data.partyDeliveryInstructions)
        this.clickPartyDoneButton()
        cy.log("Party Business Details got Entered")
    }

    setDebtorIndividual(data) {
        cy.get(this.addIndividualDebtor).click()
        cy.get(this.debtorFirstName).type(data.debtorFirstName)
        cy.get(this.debtorMiddleName).type(data.debtorMiddleName)
        cy.get(this.debtorLastName).type(data.debtorLastName)
        cy.get(this.debtorBirthdateMonthDropdown).type(data.debtorBirthMonth)
        cy.get(this.debtorBirthMonthText).click()
        cy.get(this.debtorBirthdateDay).type(data.debtorBirthDay)
        cy.get(this.debtorBirthdateYear).type(data.debtorBirthYear)
        cy.get(this.debtorEmailAddress).type(data.debtorEmailAddress)
        this.setDebtorAddressCountry(data.debtorCountry)
        cy.get(this.debtorAddressLine1Text).type(data.debtorAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.debtorDeliveryInstructions).type(data.debtorDeliveryInstructions)
        this.clickDebtorDoneButton()
        cy.log("Debtor Individual Details got Entered")
    }

    setDebtorBusiness(data) {
        cy.get(this.addBusinessDebtor).click()
        cy.get(this.debtorBusinessLegalName).type(data.debtorBusinessName)
        cy.get(this.debtorBusinessText).click()
        cy.get(this.debtorEmailAddress).type(data.debtorEmailAddress)
        this.setDebtorAddressCountry(data.debtorCountry)
        cy.get(this.debtorAddressLine1Text).type(data.debtorAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.debtorDeliveryInstructions).type(data.debtorDeliveryInstructions)
        this.clickDebtorDoneButton()
        cy.log("Debtor Business Details got Entered")
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
        cy.get(this.verifyPartyNameLookup).should('have.text', data.partyNameLookup)
        cy.get(this.verifySecuredPartyAddress).should('have.text', data.securedPartyAddress)
        cy.get(this.verifySecuredPartyNameCode).should('have.text', data.securedPartyNameCode)
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

    verifySecuredPartyEditModal(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.individualPersonName).should('have.text', data.individualPersonName)
        cy.get(this.individualPartyAddress).should('have.text', data.individualPartyAddress)
        cy.get(this.individualPartyEmail).should('have.text', data.individualPartyEmail)
        cy.get(this.partyIndividualEditButton).click()
        cy.get(this.partyBusinessRadioButton).click({ force: true })
        cy.get(this.partyBusinessLegalName).should('be.empty')
        cy.get(this.partyDoneButton).click()
        cy.get(this.verifyBusinessNameErrorValidation).should('have.text', data.verifyBusinessNameErrorValidation)
        cy.get(this.partyIndividualPersonRadioButton).click({ force: true })
        cy.get(this.partyDoneButton).click()
        cy.get(this.individualPersonName).should('have.text', data.individualPersonName)
        cy.get(this.individualPartyAddress).should('have.text', data.individualPartyAddress)
        cy.get(this.individualPartyEmail).should('have.text', data.individualPartyEmail)
        cy.log("Verified Secured Party Edit Modal")

    }

    verifyPartyBusinessEditModal(data) {
        cy.get(this.securedPartiesTitle).should('have.text', data.securedPartiesTitle)
        cy.get(this.individualBusinessName).should('have.text', data.individualBusinessName)
        cy.get(this.individualBusinessAddress).should('have.text', data.individualBusinessAddress)
        cy.get(this.individualBusinessEmail).should('have.text', data.individualBusinessEmail)
        cy.get(this.partyBusinessEditButton).click()
        cy.wait (3000)
        cy.get(this.partyIndividualPersonRadioButton).click({ force: true })
        cy.get(this.partyDoneButton).click()
        cy.get(this.verifyPartyFirstNameValidation).should('have.text', data.veriFirstNameValidation)
        cy.get(this.verifyPartyLastNameValidation).should('have.text', data.verifyLastNameValidation)
        cy.get(this.partyBusinessRadioButton).click({ force: true })
        cy.get(this.partyDoneButton).click()
        cy.get(this.individualBusinessName).should('have.text', data.individualBusinessName)
        cy.get(this.individualBusinessAddress).should('have.text', data.individualBusinessAddress)
        cy.get(this.individualBusinessEmail).should('have.text', data.individualBusinessEmail)
        cy.log("Verified Party Business Edit Modal")
    }

    verifySecuredPartyCodeOrNameLookup(data) {
        cy.get(this.individualPartyBusinessName).should('have.text', data.individualPartyBusinessName)
        cy.get(this.individualPartyBusinessAddress).should('have.text', data.individualPartyBusinessAddress)
        cy.get(this.securedPartyCode).should('have.text', data.securedPartyCode)
        cy.get(this.verifyPartyNameLookup).should('have.text', data.partyNameLookup)
        cy.get(this.verifySecuredPartyAddress).should('have.text', data.securedPartyAddress)
        cy.get(this.verifySecuredPartyNameCode).should('have.text', data.securedPartyNameCode)
        cy.get(this.securedPartyCodeOrName).type(data.securedPartyInvalidCode)
        cy.get(this.verifyNoMatchesValidation).should('have.text', data.verifyNoMatchesText)
        cy.log("Verified Secured Party Code or Name")

    }

    verifySecuredPartyDeleteModal(data) {
        cy.get(this.removeSecuredPartyName).click()
        cy.wait(1000)
        cy.get(this.removeSecuredPartyCode).click()
        cy.wait(1000)
        cy.get(this.removeSecuredPartyBusinessName).click()
        cy.wait(1000)
        cy.get(this.partyDropdownRemoveButton).click()
        cy.get(this.removeSecuredPartyIndividualName).click()
        cy.wait(1000)
        cy.get(this.partyDropdownRemoveButton).click()
        cy.wait(1000)
        cy.get(this.verifyEmptySecuredPartyModal).should('have.text', data.securedPartyModalText)
        cy.log("Verified Deleted Secured Party Modal")

    }

    verifyIndividualDebtorEditModal(data) {
        cy.get(this.partyIndividualEditButton).click()
        cy.get(this.debtorFirstName).clear()
        cy.get(this.debtorLastName).clear()
        cy.get(this.verifyBirthdateMonth).click()
        cy.get(this.debtorBirthdateDay).clear()
        cy.get(this.debtorDoneButton).click()
        cy.get(this.verifyDebtorFirstNameValidation).should('have.text', data.veriFirstNameValidation)
        cy.get(this.verifyDebtorLastNameValidation).should('have.text', data.verifyLastNameValidation)
        cy.get(this.verifyBirthdateMonthValidation).should('have.text', data.birthdateMonthValidation)
        cy.get(this.verifyBithdateDayValidation).should('have.text', data.bithdateDayValidation)
        cy.get(this.cancelDebtorButton).click()
        cy.get(this.individualDebtorName).should('have.text', data.individualDebtorName)
        cy.get(this.individualDebtorAddress).should('have.text', data.individualDebtorAddress)
        cy.get(this.individualDebtorEmail).should('have.text', data.individualDebtorEmail)
        cy.get(this.individualDebtorBirthdate).should('have.text', data.individualDebtorBirthdate)
        cy.log("Verified Individual Debtor Edit Modal")

    }

    verifyBusinessDebtorEditModal(data) {
        cy.get(this.partyBusinessEditButton).click()
        cy.get(this.debtorBusinessLegalName).clear()
        cy.get(this.debtorDoneButton).click()
        cy.get(this.verifyDebtorBusinessNameValidation).should('have.text', data.verifyBusinessNameErrorValidation)
        cy.get(this.cancelDebtorButton).click()
        cy.get(this.businessDebtorName).should('have.text', data.businessDebtorName)
        cy.get(this.businessDebtorAddress).should('have.text', data.businessDebtorAddress)
        cy.get(this.businessDebtorEmail).should('have.text', data.businessDebtorEmail)
        cy.log("Verified Business Debtor Edit Modal")
    }

    verifyDebtorDeleteModal(data) {
        cy.get(this.removeDebtorBusinessName).click()
        cy.wait(1000)
        cy.get(this.partyDropdownRemoveButton).click()
        cy.get(this.removeDebtorIndividualName).click()
        cy.wait(1000)
        cy.get(this.partyDropdownRemoveButton).click()
        cy.get(this.verifyEmptyDebtorModal).should('have.text', data.debtorModalText)
        cy.log("Verified Deleted Debtor Modal")

    }

    verifyRegisteringPartyModal(data) {
        cy.get(this.registeringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.registeringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.get(this.registeringPartyChangeButton).click()
        cy.get(this.registeringPartyCodeOrNameTextField).type(data.registeringPartyCodeText)
        cy.get(this.registeringPartyCodeDropdown).click()
        cy.get(this.registeringPartyName).should('have.text', data.registeringPartyCodeName)
        cy.get(this.registeringPartyAddress).should('have.text', data.registeringPartyCodeAddress)
        cy.get(this.registeringPartyCode).should('have.text', data.registeringPartyCode)
        cy.get(this.registeringPartyChangeButton).click()
        cy.get(this.registeringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.registeringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.get(this.registeringPartyChangeButton).click()
        cy.get(this.registeringPartyLink).click()
        cy.get(this.partyIndividualPersonRadioButton).click({ force: true })
        cy.get(this.partyFirstName).type(data.registeringPartyFirstName)
        cy.get(this.partyMiddleName).type(data.registeringPartyMiddleName)
        cy.get(this.partyLastName).type(data.registeringPartyLastName)
        cy.get(this.partyEmailAddress).type(data.registeringPartyEmailAddress)
        cy.get(this.partyAddressCountryDropdown).type(data.registeringPartyCountry)
        cy.get(this.partyAddressCountry).click()
        cy.get(this.partyAddressLine1Text).type(data.registeringPartyAddressLine1)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle + '"]').click()
        cy.get(this.partyDeliveryInstructions).type(data.registeringPartyDeliveryInstructions)
        cy.wait(1000)
        cy.get(this.partyDoneButton).click()
        cy.get(this.verifyRegisteringPartyName).should('have.text', data.editedRegisteringPartyName)
        cy.get(this.verifyRegisteringPartyAddress).should('have.text', data.verifyRegisteringPartyAddress)
        cy.get(this.verifyRegisteringPartyEmail).should('have.text', data.registeringPartyEmailAddress)
        cy.get(this.registeringPartyEditDropdown).click()
        cy.get(this.registeringPartyEditButton).click({ multiple: true })
        cy.get(this.verifySecuredPartyCountry).type(data.countryTitle)
        cy.get(this.countryDropdown).click({ multiple: true })
        cy.get(this.registeringPartyAddress2).type(data.modifyRegisteringPartyAddress)
        cy.wait(2000)
        cy.get('[title = "' + data.addressTitle2 + '"]').click()
        cy.wait(2000)
        cy.get(this.partyDoneButton).click()
        cy.get(this.verifyRegisteringPartyName).should('have.text', data.editedRegisteringPartyName)
        cy.get(this.verifyRegisteringPartyAddress).should('have.text', data.editedRegisteringPartyAddress)
        cy.get(this.verifyRegisteringPartyEmail).should('have.text', data.registeringPartyEmailAddress)
        cy.get(this.registeringPartyChangeButton).click()
        cy.get(this.registeringPartyName).should('have.text', data.registeringPartyName)
        cy.get(this.registeringPartyAddress).should('have.text', data.registeringPartyAddress)
        cy.log("Verified Registering Party Modal")
    }

}
export const step2AssertionPage = new Step2AssertionPage()