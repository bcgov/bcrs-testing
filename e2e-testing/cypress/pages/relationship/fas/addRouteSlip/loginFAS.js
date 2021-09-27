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
        cy.get('input[name="user"]').type('hacharya') //Username
        cy.get('input[name="password"]').type('QWERTYzxc11!') //Password
    }

    SubmitButton ()
    {
        cy.get('input[name="btnSubmit"]').click() //Continue Button Click
    }
}
export const loginFAS = new LoginFAS()