/// <reference types="Cypress" />


const log = require("log");
const tab = require('cypress-plugin-tab')

export class MiscellaneousRegistrationsAct {

    constructor() {

        //secured party

        this.securedPartyCodeDropdown = '#secured-party-autocomplete'
        this.securedPartyList = '.row auto-complete-row'
        this.changeSecuredParty = '#accept-btn'
        this.cancelSecuredParty = '#cancel-btn'
        
    }

    setSecuredParty(data) {
        cy.get(this.securedPartyCodeDropdown).type(data)
        cy.wait(2000)
        cy.get(this.securedPartyList).click()
        cy.wait(2000)
        cy.log("Entered secured Party")
    }


    
}
export const miscellaneousRegistrationsAct = new MiscellaneousRegistrationsAct()