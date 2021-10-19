export class ResultSearch
{
    constructor()
    {
    }

    openRoutineSlip()
    {
        //cy.get(':nth-child(1) > .action > .v-btn').click() //Open Button Click
        //cy.get(':nth-child(1) > .action > .v-btn').click()
        cy.get(':nth-child(5) > .action > .v-btn > .v-btn__content').click()
    }
}
export const resultSearch = new ResultSearch()
