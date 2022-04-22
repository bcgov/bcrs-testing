export class CreateRoutineSlipButton
{
    constructor()
    {
    }

    createSlip ()
    {
        cy.get('[data-test=btn-create-routing-slip]').click()
    }
}

export const createRoutineSlipButton = new CreateRoutineSlipButton()