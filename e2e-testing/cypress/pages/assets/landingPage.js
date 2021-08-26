/// <reference types="Cypress" />
const log = require("log");

export class LandingPage {
    constructor() {

        this.pprLink = 'a[href = "/ppr-marketing"]'
        this.accountDropdown = 'span:contains("Log in to my BC Registries Account")'
        this.bcServicesCardMenuItem = 'div:contains("BC Services Card")'

    }

    visit(url) {
        cy.visit(url)
    }

    clickPPRLink() {
        cy.get(this.pprLink).click()
        cy.log("Clicked on PPR Link")
    }

    clickAccountDropdown() {
        cy.get(this.accountDropdown).click()
        cy.log("Clicked on account dropdown link")
    }

    clickBCServicesCardMenuItem() {
        cy.get(this.bcServicesCardMenuItem).click()
        cy.log("Clicked on BC services card")
    }


}  export const landingPage = new LandingPage()