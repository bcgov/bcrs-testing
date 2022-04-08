import { addSingleTransaction } from "../../../../pages/relationship/fas/addManualTransaction/manualTransactions"
import { addRoutineSlip } from "../../../../pages/relationship/fas/routeSlipAdd/addRoutineSlip"
import { createRoutineSlipButton } from "../../../../pages/relationship/fas/routeSlipAdd/createButton"
import { loginFAS } from "../../../../pages/relationship/fas/routeSlipAdd/loginFAS"

describe('Manual Transactions', function () 
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
        cy.wait(2000)
        addSingleTransaction.transactionAdd()
        cy.wait(1000)
        addSingleTransaction.changeOfDirectorFilling()
        cy.wait(1000)
        addSingleTransaction.addTranscationFilling()
        cy.wait(2000)
    })

})