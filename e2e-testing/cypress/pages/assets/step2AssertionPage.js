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

        //Party Business

        this.partyBusinessRadioButton = 'input#party-business'
        this.partyBusinessLegalName = 'input#txt-name-party'
        this.partyBusiness = '.v-item-group > :nth-child(1)'

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
        this.debtorBusinessText = ':nth-child(1) > .v-list-item__content > .v-list-item__title'

        //Secured Parties verification

        this.securedPartiesTitle = 'h3:contains("Secured Parties")'
        this.individualPersonName = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > div'
        this.individualPartyAddress = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualPartyEmail = '.pt-2 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualBusinessName = ':nth-child(2) > .list-item__title > .row > .col-9 > div'
        this.individualBusinessAddress = 'tbody > :nth-child(2) > :nth-child(2)'
        this.individualBusinessEmail = 'tbody > :nth-child(2) > :nth-child(3)'
        this.individualPartyBusinessName = ':nth-child(3) > .list-item__title > .row > .col-9 > div'
        this.individualPartyBusinessAddress = 'tbody > :nth-child(3) > :nth-child(2)'
        this.securedPartyCode = 'tbody > :nth-child(3) > :nth-child(4)'

        // Debtors Verification

        this.debtorTitle = 'h3:contains("Debtors")'
        this.individualDebtorName = ':nth-child(1) > .container > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > .list-item__title > .row > .col-9 > div'
        this.individualDebtorAddress = ':nth-child(1) > .container > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(2)'
        this.individualDebtorEmail = ':nth-child(1) > .container > .pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(1) > :nth-child(3)'
        this.individualDebtorBirthdate = 'td:contains("April 20, 1965")'
        this.businessDebtorName = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > .list-item__title > .row > .col-9 > div'
        this.businessDebtorAddress = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(2)'
        this.businessDebtorEmail = '.pt-4 > :nth-child(1) > .v-data-table > .v-data-table__wrapper > table > tbody > :nth-child(2) > :nth-child(3)'

    }

    clickStep2() {
        cy.get(this.addSecuredPartiesAndDebtorsStepper).click()
        cy.log("Entered to Step2")
    }


    setSecuredPartyCodeOrNameLookup(data) {
        cy.get(this.securedPartyCodeOrName).type(data.partyCode)
        cy.wait(2000)
        const element = 'span:contains("' + data.partyCodeResult + '")'
        cy.get(element).click()
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

}
export const step2AssertionPage = new Step2AssertionPage()