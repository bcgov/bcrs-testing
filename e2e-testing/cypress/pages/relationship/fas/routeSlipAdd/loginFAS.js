// Login into FAS system

export class LoginFAS
{
    constructor()
    {
    }

    /*visit (url)
    {
        cy.visit(url)
    }*/

    fasUrl ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then(urlData)
        {
            this.urlData = this.urlData
            this.testFas = Cypress.env('test-fas')
        }
    }

    testIdir1 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) =>
        {
            const username=userLogin.idir1
            const password=userLogin.password1
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
        })
    }

    testIdir2 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) =>
        {
            const username=userLogin.idir2
            const password=userLogin.password2
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
        })
    }

    testIdir3 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) =>
        {
            const username=userLogin.idir3
            const password=userLogin.password3
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
        })
    }

    testIdir4 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) =>
        {
            const username=userLogin.idir4
            const password=userLogin.password4
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
        })
    }

    SubmitButton ()
    {
        cy.get('input[name="btnSubmit"]').click() //Continue Button Click
    }
}
export const loginFAS = new LoginFAS()