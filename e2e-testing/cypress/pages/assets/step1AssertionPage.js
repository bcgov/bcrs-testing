/// <reference types="Cypress" />

const log = require("log");
const tab = require('cypress-plugin-tab')

export class Step1AssertionPage {

    constructor() {

        // Step1

        this.step1Title = '#registration-header'
        this.registrationLengthTitle = '.sub-header'
        this.registrationLengthDesc = '.pt-2'
        this.lengthInYearsValidation = '.v-messages__message'
        this.registrationLengthRadioButton = 'input#length-in-years'
        this.lengthInYearsText = 'input#life-years-field'
        this.lengthInfiniteRadioButton = '#length-infinite'
        this.trustIndentureCheckbox = '#trust-indenture-checkbox'
        this.title = '.pt-5 > .FeeSummary_fee-list__item-name_2kw-n'
        this.titleAmount = '.pt-5 > .FeeSummary_fee-list__item-value_1l2Y6'
        this.hint = '.fee-list__hint'
        this.serviceFee = '.py-4 > .FeeSummary_fee-list__item-name_2kw-n'
        this.serviceFeeAmount = '.py-4 > .FeeSummary_fee-list__item-value_1l2Y6'
        this.totalFees = '.FeeSummary_fee-total__name_2oa5u'
        this.currency = '.FeeSummary_fee-total__currency_v1YAJ'
        this.totalAmount = '.FeeSummary_fee-total__value_2fczQ'

    }

    verifyStep1(data) {
        cy.get(this.step1Title).should('have.text', data.step1Title)
        cy.get(this.registrationLengthTitle).should('have.text', data.registrationLengthTitle)
        cy.get(this.registrationLengthDesc).should('have.text', data.registrationLengthDesc)
        cy.get(this.lengthInYearsValidation).should('have.text', data.lengthInYearsValidation)

        cy.log("Verified Step1 of Security Agreement")
    }

    verifyFeeModal(data) {
        cy.get(this.lengthInYearsText).type(data.lengthInYears)
        cy.get(this.title).should('have.text', data.title)
        cy.get(this.titleAmount).should('have.text', data.titleAmount)
        cy.get(this.hint).should('have.text', data.hint)
        cy.get(this.serviceFee).should('have.text', data.serviceFee)
        cy.get(this.serviceFeeAmount).should('have.text', data.serviceFeeAmount)
        cy.get(this.currency).should('have.text', data.currency)
        cy.get(this.totalFees).should('have.text', data.totalFees)
        cy.get(this.totalAmount).should('have.text', data.totalAmount)
        cy.get(this.lengthInYearsText).clear()
        cy.log("Verified Registration Length with valid data")

    }

    verifyInvalidData(data) {
        cy.get(this.lengthInYearsText).type(data.lengthInYears)
        cy.get(this.lengthInYearsValidation).should('have.text', data.errorMessage)
        cy.get(this.lengthInYearsText).clear()
        cy.log("Verified Registration Length with invalid data")
    }

}
export const step1AssertionPage = new Step1AssertionPage()