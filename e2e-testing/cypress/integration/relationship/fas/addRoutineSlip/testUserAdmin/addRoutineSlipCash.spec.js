import { addRoutineSlip } from "../../../../../pages/relationship/fas/routeSlipAdd/addRoutineSlip"
import { loginFAS } from "../../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { createRoutineSlipButton } from "../../../../../pages/relationship/fas/routeSlipAdd/createButton"
//import { addSingleTransaction } from "../../../../../pages/relationship/fas/addManualTransaction/singleManualTransaction"
//import { requestRefundDetails } from "../../../../../pages/relationship/fas/refundRequest/requestRefundApproved"
//import { refundRequestAuthorized } from "../../../../../pages/relationship/fas/refundRequest/refundRequestAuthorized"

// The following test is with a a User that has been assigned to user group
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
        addRoutineSlip.routineDetailsCash()
        cy.wait(3000)
    })

    // Submit Button
    it('Create Routine Slip', function()
    {
        createRoutineSlipButton.createSlip()
        cy.wait(3000)
    })

})