/// <reference types="Cypress" />
const log = require("log");


export class PPRDashboardPage {
    constructor() {

        this.pprSearchCategory = '.v-select__selections'
        this.pprSearchTextbox = '#input-42'
        this.searchButton = 'button#SearchBar_search-btn_1WRSN'
        this.category= '#list-item-350-6 > .v-list-item__content > .v-list-item__title'

    }

    selectPPRSearchCategory() {
        cy.get(this.pprSearchCategory).click()  
        cy.wait(3000)
        cy.get(this.category).click()
        cy.log("Search category selected")
    }

    setPPRSearchTextbox(data) {
        cy.get(this.pprSearchTextbox).type(data)
        cy.log("Entered the text")
    }

    clickSearchButton() {
        cy.get(this.searchButton).click()
        cy.log("Clicked on search button")
    }

}
export const pprDashboardPage = new PPRDashboardPage()