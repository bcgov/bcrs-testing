import { addSingleTransaction } from "../../../../pages/relationship/fas/addManualTransaction/singleManualTransaction"
import { loginFAS } from "../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { columnListSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/columnSearchList"
import { resultSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchResult"
import { routineSlipSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchSlips"

describe('test', function () 
{
    // FAS URL navigation
    it('Login using IDIR', function ()
    {
        loginFAS.visit(Cypress.env('fas-test'))
        loginFAS.testIdir4()
        loginFAS.SubmitButton()
        cy.wait(5000)
    })

    // Search Routine Slip
    it('Add Manual Transaction from Existing Routine Slip', function ()
    {
        columnListSearch.columnSelectDropDown()
        columnListSearch.selectEntityNumber()
        routineSlipSearch.entityNumber()
        routineSlipSearch.slipStatus()
        cy.wait(3000)
        resultSearch.openRoutineSlip()
        cy.wait(3000)
        addSingleTransaction.transactionAdd()
        cy.wait(3000)
        addSingleTransaction.changeOfDirectorFilling()
        cy.wait(3000)
    })

})