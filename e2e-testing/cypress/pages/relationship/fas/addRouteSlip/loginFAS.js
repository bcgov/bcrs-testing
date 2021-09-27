// Login into FAS system

export class LoginFAS
{
    constructor()
    {
    }

    visit (url)
    {
        cy.visit(url)
    }

    enterCreds ()
    {
        cy.get('input[name="user"]').type('BRTEST1') //Username
        cy.get('input[name="password"]').type('RELationships123#') //Password
    }

    SubmitButton ()
    {
        cy.get('input[name="btnSubmit"]').click() //Continue Button Click
    }
}
export const loginFAS = new LoginFAS()