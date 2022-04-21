import { requestRefundDetails } from "../../../../../pages/relationship/fas/refundRequest/statusRoutinSlip"
import { createRoutineSlipButton } from "../../../../../pages/relationship/fas/routeSlipAdd/createButton"
import { loginFAS } from "../../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { resultSearch } from "../../../../../pages/relationship/fas/searchRoutineSlips/searchResult"
import { routineSlipSearch } from "../../../../../pages/relationship/fas/searchRoutineSlips/searchSlips"

describe('RS Write Off Status', function () 
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

    it('Search for Routine Slip', function()
    {
        routineSlipSearch.routineSlipNumber()
        cy.wait(2000)
        resultSearch.openRoutineSlip()
        cy.wait(2000)
    })

    it('Write Off Request', function()
    {
        requestRefundDetails.editStatus()
        cy.wait(1000)
        requestRefundDetails.placeOnWriteOff()
        cy.wait(2000)

    })

    it('Cancel Write of Request', function()
    {
        requestRefundDetails.editStatus()
        cy.wait(1000)
        requestRefundDetails.cancelWriteOffRequest()
        cy.wait(2000)
    })

})
