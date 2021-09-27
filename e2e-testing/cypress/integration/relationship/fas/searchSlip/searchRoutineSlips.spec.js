import { loginFAS } from "../../../../pages/relationship/fas/addRouteSlip/loginFAS"
import { columnListSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/columnSearchList"
import { routineSlipSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchSlips"

describe('test', function () 
{
    // FAS URL navigation
    it('Login using IDIR', function ()
    {
        loginFAS.visit(Cypress.env('fas-test'))
        loginFAS.enterCreds()
        loginFAS.SubmitButton()
        cy.wait(5000)
    })

    it('Search By Routine Slip Number', function()
    {
        routineSlipSearch.routineSlipNumber()
        cy.wait(5000)
        routineSlipSearch.clearFilter()
        cy.wait(3000)
    })

    it('Search By Initiator Agent', function()
    {
        routineSlipSearch.initiatorAgent()
        cy.wait(5000)
        routineSlipSearch.clearFilter()
        cy.wait(3000)
    })

    it('Search Multiple Filter', function()
    {
        columnListSearch.columnSelect()
        cy.wait(3000)
        routineSlipSearch.multipleFilterSearch()
        cy.wait(5000)
    })

    // Add Open Routine Slip from search as a seperate Script
})