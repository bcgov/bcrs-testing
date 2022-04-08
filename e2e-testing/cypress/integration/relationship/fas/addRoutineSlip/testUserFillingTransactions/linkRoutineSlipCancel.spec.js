import { linkRoutineSlip } from "../../../../../pages/relationship/fas/linkRoutineSlip/linkRoutineSlip"
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

    it('Search Routine Slip', function()
    {
        routineSlipSearch.routineSlipNumber()
        cy.wait(1000)
        resultSearch.openRoutineSlip()
        cy.wait(2000)
    })

    it('Cancel Linking Routine Slip', function()
    {
        linkRoutineSlip.linkRoutineSlipSearch()
        cy.wait(2000)
        linkRoutineSlip.linkRoutineSlipCancel()
        cy.wait(3000)
    })
})