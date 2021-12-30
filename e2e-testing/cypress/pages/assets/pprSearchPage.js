/// <reference types="Cypress" />

export class PPRSearchPage {

    constructor() {

        this.selectSearchCategory = '.ml-n6 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections'
        this.serialNumber = 'span:contains("Serial Number")'
        this.individualDebtorName = 'span:contains("Individual Debtor Name")'
        this.businessDebtorName = 'span:contains("Business Debtor Name")'
        this.manufacturedHomeRegistrationNumber = 'span:contains("Manufactured Home Registration Number")'
        this.aircraftNumber = 'span:contains("Aircraft Airframe D.O.T. Number")'
        this.registrationNumber = 'html:nth-of-type(1) > body:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(6)'
        this.searchBarField = '#search-bar-field'
        this.firstName = '#first-name-field'
        this.middleName = '#second-name-field'
        this.lastName = '#last-name-field'
        this.searchButton = '#SearchBar_search-btn_1WRSN'
        this.acceptButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.searchDoneButton = '#Search_done-btn_2xQsY'
        this.generateSearchResultReportButton = '#btn-generate-result'
        this.searchHeader = '#search-header'

    }

    selectSearchCategoryDropdown(){

        cy.get(this.selectSearchCategory).click()
        cy.log("Clicked Search Category dropdown")
        cy.wait(2000)

    }

    searchSerialNumber(data){

        cy.get(this.serialNumber).click()
        cy.get(this.searchBarField).type(data.serialNumber)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Serial Number Search Report got Generated")

    }
    
    searchIndividualDebtorName(data){

        cy.get(this.individualDebtorName).click()
        cy.get(this.firstName).type(data.individualDebtorName.firstName)
        cy.get(this.middleName).type(data.individualDebtorName.middleName)
        cy.get(this.lastName).type(data.individualDebtorName.lastName)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Individual Debtor Search Report got Generated")

    }
    
    searchBusinessDebtorName(data){

        cy.get(this.businessDebtorName).click()
        cy.get(this.searchBarField).type(data.businessDebtorName)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.acceptButton).click()
        cy.wait(2000)
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Business Debtor Search Report got Generated")

    }

    searchManufacturedHomeRegistrationNumber(data){

        cy.get(this.manufacturedHomeRegistrationNumber).click()
        cy.get(this.searchBarField).type(data.mhrNumber)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Manufactured Home Registration Number Search got Generated")

    }

    searchAircraftNumber(data){

        cy.get(this.aircraftNumber).click()
        cy.get(this.searchBarField).type(data.aircraftNumber)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Aircraft Number Search Report got Generated")

    }
    
    searchRegistrationNumber(data){

        cy.get(this.registrationNumber).click()
        cy.get(this.searchBarField).type(data.registrationNumber)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.wait(2000)
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Registration Number Search Report got Generated")

    }
}
export const pprSearchPage = new PPRSearchPage()