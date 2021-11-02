export class ResultSearch
{
    constructor()
    {
    }

    openRoutineSlip()
    {
        //cy.get(':nth-child(1) > .action > .v-btn').click() //Open Button Click
        //cy.get(':nth-child(1) > .action > .v-btn').click()
        //cy.get('td:nth-child(5) > .action > .v-btn > .v-btn__content').click()
        cy.get('.rs-search-result:nth-child(2) > .action').click()
        //console.log('ACTIONS',cy.get('td:nth-child(5) > .action > .v-btn > .v-btn__content'))
        //console.log('TEXT',cy.get('.action .text-right'))
        //console.log('Entity',cy.get('#entityNumber').text('okay'))
    }
}
export const resultSearch = new ResultSearch()
