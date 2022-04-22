export class RoutineSlipSearch
{
    constructor()
    {
    }

    routineSlipNumber()
    {
        cy.get('#routingSlipNumber').type('600000002{enter}') //Enter Routine Slip Number
    }

    receiptNumber()
    {
        cy.get('#receiptNumber').type('1234{enter}') //Enter Receipt Slip Number
    }

    entityNumber()
    {
        cy.get('#entityNumber').type('Hemin{enter}') //Initiator Agent Name
    }

    datePicker()
    {
        cy.get('[data-test=input-date-picker]').click() // Date picker Field
        cy.get(':nth-child(3) > :nth-child(2) > .v-btn > .v-btn__content').click() // Select Date
    }

    slipStatus()
    {
        cy.get('.v-select__selections').click() // Click on Status Slip Drop down
        cy.get('#list-item-94-0 > .v-list-item__content > .v-list-item__title').click() // Click on Active Status
        // A Random Status Selection array needs to be set using drop down items as list.
    }

    folioNumber()
    {
        cy.get('#folioNumber').type('1234{enter}') //Enter Folio Slip Number
    }

    chequeNumber()
    {
        cy.get('#chequeReceiptNumber').type('{enter}') //Enter Cheque Number
    }

    totalAmount()
    {
        cy.get('#total').type('540{enter}') //Amount
    }

    clearFilter()
    {
        cy.get('.clear-filter').click() //Clear Filter
    }
    
}
export const routineSlipSearch = new RoutineSlipSearch()