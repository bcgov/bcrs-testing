import { addRoutineSlipUS } from "../../../../../pages/relationship/fas/routeSlipAdd/addRoutineSlipUS"
import { createRoutineSlipButton } from "../../../../../pages/relationship/fas/routeSlipAdd/createButton"
import { loginFAS } from "../../../../../pages/relationship/fas/routeSlipAdd/loginFAS"


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
        addRoutineSlipUS.routineDetailsCashUS()
        cy.wait(3000)
    })

    // Submit Button
    it('Create Routine Slip', function()
    {
        createRoutineSlipButton.createSlip()
        //createRoutineSlipButton.createSlip()
        cy.wait(3000)
    })
})