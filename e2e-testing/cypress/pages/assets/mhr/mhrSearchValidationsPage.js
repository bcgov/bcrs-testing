/// <reference types="Cypress" />

export class MHRSearchValidationsPage {

    constructor() {

        this.selectSearchCategory = '.ml-n6 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
        this.pprDropdown = '#srch-type-drop-1 > .col-11'
        this.mhrNumber = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(9)'
        this.ownerName = 'html:first-of-type > body:first-of-type > div:first-of-type > div:nth-of-type(2) > div:first-of-type > div:nth-of-type(10)'
        this.orgName = 'html:first-of-type > body:first-of-type > div:first-of-type > div:nth-of-type(2) > div:first-of-type > div:nth-of-type(11)'
        this.serialNumber = 'html:first-of-type > body:first-of-type > div:first-of-type > div:nth-of-type(2) > div:first-of-type > div:nth-of-type(12)'
        this.searchBarField = '#search-bar-field'
        this.searchButton = '#SearchBar_search-btn_1WRSN'
        this.hintMessage = '.v-messages__message'
        this.firstName = '#first-name-field'
        this.middleName = '#second-name-field'
        this.lastName = '#last-name-field'
        this.folioNumberField = '.v-text-field__slot'
        this.firstNameHintValidation = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > main:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(6) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)'
        this.middleNameHintValidation = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > main:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(6) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)'
        this.lastNameHintValidation = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(4) > main:nth-of-type(1) > div:nth-of-type(4) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(6) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1)'
        this.mhrSearchTitle = '.font-weight-bold'
        this.mhrDropdown = '.ml-n6 > .v-input > .v-input__control > .v-input__slot'

    }

    selectSearchCategoryDropdown() {

        cy.get(this.selectSearchCategory).click()
        cy.log("Clicked Search Category dropdown")
        cy.wait(2000)

    }

    mhrNumberValidation(data) {

        cy.get(this.mhrNumber).click()
        cy.get(this.hintMessage).should('have.text', data.mhrHintMessage)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.mhrHintWithoutNumber)
        cy.get(this.searchBarField).type(data.mhrNumberMaxCharacter)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.maxCharacterErrorMessage)
        cy.get(this.searchBarField).clear()
        cy.get(this.searchBarField).type(data.mhrNumberIncorrectFormat)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.incorrectFormatErrorMessage)
        cy.log("Verified MHR Number Validations")

    }

    ownerNameValidation(data) {

        cy.get(this.mhrDropdown).click()
        cy.wait(2000)
        //cy.get(this.ownerName).click()
        cy.get(this.hintMessage).should('have.text', data.ownerNameHint)
        cy.get(this.searchButton).click()
        cy.get(this.firstNameHintValidation).should('have.text', data.firstNameHintValidation)
        cy.get(this.lastNameHintValidation).should('have.text', data.lastNameHintValidation)
        cy.get(this.firstName).type(data.firstNameSpecialCharacter)
        cy.get(this.middleName).type(data.middleNameSpecialCharacter)
        cy.get(this.lastName).type(data.lastNameSpecialCharacter)
        cy.get(this.firstNameHintValidation).should('have.text', data.specialCharacterMessage)
        cy.get(this.middleNameHintValidation).should('have.text', data.specialCharacterMessage)
        cy.get(this.lastNameHintValidation).should('have.text', data.specialCharacterMessage)
        cy.get(this.firstName).clear()
        cy.get(this.middleName).clear()
        cy.get(this.lastName).clear()
        cy.get(this.firstName).type(data.firstNameMaxCharacter)
        cy.get(this.middleName).type(data.middleNameMaxCharacter)
        cy.get(this.lastName).type(data.lastNameMaxCharacter)
        cy.get(this.firstNameHintValidation).should('have.text', data.firstNameMaxCharacterMessage)
        cy.get(this.middleNameHintValidation).should('have.text', data.middleNameMaxCharacterMessage)
        cy.get(this.lastNameHintValidation).should('have.text', data.lastNameMaxCharacterMessage)
        cy.log("Verified Owner Name Validations")

    }

    orgNameValidation(data) {

        cy.get(this.mhrDropdown).click()
        cy.wait(2000)
        //cy.get(this.orgName).click()
        cy.get(this.hintMessage).should('have.text', data.orgNameHint)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.searchValueEmptyMessage)
        cy.get(this.searchBarField).type(data.specialCharcterValue)
        cy.get(this.hintMessage).should('have.text', data.specialCharacterMessage)
        cy.get(this.searchBarField).type(data.maxCharacterValue)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.maxCharacterMessage)
        cy.get(this.searchBarField).clear()
        cy.get(this.searchBarField).type(data.minCharacterValue)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.minCharacterMessage)
        cy.get(this.searchBarField).type(data.minCharacterValue2)
        cy.get(this.hintMessage).should('have.text', data.orgNameHint)
        cy.log("Verified Organization Name Validations")

    }

    serialNumberValidation(data) {

        cy.get(this.mhrDropdown).click()
        cy.wait(2000)
        //cy.get(this.serialNumber).click()
        cy.get(this.hintMessage).should('have.text', data.serialNumberHint)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.searchValueEmptyMessage)
        cy.get(this.searchBarField).type(data.specialCharcterValue)
        cy.get(this.hintMessage).should('have.text', data.specialCharacterMessage)
        cy.get(this.searchBarField).clear()
        cy.get(this.searchBarField).type(data.maxCharacterValue)
        cy.get(this.searchButton).click()
        cy.get(this.hintMessage).should('have.text', data.maxCharacterMessage)
        cy.log("Verified Serial Number Validations")

    }

}
export const mhrSearchValidationsPage = new MHRSearchValidationsPage()