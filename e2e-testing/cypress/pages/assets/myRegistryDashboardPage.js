/// <reference types="Cypress" />
const log = require("log");

export class MyRegistryDashboardPage {
    constructor() {

        this.pprDashboardLink = 'span:contains("PPR Dashboard")'
        this.manageBusinessesLink = 'span:contains("Manage Businesses")'

    }

    clickPPRDasboardLink() {
        cy.get(this.pprDashboardLink).click()
        cy.log("Clicked on PPR dashboard")
    }

    clickManageBusinessesLink() {
        cy.get(this.manageBusinessesLink).click()
        cy.log("Clicked on manage businesses")
    }


}
export const myRegistryDashboardPage = new MyRegistryDashboardPage()