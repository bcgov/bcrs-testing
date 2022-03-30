export class AddSingleTransaction
{
    constructor()
    {
    }

    /*visit (url)
    {
        cy.visit(url)
    }*/

    fasUrl ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then(urlData)
        {
            this.urlData = this.urlData
            this.testFas = Cypress.env('test-fas')
        }
    }

    transactionAdd()
    {
        cy.get('[data-test=btn-add-transaction] > .v-btn__content > .font').click() // Click on Add Transcation Manually Button
    }

    changeOfDirectorFilling()
    {
        cy.get('[data-test=input-filing-type]').type('Notice of Change')
        cy.wait(1000)
        cy.get('div[role="listbox"] > div:nth-of-type(1)').click() // Search for Director and click from drop down
        cy.get('[data-test=txt-quantity-0]').type('1{enter}') // Add Quantity
        cy.get('[data-test=txt-incorporation-0]').type('13421{enter}') // Add Reference/Incorportation Number
    }

    amalgamationFilling()
    {
        cy.get('[data-test=input-filing-type]').type('Amalgamation')
        cy.wait(1000)
        cy.get('div[role="listbox"] > div:nth-of-type(1)').click() // Search for Amalgamation and click from drop down
        cy.get('[data-test=txt-quantity-0]').type('1{enter}') // Add Quantity
        cy.get('[data-test=txt-incorporation-0]').type('13421{enter}') // Add Reference/Incorportation Number
    }

    priorityFee()
    {
        cy.get('[data-test=add-manual-transaction-details-0] > .pt-0.col-2 > .v-input > .v-input__control > .v-input__slot > .v-label').click() // Set Priority Fee checkbox
    }

    futureEffectiveDate()
    {
        cy.get('[data-test=add-manual-transaction-details-0] > .col-10 > .v-input > .v-input__control > .v-input__slot > .v-label').click() // Set Future Effective Date checkbox
    }

    anotherTransactionAddition()
    {
        cy.get(':nth-child(2) > :nth-child(1) > [data-test=btn-add-transaction]').click()
    }

    deleteTransaction()
    {
        cy.get('[data-test=btn-remove-1] > .v-btn__content > .v-icon').click()
    }

    addTranscationFilling()
    {
        cy.get('.d-inline-flex > [data-test=btn-add-transaction]').click() // Add Transaction Button
    }

    cancelTransaction()
    {
        cy.get('[data-test=btn-cancel] > .v-btn__content > .font-weight-bold').click()
    }
}

export const addSingleTransaction = new AddSingleTransaction()