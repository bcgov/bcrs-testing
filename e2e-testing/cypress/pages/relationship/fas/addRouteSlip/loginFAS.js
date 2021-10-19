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

    testIdir1 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) => {
            const username=userLogin.idir1
            const password=userLogin.password1
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
            //console.log('json',userLogin.idir1)
          })
    }

    testIdir2 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) => {
            const username=userLogin.idir2
            const password=userLogin.password2
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
            //console.log('json',userLogin.idir1)
          })
    }

    testIdir3 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) => {
            const username=userLogin.idir3
            const password=userLogin.password3
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
            //console.log('json',userLogin.idir1)
          })
    }

    testIdir4 ()
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) => {
            const username=userLogin.idir4
            const password=userLogin.password4
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
            //console.log('json',userLogin.idir1)
          })
    }

    SubmitButton ()
    {
        cy.get('input[name="btnSubmit"]').click() //Continue Button Click
    }
}
export const loginFAS = new LoginFAS()