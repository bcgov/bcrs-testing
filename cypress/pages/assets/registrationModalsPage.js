/// <reference types="Cypress" />

const log = require("log");
const tab = require('cypress-plugin-tab')

export class FieldValidationsPage {


    constructor() {

        this.registrationNumberTextbox = '#my-reg-add'
        this.registrationFoundModal = 'h2:contains("Registration Found")'
        this.acceptButton = '#accept-btn'
        this.registrationAlreadyAddedModal = 'h2:contains("Registration Already Added")'
        this.removeFromTableModal = 'h2:contains("Remove From Table")'
        this.deleteDraftModal = 'h2:contains("Delete Draft")'
        this.cancelButton = '#cancel-btn'
        this.unableToAddRegistrationModal = 'h2:contains("Unable to add registration to your table")'
        this.restrictedAccessRegistrationModal = 'h2:contains("Restricted Access Registration Found")'




    }


    verifyRegistrationFoundModal(data) {
        cy.get(this.registrationNumberTextbox).type(data)
        
    }

}