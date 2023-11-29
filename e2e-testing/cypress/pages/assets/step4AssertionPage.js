/// <reference types="Cypress" />

export class Step4AssertionPage {

    constructor() {

        // Step4

        this.reviewAndConfirmStepper = '#step-4-btn'
        this.step4Title = 'div:contains("Review and Confirm")'
        this.lengthInvalidMessage = '.pb-6 > .col > .invalid-message'
        this.linkLengthTrust = '#router-link-length-trust'
        this.registrationLength = '#registration-length'
        this.trustIndenture = '#trust-indenture-summary'
        this.securedPartiesInvalidMessage = ':nth-child(4) > :nth-child(1) > .party-summary > .container > .row > .col > .v-data-table > .v-data-table__wrapper > table > tbody > .text-center > .border-error-left > .invalid-message'
        this.securedPartyLink = ':nth-child(4) > :nth-child(1) > .party-summary > .container > .row > .col > .v-data-table > .v-data-table__wrapper > table > tbody > .v-data-table__empty-wrapper > td > .invalid-link'
        this.debtorsInvalidMessage = ':nth-child(6) > :nth-child(1) > .party-summary > .container > .row > .col > .v-data-table > .v-data-table__wrapper > table > tbody > .v-data-table__empty-wrapper > td > .invalid-message'
        this.debtorsLink = ':nth-child(6) > :nth-child(1) > .party-summary > .container > .row > .col > .v-data-table > .v-data-table__wrapper > table > tbody > .v-data-table__empty-wrapper > td > .invalid-link'
        this.collateralInvalidMessage = '#collateral-summary > .container > .row > .col > .invalid-message'
        this.collateralLink = '#router-link-collateral'
        this.subHeader = '.sub-header'
        this.lengthAndTrustStepper = '#step-1-btn'
        this.securedPartiesStepper = '#step-2-btn'
        this.collateralStepper = '#step-3-btn'

    }

    clickStep4(data) {
        cy.get(this.reviewAndConfirmStepper).click()
        cy.get(this.subHeader).should('have.text', data.step4SubHeader)
        cy.log("Entered to Step4")
    }

    verifyRegistrationLengthAndTrustIndenture(data) {
        cy.get(this.lengthInvalidMessage).should('have.text', data.invalidMessage)
        cy.get(this.linkLengthTrust).should('have.text', data.link)
        cy.get(this.registrationLength).should('have.text', data.registrationLength)
        cy.get(this.trustIndenture).should('have.text', data.trustIndenture)
        cy.get(this.linkLengthTrust).click()
        cy.get(this.subHeader).should('have.text', data.step1SubHeader)
        cy.log("Verified Length & Trust Indenture")

    }

    verifySecuredParties(data) {
        cy.get(this.securedPartiesInvalidMessage).should('have.text', data.invalidMessage)
        cy.get(this.securedPartyLink).should('have.text', data.link).click()
        cy.get(this.subHeader).should('have.text', data.step2SubHeader)
        cy.log("Verified Secured Parties")

    }

    verifyDebtors(data) {
        cy.get(this.debtorsInvalidMessage).should('have.text', data.invalidMessage)
        cy.get(this.debtorsLink).should('have.text', data.link).click()
        cy.get(this.subHeader).should('have.text', data.step2SubHeader)
        cy.log("Verified Debtors")
    }

    verifyCollateral(data) {
        cy.get(this.collateralInvalidMessage).should('have.text', data.collateralInvalidMessage)
        cy.get(this.collateralLink).should('have.text', data.collateralLink).click()
        cy.get(this.subHeader).should('have.text', data.step3SubHeader)
        cy.log("verified Collateral")

    }



}
export const step4AssertionPage = new Step4AssertionPage()