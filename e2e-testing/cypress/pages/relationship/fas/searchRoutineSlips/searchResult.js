export class ResultSearch
{
    constructor()
    {
    }

    openRoutineSlip()
    {
        cy.get('.v-btn__content').contains('Open').click()
    }
}
export const resultSearch = new ResultSearch()
