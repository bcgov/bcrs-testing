/// <reference types="Cypress" />

export class PPRSearchPage {

    constructor() {

        this.selectSearchCategory = '#search-select'
        this.serialNumber = '#list-serial-number'
        this.individualDebtorName = '#list-individual-debtor'
        this.businessDebtorName = '#list-business-debtor'
        this.manufacturedHomeRegistrationNumber = '#list-mhr-number'
        this.aircraftNumber = '#list-aircraft-dot'
        this.registrationNumber = '#list-registration-number'
        this.searchBarField = '#search-bar-field'
        this.firstName = '#first-name-field'
        this.middleName = '#second-name-field'
        this.lastName = '#last-name-field'
        this.searchButton = '#search-btn'
        this.acceptButton = '#accept-btn'
        this.cancelButton = '#cancel-btn'
        this.searchDoneButton = '#Search_done-btn_2xQsY'
        this.generateSearchResultReportButton = '#btn-generate-result'
        this.searchHeader = '#search-header'
        this.pprSearchDropdown = '#srch-type-drop-1'
        this.mhrSearchDropdown = '#srch-type-drop-2'
        this.pprSearchInfoText = 'span[data-test-id=ppr-search-info]'
        this.searchButtonInfo = '#search-btn-info'
        this.pprSearchHintText = '.v-messages__message'
        this.businessDebtorNameField = '#txt-name-debtor'

    }

    cypressReload(){
        cy.reload()
    }

    selectSearchCategoryDropdown(){
        cy.wait(3000)
        cy.get(this.selectSearchCategory).click({force: true})
        cy.log("Clicked Search Category dropdown")
        cy.wait(2000)

    }

    searchSerialNumber(data){

        cy.get(this.pprSearchDropdown).click()
        cy.wait(2000)
        cy.get(this.serialNumber).click()
        cy.get(this.pprSearchInfoText).should('have.text', data.pprSearchInfoText)
        cy.get(this.searchButtonInfo).should('have.text', data.searchButtonInfo)
        cy.get(this.pprSearchHintText).should('have.text', data.pprSerialNumberHint)
        cy.get(this.searchBarField).type(data.serialNumber)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Serial Number Search Report got Generated")

    }
    
    searchIndividualDebtorName(data){

        cy.get(this.pprSearchDropdown).click()
        cy.wait(2000)
        cy.get(this.individualDebtorName).click()
        cy.get(this.pprSearchInfoText).should('have.text', data.pprSearchInfoText)
        cy.get(this.searchButtonInfo).should('have.text', data.searchButtonInfo)
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

        cy.get(this.pprSearchDropdown).click()
        cy.wait(2000)
        cy.get(this.businessDebtorName).click()
        cy.get(this.pprSearchInfoText).should('have.text', data.pprSearchInfoText)
        cy.get(this.searchButtonInfo).should('have.text', data.searchButtonInfo)
        cy.get(this.pprSearchHintText).should('have.text', data.pprBusinessDebtorHint)
        cy.get(this.businessDebtorNameField).type(data.businessDebtorName)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        //cy.get(this.acceptButton).click()
        cy.wait(2000)
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Business Debtor Search Report got Generated")

    }

    searchManufacturedHomeRegistrationNumber(data){

        cy.get(this.pprSearchDropdown).click()
        cy.wait(2000)
        cy.get(this.manufacturedHomeRegistrationNumber).click()
        cy.get(this.pprSearchInfoText).should('have.text', data.pprSearchInfoText)
        cy.get(this.searchButtonInfo).should('have.text', data.searchButtonInfo)
        cy.get(this.pprSearchHintText).should('have.text', data.pprMHRNumberHint)
        cy.get(this.searchBarField).type(data.mhrNumber)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Manufactured Home Registration Number Search got Generated")

    }

    searchAircraftNumber(data){

        cy.get(this.pprSearchDropdown).click()
        cy.wait(2000)
        cy.get(this.aircraftNumber).click()
        cy.get(this.pprSearchInfoText).should('have.text', data.pprSearchInfoText)
        cy.get(this.searchButtonInfo).should('have.text', data.searchButtonInfo)
        cy.get(this.pprSearchHintText).should('have.text', data.pprAircraftNumberHint)
        cy.get(this.searchBarField).type(data.aircraftNumber)
        cy.get(this.searchButton).click()
        cy.get(this.acceptButton).click()
        cy.get(this.generateSearchResultReportButton).click()
        cy.get(this.searchHeader).should('have.text', data.searchHeader)
        cy.log("Aircraft Number Search Report got Generated")

    }
    
    searchRegistrationNumber(data){

        cy.get(this.pprSearchDropdown).click()
        cy.wait(2000)
        cy.get(this.registrationNumber).click()
        cy.get(this.pprSearchInfoText).should('have.text', data.pprSearchInfoText)
        cy.get(this.searchButtonInfo).should('have.text', data.searchButtonInfo)
        cy.get(this.pprSearchHintText).should('have.text', data.pprRegistrationNumberHint)
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