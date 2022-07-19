/// <reference types="Cypress" />

const log = require("log");
const tab = require('cypress-plugin-tab')

export class FieldValidationsPage {

    constructor() {
        //Add Secured Parties and Debtors
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
        this.debtorBusinessText = ':nth-child(1) > .v-list-item__content > .v-list-item__subtitle'

        //Add Collateral Next Button

        this.addCollateralButton = 'button#reg-next-btn'

        //Add Collateral

        this.addVehicleCollateral = 'button#btn-add-collateral'
        this.vehicleTypeDropdown = '.v-select__slot'
        this.serialOrVINNumber = 'input#txt-serial'
        this.manufacturedHomeRegistrationNumber = 'input#txt-man'
        this.yearText = 'input#txt-years'
        this.makeText = 'input#txt-make'
        this.modelText = 'input#txt-model'
        this.collateralDoneButton = 'button#done-btn-collateral'
        this.generalCollateralText = '#general-collateral-new-desc'
        this.generalCollateralDescription = '.general-collateral-summary > .ma-0'

        
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
    
    clickAddSecuredPartyLink() {
        cy.get(this.addSecuredPartyLink).click()
        cy.log("Secured Party Link got clicked")
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


}
export const fieldValidationsPage = new FieldValidationsPage()