// FAS Login Page

import { addRoutineSlip } from "../../../../pages/relationship/fas/addRouteSlip/addRoutineSlip"
import { loginFAS } from "../../../../pages/relationship/fas/addRouteSlip/loginFAS"
import { createRoutineSlipButton } from "../../../../pages/relationship/fas/addRouteSlip/createButton"

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

    // Adding Routine Slip Details
    it('Cash Routine Slip Test Case', function ()
    {
        addRoutineSlip.routineDetailsCash()
        cy.wait(5000)
    })

    // Submit Button
    it('Create Routine Slip', function()
    {
        createRoutineSlipButton.createSlip()
    })
})