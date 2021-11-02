export class RefundRequestAuthorized
{
    constructor()
    {
    }

    authorizeRefund()
    {
        cy.get('[data-test=btn-edit-routing-done]').click()
    }

    cancelRefund()
    {
        cy.get('[data-test=btn-edit-routing-cancel]').click()
    }
}

export const refundRequestAuthorized = new RefundRequestAuthorized()