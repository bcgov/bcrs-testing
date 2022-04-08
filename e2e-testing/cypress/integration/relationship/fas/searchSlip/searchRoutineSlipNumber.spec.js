import { loginFAS } from "../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { resultSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchResult"
import { routineSlipSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchSlips"

describe('Search RS', function ()
{
    before(function () 
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) =>
        {
            const url=userLogin.testFas
            const username=userLogin.idir4
            const password=userLogin.password4
            cy.visit(url)
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
            //loginFAS.SubmitButton()
            loginFAS.SubmitButton()
            
        })
    })

    it('Search by Routine Slip Number', function()
    {
        routineSlipSearch.routineSlipNumber()
        cy.wait(3000)
        resultSearch.openRoutineSlip()
        cy.wait(3000)

    })

    // Add Open Routine Slip from search as a seperate Script
})