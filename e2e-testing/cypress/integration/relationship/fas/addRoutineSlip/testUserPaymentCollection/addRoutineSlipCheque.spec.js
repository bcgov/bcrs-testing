
import { addRoutineSlip } from "../../../../../pages/relationship/fas/routeSlipAdd/addRoutineSlip"
import { loginFAS } from "../../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { createRoutineSlipButton } from "../../../../../pages/relationship/fas/routeSlipAdd/createButton"

// The following test is with a a User that has been assigned to Payment Collection user group
describe('RS Cheque', function () 
{
    before(function () 
    {
        cy.fixture('relationship/fasRelationsLogin.json').then((userLogin) =>
        {
            const url=userLogin.testFas
            const username=userLogin.idir1
            const password=userLogin.password1
            cy.visit(url)
            cy.get('input[name="user"]').type(username) //Username
            cy.get('input[name="password"]').type(password) //Password
            loginFAS.SubmitButton()
        })
    })

    // Adding Routine Slip Details
    it('Cheque Routine Slip Test Case', function ()
    {
        //addRoutineSlip.routineDetailsCheque()
        addRoutineSlip.routineDetailsCheque()
        cy.wait(3000)
    })

    // Submit Button
    it('Create Routine Slip', function()
    {
        createRoutineSlipButton.createSlip()
        
    })
})