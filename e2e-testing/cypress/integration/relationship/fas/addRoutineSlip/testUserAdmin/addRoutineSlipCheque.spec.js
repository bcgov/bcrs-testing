
import { addRoutineSlip } from "../../../../pages/relationship/fas/addRouteSlip/addRoutineSlip"
import { loginFAS } from "../../../../pages/relationship/fas/addRouteSlip/loginFAS"
import { createRoutineSlipButton } from "../../../../pages/relationship/fas/addRouteSlip/createButton"
import { addSingleTransaction } from "../../../../../pages/relationship/fas/addManualTransaction/singleManualTransaction"

// The following test is with a a User that has been assigned to user group
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

    // Adding Routine Slip Details
    it('Cheque Routine Slip Test Case', function ()
    {
        //addRoutineSlip.routineDetailsCheque()
        addRoutineSlip.routineDetailsCheque()
        cy.wait(5000)
    })

    // Submit Button
    it('Create Routine Slip', function()
    {
        createRoutineSlipButton.createSlip()
        
    })

    it('Change Director Filling Transction', function()
    {
        addSingleTransaction.transactionAdd()
        cy.wait(3000)
        addSingleTransaction.changeOfDirectorFilling()
        cy.wait(3000)
        addSingleTransaction.addTranscationFilling()
        cy.wait(3000)
    })
})