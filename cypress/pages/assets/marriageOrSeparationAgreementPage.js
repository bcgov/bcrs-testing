/// <reference types="Cypress" />

const log = require("log");
const tab = require('cypress-plugin-tab')

export class MarriageOrSeparationAgreementPage {

    //Registration Length

    verifyRegistrationLength(data){
        const registrationLength = 'span:contains("Infinite")'
        cy.get(registrationLength).should('have.text', data.registrationLength)
    }
    
}
export const marriageOrSeparationAgreementPage = new MarriageOrSeparationAgreementPage()