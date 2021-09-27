export class ColumnListSearch
{
    constructor()
    {
    }

    columnSelect()
    {
        cy.get('#input-35').click() // Column Select Drop Down
        cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Receipt Number
        cy.get(':nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Folio Number
        cy.get(':nth-child(3) > .v-input > .v-input__control > .v-input__slot > .v-label').click() // UnSelect/Select Date
    }
}
export const columnListSearch = new ColumnListSearch()