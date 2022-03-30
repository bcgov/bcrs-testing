import { addSingleTransaction } from "../../../../pages/relationship/fas/addManualTransaction/singleManualTransaction"
import { addRoutineSlip } from "../../../../pages/relationship/fas/routeSlipAdd/addRoutineSlip"
import { createRoutineSlipButton } from "../../../../pages/relationship/fas/routeSlipAdd/createButton"
import { loginFAS } from "../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { columnListSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/columnSearchList"
import { resultSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchResult"
import { routineSlipSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchSlips"

/*describe('test', function () 
{
    // FAS URL navigation
    it('Login using IDIR', function ()
    {
        loginFAS.visit(Cypress.env('fas-test'))
        loginFAS.testIdir4()
        loginFAS.SubmitButton()
        cy.wait(5000)
    })*/

describe('RS Cash', function () 
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
            loginFAS.SubmitButton()
        })
    })

    // Adding Routine Slip Details
    it('Cash Routine Slip Test Case', function ()
    {
        addRoutineSlip.routineDetailsCheque()
        cy.wait(3000)
    })

    // Submit Button
    it('Create Routine Slip', function()
    {
        
        createRoutineSlipButton.createSlip()
        cy.wait(3000)
    })

    // Search Routine Slip
   it('Add Manual Transaction from Existing Routine Slip', function ()
    {
        /*columnListSearch.columnSelectDropDown()
        columnListSearch.selectEntityNumber()
        routineSlipSearch.entityNumber()
        routineSlipSearch.slipStatus()
        cy.wait(3000)
        resultSearch.openRoutineSlip()*/
        cy.wait(3000)
        addSingleTransaction.transactionAdd()
        cy.wait(3000)
        addSingleTransaction.changeOfDirectorFilling()
        cy.wait(3000)
    })

})