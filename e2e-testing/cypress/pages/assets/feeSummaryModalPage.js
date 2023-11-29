/// <reference types="Cypress" />

export class FeeSummaryModalPage {

    constructor() {

        this.title = '.pt-5 > .FeeSummary_fee-list__item-name_eKvUv'
        this.titleAmount = '.pt-5 > .FeeSummary_fee-list__item-value_Od9jd'
        this.hint = '.fee-list__hint'
        this.serviceFee = '.py-4 > .FeeSummary_fee-list__item-name_eKvUv'
        this.serviceFeeAmount = '.py-4 > .FeeSummary_fee-list__item-value_Od9jd'
        this.totalFees = '.FeeSummary_fee-total__name_aL9Kh'
        this.currency = '.FeeSummary_fee-total__currency_j7EuW'
        this.totalAmount = '.float-right > b'

    }


    verifyFeeSummaryModal(data) {

        cy.get(this.title).should('have.text', data.title)
        cy.get(this.titleAmount).should('have.text', data.titleAmount)
        cy.get(this.hint).should('have.text', data.hint)
        cy.get(this.serviceFee).should('have.text', data.serviceFee)
        cy.get(this.serviceFeeAmount).should('have.text', data.serviceFeeAmount)
        cy.get(this.currency).should('have.text', data.currency)
        cy.get(this.totalFees).should('have.text', data.totalFees)
        cy.get(this.totalAmount).should('have.text', data.totalAmount)
    }

    verifyTotalDischargeFeeModal(data) {

        cy.get(this.title).should('have.text', data.title)
        cy.get(this.titleAmount).should('have.text', data.titleAmount)
        cy.get(this.serviceFee).should('have.text', data.serviceFee)
        cy.get(this.serviceFeeAmount).should('have.text', data.serviceFeeAmount)
        cy.get(this.currency).should('have.text', data.currency)
        cy.get(this.totalFees).should('have.text', data.totalFees)
        cy.get(this.totalAmount).should('have.text', data.totalAmount)
    }

    verifyRenewalFeeModal(data) {

        cy.get(this.title).should('have.text', data.title)
        cy.get(this.titleAmount).should('have.text', data.titleAmount)
        cy.get(this.hint).should('have.text', data.hint)
        cy.get(this.serviceFee).should('have.text', data.serviceFee)
        cy.get(this.serviceFeeAmount).should('have.text', data.serviceFeeAmount)
        cy.get(this.currency).should('have.text', data.currency)
        cy.get(this.totalFees).should('have.text', data.totalFees)
        cy.get(this.totalAmount).should('have.text', data.totalAmount)
    }

    verifyRegistrationRenewalFeeModal(data){
        cy.get(this.title).should('have.text', data.title)
        cy.get(this.titleAmount).should('have.text', data.titleAmount)
        cy.get(this.serviceFee).should('have.text', data.serviceFee)
        cy.get(this.serviceFeeAmount).should('have.text', data.serviceFeeAmount)
        cy.get(this.currency).should('have.text', data.currency)
        cy.get(this.totalFees).should('have.text', data.totalFees)
        cy.get(this.totalAmount).should('have.text', data.totalAmount)
    }

    verifyInfiniteRenewalFeeModal(data) {
        cy.get(this.title).should('have.text', data.title)
        cy.get(this.titleAmount).should('have.text', data.titleAmount)
        cy.get(this.hint).should('have.text', data.hint)
        cy.get(this.serviceFee).should('have.text', data.serviceFee)
        cy.get(this.serviceFeeAmount).should('have.text', data.serviceFeeAmount)
        cy.get(this.currency).should('have.text', data.currency)
        cy.get(this.totalFees).should('have.text', data.totalFees)
        cy.get(this.totalAmount).should('have.text', data.totalAmount)
    }

    verifyAmendmentFeeModal(data) {
        cy.get(this.title).should('have.text', data.title)
        cy.get(this.titleAmount).should('have.text', data.titleAmount)
        cy.get(this.serviceFee).should('have.text', data.serviceFee)
        cy.get(this.serviceFeeAmount).should('have.text', data.serviceFeeAmount)
        cy.get(this.currency).should('have.text', data.currency)
        cy.get(this.totalFees).should('have.text', data.totalFees)
        cy.get(this.totalAmount).should('have.text', data.totalAmount)
    }
    
}

export const feeSummaryModalPage = new FeeSummaryModalPage()