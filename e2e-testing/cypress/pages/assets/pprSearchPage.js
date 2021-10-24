/// <reference types="Cypress" />

export class PPRSearchPage {

    constructor() {

        this.selectSearchCategory = '.ml-n6 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
        this.serialNumber = 'span:contains("Serial Number")'
        this.individualDebtorName = 'span:contains("Individual Debtor Name")'
        this.businessDebtorName = 'span:contains("Business Debtor Name")'
        this.manufacturedHomeRegistrationNumber = 'span:contains("Manufactured Home Registration Number")'
        this.aircraftNumber = 'span:contains("Aircraft Airframe D.O.T. Number")'
        this.registrationNumber = 'span:contains("Registration Number")'
        this.searchBarField = '#search-bar-field'
        this.firstName = '#first-name-field'
        this.middleName = '#second-name-field'
        this.lastName = '#last-name-field'
        this.searchButton = '#SearchBar_search-btn_1WRSN'
        this.acceptButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.searchDoneButton = '#Search_done-btn_2xQsY'

    }

    selectSearchCategoryDropdown(){

        cy.get(this.selectSearchCategory).click()
        cy.log("Clicked Search Category dropdown")
        cy.wait(2000)

    }

    searchSerialNumber(data){

        cy.get(this.serialNumber).click()
        cy.get(this.searchBarField).type(data)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchDoneButton).click()
        cy.get(this.acceptButton).click()
        cy.log("Entered Serial Number")

    }
    
    searchIndividualDebtorName(data){

        cy.get(this.individualDebtorName).click()
        cy.get(this.firstName).type(data.firstName)
        cy.get(this.middleName).type(data.middleName)
        cy.get(this.lastName).type(data.lastName)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchDoneButton).click()
        cy.get(this.acceptButton).click()
        cy.log("Entered Individual Debtor Name")

    }
    
    searchBusinessDebtorName(data){

        cy.get(this.businessDebtorName).click()
        cy.get(this.searchBarField).type(data)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchDoneButton).click()
        cy.get(this.acceptButton).click()
        cy.log("Entered Business Debtor Name")

    }

    searchManufacturedHomeRegistrationNumber(data){

        cy.get(this.manufacturedHomeRegistrationNumber).click()
        cy.get(this.searchBarField).type(data)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchDoneButton).click()
        cy.get(this.acceptButton).click()
        cy.log("Entered Manufactured Home Registration Number")

    }

    searchAircraftNumber(data){

        cy.get(this.aircraftNumber).click()
        cy.get(this.searchBarField).type(data)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchDoneButton).click()
        cy.get(this.acceptButton).click()
        cy.log("Entered Aircraft Number")

    }
    
    searchRegistrationNumber(data){

        cy.get(this.registrationNumber).click()
        cy.get(this.searchBarField).type(data)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchDoneButton).click()
        cy.get(this.acceptButton).click()
        cy.log("Entered Registration Number")

    }
}
export const pprSearchPage = new PPRSearchPage()