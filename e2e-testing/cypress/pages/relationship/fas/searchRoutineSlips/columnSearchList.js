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

    selectTodayDate()
    {
        cy.get('[data-test="input-date-picker"]').click() // Select Date field
        cy.get('.v-item-group > :nth-child(1) > .v-list-item__content').click() // Select Today's Date
        cy.get('.date-filter-btns > .font-weight-bold').click() // Select Apply Button
    }

    selectActiveStatus()
    {
        cy.get('.v-select__selections').click() // Select Status field
        cy.get('#list-item-96-0 > .v-list-item__content').click() // Select Active Status
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