export class LinkRoutineSlip
{
    constructor()
    {
    }

    linkRoutineSlipSearch()
    {
        cy.get('.v-btn__content').contains('Link Routing Slip').click()
        cy.get('.v-input__slot').type(400000001)
        cy.get('.rs-details').contains('400000001').click()
    }

    linkRoutineSlip()
    {
        //cy.get('.v-btn__content').contains('Link ').click()
    }

    linkRoutineSlipCancel()
    {
        cy.get('.v-btn__content').contains('Cancel').click()
    }
}
export const linkRoutineSlip = new LinkRoutineSlip()