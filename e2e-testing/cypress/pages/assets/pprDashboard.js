/// <reference types="Cypress" />
const log = require("log");


export class pprDashboard {
    constructor() {

        this.pprSearchCategory = '.v-select__selections'
        this.pprSearchTextbox = 'input[placeholder="Enter a registration number"]'
        this.searchButton = 'button#SearchBar_search-btn_1WRSN'

    }

    selectPPRSearchCategory(data) {
        cy.get(this.pprSearchCategory).select(data)
        log.info("Search category selected")
    }

    setPPRSearchTextbox(data) {
        cy.get(this.pprSearchTextbox).type(data)
        log.info("Entered the text")
    }

    clickSearchButton() {
        cy.get(this.searchButton).click()
        log.info("Clicked on search button")
    }

}
export const pprDashboard = new pprDashboard()