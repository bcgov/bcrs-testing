export class ColumnListSearch
{
    constructor()
    {
    }

    columnSelectDropDown()
    {
        cy.get('.v-input__slot > .v-input__append-inner > .v-input__icon > .v-icon').click() // Column Select Drop Down
    }

    selectRoutineSlipNumber()
    {
        cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Routine Slip Number
    }

    selectReceiptNumber()
    {
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Receipt Number
    }

    selectEntityNumber()
    {
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Entity Number
    }

    selectDate()
    {
        cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Date
    }

    selectStatus()
    {
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Status
    }

    selectFolioNumber()
    {
        cy.get(':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Folio Number
    }

    selectChequeNumber()
    {
        cy.get('.v-item--active > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Cheque Number
    }

    selectTotalAmount()
    {
        cy.get(':nth-child(8) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Total Amount
    }
}
export const columnListSearch = new ColumnListSearch()