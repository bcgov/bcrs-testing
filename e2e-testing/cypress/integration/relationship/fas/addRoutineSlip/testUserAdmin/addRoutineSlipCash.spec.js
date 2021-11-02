import { addRoutineSlip } from "../../../../../pages/relationship/fas/routeSlipAdd/addRoutineSlip"
import { loginFAS } from "../../../../../pages/relationship/fas/routeSlipAdd/loginFAS"
import { createRoutineSlipButton } from "../../../../../pages/relationship/fas/routeSlipAdd/createButton"
import { addSingleTransaction } from "../../../../../pages/relationship/fas/addManualTransaction/singleManualTransaction"
import { requestRefundDetails } from "../../../../../pages/relationship/fas/refundRequest/requestRefundApproved"
import { refundRequestAuthorized } from "../../../../../pages/relationship/fas/refundRequest/refundRequestAuthorized"

// The following test is with a a User that has been assigned to user group
/*describe('test', function () 
{
    // FAS URL navigation
    it('Login using IDIR', function ()
    {
        loginFAS.visit(Cypress.env('fas-test'))
        loginFAS.testIdir4()
        loginFAS.SubmitButton()
        cy.wait(3000)
    })*/
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

    // Add Manual Transaction
    /*it('Change Director Filling Transction', function()
    {
        addSingleTransaction.transactionAdd()
        cy.wait(3000)
        addSingleTransaction.amalgamationFilling()
        cy.wait(3000)
        //addSingleTransaction.addTranscationFilling()
        //cy.wait(3000)
    })*/

    // Refund Request Flow
    it('Refund Request', function()
    {
        requestRefundDetails.editStatus()
        cy.wait(2000)
        requestRefundDetails.statusDropDown()
        cy.wait(2000)
        requestRefundDetails.refundRequestOption()
        cy.wait(2000)
        requestRefundDetails.name()
        cy.wait(2000)
        requestRefundDetails.address()
        cy.wait(2000)
        /*requestRefundDetails.city()
        cy.wait(2000)
        requestRefundDetails.province()
        cy.wait(2000)
        requestRefundDetails.postalCode()
        cy.wait(2000)
        requestRefundDetails.countryDropDown()
        cy.wait(2000)
        requestRefundDetails.selectCanada()
        cy.wait(2000)*/
        requestRefundDetails.doneButton()
        cy.wait(2000)
        refundRequestAuthorized.cancelRefund()
        cy.wait(2000)
    })

})