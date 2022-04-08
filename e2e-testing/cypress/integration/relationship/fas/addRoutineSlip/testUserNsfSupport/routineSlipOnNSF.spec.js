import { requestRefundDetails } from "../../../../../pages/relationship/fas/refundRequest/statusRoutinSlip"
import { addRoutineSlip } from "../../../../../pages/relationship/fas/routeSlipAdd/addRoutineSlip"
import { createRoutineSlipButton } from "../../../../../pages/relationship/fas/routeSlipAdd/createButton"
import { loginFAS } from "../../../../../pages/relationship/fas/routeSlipAdd/loginFAS"

describe('RS NSF Status', function () 
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

    it('Cash Routine Slip Test Case', function ()
    {
        addRoutineSlip.routineDetailsCash()
        cy.wait(3000)
    })

    it('Create Routine Slip', function()
    {
        createRoutineSlipButton.createSlip()
        cy.wait(3000)
    })

    it('NSF Request', function()
    {
        requestRefundDetails.editStatus()
        cy.wait(1000)
        requestRefundDetails.placeOnNSF()
        cy.wait(2000)
        requestRefundDetails.popUpWindowNSF()
        cy.wait(2000)

    })
})