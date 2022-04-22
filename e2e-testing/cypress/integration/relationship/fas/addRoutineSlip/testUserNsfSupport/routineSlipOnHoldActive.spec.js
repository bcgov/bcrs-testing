import { requestRefundDetails } from "../../../../../pages/relationship/fas/refundRequest/statusRoutinSlip"
import { loginFAS } from "../../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { resultSearch } from "../../../../../pages/relationship/fas/searchRoutineSlips/searchResult"
import { routineSlipSearch } from "../../../../../pages/relationship/fas/searchRoutineSlips/searchSlips"

describe('On Hold and Active', function () 
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

    it('Search for Routine Slip', function ()
    {
        routineSlipSearch.routineSlipNumber()
        cy.wait(2000)
        resultSearch.openRoutineSlip()
        cy.wait(2000)
    })

    it('On Hold Request', function()
    {
        requestRefundDetails.editStatus()
        cy.wait(1000)
        requestRefundDetails.placeOnHold()
        cy.wait(7000)

    })

    it('On Active Request', function()
    {
        requestRefundDetails.editStatus()
        cy.wait(1000)
        requestRefundDetails.placeOnActive()
        cy.wait(2000)
    })


})